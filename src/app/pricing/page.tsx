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
  title: 'WordPress Security Pricing UK | Incident Response, Audits & Retainers',
  description:
    'WordPress security pricing for UK businesses, including incident response, malware removal, security audits, and monthly retainers. See fixed-fee and monthly options.',
  path: '/pricing',
});

const faqItems = [
  {
    question: 'How is pricing decided?',
    answer:
      'Pricing depends on the level of compromise, business impact, website complexity, persistence or backdoors, and the recovery depth required to secure the environment properly.',
  },
  {
    question: 'Do most clients choose the lowest cost option?',
    answer:
      'No. Most businesses choose the Post-Hack Forensic & Hardening Package because it combines investigation, eradication, structural hardening, and post-recovery protection against reinfection.',
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
  {
    question: 'Do you offer monthly retainers as well as incident response?',
    answer:
      'Yes. Many UK clients start with a one-time security audit or incident response engagement and then move to a monthly security retainer priced from £250 to £800 per month depending on complexity and response expectations.',
  },
];

export default function Pricing() {
  const serviceSchema = generateServiceSchema(
    'WordPress Incident Response & Security Pricing',
    'High-ticket WordPress incident response and security pricing for UK businesses. Response scope is based on incident severity, business risk, recovery complexity, and whether post-hack forensic hardening is required.',
    '/pricing',
    '£1,500 - £12,000+'
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
            <p style={{ marginBottom: '1rem', color: '#d4d4d8', fontWeight: 700 }}>
              Led by 20+ years of experience in infrastructure, cybersecurity, and enterprise systems.
            </p>
            <a href="#assessment-cta" className="btn btn-primary">
              Request Assessment
            </a>
            <p style={{ marginTop: '1rem', color: '#d4d4d8', fontWeight: 700 }}>
              Critical incidents are prioritized immediately upon confirmation.
            </p>
            <p style={{ marginTop: '0.5rem', color: '#a1a1aa' }}>
              We prioritise a limited number of active incidents at a time.
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
              If you are looking for the lowest cost fix, we are not the right fit.
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
            <h2>Based on your situation, we recommend the appropriate level of response.</h2>
            <p style={{ marginTop: '1rem' }}>
              <a href="/case-studies" style={{ color: 'var(--primary)' }}>
                See how we recovered a compromised eCommerce website
              </a>
            </p>
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
              <div style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>From £1,500</div>
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
              <h3 style={{ marginBottom: '0.5rem' }}>Post-Hack Forensic &amp; Hardening Package</h3>
              <div style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>£3,000 – £8,000</div>
              <p style={{ color: '#a1a1aa' }}>Full recovery, breach autopsy, and structural hardening against reinfection.</p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.25rem' }}>
                {[
                  'Forensic investigation',
                  'Root cause identification',
                  'Breach autopsy summary',
                  'Complete malware & backdoor removal',
                  'Database + file integrity validation',
                  'Hosting / DNS / access audit',
                  'Advanced hardening',
                  '12-month hardening roadmap',
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
              <p style={{ color: '#d4d4d8', fontWeight: 700, marginTop: '0.75rem', marginBottom: 0 }}>
                Best balance of recovery, hardening, and long-term protection
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
            <h2 style={{ marginBottom: '1rem' }}>Why basic fixes fail</h2>
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

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--surface)' }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3rem' }}>
            <h2>Monthly Security Retainers</h2>
            <p>For teams that want ongoing monitoring, faster support, and stronger GDPR-ready operating discipline after recovery.</p>
            <p style={{ marginTop: '1rem' }}>
              <a href="/wordpress-maintenance-plans" style={{ color: 'var(--primary)', fontWeight: 700 }}>
                Looking for affordable WordPress maintenance plans? Compare monthly care tiers here.
              </a>
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
              maxWidth: '960px',
              margin: '0 auto',
            }}
          >
            {[
              {
                name: 'Essential Monitoring',
                price: '£250/mo',
                items: ['24/7 monitoring', 'Weekly scan review', 'Monthly summary', 'Priority support queue'],
              },
              {
                name: 'Business Protection',
                price: '£500/mo',
                items: ['Everything in Essential', 'Quarterly security review', 'GDPR breach-readiness guidance', 'Faster incident escalation'],
              },
              {
                name: 'Continuity Retainer',
                price: '£800/mo',
                items: ['Everything in Business', 'Monthly audit call', 'Dedicated escalation path', 'Support for agencies and complex sites'],
              },
            ].map((tier, index) => (
              <div
                key={tier.name}
                style={{
                  background: 'var(--background)',
                  border: index === 1 ? '2px solid var(--primary)' : '1px solid var(--border)',
                  borderRadius: '1rem',
                  padding: '2rem',
                }}
              >
                <h3 style={{ marginBottom: '0.5rem' }}>{tier.name}</h3>
                <div style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>{tier.price}</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {tier.items.map((item) => (
                    <li key={item} style={{ marginBottom: '0.75rem', color: '#d4d4d8' }}>
                      &#10003; {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--background)' }}
      >
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '1rem' }}>Security audit pricing</h2>
            <p style={{ color: '#a1a1aa', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Standalone security audits are available from <strong style={{ color: 'var(--foreground)' }}>£1,000 to £3,000</strong> depending on site complexity, plugin footprint, access model, and reporting depth. They are often the cleanest starting point for non-urgent prospects.
            </p>
            <p style={{ color: '#d4d4d8', margin: 0 }}>
              UK GDPR implications, breach-notification readiness, and hosting or access-control weaknesses are included when relevant.
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
