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

export const metadata = generatePageMetadata({
  title: 'WordPress Incident Response & Security Pricing | WebAdish UK',
  description:
    'High-ticket WordPress incident response and security pricing for UK businesses. Most engagements range from £3,000 to £10,000+ depending on severity, access level, and business impact.',
  path: '/pricing',
});

const faqItems = [
  {
    question: 'How is pricing decided?',
    answer:
      'Pricing depends on the level of compromise, business impact, website complexity, persistence or backdoors, and the recovery depth required to secure the environment properly.',
  },
  {
    question: 'Do most clients choose the cheapest option?',
    answer:
      'No. Most businesses choose the Incident Response Program because it combines investigation, eradication, and post-recovery protection against reinfection.',
  },
  {
    question: 'Why are low-cost cleanups risky?',
    answer:
      'Because they often remove visible malware without closing the original access path, validating file and database integrity, or implementing ongoing protection.',
  },
  {
    question: 'Who is this service suitable for?',
    answer:
      'It is designed for revenue-generating websites, eCommerce platforms, agencies, and businesses where downtime, data loss, or SEO damage has direct financial consequences.',
  },
];

export default function Pricing() {
  const serviceSchema = generateServiceSchema(
    'WordPress Incident Response & Security Pricing',
    'High-ticket WordPress incident response and security pricing for UK businesses. Response scope is based on incident severity, business risk, and recovery complexity.',
    '/pricing',
    '£1,499 - £12,000+'
  );

  const faqSchema = generateFAQSchema(faqItems);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Pricing', url: '/pricing' },
  ]);

  return (
    <>
      <StructuredData schemas={[serviceSchema, faqSchema, breadcrumbSchema]} />

      <PageHeader
        title="WordPress Incident Response &amp; Security Pricing <br /><span style='color: var(--primary)'>Built for Businesses That Cannot Afford Failure</span>"
        subtitle="Every incident is different. Pricing depends on severity, access level, and business impact."
        badge="Most engagements range from £3,000 to £10,000+"
      />

      <TrustSignals />

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--background)' }}
      >
        <div className="container">
          <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
            <a href="#assessment-cta" className="btn btn-primary">
              Request Assessment
            </a>
            <p style={{ marginTop: '1rem', color: '#d4d4d8', fontWeight: 700 }}>
              Critical incidents are prioritized immediately upon confirmation.
            </p>
          </div>
        </div>
      </section>

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--surface)' }}
      >
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '1rem' }}>Important context</h2>
            <p style={{ color: '#a1a1aa', lineHeight: 1.8, marginBottom: '1rem' }}>
              This is not basic malware cleanup.
            </p>
            <p style={{ color: '#a1a1aa', lineHeight: 1.8, marginBottom: '1rem' }}>
              We handle active security incidents, compromised infrastructure, and business-critical systems.
            </p>
            <p style={{ color: 'var(--foreground)', fontWeight: 700, margin: 0 }}>
              If you are looking for the cheapest fix, we are not the right fit.
            </p>
          </div>
        </div>
      </section>

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--background)' }}
      >
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '1rem' }}>How pricing works</h2>
            <p style={{ color: '#a1a1aa', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              We don&apos;t sell fixed packages — we recommend the right level of response based on your situation.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.85rem' }}>
              {[
                'Level of compromise',
                'Downtime impact',
                'Website complexity',
                'Presence of backdoors or persistent access',
                'SEO or blacklist damage',
              ].map((item) => (
                <li key={item} style={{ color: '#d4d4d8', borderLeft: '3px solid var(--primary)', paddingLeft: '1rem' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--surface)' }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3rem' }}>
            <h2>Service tiers</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            <div
              style={{
                background: 'var(--background)',
                border: '1px solid var(--border)',
                borderRadius: '1rem',
                padding: '2rem',
              }}
            >
              <h3 style={{ marginBottom: '0.5rem' }}>Emergency Containment</h3>
              <div style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>Starting from £1,499</div>
              <p style={{ color: '#a1a1aa' }}>Immediate cleanup for low-risk incidents.</p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.25rem' }}>
                {[
                  'Malware removal',
                  'Basic restoration',
                  'Minimal hardening',
                ].map((item) => (
                  <li key={item} style={{ marginBottom: '0.5rem', color: '#d4d4d8' }}>
                    &#10003; {item}
                  </li>
                ))}
              </ul>
              <p style={{ color: '#f59e0b', fontWeight: 700, marginBottom: '0.5rem' }}>
                Does NOT include deep investigation
              </p>
              <p style={{ color: '#f59e0b', fontWeight: 700, margin: 0 }}>
                Not suitable for business-critical sites
              </p>
            </div>

            <div
              style={{
                background: 'var(--background)',
                border: '2px solid var(--primary)',
                borderRadius: '1rem',
                padding: '2rem',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--primary)',
                  color: '#000',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '4px 16px',
                  borderRadius: '20px',
                  whiteSpace: 'nowrap',
                }}
              >
                MOST CLIENTS CHOOSE THIS
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>Incident Response Program</h3>
              <div style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>£4,999 – £7,499</div>
              <p style={{ color: '#a1a1aa' }}>Full recovery and protection against reinfection.</p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.25rem' }}>
                {[
                  'Forensic investigation',
                  'Root cause identification',
                  'Complete malware & backdoor removal',
                  'Database + file integrity validation',
                  'Hosting / DNS / access audit',
                  'Advanced hardening',
                  '60-day monitoring',
                ].map((item) => (
                  <li key={item} style={{ marginBottom: '0.5rem', color: '#d4d4d8' }}>
                    &#10003; {item}
                  </li>
                ))}
              </ul>
              <p style={{ color: 'var(--primary)', fontWeight: 700, margin: 0 }}>
                Most clients choose this to avoid repeat incidents
              </p>
            </div>

            <div
              style={{
                background: 'var(--background)',
                border: '1px solid var(--border)',
                borderRadius: '1rem',
                padding: '2rem',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#ef4444',
                  color: '#fff',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '4px 16px',
                  borderRadius: '20px',
                  whiteSpace: 'nowrap',
                }}
              >
                FOR BUSINESS-CRITICAL SYSTEMS
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>Business Continuity Protection</h3>
              <div style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>£8,000 – £12,000+</div>
              <p style={{ color: '#a1a1aa' }}>For businesses where downtime is not an option.</p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.25rem' }}>
                {[
                  'Everything in Incident Response',
                  'Disaster recovery architecture',
                  'Advanced monitoring & alerting',
                  'Backup redesign',
                  'Workflow & access security',
                  'SLA-backed emergency response',
                ].map((item) => (
                  <li key={item} style={{ marginBottom: '0.5rem', color: '#d4d4d8' }}>
                    &#10003; {item}
                  </li>
                ))}
              </ul>
              <p style={{ color: 'var(--primary)', fontWeight: 700, margin: 0 }}>
                Designed for eCommerce, agencies, and high-traffic platforms
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--background)' }}
      >
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '1rem' }}>Cost vs risk</h2>
            <p style={{ color: '#a1a1aa', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Typical impact of a compromised website:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {[
                'Revenue loss: £1K–£10K+ per day',
                'SEO recovery: months',
                'Customer trust: long-term damage',
              ].map((item) => (
                <li key={item} style={{ color: '#d4d4d8', borderLeft: '3px solid var(--primary)', paddingLeft: '1rem' }}>
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ fontWeight: 700, color: 'var(--foreground)', margin: 0 }}>
              Investing £5K–£10K now can prevent significantly higher losses later.
            </p>
          </div>
        </div>
      </section>

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--surface)' }}
      >
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '1rem' }}>Why cheap fixes fail</h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {[
                'Visible malware removed, hidden access remains',
                'No root cause identified',
                'No long-term protection',
                'Reinfection within weeks',
              ].map((item) => (
                <li key={item} style={{ color: '#d4d4d8', borderLeft: '3px solid #ef4444', paddingLeft: '1rem' }}>
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ fontWeight: 700, color: 'var(--foreground)', margin: 0 }}>
              That&apos;s why businesses come to us after failed attempts.
            </p>
          </div>
        </div>
      </section>

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--background)' }}
      >
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '1rem' }}>Our process</h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '1rem',
              }}
            >
              {['Assessment', 'Containment', 'Recovery', 'Hardening', 'Protection'].map((item) => (
                <div
                  key={item}
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '0.85rem',
                    padding: '1rem',
                    textAlign: 'center',
                    fontWeight: 700,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--surface)' }}
      >
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '1rem' }}>Who this is for</h2>
            <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {[
                'Revenue-generating websites',
                'eCommerce platforms',
                'Agencies managing clients',
                'Businesses with uptime dependency',
              ].map((item) => (
                <p key={item} style={{ margin: 0, color: '#d4d4d8' }}>
                  ✔ {item}
                </p>
              ))}
            </div>
            <p style={{ margin: 0, fontWeight: 700, color: 'var(--foreground)' }}>
              Not for hobby sites or low-budget fixes
            </p>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <div id="assessment-cta">
        <CTA
          title="Every hour increases damage."
          subtitle="Request Emergency Assessment. Response within 30 minutes."
          btnText="Request Emergency Assessment"
          btnLink="/contact"
        />
      </div>
    </>
  );
}
