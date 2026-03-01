import PageTemplate from '@/components/PageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Digital Marketing Services London | Webadish',
    description: 'Data-driven digital marketing for London businesses. SEO, PPC, and content strategies that grow your revenue.',
};

export default function LondonMarketing() {
    const content = (
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Grow Your London Business</h2>
            <p>
                It&apos;s not enough to have a website; you need traffic. Our digital marketing strategies
                are designed to bring qualified leads to your door.
            </p>
        </div>
    );

    return (
        <PageTemplate
            hero={{
                title: "Digital Marketing <br /><span style='color: var(--secondary)'>London</span>",
                subtitle: "SEO, PPC, and Strategy for London businesses ready to scale.",
                ctaText: "Get a Marketing Plan"
            }}
            content={content}
            features={{
                title: "Our Marketing Services",
                description: "Full-service digital growth.",
                items: [
                    { title: "Local SEO", description: "Dominate London search results.", icon: "📍", link: "#" },
                    { title: "PPC Management", description: "High-ROI Google and Facebook ads.", icon: "💰", link: "#" },
                    { title: "Content Strategy", description: "Engaging content that converts.", icon: "📝", link: "#" }
                ]
            }}
            cta={{
                title: "Stop Wasting Budget",
                subtitle: "Get a marketing campaign that actually pays for itself."
            }}
        />
    );
}
