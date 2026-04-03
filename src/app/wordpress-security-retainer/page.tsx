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
  title:
    'WordPress Security Retainer UK | Monthly Protection for UK Businesses | WebAdish',
  description:
    'Monthly WordPress security retainers for UK businesses and agencies. Monitoring, audits, GDPR-aware support, and priority incident response from £250/month.',
  path: '/wordpress-security-retainer',
});

const faqItems = [
  {
    question: 'What does the onboarding process look like?',
    answer:
      'Onboarding takes approximately one week. We conduct an initial security audit of your WordPress environment, establish monitoring baselines, configure alerting, and set up your dedicated communication channel. You receive a full onboarding document and meet your assigned security analyst.',
  },
  {
    question: 'What SLA response times do you offer?',
    answer:
      'Our Professional tier guarantees a 4-hour response for critical incidents and 8 hours for high-severity issues. The Enterprise tier provides a 1-hour critical response time with 24/7 coverage including weekends and bank holidays.',
  },
  {
    question: 'Can we white-label your service for our agency clients?',
    answer:
      'Yes. We work with several UK agencies under full white-label arrangements. Reports are branded with your logo, communications go through your channels, and your clients never see our name. White-label is included in the Enterprise tier and available as an add-on for Professional.',
  },
  {
    question: 'How does the quarterly penetration testing work?',
    answer:
      'Each quarter, our team conducts a structured penetration test against your WordPress environment simulating real-world attack scenarios. You receive a detailed findings report with risk scores and remediation guidance. Any critical findings are escalated immediately.',
  },
  {
    question: 'What reporting do we receive?',
    answer:
      'Professional tier clients receive weekly security digests and a monthly executive summary. Enterprise tier clients get all of the above plus real-time dashboards, quarterly board-ready presentations, and custom reporting on any metric you require.',
  },
  {
    question: 'What happens if we want to cancel?',
    answer:
      'Both tiers operate on a rolling monthly contract with a 30-day notice period. There are no long-term lock-in commitments. Upon cancellation, we provide a full handover document and ensure a smooth transition.',
  },
  {
    question: 'How many sites can we include in a single retainer?',
    answer:
      'The Professional tier covers up to 5 WordPress installations. The Enterprise tier covers up to 15 installations. Additional sites can be added for a per-site fee. All sites are covered by the same SLA.',
  },
  {
    question: 'Do you handle compliance requirements like GDPR or PCI DSS?',
    answer:
      'Our security measures are designed with UK compliance in mind. We help you meet GDPR security obligations for WordPress, and for WooCommerce sites we align with PCI DSS requirements. Formal compliance auditing is available as an add-on service.',
  },
];

export default function WordPressSecurityRetainer() {
  const serviceSchema = generateServiceSchema(
    'WordPress Security Retainer',
    'Monthly WordPress security retainers for UK businesses and agencies. Monitoring, audits, priority response, and GDPR-aware support.',
    '/wordpress-security-retainer',
    'From £250/month'
  );

  const faqSchema = generateFAQSchema(faqItems);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    {
      name: 'WordPress Security Retainer',
      url: '/wordpress-security-retainer',
    },
  ]);

  return (
    <>
      <StructuredData schemas={[serviceSchema, faqSchema, breadcrumbSchema]} />

      <PageHeader
        title="Enterprise WordPress <br /><span style='color: var(--primary)'>Security Retainer</span>"
        subtitle="Monthly WordPress security retainers for UK businesses that need continuous monitoring, clearer escalation, and a stronger response posture without hiring in-house."
        badge="From £250/month"
      />

      <TrustSignals />

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--surface)', paddingTop: '1rem', paddingBottom: '1rem' }}
      >
        <div className="container">
          <div style={{ maxWidth: '920px', margin: '0 auto', background: 'rgba(99, 102, 241, 0.08)', border: '1px solid rgba(99, 102, 241, 0.28)', borderRadius: '1rem', padding: '1.5rem 1.75rem' }}>
            <p style={{ color: '#a1a1aa', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
              Why retainers matter more now
            </p>
            <p style={{ color: '#e4e4e7', lineHeight: 1.7, margin: 0 }}>
              Patchstack’s latest WordPress ecosystem review found <strong>7,966 vulnerabilities</strong> in 2024, with <strong>96% in plugins</strong>. That volume makes ad hoc updates and occasional checks a weak operating model for UK businesses. A retainer gives you prioritisation, faster patch decisions, and a named response path when the next disclosure cycle hits. Read our{' '}
              <Link href="/state-of-wordpress-security-2025-uk-business-takeaways" style={{ color: '#818cf8', fontWeight: 600 }}>
                UK business take on the 2025 WordPress security data
              </Link>.
            </p>
          </div>
        </div>
      </section>

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
              A WordPress security retainer is an ongoing protection
              engagement for your WordPress environment. Unlike a one-off
              cleanup, a retainer gives your business continuous monitoring,
              regular reviews, and a named escalation path when suspicious
              activity or a live incident appears. WebAdish retainers are
              built for UK businesses, agencies, and eCommerce teams that
              need stronger operational protection without building an
              in-house security function.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
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
            <h2>What&apos;s Included</h2>
            <p>
              Every retainer comes with a comprehensive suite of security
              services designed to keep your WordPress estate protected.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              {
                title: 'Named Security Contact',
                desc: 'A named point of contact who understands your WordPress environment and can coordinate response with context rather than starting from scratch each time.',
              },
              {
                title: '24/7 Security Monitoring',
                desc: 'Round-the-clock monitoring of your WordPress installations for intrusion attempts, file changes, brute-force attacks, and anomalous activity.',
              },
              {
                title: 'Priority Incident Escalation',
                desc: 'Defined response expectations for suspicious behaviour, urgent patching, and live incidents, with stronger response on higher tiers.',
              },
              {
                title: 'Monthly Reporting',
                desc: 'Clear summaries covering threats reviewed, updates completed, backlog items, and recommended risk-reduction actions.',
              },
              {
                title: 'GDPR-Aware Guidance',
                desc: 'Where relevant, we flag breach-notification readiness, access control gaps, and data-handling concerns that affect UK GDPR exposure.',
              },
              {
                title: 'Priority Support',
                desc: 'Skip the standard queue for urgent security questions, suspicious behaviour, and small security-focused changes.',
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                }}
              >
                <h3
                  style={{
                    color: 'var(--primary)',
                    fontSize: '1.15rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: '#a1a1aa', marginBottom: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Tiers */}
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
            <h2>Choose Your Monthly Retainer</h2>
            <p>
              Three monthly retainers designed for different levels of risk, complexity, and support expectation.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gap: '2rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            }}
          >
            {[
              {
                name: 'Essential Monitoring',
                price: '£250',
                note: 'For smaller commercial websites needing continuous visibility and a dependable escalation path.',
                items: ['24/7 monitoring', 'Weekly scan review', 'Monthly summary', 'Priority support queue'],
              },
              {
                name: 'Business Protection',
                price: '£500',
                note: 'For eCommerce sites and growth-stage businesses with stronger uptime and compliance sensitivity.',
                items: ['Everything in Essential', 'Quarterly security review', 'GDPR-aware guidance', 'Faster incident escalation'],
              },
              {
                name: 'Continuity Retainer',
                price: '£800',
                note: 'For agencies, multi-stakeholder teams, and businesses needing a higher-touch protection rhythm.',
                items: ['Everything in Business', 'Monthly audit call', 'Dedicated escalation path', 'Support for complex estates'],
              },
            ].map((tier, index) => (
              <div
                key={tier.name}
                style={{
                  background: 'var(--surface)',
                  border: index === 1 ? '1px solid var(--primary)' : '1px solid var(--border)',
                  borderRadius: '1rem',
                  padding: '2.5rem',
                  position: 'relative',
                }}
              >
                {index === 1 && (
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
                <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>
                  {tier.name}
                </h3>
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    margin: '0.75rem 0',
                  }}
                >
                  {tier.price}
                  <span style={{ fontSize: '1rem', color: '#a1a1aa' }}>
                    /month
                  </span>
                </div>
                <p style={{ color: '#a1a1aa', marginBottom: '1.5rem' }}>{tier.note}</p>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    marginTop: '1.5rem',
                  }}
                >
                  {tier.items.map((item, i) => (
                    <li
                      key={i}
                      style={{ marginBottom: '0.6rem', color: '#a1a1aa' }}
                    >
                      &#10003; {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p
            style={{
              textAlign: 'center',
              marginTop: '2rem',
              color: '#a1a1aa',
              fontSize: '0.9rem',
            }}
          >
            Need a custom arrangement? Call{' '}
            <strong style={{ color: 'var(--foreground)' }}>
              +44 7344 540450
            </strong>{' '}
            to discuss your requirements.
          </p>
        </div>
      </section>

      {/* Who It's For */}
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
            <h2>Who This Is For</h2>
            <p>
              Our retainers are designed for decision-makers who need
              reliable, ongoing WordPress security.
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
                title: 'CTOs & IT Directors',
                desc: 'You need assurance that your WordPress infrastructure is continuously monitored and protected without managing a dedicated security hire. Our retainer gives you enterprise-grade coverage with clear SLAs you can report on.',
              },
              {
                title: 'Agency Owners',
                desc: 'You manage WordPress sites for multiple clients and need a reliable security partner. Our white-label retainer lets you offer premium security services under your own brand, generating recurring revenue.',
              },
              {
                title: 'E-Commerce Directors',
                desc: 'Your WooCommerce store generates significant revenue and any downtime is costly. You need PCI-aligned security, continuous monitoring, and guaranteed rapid response when threats emerge.',
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                }}
              >
                <h3
                  style={{
                    color: 'var(--secondary)',
                    fontSize: '1.15rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: '#a1a1aa', marginBottom: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqItems} />

      {/* CTA */}
      <CTA
        title="Secure Your WordPress Estate"
        subtitle="Stop reacting to incidents. Start preventing them with a dedicated security retainer from WebAdish."
        btnText="Discuss Your Retainer"
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
              Let&apos;s Discuss Your Retainer
            </h2>
            <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Tell us about your WordPress environment and we will
              recommend the right tier for your needs.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
