import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import { Mail, Phone, ShieldCheck } from 'lucide-react';
import styles from './page.module.scss';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
    title: 'Contact WebAdish | WordPress Security Experts UK',
    description: 'Contact WebAdish for WordPress security audits, maintenance plans, malware removal, and emergency hacked site recovery. UK-based WordPress security specialists.',
    path: '/contact-webadish-web-design',
});

export default function Contact() {
    const faqs = [
        {
            question: "What are your support hours?",
            answer: "Our UK-based team provides support during business hours with 24/7 monitoring for critical issues. Emergency recovery requests are handled around the clock."
        },
        {
            question: "Do you offer white-label services?",
            answer: "Yes, we partner with many digital agencies to provide white-label WordPress maintenance and security services for their clients."
        },
        {
            question: "How much does a security audit cost?",
            answer: "Our basic security review is free for potential maintenance clients. Deep-dive forensic audits start at £1,499."
        }
    ];

    return (
        <>
            <section className={styles.pageHeader}>
                <div className="container">
                    <div className={styles.badge}>
                        <ShieldCheck size={14} />
                        Free initial consultation
                    </div>
                    <h1>Speak to a WordPress <span>Security Expert</span></h1>
                    <p>Tell us about your site and we&apos;ll come back with a clear, jargon-free plan.</p>
                </div>
            </section>

            <section className={styles.contactSection} id="contact-form">
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.info}>
                            <h2>Get in Touch</h2>
                            <p>
                                Whether you need emergency recovery or a long-term security partner,
                                our UK team is ready to help.
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
                                        <p>+44-XXX-XXXX-XXXX</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.trustList}>
                                <p>✓ Response within 1 business hour</p>
                                <p>✓ No long-term lock-in contracts</p>
                                <p>✓ UK-based security specialists</p>
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
