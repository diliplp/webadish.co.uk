import { Shield, FileSearch, AlertTriangle, TrendingDown } from 'lucide-react';
import LandingContactForm from '@/components/LandingContactForm';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'WordPress Security Audit | Protect Your Website | WebAdish',
  description: 'Professional WordPress security audit for UK businesses. Identify vulnerabilities before hackers do. Detailed report with prioritised remediation plan.',
  path: '/lp/wordpress-security-audit',
  noIndex: true,
});

export default function SecurityAuditLP() {
  const painPoints = [
    {
      icon: <AlertTriangle size={28} style={{ color: '#ef4444' }} />,
      title: 'Data Breach Risk',
      description: 'UK businesses face average breach costs of £3.4 million. WordPress vulnerabilities are the #1 entry point.',
    },
    {
      icon: <TrendingDown size={28} style={{ color: '#f59e0b' }} />,
      title: 'SEO Penalties',
      description: 'Google blacklists 10,000+ websites daily for malware. A hack can destroy years of SEO work overnight.',
    },
    {
      icon: <Shield size={28} style={{ color: '#6366f1' }} />,
      title: 'Revenue Loss',
      description: 'Every hour of downtime costs UK SMEs an average of £1,000+. Most hacks go undetected for weeks.',
    },
  ];

  const deliverables = [
    'Complete vulnerability scan of core, plugins, and themes',
    'Server configuration and hosting security review',
    'User permissions and access control audit',
    'Database security assessment',
    'Detailed risk-scored remediation report',
    '30-minute consultation call with our security team',
  ];

  return (
    <>
      {/* Hero */}
      <section style={{
        padding: '5rem 0 4rem',
        textAlign: 'center',
        background: 'linear-gradient(180deg, rgba(99,102,241,0.08) 0%, transparent 100%)',
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(239,68,68,0.1)',
            border: '1px solid rgba(239,68,68,0.3)',
            borderRadius: '20px',
            padding: '0.4rem 1rem',
            fontSize: '0.85rem',
            color: '#ef4444',
            marginBottom: '1.5rem',
          }}>
            <AlertTriangle size={14} />
            83% of hacked WordPress sites had outdated plugins
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            color: 'var(--foreground)',
            lineHeight: 1.15,
            marginBottom: '1.25rem',
          }}>
            Is Your WordPress Site <span style={{ color: 'var(--primary)' }}>Secure?</span>
          </h1>
          <p style={{
            fontSize: '1.15rem',
            color: '#a1a1aa',
            lineHeight: 1.7,
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Get a professional security audit from UK WordPress specialists. We identify vulnerabilities before hackers do and give you a clear remediation plan.
          </p>
        </div>
      </section>

      {/* Pain Points */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
            {painPoints.map((point) => (
              <div key={point.title} style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '1.5rem',
                textAlign: 'center',
              }}>
                <div style={{ marginBottom: '1rem' }}>{point.icon}</div>
                <h3 style={{ color: 'var(--foreground)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{point.title}</h3>
                <p style={{ color: '#a1a1aa', fontSize: '0.9rem', lineHeight: 1.6 }}>{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get + Form */}
      <section style={{ padding: '3rem 0 5rem' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}>
            {/* Left: deliverables */}
            <div>
              <h2 style={{ color: 'var(--foreground)', fontSize: '1.75rem', marginBottom: '1.5rem' }}>
                What You&apos;ll Receive
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {deliverables.map((item) => (
                  <li key={item} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    marginBottom: '1rem',
                    color: 'var(--foreground)',
                    fontSize: '1rem',
                    lineHeight: 1.5,
                  }}>
                    <FileSearch size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '3px' }} />
                    {item}
                  </li>
                ))}
              </ul>

              <div style={{
                marginTop: '2rem',
                padding: '1.25rem',
                background: 'rgba(99,102,241,0.08)',
                border: '1px solid rgba(99,102,241,0.2)',
                borderRadius: '12px',
              }}>
                <p style={{ color: 'var(--foreground)', fontWeight: 600, marginBottom: '0.25rem' }}>
                  From £1,499 | Fixed Fee
                </p>
                <p style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>
                  No hidden costs. No hourly billing. You know the price upfront.
                </p>
              </div>

              <p style={{ color: '#71717a', fontSize: '0.85rem', marginTop: '1.5rem' }}>
                Trusted by 50+ UK agencies and businesses
              </p>
            </div>

            {/* Right: form */}
            <LandingContactForm
              formTitle="Get Your Security Audit"
              buttonText="Request Security Audit"
            />
          </div>
        </div>
      </section>
    </>
  );
}
