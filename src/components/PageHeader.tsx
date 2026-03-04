import { ShieldCheck } from 'lucide-react';
import styles from './PageHeader.module.scss';

interface PageHeaderProps {
    title: string;
    subtitle: string;
    badge?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    subtitle,
    badge = 'WordPress Security Agency',
}) => {
    return (
        <section className={styles.pageHeader}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.badge}>
                        <ShieldCheck size={13} />
                        {badge}
                    </div>
                    <h1
                        className={styles.title}
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                    <p className={styles.subtitle}>{subtitle}</p>
                </div>
            </div>
        </section>
    );
};

export default PageHeader;
