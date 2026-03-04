import PageTemplate from '@/components/PageTemplate';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
    title: 'WordPress Security Development UK | Custom Security Solutions | WebAdish',
    description: 'Custom WordPress security development for UK businesses. Security plugins, API integrations, hardened configurations, and penetration-tested code.',
    path: '/web-development-services',
});

export default function WebDev() {
    const content = (
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Custom Security Solutions for WordPress</h2>
            <p>
                When standard security plugins fall short, we build custom WordPress security solutions
                tailored to your specific threat landscape. From bespoke security plugins to hardened server
                configurations, our development team delivers penetration-tested code that stands up to
                real-world attacks.
            </p>
            <p style={{ marginTop: '1.5rem' }}>
                Every line of code we write follows secure development practices, undergoes rigorous
                code review, and is tested against OWASP Top 10 vulnerabilities. Your UK business
                deserves WordPress security that goes beyond off-the-shelf solutions.
            </p>
        </div>
    );

    return (
        <PageTemplate
            hero={{
                title: "WordPress Security <br /><span style='color: var(--primary)'>Development</span>",
                subtitle: "Custom security plugins, hardened configurations, and penetration-tested code for UK businesses that demand more than default WordPress security.",
                ctaText: "Discuss Your Security Needs",
                ctaLink: "/contact"
            }}
            content={content}
            features={{
                title: "Security Development Capabilities",
                description: "Purpose-built security solutions for complex WordPress environments.",
                items: [
                    { title: "Custom Security Plugins", description: "Bespoke WordPress security plugins built to address your specific vulnerabilities, from custom authentication flows to advanced threat detection.", icon: "🔌", link: "#" },
                    { title: "Secure API Integration", description: "Encrypted, authenticated API connections between WordPress and third-party services with rate limiting, input validation, and secure token management.", icon: "🔗", link: "#" },
                    { title: "Hardened Configuration", description: "Server-level and application-level hardening including wp-config security, database encryption, file permission lockdown, and HTTP header policies.", icon: "⚙️", link: "#" },
                    { title: "Security Code Review", description: "Thorough audits of existing WordPress themes, plugins, and custom code to identify vulnerabilities, backdoors, and insecure patterns.", icon: "🔍", link: "#" }
                ]
            }}
            cta={{
                title: "Need Custom WordPress Security?",
                subtitle: "Our security developers build solutions that protect your business from evolving threats. Call us on +44-XXX-XXXX-XXXX or get in touch for a security consultation."
            }}
        />
    );
}
