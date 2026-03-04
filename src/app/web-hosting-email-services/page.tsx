import PageTemplate from '@/components/PageTemplate';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
    title: 'Secure Managed WordPress Hosting UK | Enterprise-Grade Infrastructure | WebAdish',
    description: 'Secure managed WordPress hosting for UK businesses. WAF protection, daily backups, SSL certificates, DDoS mitigation, and 99.99% uptime guarantee.',
    path: '/web-hosting-email-services',
});

export default function Hosting() {
    const content = (
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Hosting Built for WordPress Security</h2>
            <p>
                Secure managed WordPress hosting is purpose-built infrastructure designed to protect WordPress
                websites from threats at the server level. Unlike shared hosting, our managed hosting environment
                includes a Web Application Firewall, automated malware scanning, and isolated containers that
                prevent cross-site contamination.
            </p>
            <p style={{ marginTop: '1.5rem' }}>
                Every hosting environment is configured with hardened PHP settings, disabled XML-RPC by default,
                automatic SSL certificate provisioning, and DDoS mitigation. Your UK business data stays
                protected with GDPR-compliant UK/EU data centres and encrypted backups.
            </p>
        </div>
    );

    return (
        <PageTemplate
            hero={{
                title: "Secure Managed <br /><span style='color: var(--primary)'>WordPress Hosting</span>",
                subtitle: "Enterprise-grade hosting infrastructure with built-in security layers. WAF protection, automated backups, and 99.99% uptime for UK businesses.",
                ctaText: "Get Secure Hosting",
                ctaLink: "/contact-webadish-web-design"
            }}
            content={content}
            features={{
                title: "Security-First Hosting Infrastructure",
                description: "Every layer of our hosting stack is optimised for WordPress security and performance.",
                items: [
                    { title: "Web Application Firewall", description: "Enterprise-grade WAF that blocks malicious traffic, SQL injection attempts, XSS attacks, and brute-force login attempts before they reach your WordPress site.", icon: "🛡️", link: "#" },
                    { title: "Automated Daily Backups", description: "Encrypted daily backups stored in geographically separate UK/EU data centres with one-click restore capability and 30-day retention.", icon: "💾", link: "#" },
                    { title: "SSL & DDoS Protection", description: "Free SSL certificates with automatic renewal, plus enterprise DDoS mitigation that absorbs volumetric attacks without affecting your site performance.", icon: "🔒", link: "#" },
                    { title: "99.99% Uptime SLA", description: "Guaranteed uptime backed by a service-level agreement. Proactive monitoring alerts our team to issues before they affect your visitors.", icon: "📊", link: "#" }
                ]
            }}
            cta={{
                title: "Is Your Hosting Secure Enough?",
                subtitle: "Most WordPress hacks exploit server-level vulnerabilities. Move to our hardened hosting platform and eliminate that risk entirely."
            }}
        />
    );
}
