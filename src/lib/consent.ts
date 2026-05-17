'use client';

export const CONSENT_KEY = 'wa-cookie-consent';
export const CONSENT_EVENT = 'wa-consent-updated';

export type ConsentValue = 'accepted' | 'declined' | null;

export function readConsentValue(): ConsentValue {
  if (typeof window === 'undefined') return null;
  const value = window.localStorage.getItem(CONSENT_KEY);
  if (value === 'accepted' || value === 'declined') return value;
  return null;
}

export function hasAcceptedConsent() {
  return readConsentValue() === 'accepted';
}

