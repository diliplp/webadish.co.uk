import styles from './TrustSignals.module.scss';
import { CheckCircle } from 'lucide-react';

const TrustSignals = () => {
    const benefits = [
        '20+ Years in Business',
        '30-Minute Emergency Triage',
        'UK GDPR & ICO Compliance',
        '24/7 Security Monitoring',
        'UK Registered Company',
        'Cyber Essentials Aligned',
        'Fixed-Fee Incident Response',
        'No Recovery, No Invoice'
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
