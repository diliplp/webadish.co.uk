import { ShieldCheck } from 'lucide-react';
import Scanner from '@/components/Scanner';
import { generatePageMetadata, SITE_URL } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Free WordPress Security Scanner | Is My Site Hacked? | WebAdish',
  description:
    'Free instant check for a hacked WordPress site. Scan for malware, Google blacklist warnings, spam injections, redirects and security gaps. Get a full report with fix steps — no signup to see your result.',
  path: '/wordpress-security-scanner',
});

const checks = [
  { title: 'Google Blacklist', desc: 'Checks Google Safe Browsing for "this site may be hacked" / "deceptive site" flags.' },
  { title: 'Malware & Injections', desc: 'Scans the homepage for injected spam, obfuscated scripts, redirects and known malware signatures.' },
  { title: 'WordPress Hardening', desc: 'Looks for exposed version, directory listings and exposed config backups attackers exploit.' },
  { title: 'SSL & Headers', desc: 'Verifies HTTPS and key security headers that protect your visitors and login.' },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'WordPress Security Scanner',
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'Web',
  url: `${SITE_URL}/wordpress-security-scanner`,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
  provider: { '@type': 'Organization', name: 'WebAdish', url: SITE_URL },
};

export default function SecurityScannerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section style={{ background: 'linear-gradient(180deg, rgba(99,102,241,0.08) 0%, transparent 60%)' }}>
        <Scanner />
      </section>

      {/* What it checks */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 700, marginBottom: '0.8rem' }}>What the Scanner Checks</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '34rem', margin: '0 auto' }}>
              A fast first look at the signals that most often reveal a hacked WordPress site.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem' }}>
            {checks.map((c) => (
              <div key={c.title} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '1.5rem' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(99,102,241,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <ShieldCheck size={22} color="#818cf8" />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.4rem' }}>{c.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#94a3b8', maxWidth: '40rem', margin: '2.5rem auto 0' }}>
            The scanner is a quick triage, not a replacement for a full audit. If it flags anything — or you suspect a hack it cannot see from the homepage — our team can run a complete file and database investigation.
          </p>
        </div>
      </section>
    </>
  );
}
