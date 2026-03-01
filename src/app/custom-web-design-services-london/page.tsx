import PageTemplate from '@/components/PageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Custom Web Design Services London | Webadish',
    description: 'Leading web design agency in London. Custom, high-performance websites for London businesses.',
};

export default function LondonWebDesign() {
    const content = (
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2>London&apos;s Premium Web Design Agency</h2>
            <p>
                Based in London? We provide face-to-face consultations and bespoke web design services
                tailored to the competitive London market. Stand out with a site that performs.
            </p>
        </div>
    );

    return (
        <PageTemplate
            hero={{
                title: "Custom Web Design Services <br /><span style='color: var(--primary)'>London</span>",
                subtitle: "Bespoke digital experiences for London&apos;s most ambitious brands.",
                ctaText: "Book London Consultation"
            }}
            content={content}
            features={{
                title: "Why London Choose Us",
                description: "Local look, global standards.",
                items: [
                    { title: "Local Market Insight", description: "We understand the London business landscape.", icon: "🇬🇧", link: "#" },
                    { title: "Face-to-Face", description: "Meet us in Central London to discuss your project.", icon: "☕", link: "#" },
                    { title: "Fast Turnaround", description: "Agile development to keep up with the city's pace.", icon: "⚡", link: "#" }
                ]
            }}
            cta={{
                title: "Ready to Dominate the London Market?",
                subtitle: "Let's build a website that drives real results."
            }}
        />
    );
}
