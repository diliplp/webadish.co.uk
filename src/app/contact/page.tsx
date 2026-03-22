import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import StructuredData from '@/components/StructuredData';
import { Mail, Phone, ShieldCheck } from 'lucide-react';
import styles from './page.module.scss';
import { generatePageMetadata } from '@/lib/seo';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';

export const metadata = generatePageMetadata({
    title: 'Contact WebAdish UK | +44 7344 540450 | sales@webadish.co.uk',
    description: 'Contact WebAdish UK for WordPress security audits, protection retainers, malware removal, and emergency hacked site recovery. Call +44 7344 540450 or email sales@webadish.co.uk.',
    path: '/contact',
});

export default function Contact() {
    const faqs = [
        {
            question: "What are your support hours?",
            answer: "Our team provides support during UK business hours with 24/7 monitoring for critical issues. Emergency recovery requests are handled around the clock. UK services are delivered in partnership with BTL ITC Ltd."
        },
        {
            question: "Do you offer white-label services?",
            answer: "Yes, we partner with many digital agencies to provide white-label WordPress security protection and security services for their clients."
        },
        {
            question: "How much does a security audit cost?",
            answer: "Our initial security review is free for qualified prospects. Standalone security audits typically start from £1,000, with deeper forensic audit work priced separately based on complexity."
        }
    ];

    const schemas = [
        generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Contact', url: '/contact' },
        ]),
        generateFAQSchema(faqs),
        {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact WebAdish UK',
            url: 'https://www.webadish.co.uk/contact',
            telephone: '+447344540450',
            email: 'sales@webadish.co.uk',
        },
    ];

    return (
        <>
            <StructuredData schemas={schemas} />
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
                                        <p>+44 7344 540450</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.trustList}>
                                <p>✓ Response within 1 business hour</p>
                                <p>✓ No long-term lock-in contracts</p>
                                <p>✓ UK services via BTL ITC Ltd</p>
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
