import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

interface ContactPayload {
  name?: string;
  email?: string;
  website?: string;
  message?: string;
  fax_number?: string; // honeypot
  // UTM tracking
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  landing_page?: string;
  referrer?: string;
}

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 5;
const ipHits = new Map<string, number[]>();

function getClientIp(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return request.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const existing = ipHits.get(ip) || [];
  const recent = existing.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  ipHits.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX_REQUESTS;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const website = body.website?.trim() || 'Not provided';
    const message = body.message?.trim();
    const honeypot = body.fax_number?.trim();
    const ip = getClientIp(request);

    // Honeypot: pretend success to avoid teaching bots
    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a few minutes before trying again.' },
        { status: 429 }
      );
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const resend = getResendClient();
    const to = process.env.CONTACT_TO_EMAIL || process.env.RESEND_TO_EMAIL;
    const fromName = process.env.CONTACT_FROM_NAME || 'WebAdish Website';
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!resend || !fromEmail || !to) {
      return NextResponse.json({ error: 'Resend is not fully configured.' }, { status: 500 });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeWebsite = escapeHtml(website);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');

    // UTM tracking data
    const utmSource = body.utm_source || '';
    const utmMedium = body.utm_medium || '';
    const utmCampaign = body.utm_campaign || '';
    const utmTerm = body.utm_term || '';
    const utmContent = body.utm_content || '';
    const gclid = body.gclid || '';
    const landingPage = body.landing_page || '';
    const referrer = body.referrer || '';

    const hasUtm = utmSource || utmMedium || utmCampaign || gclid;
    const utmSection = hasUtm ? `
        <hr/>
        <h3>Attribution Data</h3>
        <p><strong>Source:</strong> ${escapeHtml(utmSource || 'direct')}</p>
        <p><strong>Medium:</strong> ${escapeHtml(utmMedium || 'none')}</p>
        <p><strong>Campaign:</strong> ${escapeHtml(utmCampaign || 'none')}</p>
        ${utmTerm ? `<p><strong>Term:</strong> ${escapeHtml(utmTerm)}</p>` : ''}
        ${utmContent ? `<p><strong>Content:</strong> ${escapeHtml(utmContent)}</p>` : ''}
        ${gclid ? `<p><strong>GCLID:</strong> ${escapeHtml(gclid)}</p>` : ''}
        <p><strong>Landing Page:</strong> ${escapeHtml(landingPage)}</p>
        <p><strong>Referrer:</strong> ${escapeHtml(referrer || 'direct')}</p>
    ` : '';

    const notifyResult = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to,
      replyTo: email,
      subject: `New contact form enquiry from ${name}${utmSource ? ` [${utmSource}]` : ''}`,
      text: `Name: ${name}\nEmail: ${email}\nWebsite: ${website}\n\nMessage:\n${message}${hasUtm ? `\n\nSource: ${utmSource}\nMedium: ${utmMedium}\nCampaign: ${utmCampaign}\nLanding Page: ${landingPage}` : ''}`,
      html: `
        <h2>New contact form enquiry</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Website:</strong> ${safeWebsite}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
        ${utmSection}
      `,
    });

    if (notifyResult.error) {
      throw new Error(`Team email failed: ${notifyResult.error.message}`);
    }

    const replyResult = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: email,
      replyTo: to,
      subject: 'Thanks for contacting WebAdish — we received your message',
      text: `Hi ${name},\n\nThank you for contacting WebAdish. We have received your message and will get back to you shortly.\n\nYour message:\n${message}\n\nRegards,\nWebAdish Team`,
      html: `
        <p>Hi ${safeName},</p>
        <p>Thank you for contacting <strong>WebAdish</strong>. We have received your message and will get back to you shortly.</p>
        <p><strong>Your message:</strong><br/>${safeMessage}</p>
        <p>Regards,<br/>WebAdish Team</p>
      `,
    });

    if (replyResult.error) {
      console.error('Contact form auto-reply error:', replyResult.error.message, replyResult.error);
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Contact form mail error:', message, error);

    return NextResponse.json(
      {
        error: 'Failed to send message.',
        debug: process.env.NODE_ENV !== 'production' ? message : undefined,
      },
      { status: 500 }
    );
  }
}
