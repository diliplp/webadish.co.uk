import PageTemplate from '@/components/PageTemplate';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
    title: 'Secure WordPress Design UK | Security-First Websites | WebAdish',
    description: 'WordPress websites built with security at their core. Hardened themes, secure code practices, and performance-optimised design for UK businesses.',
    path: '/web-design-services',
});

export default function WebDesign() {
    const content = (
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Security-First WordPress Design</h2>
            <p>
                Every WordPress website we design is built with security at its foundation. From hardened theme
                architecture to secure coding standards, we ensure your site looks stunning while keeping
                threats out. Our security-first approach means your UK business gets a website that is not only
                visually compelling but resilient against the latest vulnerabilities and attacks.
            </p>
            <p style={{ marginTop: '1.5rem' }}>
                We follow OWASP best practices, implement Content Security Policies, and use secure
                development workflows so your WordPress site is protected from day one. No shortcuts, no
                compromises on security.
            </p>
        </div>
    );

    return (
        <PageTemplate
            hero={{
                title: "Secure WordPress <br /><span style='color: var(--primary)'>Design</span>",
                subtitle: "WordPress websites engineered with security at their core. Hardened themes, secure code, and performance-optimised design for UK businesses.",
                ctaText: "Get a Secure Website",
                ctaLink: "/contact"
            }}
            content={content}
            features={{
                title: "Our Security-First Design Approach",
                description: "Every design decision is made with security and performance in mind.",
                items: [
                    { title: "Security-First Architecture", description: "Every site is built on a hardened WordPress foundation with minimal attack surface, role-based access controls, and secure file permissions.", icon: "🛡️", link: "#" },
                    { title: "Hardened WordPress Themes", description: "Custom themes developed with secure coding standards, input sanitisation, output escaping, and protection against XSS and SQL injection.", icon: "🔒", link: "#" },
                    { title: "Performance & Security Testing", description: "Rigorous pre-launch testing including vulnerability scanning, performance benchmarks, and penetration testing to ensure your site is rock-solid.", icon: "🧪", link: "#" },
                    { title: "Ongoing Security Support", description: "Continuous monitoring, security patching, plugin audits, and proactive threat response to keep your WordPress site protected long-term.", icon: "🔄", link: "#" }
                ]
            }}
            cta={{
                title: "Is Your WordPress Site Secure?",
                subtitle: "Get a security-first WordPress website that protects your business and your customers. Call us on +44-XXX-XXXX-XXXX or request a free security audit today."
            }}
        />
    );
}
