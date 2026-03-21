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
                            <Image src="/brand/webadish-logo-white.png" alt="Webadish" width={245} height={70} style={{ width: 'auto', height: '52px' }} />
                        </Link>
                        <p className={styles.description}>
                            Specialist WordPress security agency for UK businesses. High-ticket incident response, monthly security retainers, GDPR-aware recovery, and secure hosting.
                        </p>
                    </div>

                    <div className={styles.column}>
                        <h4>Services</h4>
                        <ul>
                            <li><Link href="/wordpress-security-audit">Security Audit</Link></li>
                            <li><Link href="/wordpress-maintenance-uk">Security Protection</Link></li>
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
                            <li><Link href="/gdpr-wordpress-security">GDPR Security</Link></li>
                            <li><Link href="/about-webadish-web-agency">About Us</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Contact</h4>
                        <ul className={styles.contactList}>
                            <li>
                                <Mail size={16} />
                                <a href="mailto:sales@webadish.co.uk">sales@webadish.co.uk</a>
                            </li>
                        </ul>
                        <div style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: '#71717a', lineHeight: '1.6' }}>
                            <strong style={{ color: '#a1a1aa', display: 'block', marginBottom: '0.25rem' }}>BTL ITC Ltd (UK Partner)</strong>
                            Oak House, Central Park<br />
                            Reeds Crescent, Watford<br />
                            WD24 4QN
                        </div>
                        <a
                            href="https://www.webadish.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ marginTop: '1rem', display: 'inline-block', color: '#d4d4d8', textDecoration: 'none' }}
                        >
                            Global protection plans are available on webadish.com
                        </a>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {currentYear} WebAdish. All rights reserved. UK services delivered in partnership with BTL ITC Ltd, a registered UK company.</p>
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
