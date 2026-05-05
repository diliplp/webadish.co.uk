import { track } from '@vercel/analytics';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type TrackingParams = Record<string, string | number | boolean | null | undefined>;

const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-18133913810';
const GOOGLE_ADS_PHONE_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_LABEL || 'MMwcCIj95qccENKh9sZD';
const GOOGLE_ADS_LEAD_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_CONVERSION_LABEL || 'djnACM3JqZYcEMOU-YRD';

function cleanParams(params: TrackingParams = {}) {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== '')
  );
}

export function trackEvent(name: string, params: TrackingParams = {}) {
  if (typeof window === 'undefined') return;

  const payload = cleanParams(params);
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...payload });

  if (typeof window.gtag === 'function') {
    window.gtag('event', name, payload);
  }

  track(name, payload);
}

export function trackPageView(path: string, title: string) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  window.gtag('event', 'page_view', {
    page_title: title,
    page_location: window.location.href,
    page_path: path,
  });
}

export function trackGoogleAdsConversion(label: string, params: TrackingParams = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  if (!GOOGLE_ADS_ID || !label) return;

  window.gtag('event', 'conversion', {
    send_to: `${GOOGLE_ADS_ID}/${label}`,
    ...cleanParams(params),
  });
}

export function trackPhoneConversion(params: TrackingParams = {}) {
  trackGoogleAdsConversion(GOOGLE_ADS_PHONE_CONVERSION_LABEL, params);
}

export function trackLeadConversion(params: TrackingParams = {}) {
  trackGoogleAdsConversion(GOOGLE_ADS_LEAD_CONVERSION_LABEL, params);
}
