import Hero from '@/components/Hero';
import TrustSignals from '@/components/TrustSignals';
import ServiceCard from '@/components/ServiceCard';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import { Shield, Hammer, Globe, Code, Zap, Database } from 'lucide-react';
import Script from 'next/script';
import styles from './page.module.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WebAdish | High-ticket WordPress Security & Maintenance Retainers',
  description:
    'Security-first WordPress retainers for UK and Australian brands. Limited high-ticket clients, 24/7 monitoring, emergency recovery, and performance tuning.',
  metadataBase: new URL('https://www.webadish.co.uk'),
  openGraph: {
    title: 'WebAdish | High-ticket WordPress Security & Maintenance Retainers',
    description:
      'Security-first WordPress retainers for UK/Australian brands, trusted by agencies and enterprise teams.',
    url: 'https://www.webadish.co.uk/',
    siteName: 'WebAdish',
    locale: 'en_GB',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebAdish | High-ticket WordPress Security & Maintenance Retainers',
    description:
      'Security-first retainers for ambitious UK & Australian brands. 24/7 monitoring, emergency recovery, custom builds.',
    site: '@webadish'
  }
};

const caseStudies = [
  {
    title: 'Clarke Digital | Global Insurance Portal',
    summary:
      'Migrated a boutique insurer onto a hardened WordPress stack with stringent compliance checks, uptime SLAs, and monitoring tailored to their London + Sydney teams.',
    results: '✅ 40% faster incident response · ✅ Zero downtime during the peak renewal period'
  },
  {
    title: 'Creative London | Premium Membership Hub',
    summary:
      'Delivered an AI-powered membership portal with multi-layered caching, IP-based access rules, and daily security reviews for sensitive client data.',
    results: '✅ 4-hour recovery guarantee · ✅ Automated security scorecard shared weekly'
  }
];

export default function Home() {
  const services = [
    {
      title: 'WordPress Maintenance',
      description: 'Comprehensive care plans including daily backups, weekly updates, and 24/7 monitoring.',
      icon: <Hammer size={24} />,
      link: '/wordpress-maintenance-uk'
    },
    {
      title: 'Hacked Site Recovery',
      description: 'Emergency malware removal and site restoration. We get you back online fast.',
      icon: <Shield size={24} />,
      link: '/hacked-website-recovery-uk'
    },
    {
      title: 'Custom Web Design',
      description: 'High-converting, premium websites designed to position you as an industry leader.',
      icon: <Globe size={24} />,
      link: '/web-design-services'
    },
    {
      title: 'Web Development',
      description: 'Custom plugin development, API integrations, and complex functionality.',
      icon: <Code size={24} />,
      link: '/web-development-services'
    },
    {
      title: 'Performance Optimization',
      description: 'Speed up your site to improve SEO rankings and user experience.',
      icon: <Zap size={24} />,
      link: '/special-offers'
    },
    {
      title: 'Hosting & Email',
      description: 'Secure, high-performance hosting tailored for WordPress websites.',
      icon: <Database size={24} />,
      link: '/web-hosting-email-services'
    }
  ];

  const faqs = [
    {
      question: "How quickly can you fix a hacked website?",
      answer:
        "We typically start working immediately upon engagement. Most common malware infections are cleaned within 4-12 hours. Complex cases may take up to 24 hours, but we prioritize getting your site back online safely."
    },
    {
      question: 'Do you work with agencies?',
      answer:
        'Yes! A large portion of our clients are digital agencies who whitelist our maintenance services. We handle the technical support so you can focus on client relationships and growth.'
    },
    {
      question: 'What is included in your maintenance plans?',
      answer:
        'Our core plans include daily cloud backups, weekly plugin/theme/core updates, 24/7 uptime monitoring, security scans, and a monthly report. Higher tiers include speed optimization and unlimited small edits.'
    },
    {
      question: 'Are you based in the UK or Australia?',
      answer:
        'We have team members in both time zones, allowing us to provide near 24-hour coverage and localized support for clients in both the UK and Australia.'
    }
  ];

  const heroTitle =
    "High-ticket WordPress security for elite teams.<br /><span style='color: var(--primary)'>Stop worrying about WordPress security.</span>";
  const heroSubtitle =
    'Security-first retainers for UK & Australian brands. Limited intake so we can deliver enterprise-grade guardrails.';
  const highTicketHighlights = [
    {
      title: 'Selective client intake',
      description:
        'We only onboard a handful of high-trust clients each quarter so every engagement receives dedicated focus.'
    },
    {
      title: 'Security-first playbooks',
      description: 'Proactive tooling, compliance reviews, and executive reporting aligned with your risk posture.'
    },
    {
      title: 'Always-on assurance',
      description: '24/7 monitoring, emergency recovery, and definitive recovery time commitments for critical sites.'
    }
  ];

  const faqEntities = faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer
    }
  }));

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'WebAdish',
      url: 'https://www.webadish.co.uk/',
      telephone: '+919998757045',
      email: 'hello@webadish.co.uk',
      logo: 'https://www.webadish.co.uk/logo.png',
      description:
        'High-ticket WordPress maintenance, security, and recovery retainers for UK and Australian businesses.',
      areaServed: ['United Kingdom', 'Australia'],
      serviceType: 'WordPress Security & Maintenance',
      priceRange: '$$$',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'High-ticket retainers',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Elite WordPress Security Retainer'
            }
          }
        ]
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqEntities
    }
  ];

  return (
    <>
      <Script id="webadish-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <Hero title={heroTitle} subtitle={heroSubtitle} showImage={false} />

      <TrustSignals />

      <section className={`${styles.highTicketSection} section-padding`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Curated, high-ticket engagements</h2>
            <p>We partner only with ambitious UK/Australian teams that value security, clarity, and lasting uptime.</p>
          </div>
          <div className={styles.highTicketGrid}>
            {highTicketHighlights.map((item) => (
              <article key={item.title} className={styles.highlightCard}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.caseStudiesSection} section-padding`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Case studies from retained clients</h2>
            <p>Security playbooks, uptime SLAs, and measurable results for premium brands.</p>
          </div>
          <div className={styles.caseStudyGrid}>
            {caseStudies.map((study) => (
              <article key={study.title} className={styles.caseStudyCard}>
                <h3>{study.title}</h3>
                <p>{study.summary}</p>
                <p className={styles.caseStudyResults}>{study.results}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.servicesSection} section-padding`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Our Core Services</h2>
            <p>Everything you need to keep your digital presence secure and growing.</p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.processSection} section-padding`}>
        <div className="container">
          <div className={styles.processContent}>
            <h2>The Webadish Standard</h2>
            <p>
              We don&apos;t just fix problems; we prevent them. Our proactive approach combines enterprise-grade security
              tools with expert human oversight.
            </p>
            <ul className={styles.benefitsList}>
              <li>
                <strong>Security First:</strong> Every decision we make prioritizes the safety of your data.
              </li>
              <li>
                <strong>Speed Obsessed:</strong> We optimize every line of code for maximum performance.
              </li>
              <li>
                <strong>Transparent Communication:</strong> No jargon, just clear updates and reports.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Testimonials />

      <FAQ items={faqs} />

      <CTA />
    </>
  );
}
