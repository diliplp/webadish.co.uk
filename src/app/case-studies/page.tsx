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
  title: 'WordPress Security Case Studies | Client Results | WebAdish',
  description:
    'Real results from our WordPress security clients. See how we\'ve protected UK businesses with security audits, maintenance retainers, and emergency recovery.',
  path: '/case-studies',
});

const faqItems = [
  {
    question: 'Are these real client results?',
    answer:
      'Yes. Every case study is based on a real engagement. Client names and identifying details are anonymised to respect confidentiality agreements, but the challenges, solutions, and results are genuine.',
  },
  {
    question: 'Can you share more details about a specific case?',
    answer:
      'We are happy to discuss our approach in more detail during a consultation. Depending on the client, we may be able to arrange a reference call with their permission.',
  },
  {
    question: 'Do you work with businesses in my industry?',
    answer:
      'We work with UK businesses across insurance, finance, creative agencies, e-commerce, membership organisations, and professional services. If your business runs on WordPress, we can help. Contact us to discuss your specific requirements.',
  },
];

export default function CaseStudies() {
  const serviceSchema = generateServiceSchema(
    'WordPress Security Case Studies',
    'Real results from our WordPress security clients. See how WebAdish has protected UK businesses with security audits, maintenance retainers, and emergency recovery.',
    '/case-studies'
  );

  const faqSchema = generateFAQSchema(faqItems);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Case Studies', url: '/case-studies' },
  ]);

  return (
    <>
      <StructuredData schemas={[serviceSchema, faqSchema, breadcrumbSchema]} />

      <PageHeader
        title="Client Results That <br /><span style='color: var(--primary)'>Speak for Themselves</span>"
        subtitle="Real outcomes from real UK businesses. See how our WordPress security expertise has protected revenue, reputation, and peace of mind."
        badge="Client Case Studies"
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
              Our case studies demonstrate the tangible impact of
              professional WordPress security services for UK businesses
              across diverse industries. Each study outlines the specific
              challenge a client faced, the security solution we implemented,
              and the measurable results achieved. From emergency malware
              recovery to long-term enterprise security retainers, these
              outcomes illustrate why businesses trust WebAdish to protect
              their most critical digital assets.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--surface)' }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2rem',
            }}
          >
            {/* Case Study 1: UK Insurance Portal */}
            <div
              style={{
                background: 'var(--background)',
                border: '1px solid var(--border)',
                borderRadius: '1rem',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  background: 'var(--primary)',
                  color: 'white',
                  display: 'inline-block',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  alignSelf: 'flex-start',
                }}
              >
                Insurance & Finance
              </div>
              <h3 style={{ marginBottom: '1rem' }}>
                UK Insurance Portal Migration
              </h3>

              <div style={{ marginBottom: '1.25rem' }}>
                <h4
                  style={{
                    color: 'var(--secondary)',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.5rem',
                  }}
                >
                  Challenge
                </h4>
                <p style={{ color: '#a1a1aa', marginBottom: 0 }}>
                  A major UK insurance portal was running on an outdated,
                  unsecured WordPress installation with multiple known
                  vulnerabilities. The site handled sensitive customer data
                  and could not afford a breach.
                </p>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <h4
                  style={{
                    color: 'var(--secondary)',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.5rem',
                  }}
                >
                  Solution
                </h4>
                <p style={{ color: '#a1a1aa', marginBottom: 0 }}>
                  Full security audit followed by migration to a hardened
                  WordPress environment with WAF, encrypted backups,
                  role-based access controls, and ongoing monitoring via our
                  Professional retainer.
                </p>
              </div>

              <div style={{ marginTop: 'auto' }}>
                <h4
                  style={{
                    color: 'var(--secondary)',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.75rem',
                  }}
                >
                  Results
                </h4>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.75rem',
                  }}
                >
                  {[
                    { metric: '40%', label: 'Faster incident response' },
                    { metric: '0', label: 'Downtime since migration' },
                    { metric: '100%', label: 'GDPR audit compliance' },
                    { metric: '28', label: 'Vulnerabilities patched' },
                  ].map((r, i) => (
                    <div
                      key={i}
                      style={{
                        background: 'var(--surface)',
                        borderRadius: '0.5rem',
                        padding: '0.75rem',
                        textAlign: 'center',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: 'bold',
                          color: 'var(--primary)',
                        }}
                      >
                        {r.metric}
                      </div>
                      <div
                        style={{
                          fontSize: '0.8rem',
                          color: '#a1a1aa',
                        }}
                      >
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Case Study 2: London Creative Agency */}
            <div
              style={{
                background: 'var(--background)',
                border: '1px solid var(--border)',
                borderRadius: '1rem',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  background: 'var(--secondary)',
                  color: 'white',
                  display: 'inline-block',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  alignSelf: 'flex-start',
                }}
              >
                Creative Agency
              </div>
              <h3 style={{ marginBottom: '1rem' }}>
                London Creative Agency AI Portal
              </h3>

              <div style={{ marginBottom: '1.25rem' }}>
                <h4
                  style={{
                    color: 'var(--secondary)',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.5rem',
                  }}
                >
                  Challenge
                </h4>
                <p style={{ color: '#a1a1aa', marginBottom: 0 }}>
                  A London-based creative agency launched an AI-powered
                  membership portal on WordPress. Rapid growth exposed
                  security gaps, and a breach could have compromised
                  proprietary AI assets and client data.
                </p>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <h4
                  style={{
                    color: 'var(--secondary)',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.5rem',
                  }}
                >
                  Solution
                </h4>
                <p style={{ color: '#a1a1aa', marginBottom: 0 }}>
                  Comprehensive security audit, custom WAF rules for the AI
                  API endpoints, automated security scorecards for each
                  deployment, and a 4-hour emergency recovery guarantee as
                  part of our Enterprise retainer.
                </p>
              </div>

              <div style={{ marginTop: 'auto' }}>
                <h4
                  style={{
                    color: 'var(--secondary)',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.75rem',
                  }}
                >
                  Results
                </h4>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.75rem',
                  }}
                >
                  {[
                    { metric: '4hr', label: 'Recovery guarantee met' },
                    { metric: '100%', label: 'Automated security scores' },
                    { metric: '3x', label: 'Faster threat detection' },
                    { metric: '0', label: 'Data breaches since onboarding' },
                  ].map((r, i) => (
                    <div
                      key={i}
                      style={{
                        background: 'var(--surface)',
                        borderRadius: '0.5rem',
                        padding: '0.75rem',
                        textAlign: 'center',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: 'bold',
                          color: 'var(--primary)',
                        }}
                      >
                        {r.metric}
                      </div>
                      <div
                        style={{
                          fontSize: '0.8rem',
                          color: '#a1a1aa',
                        }}
                      >
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Case Study 3: E-Commerce Fashion Brand */}
            <div
              style={{
                background: 'var(--background)',
                border: '1px solid var(--border)',
                borderRadius: '1rem',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  background: '#10b981',
                  color: 'white',
                  display: 'inline-block',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  alignSelf: 'flex-start',
                }}
              >
                E-Commerce
              </div>
              <h3 style={{ marginBottom: '1rem' }}>
                Fashion Brand WooCommerce Overhaul
              </h3>

              <div style={{ marginBottom: '1.25rem' }}>
                <h4
                  style={{
                    color: 'var(--secondary)',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.5rem',
                  }}
                >
                  Challenge
                </h4>
                <p style={{ color: '#a1a1aa', marginBottom: 0 }}>
                  A fast-growing UK fashion brand running WooCommerce
                  experienced a series of attempted card-skimming attacks.
                  Their checkout process was not PCI compliant, and they had
                  no security monitoring in place.
                </p>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <h4
                  style={{
                    color: 'var(--secondary)',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.5rem',
                  }}
                >
                  Solution
                </h4>
                <p style={{ color: '#a1a1aa', marginBottom: 0 }}>
                  Emergency malware removal, full WooCommerce security
                  overhaul, PCI DSS alignment, implementation of file
                  integrity monitoring, and transition to our Pro maintenance
                  plan with ongoing security hardening.
                </p>
              </div>

              <div style={{ marginTop: 'auto' }}>
                <h4
                  style={{
                    color: 'var(--secondary)',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.75rem',
                  }}
                >
                  Results
                </h4>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.75rem',
                  }}
                >
                  {[
                    { metric: '99.99%', label: 'Uptime achieved' },
                    { metric: 'PCI', label: 'Compliant checkout' },
                    { metric: '0', label: 'Successful attacks since' },
                    { metric: '22%', label: 'Checkout conversion increase' },
                  ].map((r, i) => (
                    <div
                      key={i}
                      style={{
                        background: 'var(--surface)',
                        borderRadius: '0.5rem',
                        padding: '0.75rem',
                        textAlign: 'center',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: 'bold',
                          color: 'var(--primary)',
                        }}
                      >
                        {r.metric}
                      </div>
                      <div
                        style={{
                          fontSize: '0.8rem',
                          color: '#a1a1aa',
                        }}
                      >
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqItems} />

      {/* CTA + Contact */}
      <CTA
        title="Ready to Be Our Next Success Story?"
        subtitle="Join the UK businesses that trust WebAdish to protect their WordPress sites. Let us show you what proactive security looks like."
        btnText="Start Your Project"
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
              Tell Us About Your Project
            </h2>
            <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Describe your WordPress security challenge and we will get back
              to you with a tailored recommendation.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
