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
    'WordPress Security Audit UK | Professional Vulnerability Assessment | WebAdish',
  description:
    'Comprehensive WordPress security audit for UK businesses. Identify vulnerabilities, get a detailed remediation report, and protect your website. From £1,499.',
  path: '/wordpress-security-audit',
});

const faqItems = [
  {
    question: 'What does a WordPress security audit include?',
    answer:
      'Our audit covers vulnerability scanning, source code review, server configuration analysis, user permission evaluation, plugin and theme assessment, and a detailed report with risk scoring and prioritised remediation steps.',
  },
  {
    question: 'How long does a security audit take?',
    answer:
      'A typical audit takes 5 to 7 business days from start to final report delivery. Larger or more complex sites with custom plugins or extensive integrations may take up to 10 business days.',
  },
  {
    question: 'Will the audit cause downtime on my site?',
    answer:
      'No. Our scanning tools and review processes are non-intrusive. We work on a staging copy for code review and run passive scans against the live environment to avoid any disruption.',
  },
  {
    question: 'What do I receive at the end of the audit?',
    answer:
      'You receive a comprehensive PDF report detailing every vulnerability found, a risk score for each issue, step-by-step remediation instructions, and a 60-minute consultation call to walk through findings and next steps.',
  },
  {
    question: 'How often should I get a security audit?',
    answer:
      'We recommend a full audit at least once a year, or after any major site change such as a redesign, migration, or adding new integrations. Businesses in regulated industries may benefit from quarterly assessments.',
  },
  {
    question: 'Do you fix the vulnerabilities you find?',
    answer:
      'The audit itself is a diagnostic service. We provide a detailed remediation roadmap. If you would like us to implement the fixes, we offer that as a separate engagement or as part of an ongoing security retainer.',
  },
  {
    question: 'Is the £1,499 price fixed or are there additional costs?',
    answer:
      'The £1,499 fee covers a standard WordPress site with up to 30 plugins and a single environment. Sites with multiple environments, custom applications, or extensive integrations may require a tailored quote.',
  },
  {
    question: 'Can you audit WooCommerce or multisite installations?',
    answer:
      'Absolutely. We audit WooCommerce stores, WordPress multisite networks, membership platforms, and headless WordPress setups. Complex installations are quoted on a case-by-case basis.',
  },
];

export default function WordPressSecurityAudit() {
  const serviceSchema = generateServiceSchema(
    'WordPress Security Audit',
    'Comprehensive WordPress security audit for UK businesses. Identify vulnerabilities, get a detailed remediation report, and protect your website.',
    '/wordpress-security-audit',
    'From £1,499'
  );

  const faqSchema = generateFAQSchema(faqItems);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'WordPress Security Audit', url: '/wordpress-security-audit' },
  ]);

  return (
    <>
      <StructuredData schemas={[serviceSchema, faqSchema, breadcrumbSchema]} />

      <PageHeader
        title="Professional WordPress Security Audit <br /><span style='color: var(--primary)'>for UK Businesses</span>"
        subtitle="Uncover hidden vulnerabilities before attackers do. Our expert-led security audit gives you a clear picture of your WordPress site's risk posture and a prioritised roadmap to fix it."
        badge="WordPress Security Audit"
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
              A WordPress security audit is a systematic, expert-led
              examination of your entire WordPress installation, identifying
              vulnerabilities in code, configuration, plugins, themes, and
              user permissions before they can be exploited. It is the most
              effective way for UK businesses to understand their true security
              posture and take targeted action to protect customer data,
              revenue, and reputation. At WebAdish, our audits go beyond
              automated scans, combining manual code review with industry-
              leading tools to deliver actionable, risk-scored findings.
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
            <h2>What&apos;s Included in Your Audit</h2>
            <p>
              Every audit is thorough, structured, and tailored to your
              specific WordPress environment.
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
                title: 'Vulnerability Scanning',
                desc: 'Automated and manual scanning for known CVEs, zero-day patterns, and misconfigurations across your core, plugins, and themes.',
              },
              {
                title: 'Source Code Review',
                desc: 'Line-by-line review of custom code, child themes, and bespoke plugins for SQL injection, XSS, CSRF, and insecure API usage.',
              },
              {
                title: 'Server & Configuration Audit',
                desc: 'Analysis of wp-config.php, .htaccess, file permissions, PHP settings, SSL/TLS configuration, and database security.',
              },
              {
                title: 'User Permission Review',
                desc: 'Evaluation of user roles, capabilities, and authentication mechanisms including password policies and two-factor adoption.',
              },
              {
                title: 'Plugin & Theme Assessment',
                desc: 'Review of every installed plugin and theme for known vulnerabilities, abandonment risk, update hygiene, and licence compliance.',
              },
              {
                title: 'Detailed Report with Risk Scoring',
                desc: 'A comprehensive PDF with every finding categorised by severity (Critical, High, Medium, Low), clear remediation steps, and a prioritised action plan.',
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

      {/* Process */}
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
            <h2>Our 4-Step Audit Process</h2>
            <p>
              A proven methodology that ensures nothing is missed.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                step: '01',
                title: 'Discovery',
                desc: 'We gather access credentials, understand your architecture, document custom integrations, and define scope.',
              },
              {
                step: '02',
                title: 'Deep Scan',
                desc: 'Automated vulnerability scanning combined with manual testing across all attack surfaces.',
              },
              {
                step: '03',
                title: 'Analysis',
                desc: 'Our security analysts review all findings, eliminate false positives, and score each vulnerability by risk.',
              },
              {
                step: '04',
                title: 'Report & Consultation',
                desc: 'You receive a detailed report and a 60-minute consultation to discuss findings and remediation priorities.',
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '0.75rem',
                  padding: '2rem',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'var(--primary)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {item.step}
                </div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>
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

      {/* Pricing */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--surface)' }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <h2>Investment</h2>
            <p style={{ marginBottom: '2rem' }}>
              Transparent pricing with no hidden fees.
            </p>
            <div
              style={{
                background: 'var(--background)',
                border: '1px solid var(--primary)',
                borderRadius: '1rem',
                padding: '2.5rem',
              }}
            >
              <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>
                Comprehensive Security Audit
              </h3>
              <div
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  margin: '1rem 0',
                }}
              >
                From £1,499
              </div>
              <ul
                style={{
                  textAlign: 'left',
                  listStyle: 'none',
                  padding: 0,
                  maxWidth: '360px',
                  margin: '1.5rem auto',
                }}
              >
                {[
                  'Full vulnerability assessment',
                  'Manual source code review',
                  'Server configuration audit',
                  'User permission analysis',
                  'Plugin & theme evaluation',
                  'Risk-scored PDF report',
                  '60-minute consultation call',
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      marginBottom: '0.6rem',
                      color: '#a1a1aa',
                    }}
                  >
                    &#10003; {item}
                  </li>
                ))}
              </ul>
              <p style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>
                Need a tailored quote? Call{' '}
                <strong style={{ color: 'var(--foreground)' }}>
                  +44-XXX-XXXX-XXXX
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqItems} />

      {/* CTA + Contact Form */}
      <CTA
        title="Protect Your Business Before It&apos;s Too Late"
        subtitle="A security audit today prevents a costly breach tomorrow. Get a clear picture of your WordPress security posture."
        btnText="Book Your Audit"
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
              Request Your Security Audit
            </h2>
            <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Tell us about your site and we will get back to you within one
              business day.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
