'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ShieldAlert, Phone } from 'lucide-react';
import styles from './Header.module.scss';
import { gsap } from 'gsap';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            gsap.fromTo(`.${styles.mobileMenu} a`,
                { x: 50, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: 'power2.out' }
            );
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMobileMenuOpen]);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.navContainer}>
                <Link href="/" className={styles.logo}>
                    <Image src="/brand/webadish-logo-white.png" alt="Webadish" width={210} height={60} style={{ width: 'auto', height: '60px' }} />
                </Link>

                <nav className={styles.desktopNav}>
                    <Link href="/wordpress-maintenance-uk">Maintenance</Link>
                    <Link href="/hacked-website-recovery-uk">Hacked Recovery</Link>
                    <Link href="/web-design-services">Web Design</Link>
                    <Link href="/about-webadish-web-agency">About</Link>
                </nav>

                <div className={styles.ctaGroup}>
                    <a href="https://wa.me/919998757045" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        <Phone size={16} style={{ marginRight: '8px' }} /> Emergency Help
                    </a>
                    <Link href="/contact-webadish-web-design" className="btn btn-primary">
                        <ShieldAlert size={16} style={{ marginRight: '8px' }} /> Security Review
                    </Link>
                </div>

                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link href="/wordpress-maintenance-uk" onClick={() => setIsMobileMenuOpen(false)}>WordPress Maintenance</Link>
                    <Link href="/hacked-website-recovery-uk" onClick={() => setIsMobileMenuOpen(false)}>Hacked Site Recovery</Link>
                    <Link href="/web-design-services" onClick={() => setIsMobileMenuOpen(false)}>Web Design</Link>
                    <Link href="/about-webadish-web-agency" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                    <Link href="/contact-webadish-web-design" onClick={() => setIsMobileMenuOpen(false)} className="btn btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }}>
                        Request Security Review
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
