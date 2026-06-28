import type { Metadata } from 'next';
import '@/styles/globals.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import CookieBanner from '@/components/CookieBanner';
import ConsentAwareAnalytics from '@/components/ConsentAwareAnalytics';
import TrackingListener from '@/components/TrackingListener';
import { generateOrganizationSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'WebAdish | Premium WordPress Incident Response & Security UK',
  description:
    'Premium WordPress incident response, security retainers, audits, and secure hosting for UK businesses. Built for teams that cannot afford downtime, data loss, or repeat compromise.',
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

const sitewideSchemas = [generateOrganizationSchema()];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Consent Mode v2 defaults — must fire before GTM loads. Plain inline
            script in <head> so it executes first, in order (matches Google's
            recommended snippet and avoids next/script beforeInteractive ordering
            warnings outside the document body). */}
        <script
          id="wa-consent-defaults"
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {
          ad_storage: 'denied',
          analytics_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          wait_for_update: 500
        });
      `,
          }}
        />
      </head>
      <body>
        <StructuredData schemas={sitewideSchemas} />
        <TrackingListener />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileStickyCTA />
        <CookieBanner />
        <ConsentAwareAnalytics />
      </body>
    </html>
  );
}
