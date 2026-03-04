import PageHeader from '@/components/PageHeader';
import TrustSignals from '@/components/TrustSignals';
import ServiceCard from '@/components/ServiceCard';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import type { ReactNode } from 'react';

interface HeroProps {
    title: string;
    subtitle: string;
    ctaText?: string;
    ctaLink?: string;
}

interface FeatureItem {
    title: string;
    description: string;
    icon: ReactNode;
    link: string;
}

interface FAQItem {
    question: string;
    answer: string;
}

interface PageTemplateProps {
    hero: HeroProps;
    features?: {
        title: string;
        description: string;
        items?: FeatureItem[];
    };
    content?: ReactNode;
    faqs?: FAQItem[];
    cta?: {
        title?: string;
        subtitle?: string;
        btnText?: string;
        btnLink?: string;
    };
}

const PageTemplate: React.FC<PageTemplateProps> = ({
    hero,
    features,
    content,
    faqs,
    cta
}) => {
    return (
        <>
            <PageHeader title={hero.title} subtitle={hero.subtitle} />

            <TrustSignals />

            {content && (
                <section className="section-padding" style={{ backgroundColor: 'var(--background)' }}>
                    <div className="container">
                        {content}
                    </div>
                </section>
            )}

            {features && features.items && features.items.length > 0 && (
                <section className="section-padding" style={{ backgroundColor: 'var(--surface)' }}>
                    <div className="container">
                        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem' }}>
                            <h2>{features.title}</h2>
                            <p>{features.description}</p>
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '2rem'
                        }}>
                            {features.items.map((item, index) => (
                                <ServiceCard key={index} {...item} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Testimonials />

            {faqs && <FAQ items={faqs} />}

            <CTA {...(cta || {})} />
        </>
    );
};

export default PageTemplate;
