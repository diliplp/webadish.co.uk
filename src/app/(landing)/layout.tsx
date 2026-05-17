import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.scss';
import Link from 'next/link';
import Image from 'next/image';
import CookieBanner from '@/components/CookieBanner';
import ConsentAwareAnalytics from '@/components/ConsentAwareAnalytics';
import TrackingListener from '@/components/TrackingListener';

const inter = Inter({ subsets: ['latin'] });

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
        <TrackingListener />

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

        <CookieBanner />
        <ConsentAwareAnalytics />
      </body>
    </html>
  );
}
