'use client';

import React, { useState, useEffect } from 'react';
import { track } from '@vercel/analytics';

interface UTMParams {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  gclid: string;
  landing_page: string;
  referrer: string;
}

interface LandingContactFormProps {
  formTitle?: string;
  buttonText?: string;
}

export default function LandingContactForm({
  formTitle = 'Get Your Free Security Assessment',
  buttonText = 'Request Security Audit',
}: LandingContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: '',
    company: '', // honeypot
  });
  const [utmParams, setUtmParams] = useState<UTMParams>({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
    gclid: '',
    landing_page: '',
    referrer: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtmParams({
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_term: params.get('utm_term') || '',
      utm_content: params.get('utm_content') || '',
      gclid: params.get('gclid') || '',
      landing_page: window.location.pathname,
      referrer: document.referrer || '',
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.company) return; // honeypot

    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, ...utmParams }),
      });

      if (res.ok) {
        setStatus('success');
        track('form_submission', {
          page: utmParams.landing_page,
          source: utmParams.utm_source || 'direct',
          medium: utmParams.utm_medium || 'none',
          campaign: utmParams.utm_campaign || 'none',
        });
        setFormData({ name: '', email: '', website: '', message: '', company: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        padding: '3rem 2rem',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>&#10003;</div>
        <h3 style={{ color: 'var(--foreground)', marginBottom: '0.75rem' }}>Thank You!</h3>
        <p style={{ color: '#a1a1aa' }}>
          We&apos;ve received your request and will be in touch within 2 business hours.
        </p>
      </div>
    );
  }

  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: '16px',
      padding: '2.5rem 2rem',
    }}>
      <h3 style={{ color: 'var(--foreground)', marginBottom: '0.25rem', fontSize: '1.3rem' }}>
        {formTitle}
      </h3>
      <p style={{ color: '#a1a1aa', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
        No obligation. We&apos;ll review your site and send a detailed security report.
      </p>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'none' }}>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="text"
            placeholder="Your name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={{
              background: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '0.85rem 1rem',
              color: 'var(--foreground)',
              fontSize: '0.95rem',
            }}
          />
          <input
            type="email"
            placeholder="Email address"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            style={{
              background: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '0.85rem 1rem',
              color: 'var(--foreground)',
              fontSize: '0.95rem',
            }}
          />
          <input
            type="url"
            placeholder="Website URL (https://...)"
            required
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            style={{
              background: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '0.85rem 1rem',
              color: 'var(--foreground)',
              fontSize: '0.95rem',
            }}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}
          >
            {status === 'loading' ? 'Sending...' : buttonText}
          </button>
        </div>
        {status === 'error' && (
          <p style={{ color: '#ef4444', marginTop: '0.75rem', fontSize: '0.9rem' }}>
            Something went wrong. Please try again or email us at sales@webadish.co.uk.
          </p>
        )}
      </form>
    </div>
  );
}
