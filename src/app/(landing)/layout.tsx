import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import '@/styles/globals.scss';
import { Analytics } from '@vercel/analytics/next';
import Link from 'next/link';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const metadata: Metadata = {
  title: 'WebAdish | WordPress Security',
  robots: { index: false, follow: false },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {GTM_ID && (
          <>
            <Script
              id="gtm-script"
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
            />
            <Script id="gtm-config" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GTM_ID}');`}
            </Script>
          </>
        )}

        {/* Minimal header - logo only */}
        <header style={{
          padding: '1rem 0',
          borderBottom: '1px solid var(--border)',
          background: 'var(--background)',
        }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="/">
              <Image src="/brand/webadish-logo-white.png" alt="WebAdish" width={180} height={52} style={{ width: 'auto', height: '52px' }} />
            </Link>
          </div>
        </header>

        <main>{children}</main>

        {/* Minimal footer */}
        <footer style={{
          padding: '2rem 0',
          borderTop: '1px solid var(--border)',
          textAlign: 'center',
          fontSize: '0.85rem',
          color: '#71717a',
        }}>
          <div className="container">
            <p>&copy; {new Date().getFullYear()} WebAdish. WordPress Security Specialists.</p>
            <div style={{ marginTop: '0.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Link href="/privacy-policy" style={{ color: '#71717a' }}>Privacy</Link>
              <Link href="/terms-conditions" style={{ color: '#71717a' }}>Terms</Link>
            </div>
          </div>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}
