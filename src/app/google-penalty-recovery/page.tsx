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
  title: 'Google Penalty Recovery UK | Blacklist Removal & Hacked SEO Cleanup',
  description:
    'Google blacklist warning, hacked SEO spam, or malware-related ranking loss? We help UK WordPress sites recover cleanly, remove malicious payloads, and support review requests.',
  path: '/google-penalty-recovery',
  modifiedTime: '2026-05-08',
});

const faqItems = [
  {
    question: 'Do you handle Google blacklist removal for hacked WordPress sites?',
    answer:
      'Yes. Once the malware, backdoors, and hacked spam are removed properly, we support the review-request process so Google warnings can be cleared. The cleanup must come first. Review requests on still-infected sites are usually rejected.',
  },
  {
    question: 'Is a Google penalty the same as a blacklist warning?',
    answer:
      'Not always. Many business owners use "Google penalty" to describe any sudden visibility loss after a hack. In practice, the issue may be a Safe Browsing blacklist warning, hacked SEO spam, cloaked pages, malicious redirects, or a Search Console manual action. We help determine which one you are dealing with and what recovery path fits it.',
  },
  {
    question: 'Can rankings recover after malware or hacked spam is removed?',
    answer:
      'Often, yes, but not instantly. Once the site is clean, Google needs to re-crawl the affected pages and reassess trust. Sites with a clean prior history often recover over weeks. Repeat infections, spam page indexing, and delayed cleanup usually make recovery slower.',
  },
  {
    question: 'Do you only fix SEO issues, or the security problem behind them too?',
    answer:
      'We fix the security problem first. This service is for recovery where visibility damage is tied to compromise, malware, or injected spam. We remove the malicious cause, close the access path, and help the site recover in Google from a clean technical base.',
  },
];

export default function GooglePenaltyRecoveryPage() {
  const serviceSchema = generateServiceSchema(
    'Google Penalty Recovery UK',
    'Recovery service for UK WordPress sites affected by Google blacklist warnings, hacked SEO spam, malicious redirects, or malware-related search visibility loss.',
    '/google-penalty-recovery',
    'From £1,499'
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/#services' },
    { name: 'Google Penalty Recovery UK', url: '/google-penalty-recovery' },
  ]);

  const faqSchema = generateFAQSchema(faqItems);

  return (
    <>
      <StructuredData schemas={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <PageHeader
        title="Google Penalty Recovery UK <br /><span style='color: #ef4444'>for Hacked WordPress Sites</span>"
        subtitle="If malware, spam injections, blacklisting, or hacked SEO pages have damaged your visibility, we clean the site properly, support review requests, and reduce the risk of recurrence."
        badge="Google Blacklist & Search Recovery"
      />

      <TrustSignals />

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--surface)', paddingTop: '1rem', paddingBottom: '1rem' }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: '920px',
              margin: '0 auto',
              background: 'rgba(239, 68, 68, 0.08)',
              border: '1px solid rgba(239, 68, 68, 0.35)',
              borderRadius: '1rem',
              padding: '1.75rem',
            }}
          >
            <h2 style={{ marginBottom: '0.75rem' }}>What this page is really for</h2>
            <p style={{ color: '#d4d4d8', lineHeight: 1.8, marginBottom: '1rem' }}>
              Many businesses say "Google penalty" when the real problem is a hacked site, Google blacklist warning, malicious redirect, spam page injection, or a sudden visibility collapse after compromise. That is the intent this page serves.
            </p>
            <p style={{ color: '#a1a1aa', lineHeight: 1.8, margin: 0 }}>
              If your problem is a broad SEO-performance issue with no sign of compromise, this is not the right service. If the visibility loss followed malware, browser warnings, hacked SEO pages, or spam indexing, then security-led recovery is the right place to start.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3rem' }}>
            <h2>Signs you need Google penalty recovery, not just a plugin scan</h2>
            <p style={{ color: '#a1a1aa' }}>
              These are the patterns we usually see when rankings or traffic collapse because a site has been compromised.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem' }}>
            {[
              'Google Search Console shows a Security Issue, malware warning, or unusual spam URLs.',
              'Search results display "This site may be hacked" or browser users see a Safe Browsing warning.',
              'Google traffic dropped sharply after redirects, hacked pages, or spam content appeared.',
              'Your brand pages were replaced in search by junk URLs, Japanese spam, pharma spam, or cloaked content.',
              'Ads, landing-page quality, or lead flow were damaged because the domain was flagged or distrusted.',
              'The site was cleaned once already, but the warning, spam, or ranking damage came back.',
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  color: '#d4d4d8',
                  lineHeight: 1.7,
                }}
              >
                <span style={{ color: '#ef4444', fontWeight: 700 }}>✓ </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3rem' }}>
            <h2>What recovery usually involves</h2>
            <p style={{ color: '#a1a1aa' }}>
              Google recovery only holds if the malicious cause is removed thoroughly and the access path is closed.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {[
              {
                step: '01',
                title: 'Diagnose',
                desc: 'We work out whether you are dealing with blacklist warnings, hacked SEO spam, redirects, cloaking, or a true manual action.',
              },
              {
                step: '02',
                title: 'Clean',
                desc: 'Malicious files, injected database content, spam pages, rogue users, and hidden persistence are removed completely.',
              },
              {
                step: '03',
                title: 'Remediate',
                desc: 'The plugin, credential, server issue, or unsafe component behind the compromise is corrected so the problem does not simply return.',
              },
              {
                step: '04',
                title: 'Recover',
                desc: 'We support review requests, Search Console follow-up, and next-step decisions so the site can regain trust from a clean footing.',
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  background: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: '0.9rem',
                  padding: '1.5rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '2rem', color: '#ef4444', fontWeight: 800, marginBottom: '0.75rem' }}>{item.step}</div>
                <h3 style={{ marginBottom: '0.65rem', fontSize: '1.05rem' }}>{item.title}</h3>
                <p style={{ color: '#a1a1aa', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div
            style={{
              maxWidth: '920px',
              margin: '0 auto',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '1rem',
              padding: '1.75rem',
            }}
          >
            <h2 style={{ marginBottom: '1rem' }}>Real trust signals, not generic SEO talk</h2>
            <p style={{ color: '#d4d4d8', lineHeight: 1.8, marginBottom: '1rem' }}>
              Trusted client work includes <strong>verofax.com</strong>, <strong>shivamautozone.com</strong>, and <strong>crystalgroup.in</strong>. The common thread in these engagements was not abstract ranking advice. It was real compromise cleanup, root-cause remediation, and making sure the site did not fall straight back into the same problem.
            </p>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {[
                'verofax.com approached us after a compromise. We traced the root cause, removed the malicious foothold, and closed the route that could have allowed reinfection.',
                'Other recovery engagements have involved spam injection, repeated warnings, or cleanup attempts that solved the symptom but not the access path.',
                'Some UK-facing details remain anonymised where appropriate, but the delivery model described here comes from real recovery work, not recycled SEO copy.',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', color: '#d4d4d8', lineHeight: 1.7 }}>
                  <span style={{ color: '#ef4444', flexShrink: 0 }}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <h2>Use this page for the commercial intent. Use the guide for the technical detail.</h2>
            <p style={{ color: '#a1a1aa', lineHeight: 1.8 }}>
              If you want the full technical process, read our detailed guide on <Link href="/wordpress-blacklisted-by-google">being blacklisted by Google</Link>. If you need help right now with cleanup, blacklisting, hacked SEO spam, or reinfection risk, use this page to start the recovery conversation.
            </p>
            <p style={{ color: '#a1a1aa', lineHeight: 1.8, marginTop: '1rem' }}>
              If the site is clearly hacked and the business impact is active, you may also want our <Link href="/hacked-website-recovery-uk">hacked website recovery UK</Link> service. If the main need is contained malware cleanup, see <Link href="/wordpress-malware-removal">WordPress malware removal</Link>.
            </p>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <CTA
        title="Need Google blacklist or hacked SEO recovery help?"
        subtitle="If traffic, ads, rankings, or customer trust have been hit by malware, spam pages, or browser warnings, start with a real assessment instead of another shallow cleanup."
        btnText="Request Recovery Help"
        btnLink="#contact-section"
      />

      <section
        id="contact-section"
        className="section-padding"
        style={{ backgroundColor: 'var(--background)' }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <div>
              <h2>Start the recovery conversation</h2>
              <p style={{ color: '#a1a1aa', lineHeight: 1.7, margin: '1rem 0' }}>
                Tell us what warning, traffic loss, hacked SEO symptom, or blacklist issue you are seeing. If it is genuinely compromise-led, we will help you understand whether you need targeted cleanup, full hacked-site recovery, or a broader security remediation engagement.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {[
                  'Google blacklist and browser warning support',
                  'Hacked SEO spam and malicious redirect cleanup',
                  'Root-cause remediation, not cosmetic fixes',
                  'Clear next-step guidance for UK businesses',
                ].map((item) => (
                  <li key={item} style={{ color: '#d4d4d8', display: 'flex', gap: '0.75rem' }}>
                    <span style={{ color: '#ef4444', flexShrink: 0 }}>→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
