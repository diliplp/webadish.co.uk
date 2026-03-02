'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        setIsSuccess(false);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const data = await response.json().catch(() => ({}));
                throw new Error(data.error || 'Unable to send message right now.');
            }

            setIsSuccess(true);
            setFormData({ name: '', email: '', website: '', message: '' });
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                />
            </div>

            <div className={styles.group}>
                <label htmlFor="website">Website URL (Optional)</label>
                <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
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
                    onChange={handleChange}
                ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : (
                    <>Send Message <Send size={18} style={{ marginLeft: '8px' }} /></>
                )}
            </button>
        </form>
    );
};

export default ContactForm;
