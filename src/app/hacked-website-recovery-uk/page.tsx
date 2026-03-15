import { generatePageMetadata } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/lib/schema';
import PageHeader from '@/components/PageHeader';
import TrustSignals from '@/components/TrustSignals';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Hacked WordPress Site Recovery UK | Emergency Fix in Hours | WebAdish',
  description:
    'Emergency hacked WordPress site recovery for UK businesses. We remove malware, close backdoors, get you off Google\'s blacklist, and restore your site within 4–24 hours. Fixed fee £1,499.',
  path: '/hacked-website-recovery-uk',
});

const faqItems = [
  {
    question: 'How quickly can you start recovering my hacked WordPress site?',
    answer:
      'We begin work within 2 hours of your request during UK business hours. For critical situations — site down, Google blacklisted, WooCommerce offline — we offer a priority emergency track that starts within 30 minutes.',
  },
  {
    question: 'How long does hacked WordPress site recovery take?',
    answer:
      'Most sites are fully recovered within 4 to 12 hours. Severely compromised sites with multiple backdoors, database injections, or server-level compromise may take up to 24 hours for a thorough forensic cleanup.',
  },
  {
    question: 'My site was hacked before and it came back. Why does this keep happening?',
    answer:
      'Repeat hacks almost always mean a backdoor was missed during the previous cleanup. Attackers plant hidden PHP shells in unexpected locations — inside image upload folders, as fake plugin files, or injected directly into the database. Our forensic approach finds and removes all backdoors, not just the visible infection.',
  },
  {
    question: 'Will I lose any data during the recovery?',
    answer:
      'No. We take a complete backup before touching anything. Our approach is surgical — we clean infected files rather than delete them, preserving all your content, media, and database records.',
  },
  {
    question: 'Can you remove my site from Google\'s blacklist?',
    answer:
      'Yes. Once we confirm the site is clean, we submit a review request to Google Search Console. Most blacklist removals are approved within 24 to 72 hours. We also handle McAfee SiteAdvisor, Norton Safe Web, and other major blocklists.',
  },
  {
    question: 'Do you fix the vulnerability that allowed the hack?',
    answer:
      'Yes — closing the entry point is a core part of every recovery. We patch the specific vulnerability, update all outdated core files, plugins and themes, remove abandoned components, and harden your server configuration.',
  },
  {
    question: 'Does a WordPress hack trigger a GDPR breach notification to the ICO?',
    answer:
      'If your compromised site was processing personal data (contact form submissions, customer accounts, order records), you may be required to notify the ICO within 72 hours under UK GDPR. We include a written forensic incident report with every recovery to support your compliance obligations.',
  },
  {
    question: 'What is your 30-day guarantee?',
    answer:
      'If the same infection returns within 30 days of our cleanup, we re-clean your site at no additional charge. This covers the exact attack vector we remediated. For ongoing protection, we recommend pairing recovery with our WordPress maintenance plan.',
  },
];

export default function HackedWebsiteRecoveryUK() {
  const serviceSchema = generateServiceSchema(
    'Hacked WordPress Site Recovery UK',
    'Emergency hacked WordPress site recovery for UK businesses. Malware removal, backdoor elimination, blacklist removal, and security hardening within 4–24 hours.',
    '/hacked-website-recovery-uk',
    'From £1,499'
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/#services' },
    { name: 'Hacked Website Recovery UK', url: '/hacked-website-recovery-uk' },
  ]);
  const faqSchema = generateFAQSchema(faqItems);

  return (
    <>
      <StructuredData schemas={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <PageHeader
        title="Hacked WordPress Site? <br /><span style='color: #ef4444'>We Fix It Fast.</span>"
        subtitle="Emergency recovery service for UK businesses. We remove malware, close backdoors, get you off Google's blacklist, and restore your site — typically within 4 to 12 hours."
        badge="Emergency Recovery Service"
      />

      <TrustSignals />

      {/* Signs of a hack */}
      <section className="section-padding" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <h2>Signs Your WordPress Site Has Been Hacked</h2>
            <p style={{ color: '#a1a1aa' }}>
              Hacks are not always obvious. Look for these indicators — any one of them warrants immediate investigation.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {[
              { icon: '🔴', sign: 'Google shows a "This site may be hacked" warning in search results' },
              { icon: '🔴', sign: 'Visitors are redirected to spam, phishing, or adult sites' },
              { icon: '🔴', sign: 'Your browser or antivirus flags the site as dangerous' },
              { icon: '🔴', sign: 'You see unfamiliar admin users or plugins you did not install' },
              { icon: '🔴', sign: 'Google Search Console shows a manual action or security issue' },
              { icon: '🔴', sign: 'The site is slow, crashes, or shows unexpected content' },
              { icon: '🔴', sign: 'Your hosting provider suspended the account for malware' },
              { icon: '🔴', sign: 'You cannot log in to wp-admin even with the correct password' },
            ].map((item) => (
              <div key={item.sign} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '10px', padding: '1rem 1.25rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                <span style={{ color: '#d4d4d8', fontSize: '0.9rem', lineHeight: 1.5 }}>{item.sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery process */}
      <section className="section-padding" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <h2>Our Emergency WordPress Recovery Process</h2>
            <p style={{ color: '#a1a1aa' }}>A structured, forensic approach — not a quick fix that leaves backdoors in place.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {[
              { step: '01', title: 'Triage', desc: 'We assess the damage, identify the infection type, and isolate the compromised components to stop further spread.' },
              { step: '02', title: 'Backup', desc: 'A full backup is taken before we touch anything — preserving your data and creating a forensic baseline.' },
              { step: '03', title: 'Deep Clean', desc: 'Every file, database table, and cron job is scanned and cleaned. We find backdoors that automated tools miss.' },
              { step: '04', title: 'Harden', desc: 'We patch the entry point, update all software, tighten file permissions, and implement WAF rules to block repeat attacks.' },
              { step: '05', title: 'Restore', desc: 'Your site goes back online clean. We submit blacklist removal requests and monitor for 30 days.' },
            ].map((item) => (
              <div key={item.step} style={{ background: 'var(--background)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ef4444', marginBottom: '0.75rem' }}>{item.step}</div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: '#a1a1aa', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid #ef4444', borderRadius: '1rem', padding: '2.5rem', textAlign: 'center' }}>
              <h2 style={{ color: '#ef4444', marginBottom: '0.5rem' }}>Fixed Fee. 30-Day Guarantee.</h2>
              <p style={{ color: '#a1a1aa', marginBottom: '1.5rem' }}>One fixed price covers everything — no hourly billing, no hidden extras.</p>
              <div style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>
                £1,499<span style={{ fontSize: '1rem', fontWeight: 400, color: '#a1a1aa' }}> fixed fee</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', maxWidth: '440px', margin: '0 auto 2rem', textAlign: 'left' }}>
                {[
                  'Full malware removal',
                  'Backdoor detection & elimination',
                  'Google blacklist removal',
                  'McAfee & Norton blocklist removal',
                  'Core, plugin & theme updates',
                  'Security hardening',
                  '30-day re-infection guarantee',
                  'Written incident report (GDPR)',
                ].map((f) => (
                  <div key={f} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', color: '#d4d4d8' }}>
                    <span style={{ color: '#ef4444', flexShrink: 0 }}>✓</span> {f}
                  </div>
                ))}
              </div>
              <p style={{ color: '#a1a1aa', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Need help right now? Call <strong style={{ color: '#fff' }}>+44 7344 540450</strong>
              </p>
              <a href="#contact-section" className="btn btn-primary" style={{ display: 'inline-block' }}>Start Emergency Recovery</a>
            </div>
          </div>
        </div>
      </section>

      {/* UK context — GDPR */}
      <section className="section-padding" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2>UK Hacked Site Recovery — GDPR and the 72-Hour Rule</h2>
              <p style={{ color: '#a1a1aa', lineHeight: 1.7, margin: '1rem 0' }}>
                If your compromised WordPress site was handling personal data — contact form submissions, customer accounts, WooCommerce orders — you may have a legal obligation to notify the ICO within 72 hours of discovering the breach under UK GDPR.
              </p>
              <p style={{ color: '#a1a1aa', lineHeight: 1.7, margin: '0 0 1.5rem' }}>
                Every recovery we perform includes a written forensic incident report documenting what was found, what was removed, what data was potentially at risk, and the steps we took to remediate. This gives you the evidence trail you need if you face regulatory scrutiny.
              </p>
              <Link href="/wordpress-maintenance-uk" style={{ color: '#ef4444', fontSize: '0.95rem' }}>
                → After recovery: protect your site with a maintenance plan
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { stat: '30 min', label: 'Emergency priority track start time' },
                { stat: '4–12 hrs', label: 'Typical full recovery time' },
                { stat: '72 hrs', label: 'ICO breach notification window we help you meet' },
                { stat: '30 days', label: 'Post-cleanup monitoring & guarantee' },
              ].map((item) => (
                <div key={item.label} style={{ background: 'var(--background)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ef4444', minWidth: '90px' }}>{item.stat}</div>
                  <div style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related reading */}
      <section className="section-padding" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <h2 style={{ marginBottom: '1.5rem' }}>Further Reading</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Link href="/wordpress-site-keeps-getting-hacked" style={{ color: '#ef4444', textDecoration: 'none', fontSize: '0.95rem' }}>
              → WordPress Site Keeps Getting Hacked? Here&apos;s Why &amp; How to Stop It
            </Link>
            <Link href="/wordpress-malware-removal" style={{ color: '#ef4444', textDecoration: 'none', fontSize: '0.95rem' }}>
              → WordPress Malware Removal UK — Emergency Cleanup Service
            </Link>
            <Link href="/wordpress-maintenance-uk" style={{ color: '#ef4444', textDecoration: 'none', fontSize: '0.95rem' }}>
              → WordPress Maintenance Service UK — Prevent Future Hacks
            </Link>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <CTA
        title="Don&apos;t Let Hackers Win"
        subtitle="Every hour your site stays compromised costs you traffic, revenue, and customer trust. Let us fix it now."
        btnText="Start Emergency Recovery"
        btnLink="#contact-section"
      />

      <section
        id="contact-section"
        className="section-padding"
        style={{ backgroundColor: 'var(--background)' }}
      >
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto', background: 'var(--surface)', borderRadius: '1rem', border: '1px solid var(--border)', padding: '2rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Request Emergency Recovery</h2>
            <p style={{ textAlign: 'center', color: '#a1a1aa', marginBottom: '2rem' }}>
              Describe what you&apos;re seeing and we&apos;ll get started within hours.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
