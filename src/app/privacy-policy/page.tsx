import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
    title: 'Privacy Policy | WebAdish',
    description: 'Privacy Policy for WebAdish WordPress security services. How we collect, use, and protect your data.',
    path: '/privacy-policy',
});

export default function Privacy() {
    const content = (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1>Privacy Policy</h1>
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <div style={{ marginTop: '2rem' }}>
                <h3>1. Information We Collect</h3>
                <p>We collect information you provide directly to us, such as when you fill out a form, request a service, or communicate with us.</p>

                <h3>2. How We Use Information</h3>
                <p>We use the information we collect to provide, maintain, and improve our services, and to communicate with you.</p>

                <h3>3. Data Security</h3>
                <p>We implement reasonable security measures to protect your information.</p>

                <h3>4. Contact Us</h3>
                <p>If you have any questions about this Privacy Policy, please contact us at sales@webadish.co.uk.</p>
            </div>
        </div>
    );

    return (
        <div className="section-padding container">
            {content}
        </div>
    );
}
