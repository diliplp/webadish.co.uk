import PageTemplate from '@/components/PageTemplate';
import ContactForm from '@/components/ContactForm';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
    title: 'Hacked WordPress Site Recovery UK | Emergency Fix in Hours | WebAdish',
    description: 'Emergency WordPress hacked site recovery for UK businesses. We remove malware, clean backdoors, and restore your site within 4-24 hours. Fixed fee £1,499 with 30-day guarantee.',
    path: '/hacked-website-recovery-uk',
});

export default function RecoveryUK() {
    const content = (
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Is Your Site Redirecting to Spam?</h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>
                Don&apos;t panic. We fix hacked WordPress sites daily.
            </p>
            <div style={{
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid #ef4444',
                padding: '2rem',
                borderRadius: '1rem',
                marginBottom: '3rem'
            }}>
                <h3 style={{ color: '#ef4444', marginBottom: '1rem' }}>Emergency Recovery Plan</h3>
                <p>One-time fee: <strong>£1499</strong></p>
                <ul style={{ textAlign: 'left', margin: '2rem auto', maxWidth: '400px' }}>
                    <li>✓ Complete Malware Removal</li>
                    <li>✓ Blacklist Removal (Google, McAfee)</li>
                    <li>✓ Core/Plugin Updates</li>
                    <li>✓ Security Hardening</li>
                    <li>✓ 30-Day Guarantee</li>
                </ul>
                <a href="#contact-section" className="btn btn-emergency">Fix My Site Now</a>
            </div>

            <div id="contact-section" style={{ textAlign: 'left', marginTop: '4rem', padding: '2rem', background: 'var(--surface)', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Request Emergency Help Now</h2>
                <p style={{ textAlign: 'center', marginBottom: '2rem' }}>Fill out the form below and we will get started immediately.</p>
                <ContactForm />
            </div>
        </div>
    );

    return (
        <PageTemplate
            hero={{
                title: "Hacked WordPress Site? <br /><span style='color: #ef4444'>We Fix It Fast.</span>",
                subtitle: "UK-based emergency recovery service. We clean malware, restore access, and secure your site against future attacks.",
                ctaText: "Start Emergency Recovery",
                ctaLink: "#contact-section"
            }}
            content={content}
            faqs={[
                { question: "How long does it take?", answer: "Most sites are cleaned within 4-12 hours." },
                { question: "Will I lose data?", answer: "We take a backup before starting. In most cases, we clean the files rather than deleting them, preserving your content." }
            ]}
            cta={{
                title: "Don&apos;t Let Hackers Win",
                subtitle: "Every minute your site is down costs you money and reputation.",
                btnText: "Start Recovery Now",
                btnLink: "#contact-section"
            }}
        />
    );
}
