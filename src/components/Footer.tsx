import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import styles from './Footer.module.scss';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <Link href="/" className={styles.logo}>
                            <Image src="/brand/webadish-logo-white.png" alt="Webadish" width={160} height={48} />
                        </Link>
                        <p className={styles.description}>
                            Specialist WordPress security agency for UK businesses. High-ticket security retainers, maintenance, and emergency recovery.
                        </p>
                    </div>

                    <div className={styles.column}>
                        <h4>Services</h4>
                        <ul>
                            <li><Link href="/wordpress-security-audit">Security Audit</Link></li>
                            <li><Link href="/wordpress-maintenance-uk">Maintenance</Link></li>
                            <li><Link href="/hacked-website-recovery-uk">Hacked Recovery</Link></li>
                            <li><Link href="/wordpress-malware-removal">Malware Removal</Link></li>
                            <li><Link href="/wordpress-security-retainer">Security Retainer</Link></li>
                            <li><Link href="/web-hosting-email-services">Secure Hosting</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Resources</h4>
                        <ul>
                            <li><Link href="/pricing">Pricing</Link></li>
                            <li><Link href="/case-studies">Case Studies</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/about-webadish-web-agency">About Us</Link></li>
                            <li><Link href="/contact-webadish-web-design">Contact</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Contact</h4>
                        <ul className={styles.contactList}>
                            <li>
                                <Mail size={16} />
                                <a href="mailto:sales@webadish.co.uk">sales@webadish.co.uk</a>
                            </li>
                            <li style={{ fontSize: '0.85rem', color: '#a1a1aa', marginTop: '8px' }}>
                                UK-based WordPress security specialists
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {currentYear} WebAdish. All rights reserved.</p>
                    <div className={styles.policies}>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/terms-conditions">Terms &amp; Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
