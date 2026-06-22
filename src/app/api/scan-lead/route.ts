import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { runScan, normaliseTarget, type ScanResult, type Finding } from '@/lib/scanner';

export const runtime = 'nodejs';

const WA = 'https://wa.me/447344540450';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = (body?.email || '').trim();
  const phone = (body?.phone || '').trim();
  const raw = body?.url;
  const honeypot = (body?.fax_number || '').trim(); // bots fill hidden fields

  if (honeypot) return NextResponse.json({ ok: true, emailed: false }); // silently drop bots
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }
  if (!raw || typeof raw !== 'string') {
    return NextResponse.json({ error: 'Missing the scanned website address.' }, { status: 400 });
  }
  try {
    normaliseTarget(raw);
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : 'Invalid website address.' },
      { status: 400 },
    );
  }

  // Re-run server-side so the emailed report is authoritative.
  let result: ScanResult;
  try {
    result = await runScan(raw, { safeBrowsingKey: process.env.SAFE_BROWSING_API_KEY });
  } catch {
    return NextResponse.json(
      { error: 'We could not complete the scan for your report. Please try again.' },
      { status: 500 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !fromEmail) {
    // Still unlock the UI even if email isn't configured.
    return NextResponse.json({ ok: true, emailed: false, result });
  }

  const resend = new Resend(apiKey);
  const fromName = process.env.CONTACT_FROM_NAME || 'WebAdish Security Scanner';
  const from = `${fromName} <${fromEmail}>`;
  const internal = [process.env.CONTACT_TO_EMAIL, process.env.RESEND_TO_EMAIL, 'sales@webadish.co.uk']
    .filter(Boolean) as string[];
  const hot = result.verdict === 'infected';

  await resend.emails
    .send({
      from,
      to: [internal[0]],
      bcc: ['dilipparmar@gmail.com'],
      replyTo: email,
      subject: `${hot ? '🔴 HOT LEAD' : 'Scan lead'} – ${hostOf(result.finalUrl)} (${verdictLabel(result)})`,
      html: teamEmail(result, email, phone),
    })
    .catch((e) => console.error('Team lead email failed:', e));

  await resend.emails
    .send({
      from,
      to: [email],
      replyTo: internal[0],
      subject: `Your WordPress security scan report – ${hostOf(result.finalUrl)}`,
      html: reportEmail(result),
    })
    .catch((e) => console.error('User report email failed:', e));

  return NextResponse.json({ ok: true, emailed: true, result });
}

// ---- helpers ----------------------------------------------------------------

function hostOf(u: string) {
  try { return new URL(u).host; } catch { return u; }
}
function verdictLabel(r: ScanResult) {
  return r.verdict === 'infected' ? `${r.counts.critical} critical`
    : r.verdict === 'warnings' ? `${r.counts.warning} warnings` : 'clean';
}
const sevColor = (s: Finding['severity']) =>
  s === 'critical' ? '#dc2626' : s === 'warning' ? '#d97706' : '#16a34a';
const sevLabel = (s: Finding['severity']) =>
  s === 'critical' ? 'CRITICAL' : s === 'warning' ? 'WARNING' : 'OK';

function findingsRows(r: ScanResult) {
  return r.findings
    .filter((f) => f.severity !== 'ok')
    .map(
      (f) => `
      <tr><td style="padding:14px 16px;border:1px solid #e2e8f0;vertical-align:top;">
        <span style="display:inline-block;font-size:11px;font-weight:700;color:#fff;background:${sevColor(f.severity)};padding:2px 8px;border-radius:4px;">${sevLabel(f.severity)}</span>
        <div style="font-weight:600;margin:8px 0 4px;color:#0f172a;">${esc(f.title)}</div>
        <div style="font-size:13px;color:#475569;line-height:1.6;">${esc(f.detail)}</div>
        <div style="font-size:13px;color:#4f46e5;line-height:1.6;margin-top:6px;"><strong>Fix:</strong> ${esc(f.recommendation)}</div>
      </td></tr>`,
    )
    .join('');
}

function reportEmail(r: ScanResult) {
  const issues = r.findings.filter((f) => f.severity !== 'ok').length;
  const headline =
    r.verdict === 'infected' ? 'We found critical issues that need attention'
    : r.verdict === 'warnings' ? 'We found some warnings worth fixing'
    : 'No critical issues found on the homepage';
  return `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;max-width:640px;margin:0 auto;color:#1e293b;">
    <div style="background:#0a0a0c;padding:24px 32px;border-radius:8px 8px 0 0;">
      <p style="color:#a5b4fc;margin:0;font-size:13px;">WebAdish · Security Scan Report</p>
      <h1 style="color:#fff;margin:8px 0 0;font-size:20px;">${esc(hostOf(r.finalUrl))}</h1>
    </div>
    <div style="border:1px solid #e2e8f0;border-top:none;padding:28px 32px;border-radius:0 0 8px 8px;">
      <p style="font-size:16px;font-weight:700;margin:0 0 4px;color:${r.verdict === 'clean' ? '#16a34a' : sevColor(r.verdict === 'infected' ? 'critical' : 'warning')};">${esc(headline)}</p>
      <p style="font-size:13px;color:#64748b;margin:0 0 20px;">Health score: ${r.score}/100 · ${r.counts.critical} critical, ${r.counts.warning} warnings · scanned ${new Date(r.scannedAt).toUTCString()}</p>
      ${issues ? `<table style="width:100%;border-collapse:collapse;margin-bottom:24px;">${findingsRows(r)}</table>` : `<p style="color:#475569;line-height:1.6;">Our homepage heuristics did not detect malware, blacklisting, or unwanted redirects. Note: this is a homepage-level scan, not a full file and database audit.</p>`}
      <div style="background:#eef2ff;border:1px solid #c7d2fe;border-radius:8px;padding:18px 20px;margin-top:8px;">
        <p style="margin:0 0 6px;font-weight:700;color:#3730a3;">Want us to fix this for you?</p>
        <p style="margin:0 0 12px;font-size:13px;color:#4338ca;line-height:1.6;">We remove malware, clear Google warnings, and harden your site — fixed fee with a 30-day guarantee. Same-day emergency response available.</p>
        <a href="${WA}" style="display:inline-block;background:#16a34a;color:#fff;font-weight:700;text-decoration:none;padding:10px 20px;border-radius:8px;font-size:14px;">WhatsApp our team</a>
      </div>
      <p style="font-size:12px;color:#94a3b8;margin:20px 0 0;line-height:1.6;">This automated scan checks public, homepage-level signals only. A clean result does not guarantee a clean server; a flagged result is a strong indicator worth investigating. Reply to this email to talk to a human.</p>
    </div>
  </div>`;
}

function teamEmail(r: ScanResult, email: string, phone: string) {
  return `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;max-width:640px;margin:0 auto;color:#1e293b;">
    <div style="background:${r.verdict === 'infected' ? '#7f1d1d' : '#0a0a0c'};padding:24px 32px;border-radius:8px 8px 0 0;">
      <p style="color:#cbd5e1;margin:0;font-size:13px;">Scanner Lead</p>
      <h1 style="color:#fff;margin:8px 0 0;font-size:20px;">${esc(hostOf(r.finalUrl))} — ${verdictLabel(r)}</h1>
    </div>
    <div style="border:1px solid #e2e8f0;border-top:none;padding:28px 32px;border-radius:0 0 8px 8px;">
      <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
        <tr><td style="padding:6px 0;color:#64748b;font-size:13px;width:110px;">Email</td><td style="padding:6px 0;"><a href="mailto:${esc(email)}" style="color:#4f46e5;">${esc(email)}</a></td></tr>
        <tr><td style="padding:6px 0;color:#64748b;font-size:13px;">Phone</td><td style="padding:6px 0;">${phone ? esc(phone) : '<em style="color:#94a3b8">not provided</em>'}</td></tr>
        <tr><td style="padding:6px 0;color:#64748b;font-size:13px;">Site</td><td style="padding:6px 0;"><a href="${esc(r.finalUrl)}" style="color:#4f46e5;">${esc(r.finalUrl)}</a></td></tr>
        <tr><td style="padding:6px 0;color:#64748b;font-size:13px;">Verdict</td><td style="padding:6px 0;font-weight:700;">${esc(r.verdict)} (score ${r.score}/100)</td></tr>
        <tr><td style="padding:6px 0;color:#64748b;font-size:13px;">WordPress</td><td style="padding:6px 0;">${r.isWordPress ? 'detected' : 'not detected'}</td></tr>
      </table>
      <table style="width:100%;border-collapse:collapse;">${findingsRows(r) || '<tr><td style="padding:10px;color:#64748b;">No non-OK findings.</td></tr>'}</table>
    </div>
  </div>`;
}

function esc(s: string) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));
}
