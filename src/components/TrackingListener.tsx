'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { trackEvent, trackPageView } from '@/lib/tracking';

const SCROLL_THRESHOLDS = [25, 50, 75, 90];

function getTrackableElement(target: HTMLElement | null) {
  return target?.closest<HTMLElement>('a,button');
}

function getLabel(element: HTMLElement) {
  return (
    element.getAttribute('data-track-label') ||
    element.getAttribute('aria-label') ||
    element.textContent?.replace(/\s+/g, ' ').trim() ||
    'unknown'
  ).slice(0, 120);
}

export default function TrackingListener() {
  const pathname = usePathname();
  const firedThresholds = useRef<Set<number>>(new Set());

  useEffect(() => {
    trackPageView(pathname, document.title);
    firedThresholds.current.clear();

    const onScroll = () => {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const progress = Math.round((window.scrollY / maxScroll) * 100);
      for (const threshold of SCROLL_THRESHOLDS) {
        if (progress >= threshold && !firedThresholds.current.has(threshold)) {
          firedThresholds.current.add(threshold);
          trackEvent('scroll_depth', { percent: threshold, page_path: pathname });
        }
      }
    };

    const onClick = (event: MouseEvent) => {
      const element = getTrackableElement(event.target as HTMLElement | null);
      if (!element) return;

      const href = element instanceof HTMLAnchorElement ? element.href : '';
      const label = getLabel(element);

      if (href.includes('wa.me')) {
        trackEvent('whatsapp_click', { label, href, page_path: pathname });
        return;
      }

      if (href.startsWith('tel:')) {
        trackEvent('phone_click', { label, href, page_path: pathname });
        return;
      }

      if (href.startsWith('mailto:')) {
        trackEvent('email_click', { label, href, page_path: pathname });
        return;
      }

      if (
        href.includes('/contact') ||
        element.getAttribute('data-track') === 'cta' ||
        /request|assessment|review|audit|emergency|quote|call/i.test(label)
      ) {
        trackEvent('cta_click', { label, href, page_path: pathname });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('click', onClick);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', onClick);
    };
  }, [pathname]);

  return null;
}
