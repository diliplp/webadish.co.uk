import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import styles from './CTA.module.scss';

interface CTAProps {
    title?: string;
    subtitle?: string;
    btnText?: string;
    btnLink?: string;
}

const CTA: React.FC<CTAProps> = ({
    title = "Ready to Secure Your WordPress Site?",
    subtitle = "Don't wait for a hack to happen. Proactive maintenance is 10x cheaper than recovery.",
    btnText = "Get Started Now",
    btnLink = "/contact"
}) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                    <div className={styles.actions}>
                        <Link href={btnLink} className="btn btn-primary">
                            {btnText} <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </Link>
                        <a href="https://wa.me/447344540450" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            <Phone size={18} style={{ marginRight: '8px' }} /> Talk to an Expert
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
