import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms & Conditions | Webadish',
    description: 'Terms and Conditions for Webadish services.',
};

export default function Terms() {
    const content = (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1>Terms & Conditions</h1>
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <div style={{ marginTop: '2rem' }}>
                <h3>1. Services</h3>
                <p>Webadish provides website maintenance, security, and design services as described on our website.</p>

                <h3>2. Payment</h3>
                <p>Payment terms are specified in your service agreement or invoice.</p>

                <h3>3. Limitation of Liability</h3>
                <p>To the maximum extent permitted by law, Webadish shall not be liable for any indirect, incidental, special, consequential or punitive damages.</p>

                <h3>4. Governing Law</h3>
                <p>These Terms shall be governed by the laws of the United Kingdom.</p>
            </div>
        </div>
    );

    return (
        <div className="section-padding container">
            {content}
        </div>
    );
}
