import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import { Mail, Phone } from 'lucide-react';
import styles from './page.module.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Webadish | Web Design & Security Agency',
    description: 'Get in touch with Webadish for WordPress maintenance, security audits, and custom web design services.',
};

export default function Contact() {
    const faqs = [
        {
            question: "What are your support hours?",
            answer: "Our team covers both UK and Australian time zones, effectively providing near 24/7 support for critical issues."
        },
        {
            question: "Do you offer white-label services?",
            answer: "Yes, we partner with many digital agencies to provide white-label WordPress maintenance and security services for their clients."
        },
        {
            question: "How much does a security audit cost?",
            answer: "Our basic security review is free for potential maintenance clients. Deep-dive forensic audits start at £1499."
        }
    ];

    return (
        <>
            <Hero
                title="Start Your Project With <br /><span style='color: var(--primary)'>Webadish</span>"
                subtitle="Ready to secure your site or build something new? We're here to help."
                ctaText="Scroll to Contact"
                ctaLink="#contact-form"
                showTrust={false}
            />

            <section className={styles.contactSection} id="contact-form">
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.info}>
                            <h2>Get in Touch</h2>
                            <p>
                                Whether you need emergency recovery or a long-term maintenance partner,
                                our team is ready to assist.
                            </p>

                            <div className={styles.details}>
                                <div className={styles.detailItem}>
                                    <Mail className={styles.icon} />
                                    <div>
                                        <h3>Email Us</h3>
                                        <a href="mailto:sales@webadish.co.uk">sales@webadish.co.uk</a>
                                    </div>
                                </div>

                                <div className={styles.detailItem}>
                                    <Phone className={styles.icon} />
                                    <div>
                                        <h3>Call Us</h3>
                                        <p>+919998757045</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.formWrapper}>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <FAQ items={faqs} />
        </>
    );
}
