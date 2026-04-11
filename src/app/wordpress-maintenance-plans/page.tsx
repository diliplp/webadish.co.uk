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
  title: 'WordPress Maintenance Plans UK | Monthly Care from £149/mo',
  description:
    'Affordable WordPress maintenance plans for UK businesses with updates, backups, uptime monitoring, malware scanning, and support. Compare Essentials, Pro, and Enterprise.',
  path: '/wordpress-maintenance-plans',
  modifiedTime: '2026-04-11',
});

const faqItems = [
  {
    question: 'What is included in a WordPress maintenance plan?',
    answer:
      'A proper WordPress maintenance plan includes core, plugin, and theme updates, off-site backups, uptime monitoring, malware scanning, and a support path for routine issues. Higher tiers usually add staging tests, performance work, content edits, and faster response times.',
  },
  {
    question: 'What is the difference between Essentials, Pro, and Enterprise?',
    answer:
      'Essentials is for brochure sites that need reliable upkeep and backup coverage. Pro adds faster update cadence, staging-led testing, performance oversight, and small content support for active business websites. Enterprise is for revenue-critical or multi-stakeholder sites that need priority handling, deeper reporting, and a stronger operational support model.',
  },
  {
    question: 'Are these monthly WordPress maintenance plans fixed-fee?',
    answer:
      'Yes. Each plan is billed monthly in GBP with transparent scope. If your site has unusual plugin complexity, multi-site requirements, or strict compliance needs, we quote the closest suitable tier rather than hiding costs behind hourly support.',
  },
  {
    question: 'What is not included in a maintenance plan?',
    answer:
      'Major redesigns, large development tasks, custom feature builds, and full emergency incident response are not included in standard monthly care plans. If your site is already compromised, start with hacked website recovery or malware removal first.',
  },
  {
    question: 'Can I upgrade my WordPress maintenance plan later?',
    answer:
      'Yes. Most clients start with the tier that fits current complexity, then upgrade when traffic, integrations, publishing cadence, or response expectations increase.',
  },
];

const planTiers = [
  {
    name: 'Essentials',
    price: '£149/mo',
    audience: 'Best for brochure sites and low-change business websites',
    included: [
      'Monthly core, plugin, and theme updates',
      'Daily off-site backups',
      '24/7 uptime monitoring',
      'Weekly malware scanning',
      'Monthly site health summary',
    ],
    excluded: [
      'No staging-led update testing',
      'No content edits',
      'No priority response SLA',
    ],
  },
  {
    name: 'Pro',
    price: '£349/mo',
    audience: 'Best for active lead-gen sites, marketing websites, and growing SMEs',
    included: [
      'Weekly updates with staging checks for risky plugins',
      'Daily backups and rollback support',
      '24/7 uptime and malware monitoring',
      'Monthly performance review',
      'Up to 30 minutes of small content edits',
      'Priority support during UK business hours',
    ],
    excluded: [
      'No major development work',
      'No full incident-response engagement included',
    ],
  },
  {
    name: 'Enterprise',
    price: 'From £749/mo',
    audience: 'Best for WooCommerce, membership, multi-stakeholder, and revenue-critical sites',
    included: [
      'Everything in Pro',
      'Higher-frequency checks and faster escalation',
      'Advanced reporting for technical stakeholders',
      'Quarterly security review call',
      'Support for complex integrations and change windows',
      'Priority coordination when incidents or urgent regressions appear',
    ],
    excluded: [
      'Custom development quoted separately',
      'Deep forensic recovery billed as incident response if already compromised',
    ],
  },
];

export default function WordPressMaintenancePlans() {
  const serviceSchema = generateServiceSchema(
    'WordPress Maintenance Plans UK',
    'Affordable monthly WordPress maintenance plans for UK businesses, with updates, backups, uptime monitoring, malware scanning, and clear plan comparisons.',
    '/wordpress-maintenance-plans',
    '£149 - £749+/month'
  );

  const faqSchema = generateFAQSchema(faqItems);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'WordPress Maintenance Plans', url: '/wordpress-maintenance-plans' },
  ]);

  return (
    <>
      <StructuredData schemas={[serviceSchema, faqSchema, breadcrumbSchema]} />

      <PageHeader
        title="WordPress Maintenance Plans UK <br /><span style='color: var(--primary)'>Monthly Care with Clear Pricing</span>"
        subtitle="Compare affordable WordPress maintenance plans for UK businesses. Fixed-fee monthly care, transparent inclusions, and support tiers that match site complexity."
        badge="Plans from £149/month"
      />

      <TrustSignals />

      <section className="section-padding" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--foreground)', marginBottom: '1rem' }}>
              If you are comparing affordable WordPress maintenance plans, the real question is not just price. It is whether the monthly plan covers the operational basics that stop small problems turning into outages, SEO loss, or emergency recovery work later.
            </p>
            <p style={{ color: '#a1a1aa', lineHeight: 1.8, margin: 0 }}>
              This page is designed for businesses that want visible GBP pricing, clear scope, and an honest comparison between low-cost upkeep and a more proactive monthly care model. If your site is already hacked, use <Link href="/hacked-website-recovery-uk" style={{ color: 'var(--primary)', fontWeight: 600 }}>hacked website recovery UK</Link> first. If the site is stable and you want ongoing cover, choose the plan tier below.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 2.5rem' }}>
            <h2>Choose the right monthly plan</h2>
            <p style={{ color: '#a1a1aa', lineHeight: 1.7 }}>
              Three tiers, fixed monthly pricing, and a clear upgrade path as your site becomes more commercially important.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {planTiers.map((tier, index) => (
              <div
                key={tier.name}
                style={{
                  background: 'var(--background)',
                  border: index === 1 ? '2px solid var(--primary)' : '1px solid var(--border)',
                  borderRadius: '1rem',
                  padding: '2rem',
                  position: 'relative',
                }}
              >
                {index === 1 && (
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
                    MOST POPULAR
                  </div>
                )}
                <h3 style={{ marginBottom: '0.4rem', color: index === 1 ? 'var(--primary)' : 'var(--foreground)' }}>{tier.name}</h3>
                <p style={{ color: '#a1a1aa', fontSize: '0.9rem', minHeight: '2.8rem', marginBottom: '1rem' }}>{tier.audience}</p>
                <div style={{ fontSize: '2.3rem', fontWeight: 800, marginBottom: '1.25rem' }}>{tier.price}</div>

                <p style={{ color: '#d4d4d8', fontWeight: 700, marginBottom: '0.75rem' }}>Included</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'grid', gap: '0.6rem' }}>
                  {tier.included.map((item) => (
                    <li key={item} style={{ color: '#d4d4d8', fontSize: '0.92rem' }}>
                      <span style={{ color: 'var(--primary)', marginRight: '0.5rem' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p style={{ color: '#d4d4d8', fontWeight: 700, marginBottom: '0.75rem' }}>Not included</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.6rem' }}>
                  {tier.excluded.map((item) => (
                    <li key={item} style={{ color: '#a1a1aa', fontSize: '0.92rem' }}>
                      <span style={{ color: '#ef4444', marginRight: '0.5rem' }}>-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2rem' }}>
              <h2>What changes as you move up the tiers</h2>
              <p style={{ color: '#a1a1aa' }}>
                This comparison helps buyers who are evaluating monthly plan pricing, support scope, and operational depth.
              </p>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '760px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '1rem', overflow: 'hidden' }}>
                <thead>
                  <tr style={{ background: 'rgba(99, 102, 241, 0.08)' }}>
                    <th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid var(--border)' }}>Feature</th>
                    <th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid var(--border)' }}>Essentials</th>
                    <th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid var(--border)' }}>Pro</th>
                    <th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid var(--border)' }}>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Update cadence', 'Monthly', 'Weekly', 'Custom / higher frequency'],
                    ['Backups', 'Daily', 'Daily', 'Daily with higher-touch oversight'],
                    ['Uptime monitoring', 'Included', 'Included', 'Included'],
                    ['Malware scanning', 'Weekly', 'Daily', 'Daily + escalation focus'],
                    ['Staging checks', 'No', 'For risky changes', 'Included where needed'],
                    ['Small content edits', 'No', 'Up to 30 mins/mo', 'Priority support model'],
                    ['Reporting depth', 'Monthly summary', 'Monthly performance review', 'Stakeholder-ready reporting'],
                    ['Best fit', 'Simple sites', 'Growing SMEs', 'Revenue-critical sites'],
                  ].map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, index) => (
                        <td key={cell} style={{ padding: '0.95rem 1rem', borderBottom: '1px solid var(--border)', color: index === 0 ? 'var(--foreground)' : '#d4d4d8', fontWeight: index === 0 ? 600 : 400 }}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '1rem' }}>When a maintenance plan is enough, and when it is not</h2>
            <p style={{ color: '#a1a1aa', lineHeight: 1.8, marginBottom: '1rem' }}>
              A monthly maintenance plan is the right fit when your site is live, stable, and you need ongoing updates, monitoring, backups, and routine operational cover. It is not the same as emergency security work.
            </p>
            <p style={{ color: '#a1a1aa', lineHeight: 1.8, marginBottom: '1rem' }}>
              If you are dealing with a live compromise, spam injection, blacklist warning, or recurring reinfection, start with <Link href="/wordpress-malware-removal" style={{ color: 'var(--primary)', fontWeight: 600 }}>WordPress malware removal</Link> or <Link href="/hacked-website-recovery-uk" style={{ color: 'var(--primary)', fontWeight: 600 }}>emergency WordPress recovery</Link>. If the site is clean but you want to understand structural risk before choosing a monthly plan, begin with a <Link href="/wordpress-security-audit" style={{ color: 'var(--primary)', fontWeight: 600 }}>WordPress security audit UK</Link>.
            </p>
            <p style={{ color: '#d4d4d8', lineHeight: 1.8, margin: 0 }}>
              That distinction matters because it helps buyers choose the right commercial path: incident response for active damage, audit for diagnostic clarity, and monthly care for prevention.
            </p>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <CTA
        title="Need help choosing a monthly plan?"
        subtitle="Tell us how important your website is to revenue, leads, and operations, and we will recommend the right maintenance tier."
        btnText="Request Plan Recommendation"
        btnLink="/contact"
      />
    </>
  );
}
