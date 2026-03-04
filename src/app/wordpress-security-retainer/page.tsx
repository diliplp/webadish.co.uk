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
  title:
    'WordPress Security Retainer UK | Enterprise-Grade Protection | WebAdish',
  description:
    'High-ticket WordPress security retainers for UK businesses and agencies. Dedicated security team, SLA guarantees, and executive reporting from £2,999/month.',
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
    'Enterprise-grade WordPress security retainers for UK businesses and agencies. Dedicated security team, SLA guarantees, and executive reporting.',
    '/wordpress-security-retainer',
    'From £2,999/month'
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
        subtitle="A dedicated security team watching over your WordPress estate around the clock. SLA-backed incident response, executive reporting, and proactive threat management for UK businesses that cannot afford downtime."
        badge="Enterprise Security Retainer"
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
              A WordPress security retainer is an ongoing, contractual
              partnership with a dedicated security team that provides
              continuous monitoring, proactive threat management, guaranteed
              incident response times, and regular reporting for your
              WordPress environment. Unlike one-off services, a retainer
              ensures that security expertise is always available when you
              need it, with SLA-backed response times and a deep
              understanding of your specific infrastructure. WebAdish
              retainers are built for UK businesses, agencies, and
              enterprises that require enterprise-grade WordPress protection
              without building an in-house security team.
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
                title: 'Dedicated Security Analyst',
                desc: 'A named security professional who knows your infrastructure inside out. Direct Slack or Teams access for real-time communication.',
              },
              {
                title: '24/7 Security Monitoring',
                desc: 'Round-the-clock monitoring of your WordPress installations for intrusion attempts, file changes, brute-force attacks, and anomalous activity.',
              },
              {
                title: 'Incident Response SLA',
                desc: 'Guaranteed response times for security incidents. Critical issues are triaged and addressed within hours, not days.',
              },
              {
                title: 'Weekly Security Reports',
                desc: 'Clear, executive-friendly reports summarising threats blocked, vulnerabilities patched, uptime metrics, and upcoming recommendations.',
              },
              {
                title: 'Quarterly Penetration Testing',
                desc: 'Structured penetration tests simulating real-world attacks against your environment, with a detailed findings report and remediation support.',
              },
              {
                title: 'Priority Support',
                desc: 'Skip the queue. Your requests are handled before non-retainer clients. Includes unlimited small security-related changes and configurations.',
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
            <h2>Choose Your Tier</h2>
            <p>
              Two retainer levels designed for different scales of operation.
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
            {/* Professional Tier */}
            <div
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '1rem',
                padding: '2.5rem',
                flex: '1 1 340px',
                maxWidth: '440px',
              }}
            >
              <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>
                Professional
              </h3>
              <div
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  margin: '0.75rem 0',
                }}
              >
                £2,999
                <span style={{ fontSize: '1rem', color: '#a1a1aa' }}>
                  /month
                </span>
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  marginTop: '1.5rem',
                }}
              >
                {[
                  'Up to 5 WordPress sites',
                  'Dedicated security analyst',
                  '24/7 monitoring',
                  '4-hour critical incident SLA',
                  'Weekly security digest',
                  'Monthly executive report',
                  'Quarterly penetration test',
                  'Priority support queue',
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{ marginBottom: '0.6rem', color: '#a1a1aa' }}
                  >
                    &#10003; {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Enterprise Tier */}
            <div
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--primary)',
                borderRadius: '1rem',
                padding: '2.5rem',
                flex: '1 1 340px',
                maxWidth: '440px',
                position: 'relative',
              }}
            >
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
              <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>
                Enterprise
              </h3>
              <div
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  margin: '0.75rem 0',
                }}
              >
                £4,999
                <span style={{ fontSize: '1rem', color: '#a1a1aa' }}>
                  /month
                </span>
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  marginTop: '1.5rem',
                }}
              >
                {[
                  'Up to 15 WordPress sites',
                  'Senior dedicated analyst',
                  '24/7 monitoring with weekend cover',
                  '1-hour critical incident SLA',
                  'Real-time security dashboard',
                  'Weekly digest + quarterly board reports',
                  'Quarterly penetration test',
                  'White-label reports included',
                  'Unlimited security configuration changes',
                  'GDPR & PCI compliance support',
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{ marginBottom: '0.6rem', color: '#a1a1aa' }}
                  >
                    &#10003; {item}
                  </li>
                ))}
              </ul>
            </div>
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
              +44-XXX-XXXX-XXXX
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
