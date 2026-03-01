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
                            Premium WordPress maintenance, security, and recovery services for agencies and businesses in the UK and Australia.
                        </p>
                        <div className={styles.socials}>
                            {/* Social icons would go here */}
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h4>Services</h4>
                        <ul>
                            <li><Link href="/wordpress-maintenance-uk">WordPress Maintenance</Link></li>
                            <li><Link href="/hacked-website-recovery-uk">Hacked Site Recovery</Link></li>
                            <li><Link href="/web-design-services">Web Design</Link></li>
                            <li><Link href="/web-hosting-email-services">Hosting &amp; Email</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Company</h4>
                        <ul>
                            <li><Link href="/about-webadish-web-agency">About Us</Link></li>
                            <li><Link href="/web-design-portfolio">Portfolio</Link></li>
                            <li><Link href="/contact-webadish-web-design">Contact</Link></li>
                            <li><Link href="/special-offers">Special Offers</Link></li>
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
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {currentYear} Webadish. All rights reserved.</p>
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
