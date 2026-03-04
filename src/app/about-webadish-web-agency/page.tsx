import PageTemplate from '@/components/PageTemplate';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
    title: 'About WebAdish | UK WordPress Security Agency',
    description: 'WebAdish is a specialist WordPress security agency serving UK businesses. Learn about our mission, team, and security-first approach to WordPress maintenance.',
    path: '/about-webadish-web-agency',
});

export default function About() {
    const content = (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2>Our Mission</h2>
            <p style={{ marginBottom: '2rem' }}>
                At Webadish, we believe that website maintenance shouldn&apos;t be a headache.
                It started when our founders noticed that business owners were spending more time worrying about
                updates and hackers than growing their business.
            </p>

            <h2>Global Presence, Local Support</h2>
            <p style={{ marginBottom: '2rem' }}>
                We are a specialist WordPress security agency based in the United Kingdom. Our team provides dedicated coverage during UK business hours with 24/7 monitoring and emergency response capabilities for critical security incidents.
                When you talk to us, you&apos;re talking to a WordPress expert.
            </p>

            <h2>Our Values</h2>
            <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                <li><strong>Security First:</strong> We never compromise on safety.</li>
                <li><strong>Radical Transparency:</strong> No hidden fees, no jargon.</li>
                <li><strong>Long-term Partnership:</strong> We want to be your technical partner for years, not just for a project.</li>
            </ul>
        </div>
    );

    return (
        <PageTemplate
            hero={{
                title: "About <br /><span style='color: var(--primary)'>Webadish</span>",
                subtitle: "We&apos;re on a mission to make the web a safer place for businesses.",
                ctaText: "Work With Us"
            }}
            content={content}
            features={{
                title: "Why Choose Us?",
                description: "The Webadish difference.",
                items: [
                    { title: "24/7 Availability", description: "Thanks to our UK/AU teams.", icon: "⏰", link: "#" },
                    { title: "WordPress Experts", description: "We live and breathe WordPress.", icon: "🧠", link: "#" },
                    { title: "Agency Friendly", description: "White-label services available.", icon: "🤝", link: "#" }
                ]
            }}
        />
    );
}
