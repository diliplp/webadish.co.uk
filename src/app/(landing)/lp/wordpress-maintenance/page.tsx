import { Shield, Clock, BarChart3, HeartHandshake } from 'lucide-react';
import LandingContactForm from '@/components/LandingContactForm';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'WordPress Maintenance Plans UK | From £449/month | WebAdish',
  description: 'Proactive WordPress maintenance and security for UK businesses. Daily backups, weekly updates, 24/7 monitoring, and priority support from £449/month.',
  path: '/lp/wordpress-maintenance',
  noIndex: true,
});

export default function MaintenanceLP() {
  const withoutMaintenance = [
    'Outdated plugins with known vulnerabilities',
    'No backups when disaster strikes',
    'Slow site killing your SEO rankings',
    'Downtime discovered by customers, not you',
    'Average hack recovery cost: £3,000+',
  ];

  const withMaintenance = [
    'Weekly updates applied and tested',
    'Daily encrypted backups with 1-click restore',
    'Optimised performance boosting conversions',
    '24/7 uptime monitoring with instant alerts',
    'Proactive security from £449/month',
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
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            color: 'var(--foreground)',
            lineHeight: 1.15,
            marginBottom: '1.25rem',
          }}>
            Never Worry About <span style={{ color: 'var(--primary)' }}>WordPress Security</span> Again
          </h1>
          <p style={{
            fontSize: '1.15rem',
            color: '#a1a1aa',
            lineHeight: 1.7,
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Proactive WordPress maintenance that keeps your site secure, fast, and up-to-date. So you can focus on running your business.
          </p>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}>
            {/* Without */}
            <div style={{
              background: 'rgba(239,68,68,0.05)',
              border: '1px solid rgba(239,68,68,0.2)',
              borderRadius: '12px',
              padding: '2rem',
            }}>
              <h3 style={{ color: '#ef4444', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock size={20} /> Without Maintenance
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {withoutMaintenance.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#a1a1aa' }}>
                    <span style={{ color: '#ef4444' }}>&#10007;</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* With */}
            <div style={{
              background: 'rgba(99,102,241,0.05)',
              border: '1px solid rgba(99,102,241,0.2)',
              borderRadius: '12px',
              padding: '2rem',
            }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Shield size={20} /> With WebAdish Maintenance
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {withMaintenance.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--foreground)' }}>
                    <span style={{ color: 'var(--primary)' }}>&#10003;</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Plans + Form */}
      <section style={{ padding: '3rem 0 5rem' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}>
            {/* Left: plans */}
            <div>
              <h2 style={{ color: 'var(--foreground)', fontSize: '1.75rem', marginBottom: '1.5rem' }}>
                Two Plans. No Surprises.
              </h2>

              {/* Standard Plan */}
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '1.5rem',
                marginBottom: '1rem',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <h3 style={{ color: 'var(--foreground)' }}>Standard</h3>
                  <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.25rem' }}>£449/mo</span>
                </div>
                <p style={{ color: '#a1a1aa', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  Daily backups, weekly updates, 24/7 uptime monitoring, monthly security scan, and priority email support.
                </p>
              </div>

              {/* Pro Plan */}
              <div style={{
                background: 'var(--surface)',
                border: '2px solid var(--primary)',
                borderRadius: '12px',
                padding: '1.5rem',
                position: 'relative',
              }}>
                <span style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '1rem',
                  background: 'var(--primary)',
                  color: 'white',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  padding: '0.2rem 0.75rem',
                  borderRadius: '10px',
                }}>
                  RECOMMENDED
                </span>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <h3 style={{ color: 'var(--foreground)' }}>Pro</h3>
                  <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.25rem' }}>£999/mo</span>
                </div>
                <p style={{ color: '#a1a1aa', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  Everything in Standard plus speed optimisation, weekly security scans, unlimited small edits, phone support, and quarterly security audit.
                </p>
              </div>

              {/* ROI callout */}
              <div style={{
                marginTop: '1.5rem',
                padding: '1.25rem',
                background: 'rgba(99,102,241,0.08)',
                border: '1px solid rgba(99,102,241,0.2)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}>
                <BarChart3 size={24} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <div>
                  <p style={{ color: 'var(--foreground)', fontWeight: 600, fontSize: '0.95rem' }}>
                    Prevention saves 6x the cost of recovery
                  </p>
                  <p style={{ color: '#a1a1aa', fontSize: '0.85rem' }}>
                    Average hack recovery: £3,000+. Our maintenance: from £449/month.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <LandingContactForm
              formTitle="Start Your Maintenance Plan"
              buttonText="Get Started Today"
            />
          </div>
        </div>
      </section>
    </>
  );
}
