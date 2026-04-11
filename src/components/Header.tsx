'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ShieldAlert, Phone, ChevronDown } from 'lucide-react';
import styles from './Header.module.scss';
import { gsap } from 'gsap';

const SERVICE_LINKS = [
    { href: '/wordpress-security-audit', label: 'Security Audit' },
    { href: '/wordpress-maintenance-uk', label: 'Security Protection' },
    { href: '/hacked-website-recovery-uk', label: 'Hacked Site Recovery' },
    { href: '/wordpress-malware-removal', label: 'Malware Removal' },
    { href: '/wordpress-security-retainer', label: 'Security Retainer' },
    { href: '/web-hosting-email-services', label: 'Secure Hosting' },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsServicesOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.navContainer}>
                <Link href="/" className={styles.logo}>
                    <Image src="/brand/webadish-logo-white.png" alt="WebAdish" width={245} height={70} style={{ width: 'auto', height: '70px' }} />
                </Link>

                <nav className={styles.desktopNav}>
                    <div
                        className={styles.dropdown}
                        ref={dropdownRef}
                        onMouseEnter={() => {
                            if (closeTimer.current) clearTimeout(closeTimer.current);
                            setIsServicesOpen(true);
                        }}
                        onMouseLeave={() => {
                            closeTimer.current = setTimeout(() => setIsServicesOpen(false), 200);
                        }}
                    >
                        <button
                            className={styles.dropdownTrigger}
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            aria-expanded={isServicesOpen}
                        >
                            Services <ChevronDown size={14} style={{ marginLeft: '4px', transition: 'transform 0.2s', transform: isServicesOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                        </button>
                        {isServicesOpen && (
                            <div className={styles.dropdownMenu}>
                                {SERVICE_LINKS.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsServicesOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <Link href="/pricing">Pricing</Link>
                    <Link href="/case-studies">Case Studies</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/about-webadish-web-agency">About</Link>
                </nav>

                <div className={styles.ctaGroup}>
                    <a href="tel:+447344540450" className={styles.phoneLink}>
                        <Phone size={15} />
                        <span>+44 7344 540450</span>
                    </a>
                    <Link href="/contact" className="btn btn-primary">
                        <ShieldAlert size={16} style={{ marginRight: '8px' }} /> Emergency Help
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
                    {SERVICE_LINKS.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
                    <Link href="/case-studies" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</Link>
                    <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
                    <Link href="/about-webadish-web-agency" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                    <a href="tel:+447344540450" onClick={() => setIsMobileMenuOpen(false)} className="btn btn-primary" style={{ textAlign: 'center', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Phone size={16} /> Call +44 7344 540450
                    </a>
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="btn btn-secondary" style={{ textAlign: 'center', justifyContent: 'center' }}>
                        Request Security Review
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
