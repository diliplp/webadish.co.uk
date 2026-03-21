import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieBanner from '@/components/CookieBanner';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const metadata: Metadata = {
  title: 'WebAdish | High-Ticket WordPress Security & Maintenance UK',
  description:
    'Security-first WordPress retainers for UK businesses. 24/7 monitoring, emergency recovery, malware removal, and maintenance from a specialist WordPress security agency.',
  metadataBase: new URL('https://www.webadish.co.uk'),
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
  appleWebApp: {
    title: 'WebAdish',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
