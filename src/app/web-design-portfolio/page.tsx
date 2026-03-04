import PageTemplate from '@/components/PageTemplate';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
    title: 'WordPress Security Portfolio | Client Projects | WebAdish',
    description: 'View our WordPress security and design portfolio. See how we protect and optimise WordPress sites for UK businesses.',
    path: '/web-design-portfolio',
});

export default function Portfolio() {
    const content = (
        <div style={{ textAlign: 'center' }}>
            <h2>Featured Projects</h2>
            <p style={{ marginBottom: '3rem' }}>A selection of our recent work across various industries.</p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} style={{
                        background: 'var(--surface)',
                        borderRadius: '1rem',
                        overflow: 'hidden',
                        aspectRatio: '16/9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#666'
                    }}>
                        Project Placeholder {item}
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <PageTemplate
            hero={{
                title: "Our <br /><span style='color: var(--primary)'>Work</span>",
                subtitle: "We take pride in delivering exceptional results for our clients.",
                ctaText: "Start Your Project"
            }}
            content={content}
            cta={{
                title: "Like What You See?",
                subtitle: "Let's create something similar for your business."
            }}
        />
    );
}
