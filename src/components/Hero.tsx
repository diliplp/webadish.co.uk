'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, ShieldAlert, Phone } from 'lucide-react';
import styles from './Hero.module.scss';

interface HeroProps {
    title: string;
    subtitle: string;
    ctaText?: string;
    ctaLink?: string;
    ctaNote?: string;
    showTrust?: boolean;
    showImage?: boolean;
    heroImage?: string;
    heroImageAlt?: string;
}

const Hero: React.FC<HeroProps> = ({
    title,
    subtitle,
    ctaText = 'Request Incident Response',
    ctaLink = '/contact',
    ctaNote,
    showTrust = true,
    showImage = false,
    heroImage = '/hero-security.svg',
    heroImageAlt = 'Security review illustration'
}) => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={`${styles.heroGrid} ${!showImage ? styles.heroGridSingle : ''}`}>
                    <div className={`${styles.heroText} ${!showImage ? styles.heroTextCentered : ''}`}>
                        <div className={styles.badge}>
                            <ShieldCheck size={16} className={styles.badgeIcon} />
                            <span>Premium WordPress Incident Response & Security</span>
                        </div>

                        <h1 className={styles.animTitle} dangerouslySetInnerHTML={{ __html: title }}></h1>

                        <p className={`${styles.subtitle} ${styles.animSubtitle}`}>
                            {subtitle}
                        </p>

                        <div className={`${styles.ctaGroup} ${styles.animCta}`}>
                            <Link href={ctaLink} className="btn btn-primary">
                                <ShieldAlert size={18} style={{ marginRight: '8px' }} />
                                {ctaText}
                            </Link>
                            <a href="https://wa.me/447344540450" target="_blank" rel="noopener noreferrer" className="btn btn-emergency">
                                <Phone size={18} style={{ marginRight: '8px' }} />
                                Emergency Help
                            </a>
                        </div>

                        {ctaNote && (
                            <div className={styles.ctaNote}>
                                {ctaNote}
                            </div>
                        )}

                        {showTrust && (
                            <div className={styles.trustLabel}>
                                Trusted by agencies and businesses across the United Kingdom, backed by 20+ years in business
                            </div>
                        )}
                    </div>

                    {showImage && (
                        <div className={styles.heroImageWrapper}>
                            <Image src={heroImage} alt={heroImageAlt} width={520} height={520} priority />
                        </div>
                    )}
                </div>
            </div>

            <div className={styles.backgroundGlow}></div>
        </section>
    );
};

export default Hero;
