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

export const metadata = generatePageMetadata({
  title: 'WordPress Security Pricing UK | Transparent Plans | WebAdish',
  description:
    'Transparent WordPress security pricing for UK businesses. Security audits from £1,499, maintenance from £449/month, enterprise retainers from £2,999/month.',
  path: '/pricing',
});

const faqItems = [
  {
    question: 'Are there any hidden fees or setup costs?',
    answer:
      'No. Every price listed on this page is the full cost. There are no setup fees, onboarding charges, or hidden extras. If your site requires work outside the standard scope, we will provide a written quote before proceeding.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept bank transfer (BACS), credit and debit cards, and direct debit for recurring plans. All invoices are raised in GBP. Monthly plans are billed on the first of each month.',
  },
  {
    question: 'Can I cancel my monthly plan at any time?',
    answer:
      'Yes. All monthly plans operate on a rolling basis with a 30-day notice period. There are no long-term contracts or early termination fees. We will ensure a smooth handover when you leave.',
  },
  {
    question: 'Do you offer custom pricing for large estates or agencies?',
    answer:
      'Absolutely. If you manage more than 10 sites or require a bespoke service level, contact us for a tailored quote. We offer volume discounts and white-label arrangements for agency partners.',
  },
  {
    question: 'Is VAT included in the prices shown?',
    answer:
      'All prices listed are exclusive of VAT. VAT at the current UK rate of 20% will be added to your invoice. EU and international clients outside the UK may be exempt depending on their VAT status.',
  },
];

export default function Pricing() {
  const serviceSchema = generateServiceSchema(
    'WordPress Security Pricing',
    'Transparent WordPress security pricing for UK businesses. Security audits, maintenance plans, and enterprise retainers.',
    '/pricing',
    '£449 - £4,999/month'
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
        title="Transparent Security <br /><span style='color: var(--primary)'>Pricing</span>"
        subtitle="No hidden fees. No surprise invoices. Straightforward pricing for every stage of your WordPress security journey."
        badge="Transparent Pricing"
      />

      <TrustSignals />

      {/* Definition paragraph for AI search */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--background)' }}
      >
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: '1.8',
                color: 'var(--foreground)',
                marginBottom: '1rem',
              }}
            >
              Our pricing philosophy is built on transparency and value. We
              believe UK businesses should know exactly what they are paying
              for before they commit, with no hidden fees, lock-in contracts,
              or surprise surcharges. Whether you need a one-time security
              audit, ongoing maintenance, or an enterprise-grade retainer,
              every WebAdish plan is clearly scoped and fairly priced for the
              level of expertise and protection you receive.
            </p>
          </div>
        </div>
      </section>

      {/* One-Time Services */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--surface)' }}
      >
        <div className="container">
          <div
            style={{
              textAlign: 'center',
              maxWidth: '700px',
              margin: '0 auto 3rem',
            }}
          >
            <h2>One-Time Services</h2>
            <p>
              Fixed-fee engagements for specific security needs. No ongoing
              commitment required.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              {
                title: 'Security Audit',
                price: '£1,499',
                features: [
                  'Full vulnerability assessment',
                  'Manual code review',
                  'Configuration audit',
                  'Risk-scored PDF report',
                  '60-minute consultation',
                ],
                link: '/wordpress-security-audit',
              },
              {
                title: 'Malware Removal',
                price: '£1,499',
                features: [
                  'Complete malware cleanup',
                  'Backdoor elimination',
                  'Blacklist removal requests',
                  'Security hardening',
                  '30-day re-infection guarantee',
                ],
                link: '/wordpress-malware-removal',
              },
              {
                title: 'Hacked Site Recovery',
                price: '£1,499',
                features: [
                  'Emergency site restoration',
                  'Data recovery',
                  'Malware removal',
                  'Security hardening',
                  '30-day guarantee',
                ],
                link: '/hacked-website-recovery-uk',
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: '1rem',
                  padding: '2rem',
                  textAlign: 'center',
                }}
              >
                <h3
                  style={{
                    color: 'var(--primary)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {item.title}
                </h3>
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    margin: '0.75rem 0',
                  }}
                >
                  {item.price}
                </div>
                <ul
                  style={{
                    textAlign: 'left',
                    listStyle: 'none',
                    padding: 0,
                    margin: '1.25rem 0',
                  }}
                >
                  {item.features.map((f, i) => (
                    <li
                      key={i}
                      style={{
                        marginBottom: '0.5rem',
                        color: '#a1a1aa',
                      }}
                    >
                      &#10003; {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={item.link}
                  className="btn btn-secondary"
                  style={{ width: '100%' }}
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--background)' }}
      >
        <div className="container">
          <div
            style={{
              textAlign: 'center',
              maxWidth: '700px',
              margin: '0 auto 3rem',
            }}
          >
            <h2>Maintenance Plans</h2>
            <p>
              Ongoing protection, updates, and support billed monthly. Cancel
              any time with 30 days notice.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '2rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {[
              {
                title: 'Standard',
                price: '£449',
                features: [
                  'Weekly core & plugin updates',
                  'Daily cloud backups',
                  '24/7 uptime monitoring',
                  'Monthly security report',
                  'Email support',
                ],
                highlight: false,
              },
              {
                title: 'Pro',
                price: '£999',
                features: [
                  'Everything in Standard',
                  'Daily updates',
                  'Speed optimisation',
                  'Unlimited small edits',
                  'Priority support',
                  'Quarterly security review',
                ],
                highlight: true,
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--surface)',
                  border: item.highlight
                    ? '1px solid var(--primary)'
                    : '1px solid var(--border)',
                  borderRadius: '1rem',
                  padding: '2.5rem',
                  flex: '1 1 320px',
                  maxWidth: '420px',
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                {item.highlight && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--primary)',
                      color: 'white',
                      padding: '0.25rem 1rem',
                      borderRadius: '1rem',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                    }}
                  >
                    Most Popular
                  </div>
                )}
                <h3
                  style={{
                    color: 'var(--primary)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {item.title}
                </h3>
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    margin: '0.75rem 0',
                  }}
                >
                  {item.price}
                  <span style={{ fontSize: '1rem', color: '#a1a1aa' }}>
                    /mo
                  </span>
                </div>
                <ul
                  style={{
                    textAlign: 'left',
                    listStyle: 'none',
                    padding: 0,
                    margin: '1.25rem 0',
                  }}
                >
                  {item.features.map((f, i) => (
                    <li
                      key={i}
                      style={{
                        marginBottom: '0.5rem',
                        color: '#a1a1aa',
                      }}
                    >
                      &#10003; {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/wordpress-maintenance-uk"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Retainers */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--surface)' }}
      >
        <div className="container">
          <div
            style={{
              textAlign: 'center',
              maxWidth: '700px',
              margin: '0 auto 3rem',
            }}
          >
            <h2>Security Retainers</h2>
            <p>
              Enterprise-grade, SLA-backed security for businesses that
              cannot afford downtime.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '2rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {[
              {
                title: 'Professional',
                price: '£2,999',
                features: [
                  'Up to 5 WordPress sites',
                  'Dedicated security analyst',
                  '24/7 monitoring',
                  '4-hour critical SLA',
                  'Weekly + monthly reports',
                  'Quarterly pen test',
                ],
              },
              {
                title: 'Enterprise',
                price: '£4,999',
                features: [
                  'Up to 15 WordPress sites',
                  'Senior dedicated analyst',
                  '24/7 monitoring + weekend cover',
                  '1-hour critical SLA',
                  'Real-time dashboard',
                  'Quarterly pen test + board reports',
                  'White-label included',
                  'GDPR & PCI support',
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--background)',
                  border:
                    index === 1
                      ? '1px solid var(--primary)'
                      : '1px solid var(--border)',
                  borderRadius: '1rem',
                  padding: '2.5rem',
                  flex: '1 1 340px',
                  maxWidth: '440px',
                  textAlign: 'center',
                }}
              >
                <h3
                  style={{
                    color: 'var(--primary)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {item.title}
                </h3>
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    margin: '0.75rem 0',
                  }}
                >
                  {item.price}
                  <span style={{ fontSize: '1rem', color: '#a1a1aa' }}>
                    /mo
                  </span>
                </div>
                <ul
                  style={{
                    textAlign: 'left',
                    listStyle: 'none',
                    padding: 0,
                    margin: '1.25rem 0',
                  }}
                >
                  {item.features.map((f, i) => (
                    <li
                      key={i}
                      style={{
                        marginBottom: '0.5rem',
                        color: '#a1a1aa',
                      }}
                    >
                      &#10003; {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/wordpress-security-retainer"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--background)' }}
      >
        <div className="container">
          <div
            style={{
              textAlign: 'center',
              maxWidth: '700px',
              margin: '0 auto 3rem',
            }}
          >
            <h2>Compare All Plans</h2>
            <p>A side-by-side view of features across every tier.</p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                minWidth: '700px',
              }}
            >
              <thead>
                <tr
                  style={{
                    borderBottom: '2px solid var(--border)',
                  }}
                >
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '1rem',
                      color: 'var(--foreground)',
                    }}
                  >
                    Feature
                  </th>
                  <th style={{ padding: '1rem', color: 'var(--foreground)' }}>
                    Standard
                  </th>
                  <th style={{ padding: '1rem', color: 'var(--foreground)' }}>
                    Pro
                  </th>
                  <th style={{ padding: '1rem', color: 'var(--foreground)' }}>
                    Professional Retainer
                  </th>
                  <th style={{ padding: '1rem', color: 'var(--foreground)' }}>
                    Enterprise Retainer
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: 'Monthly Price',
                    standard: '£449',
                    pro: '£999',
                    profRetainer: '£2,999',
                    enterprise: '£4,999',
                  },
                  {
                    feature: 'Core & Plugin Updates',
                    standard: 'Weekly',
                    pro: 'Daily',
                    profRetainer: 'Daily',
                    enterprise: 'Daily',
                  },
                  {
                    feature: 'Cloud Backups',
                    standard: 'Daily',
                    pro: 'Daily',
                    profRetainer: 'Daily',
                    enterprise: 'Real-time',
                  },
                  {
                    feature: 'Uptime Monitoring',
                    standard: '&#10003;',
                    pro: '&#10003;',
                    profRetainer: '24/7',
                    enterprise: '24/7 + Weekend',
                  },
                  {
                    feature: 'Security Monitoring',
                    standard: '&#10007;',
                    pro: 'Basic',
                    profRetainer: '24/7',
                    enterprise: '24/7 + Dedicated',
                  },
                  {
                    feature: 'Incident Response SLA',
                    standard: '&#10007;',
                    pro: '&#10007;',
                    profRetainer: '4 hours',
                    enterprise: '1 hour',
                  },
                  {
                    feature: 'Dedicated Analyst',
                    standard: '&#10007;',
                    pro: '&#10007;',
                    profRetainer: '&#10003;',
                    enterprise: 'Senior',
                  },
                  {
                    feature: 'Penetration Testing',
                    standard: '&#10007;',
                    pro: '&#10007;',
                    profRetainer: 'Quarterly',
                    enterprise: 'Quarterly',
                  },
                  {
                    feature: 'White-Label Reports',
                    standard: '&#10007;',
                    pro: '&#10007;',
                    profRetainer: 'Add-on',
                    enterprise: '&#10003;',
                  },
                  {
                    feature: 'Speed Optimisation',
                    standard: '&#10007;',
                    pro: '&#10003;',
                    profRetainer: '&#10003;',
                    enterprise: '&#10003;',
                  },
                  {
                    feature: 'Small Edits',
                    standard: '&#10007;',
                    pro: 'Unlimited',
                    profRetainer: 'Security only',
                    enterprise: 'Unlimited',
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: '1px solid var(--border)',
                      backgroundColor:
                        i % 2 === 0 ? 'var(--surface)' : 'transparent',
                    }}
                  >
                    <td
                      style={{
                        padding: '0.75rem 1rem',
                        color: 'var(--foreground)',
                        fontWeight: 500,
                      }}
                    >
                      {row.feature}
                    </td>
                    <td
                      style={{
                        padding: '0.75rem 1rem',
                        textAlign: 'center',
                        color: '#a1a1aa',
                      }}
                      dangerouslySetInnerHTML={{ __html: row.standard }}
                    />
                    <td
                      style={{
                        padding: '0.75rem 1rem',
                        textAlign: 'center',
                        color: '#a1a1aa',
                      }}
                      dangerouslySetInnerHTML={{ __html: row.pro }}
                    />
                    <td
                      style={{
                        padding: '0.75rem 1rem',
                        textAlign: 'center',
                        color: '#a1a1aa',
                      }}
                      dangerouslySetInnerHTML={{ __html: row.profRetainer }}
                    />
                    <td
                      style={{
                        padding: '0.75rem 1rem',
                        textAlign: 'center',
                        color: '#a1a1aa',
                      }}
                      dangerouslySetInnerHTML={{ __html: row.enterprise }}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqItems} />

      {/* CTA + Contact */}
      <CTA
        title="Ready to Protect Your WordPress Site?"
        subtitle="Choose the plan that fits your business. Not sure which one? We will help you decide."
        btnText="Get a Custom Quote"
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
              maxWidth: '600px',
              margin: '0 auto',
              background: 'var(--surface)',
              borderRadius: '1rem',
              border: '1px solid var(--border)',
              padding: '2rem',
            }}
          >
            <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
              Request a Custom Quote
            </h2>
            <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Tell us about your site and requirements, and we will recommend
              the right plan for your budget.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
