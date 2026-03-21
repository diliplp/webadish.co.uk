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
    title = "Need WordPress Incident Response?",
    subtitle = "When revenue, rankings, and customer trust are on the line, we move fast and fix the root cause.",
    btnText = "Request a Response Call",
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
