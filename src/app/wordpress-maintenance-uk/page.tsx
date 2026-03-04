import PageTemplate from '@/components/PageTemplate';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
    title: 'WordPress Maintenance & Security Plans UK | From £449/month | WebAdish',
    description: 'Proactive WordPress maintenance plans for UK businesses. Daily backups, weekly security updates, 24/7 monitoring, malware scanning, and GDPR-compliant support from £449/month.',
    path: '/wordpress-maintenance-uk',
});

export default function MaintenanceUK() {
    const content = (
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Why UK Businesses Trust Webadish</h2>
            <p style={{ marginBottom: '2rem' }}>
                We understand the specific needs of UK businesses. GDPR compliance, fast UK servers,
                and support during your working hours. Our maintenance plans are designed to give you complete peace of mind.
            </p>
            <div id="pricing-plans" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div style={{
                    background: 'var(--surface)',
                    padding: '2rem',
                    borderRadius: '1rem',
                    flex: '1 1 300px'
                }}>
                    <h3 style={{ color: 'var(--primary)' }}>Standard Plan</h3>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0' }}>£449<span style={{ fontSize: '1rem', color: '#666' }}>/mo</span></div>
                    <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '0.5rem' }}>✓ Weekly Updates</li>
                        <li style={{ marginBottom: '0.5rem' }}>✓ Daily Cloud Backups</li>
                        <li style={{ marginBottom: '0.5rem' }}>✓ 24/7 Uptime Monitoring</li>
                        <li style={{ marginBottom: '0.5rem' }}>✓ Monthly Report</li>
                    </ul>
                </div>
                <div style={{
                    background: 'var(--surface)',
                    padding: '2rem',
                    borderRadius: '1rem',
                    border: '1px solid var(--primary)',
                    flex: '1 1 300px'
                }}>
                    <h3 style={{ color: 'var(--primary)' }}>Pro Plan</h3>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0' }}>£999<span style={{ fontSize: '1rem', color: '#666' }}>/mo</span></div>
                    <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '0.5rem' }}>✓ Everything in Standard</li>
                        <li style={{ marginBottom: '0.5rem' }}>✓ Daily Updates</li>
                        <li style={{ marginBottom: '0.5rem' }}>✓ Speed Optimization</li>
                        <li style={{ marginBottom: '0.5rem' }}>✓ Unlimited Small Edits</li>
                        <li style={{ marginBottom: '0.5rem' }}>✓ Priority Support</li>
                    </ul>
                </div>
            </div>
        </div>
    );

    return (
        <PageTemplate
            hero={{
                title: "Reliable WordPress Maintenance <br /><span style='color: var(--primary)'>for UK Businesses</span>",
                subtitle: "Secure, fast, and always online. We handle the technical details so you can focus on your business.",
                ctaText: "View Plans",
                ctaLink: "#pricing-plans"
            }}
            content={content}
            features={{
                title: "Everything You Need",
                description: "Our comprehensive maintenance packages cover all aspects of WordPress health.",
                items: [ // Using simple objects, PageTemplate maps them to ServiceCard
                ]
            }}
            faqs={[
                { question: "Do you offer white-label for UK agencies?", answer: "Yes, we work with many UK agencies under NDA." },
                { question: "Where are your backups stored?", answer: "We use encrypted Amazon S3 servers compliant with GDPR regulations." }
            ]}
            cta={{
                title: "Secure Your Site Today",
                subtitle: "Join hundreds of UK businesses who trust Webadish."
            }}
        />
    );
}
