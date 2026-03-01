import PageTemplate from '@/components/PageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Custom WordPress Development | Plugins & API Integrations',
    description: 'Expert WordPress development services. Custom plugins, theme development, and API integrations for complex requirements.',
};

export default function WebDev() {
    const content = (
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Beyond Standard Themes</h2>
            <p>
                When off-the-shelf solutions aren&apos;t enough, we build custom functionality tailored to your specific business needs.
            </p>
        </div>
    );

    return (
        <PageTemplate
            hero={{
                title: "Custom <br /><span style='color: var(--primary)'>Web Development</span>",
                subtitle: "Complex problems require custom solutions. We build scalable, secure web applications and WordPress plugins.",
                ctaText: "Discuss Your Project"
            }}
            content={content}
            features={{
                title: "Technical Capabilities",
                description: "We speak the languages of the web.",
                items: [
                    { title: "Custom Plugins", description: "Extend WordPress functionality with secure, custom-built plugins.", icon: "🔌", link: "#" },
                    { title: "API Integrations", description: "Connect your site to CRM, ERP, or other third-party services.", icon: "🔗", link: "#" },
                    { title: "Headless CMS", description: "Decoupled architectures using Next.js and WordPress as a backend.", icon: "⚡", link: "#" },
                    { title: "Performance Tuning", description: "Code optimization for sub-second load times.", icon: "🚀", link: "#" }
                ]
            }}
            cta={{
                title: "Have a Complex Requirement?",
                subtitle: "Our developers love a challenge."
            }}
        />
    );
}
