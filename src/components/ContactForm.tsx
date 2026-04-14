'use client';

import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import { track } from '@vercel/analytics';
import styles from './ContactForm.module.scss';
import { trackEvent } from '@/lib/tracking';
import TurnstileField from './TurnstileField';

const ContactForm = () => {
    const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '';
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        message: '',
        fax_number: '',
        form_started_at: Date.now(),
        turnstile_token: ''
    });

    const [utmData, setUtmData] = useState({
        utm_source: '',
        utm_medium: '',
        utm_campaign: '',
        utm_term: '',
        utm_content: '',
        gclid: '',
        landing_page: '',
        referrer: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [hasTrackedStart, setHasTrackedStart] = useState(false);
    const [showTurnstilePrompt, setShowTurnstilePrompt] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setUtmData({
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

    const trackFormStart = () => {
        if (hasTrackedStart) return;
        setHasTrackedStart(true);
        trackEvent('form_start', {
            form_name: 'uk_contact',
            page_path: utmData.landing_page || window.location.pathname,
        });
    };

    const normalizeWebsite = (value: string) => {
        const trimmed = value.trim();
        if (!trimmed) return '';
        if (/^[a-z]+:\/\//i.test(trimmed)) return trimmed;
        return `https://${trimmed}`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        trackFormStart();
        setIsSubmitting(true);
        setError(null);
        setIsSuccess(false);

        if (turnstileSiteKey && !formData.turnstile_token) {
            setError('Please complete the security check and try again.');
            setShowTurnstilePrompt(true);
            setIsSubmitting(false);
            return;
        }

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 20000);

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...formData, website: normalizeWebsite(formData.website), ...utmData }),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                const data = await response.json().catch(() => ({}));
                throw new Error(data.error || 'Unable to send message right now.');
            }

            setIsSuccess(true);
            setShowTurnstilePrompt(false);
            track('form_submission', {
                page: utmData.landing_page,
                source: utmData.utm_source || 'direct',
                medium: utmData.utm_medium || 'organic',
            });
            trackEvent('form_submit_success', {
                form_name: 'uk_contact',
                page_path: utmData.landing_page || window.location.pathname,
                source: utmData.utm_source || 'direct',
                medium: utmData.utm_medium || 'organic',
            });
            setFormData({ name: '', email: '', website: '', message: '', fax_number: '', form_started_at: Date.now(), turnstile_token: '' });
            setHasTrackedStart(false);
        } catch (err) {
            if (err instanceof Error && err.name === 'AbortError') {
                setError('Request timed out. Please try again in a moment.');
            } else {
                setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
            }
            trackEvent('form_submit_error', {
                form_name: 'uk_contact',
                page_path: utmData.landing_page || window.location.pathname,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            {isSuccess && (
                <div className={styles.successMessage}>
                    Thank you! We have received your message and will get back to you shortly.
                </div>
            )}

            {error && (
                <div className={styles.errorMessage}>
                    {error}
                </div>
            )}

            <div className={styles.group}>
                <label htmlFor="name">Full Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onFocus={trackFormStart}
                    onChange={handleChange}
                    minLength={2}
                    maxLength={80}
                    autoComplete="name"
                />
            </div>

            <div className={styles.group}>
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onFocus={trackFormStart}
                    onChange={handleChange}
                    autoComplete="email"
                />
            </div>

            <div className={styles.group}>
                <label htmlFor="website">Website URL (Optional)</label>
                <input
                    type="text"
                    id="website"
                    name="website"
                    inputMode="url"
                    placeholder="example.com"
                    value={formData.website}
                    onFocus={trackFormStart}
                    onChange={handleChange}
                    autoComplete="url"
                />
            </div>

            <div className={styles.group}>
                <label htmlFor="message">How can we help?</label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onFocus={trackFormStart}
                    onChange={handleChange}
                    minLength={12}
                    placeholder="Tell us what you need help with, what happened, or what you'd like us to review."
                ></textarea>
            </div>

            <div className={styles.helperCard}>
                <strong>Best for urgent recovery requests</strong>
                <p>
                    Include the website URL, what visitors are seeing, whether leads or ads are being affected,
                    and whether anyone already attempted a cleanup. We prioritise active hacked-site enquiries.
                </p>
            </div>

            <div className={styles.honeypotField} aria-hidden="true">
                <label htmlFor="fax_number">Fax Number</label>
                <input
                    type="text"
                    id="fax_number"
                    name="fax_number"
                    tabIndex={-1}
                    autoComplete="new-password"
                    value={formData.fax_number}
                    onChange={handleChange}
                />
            </div>

            <TurnstileField
                siteKey={turnstileSiteKey}
                theme="dark"
                onTokenChange={(token) => {
                    setFormData((current) => ({ ...current, turnstile_token: token }));
                    if (token) {
                        setError(null);
                        setShowTurnstilePrompt(false);
                    }
                }}
            />

            {Boolean(turnstileSiteKey) && (
                <p className={styles.securityHint} aria-live="polite">
                    {showTurnstilePrompt
                        ? 'Complete the security check above, then send your request.'
                        : 'Quick security check to block spam. If it does not load, call or WhatsApp us instead.'}
                </p>
            )}

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : (
                    <>Send Message <Send size={18} style={{ marginLeft: '8px' }} /></>
                )}
            </button>

            <p className={styles.fallbackLinks}>
                Urgent incident? <a href="tel:+447344540450">Call +44 7344 540450</a> or{' '}
                <a
                    href="https://wa.me/447344540450?text=My%20website%20has%20been%20hacked%20and%20I%20need%20urgent%20help"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    open WhatsApp triage
                </a>.
            </p>
        </form>
    );
};

export default ContactForm;
