'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './CookieBanner.module.scss';

const CONSENT_KEY = 'wa-cookie-consent';
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-NZLQFW58';
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-17995549251';
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-DCRMYLPQFR';
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || 'vzlh3nm8uo';

export function injectTrackingScripts() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('wa-gtm')) return;

  // Google Tag Manager
  const gtm = document.createElement('script');
  gtm.id = 'wa-gtm';
  gtm.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;
  document.head.appendChild(gtm);

  // Google Ads / GA4
  if (GA_ID || ADS_ID) {
    const gtagJs = document.createElement('script');
    gtagJs.id = 'wa-gtag-js';
    gtagJs.async = true;
    gtagJs.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID || ADS_ID}`;
    document.head.appendChild(gtagJs);

    const trackingConfig = document.createElement('script');
    trackingConfig.id = 'wa-gtag';
    trackingConfig.innerHTML = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
${GA_ID ? `gtag('config', '${GA_ID}');` : ''}
${ADS_ID ? `gtag('config', '${ADS_ID}');` : ''}`;
    document.head.appendChild(trackingConfig);
  }

  if (CLARITY_ID && !document.getElementById('wa-clarity')) {
    const clarity = document.createElement('script');
    clarity.id = 'wa-clarity';
    clarity.type = 'text/javascript';
    clarity.innerHTML = `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${CLARITY_ID}");`;
    document.head.appendChild(clarity);
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !localStorage.getItem(CONSENT_KEY);
  });

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent === 'accepted') {
      injectTrackingScripts();
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setVisible(false);
    injectTrackingScripts();
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-label="Cookie consent">
      <div className={styles.inner}>
        <div className={styles.text}>
          <strong>Cookies &amp; Privacy</strong>
          <p>
            We use cookies for analytics (Vercel and Google Analytics, if enabled) and advertising (Google Ads / GTM) to understand how visitors use our site and to measure ad performance. Strictly necessary cookies are always active.{' '}
            <Link href="/cookie-policy" className={styles.link}>Cookie Policy</Link>
          </p>
        </div>
        <div className={styles.actions}>
          <button onClick={decline} className={styles.decline}>
            Reject non-essential
          </button>
          <button onClick={accept} className={styles.accept}>
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
