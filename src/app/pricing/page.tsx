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
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'WordPress Incident Response Pricing UK | Premium Engagements | WebAdish',
  description:
    'Premium WordPress incident response pricing for UK businesses. High-trust recovery engagements from £3,000 and retained protection for revenue-critical websites.',
  path: '/pricing',
});

const faqItems = [
  {
    question: 'Are there any hidden fees or setup costs?',
    answer:
      'No. We scope engagements clearly before work starts. If the incident is materially broader than first reported, we explain the change in writing before expanding scope.',
  },
  {
    question: 'Why are your prices higher than many WordPress cleanup services?',
    answer:
      'Because we are not selling a commodity malware sweep. We are handling business-critical incidents where incomplete remediation can mean reinfection, lost revenue, client churn, and compliance exposure.',
  },
  {
    question: 'Can I move from incident recovery into an ongoing plan?',
    answer:
      'Yes. Many clients engage us for immediate recovery first, then continue into a retained protection arrangement once the incident is stabilised.',
  },
  {
    question: 'Do you offer custom pricing for large estates or agencies?',
    answer:
      'Yes. Agency portfolios, multi-site estates, and environments with white-label or stakeholder-reporting requirements are usually scoped as bespoke engagements.',
  },
  {
    question: 'Is VAT included in the prices shown?',
    answer:
      'All prices listed are exclusive of VAT. VAT at the applicable UK rate will be added where required.',
  },
];

export default function Pricing() {
  const serviceSchema = generateServiceSchema(
    'WordPress Incident Response Pricing',
    'Premium WordPress incident response pricing for UK businesses. Recovery engagements, retained security, and business-critical protection.',
    '/pricing',
    '£3,000 - £10,000+'
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
        title="Premium Incident Response <br /><span style='color: var(--primary)'>Pricing</span>"
        subtitle="Serious breaches need senior handling, forensic depth, and commercial awareness. Our pricing reflects business-critical work, not commodity cleanup."
        badge="Premium Engagements"
      />

      <TrustSignals />

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
              Most cheap fixes fail because they are scoped around malware
              removal alone. We scope pricing around containment, root-cause
              analysis, eradication, remediation, and the business pressure
              surrounding the incident. That means fewer surprises, fewer
              reinfections, and a more credible recovery path for high-value
              websites.
            </p>
          </div>
        </div>
      </section>

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
            <h2>Incident Response Engagements</h2>
            <p>
              These tiers are designed for organisations with business impact at
              stake. Final scope depends on the depth of compromise and
              environment complexity.
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
                title: 'Incident Recovery',
                price: '£3,000+',
                features: [
                  'Single-site compromise response',
                  'Containment and eradication',
                  'Root-cause analysis',
                  'Security remediation plan',
                  'Stakeholder incident summary',
                ],
                link: '/hacked-website-recovery-uk',
              },
              {
                title: 'Revenue-Critical Response',
                price: '£6,000+',
                features: [
                  'WooCommerce and lead-gen websites',
                  'Deep persistence investigation',
                  'Blacklist and reputation recovery support',
                  'Priority communication during live incident',
                  'Post-recovery monitoring window',
                ],
                link: '/wordpress-malware-removal',
              },
              {
                title: 'Major Incident Engagement',
                price: '£10,000+',
                features: [
                  'Agency portfolios and multi-site estates',
                  'Complex reinfection or server-level investigation',
                  'Executive and client-facing reporting',
                  'Cross-site remediation planning',
                  'Bespoke recovery leadership',
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
                  View Scope
                </a>
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
          <div
            style={{
              textAlign: 'center',
              maxWidth: '700px',
              margin: '0 auto 3rem',
            }}
          >
            <h2>Retained Protection</h2>
            <p>
              Ongoing protection for teams that cannot afford another avoidable incident.
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
                title: 'Business Critical',
                price: '£3,000',
                features: [
                  'Priority incident coverage',
                  'Security-led maintenance oversight',
                  '24/7 monitoring and alert triage',
                  'Monthly risk reporting',
                  'Direct senior contact',
                ],
                highlight: false,
              },
              {
                title: 'Enterprise',
                price: '£6,000',
                features: [
                  'Everything in Business Critical',
                  'Faster critical-response SLA',
                  'Deeper reporting cadence',
                  'Agency and stakeholder support',
                  'Quarterly hardening review',
                  'Estate-wide security coordination',
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
                    Premium
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
                  href="/wordpress-security-retainer"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  Discuss Retainer
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <h2>Senior-Led Security Retainers</h2>
            <p>
              For organisations that need a closer operating partner after recovery.
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
                price: '£8,000',
                features: [
                  'Up to 5 high-value WordPress sites',
                  'Dedicated security lead',
                  '24/7 monitoring and escalation',
                  '4-hour critical SLA',
                  'Weekly incident and risk reporting',
                  'Quarterly security review',
                ],
              },
              {
                title: 'Enterprise',
                price: '£10,000+',
                features: [
                  'Multi-site and agency estates',
                  'Senior incident leadership',
                  '24/7 monitoring + weekend cover',
                  '1-hour critical SLA',
                  'Executive-ready reporting',
                  'Quarterly strategic review',
                  'White-label and stakeholder support',
                  'GDPR and commercial-risk guidance',
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
                  Talk to Us
                </a>
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
          <div style={{ maxWidth: '820px', margin: '0 auto', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '1rem', padding: '2rem' }}>
            <h2>After recovery, continue protection with our maintenance and security plans</h2>
            <p style={{ color: '#a1a1aa', lineHeight: 1.7, margin: '1rem 0' }}>
              Recovery is only the first step. The real cost reduction comes
              from preventing the next incident with stronger oversight,
              monitoring, and change control.
            </p>
            <p style={{ color: '#a1a1aa', lineHeight: 1.7, margin: '0 0 1.5rem' }}>
              Continue protection with our maintenance and security plans on the
              main website.
            </p>
            <Link href="https://webadish.com/" className="btn btn-primary">
              View Protection Plans
            </Link>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <CTA
        title="Need a premium response plan?"
        subtitle="If your website is tied to revenue, clients, or compliance risk, we can scope the right level of support."
        btnText="Discuss an Engagement"
        btnLink="/contact"
      />
    </>
  );
}
