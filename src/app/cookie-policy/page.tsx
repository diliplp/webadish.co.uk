import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Cookie Policy | WebAdish',
  description:
    'How WebAdish uses cookies on webadish.co.uk — what we set, why, and how to manage your preferences.',
  path: '/cookie-policy',
});

export default function CookiePolicy() {
  return (
    <section className="section-padding">
      <div className="container">
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h1>Cookie Policy</h1>
          <p style={{ color: '#a1a1aa', marginBottom: '2rem' }}>
            Last updated: 15 March 2026
          </p>

          <h2>What are cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. They are used to remember preferences, measure site usage, and deliver relevant advertising.
          </p>

          <h2>Cookies we use</h2>

          <h3>Strictly necessary</h3>
          <p>
            These cookies are required for the site to function and cannot be disabled. They do not store any personally identifiable information.
          </p>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '0.5rem 0.75rem', color: '#f4f4f5' }}>Cookie</th>
                <th style={{ textAlign: 'left', padding: '0.5rem 0.75rem', color: '#f4f4f5' }}>Purpose</th>
                <th style={{ textAlign: 'left', padding: '0.5rem 0.75rem', color: '#f4f4f5' }}>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '0.5rem 0.75rem', color: '#a1a1aa', fontFamily: 'monospace' }}>wa-cookie-consent</td>
                <td style={{ padding: '0.5rem 0.75rem', color: '#a1a1aa' }}>Stores your cookie preference (accepted/declined)</td>
                <td style={{ padding: '0.5rem 0.75rem', color: '#a1a1aa' }}>1 year (localStorage)</td>
              </tr>
            </tbody>
          </table>

          <h3>Analytics cookies</h3>
          <p>
            Set only if you accept cookies. We use <strong>Vercel Analytics</strong> to understand how visitors use our site. Vercel Analytics is privacy-first and does not use cookies — it collects anonymous, aggregated usage data.
          </p>

          <h3>Advertising cookies (Google Ads / GTM)</h3>
          <p>
            Set only if you accept cookies. We use <strong>Google Tag Manager</strong> (GTM-NZLQFW58) and <strong>Google Ads</strong> (AW-16853874312) to measure the performance of our advertising campaigns. These services may set their own cookies to track conversions and retarget visitors across the web.
          </p>
          <p>
            Google&apos;s use of advertising cookies is governed by{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--primary)' }}
            >
              Google&apos;s Privacy Policy
            </a>
            . You can opt out of Google advertising cookies via{' '}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--primary)' }}
            >
              Google Ad Settings
            </a>
            .
          </p>

          <h2>Managing your preferences</h2>
          <p>
            You can change your cookie preferences at any time by clearing your browser&apos;s localStorage for this site, or by using your browser&apos;s built-in cookie controls. The key we store is <code style={{ background: 'var(--surface)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.85em' }}>wa-cookie-consent</code> in localStorage.
          </p>
          <p>
            Most browsers also allow you to block or delete cookies via their settings. Doing so may affect the functionality of some websites.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about our use of cookies, contact us at{' '}
            <a href="mailto:hello@webadish.co.uk" style={{ color: 'var(--primary)' }}>
              hello@webadish.co.uk
            </a>
            {' '}or see our{' '}
            <a href="/privacy-policy" style={{ color: 'var(--primary)' }}>Privacy Policy</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
