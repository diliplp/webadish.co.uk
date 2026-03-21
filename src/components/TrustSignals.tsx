import styles from './TrustSignals.module.scss';
import { CheckCircle } from 'lucide-react';

const TrustSignals = () => {
    const benefits = [
        '20+ Years in Business',
        '30-Minute Emergency Triage',
        'UK GDPR Security Focus',
        '24/7 Security Monitoring',
        'BTL ITC Ltd UK Partner',
        'Cyber Essentials Ready',
        'ICO Registration Support',
        'Working Towards ISO 27001'
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {benefits.map((benefit, index) => (
                        <div key={index} className={styles.item}>
                            <CheckCircle size={20} className={styles.icon} />
                            <span>{benefit}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSignals;
