import Hero from '@/components/Hero';
import TrustSignals from '@/components/TrustSignals';
import ServiceCard from '@/components/ServiceCard';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import StructuredData from '@/components/StructuredData';
import { Shield, Hammer, Search, Bug, Lock, Database } from 'lucide-react';
import styles from './page.module.scss';
import { generatePageMetadata } from '@/lib/seo';
import { generateOrganizationSchema, generateFAQSchema } from '@/lib/schema';

export const metadata = generatePageMetadata({
  title: 'WebAdish | High-Ticket WordPress Security & Maintenance UK',
  description:
    'Security-first WordPress retainers for UK businesses. 24/7 monitoring, emergency recovery, malware removal, and maintenance from a specialist WordPress security agency.',
  path: '/',
});

const caseStudies = [
  {
    title: 'UK Insurance Portal | Enterprise Security Overhaul',
    summary:
      'Migrated a boutique insurer onto a hardened WordPress stack with stringent compliance checks, uptime SLAs, and round-the-clock monitoring for their London team.',
    results: '40% faster incident response | Zero downtime during peak renewal period'
  },
  {
    title: 'London Creative Agency | Secure Membership Platform',
    summary:
      'Delivered an AI-powered membership portal with multi-layered caching, IP-based access rules, and daily security reviews for sensitive client data.',
    results: '4-hour recovery guarantee | Automated weekly security scorecard'
  },
  {
    title: 'E-Commerce Fashion Brand | WooCommerce Security',
    summary:
      'Complete WooCommerce security overhaul including PCI compliance, payment gateway hardening, and real-time fraud detection for a high-volume UK retailer.',
    results: '99.99% uptime achieved | Zero security incidents in 12 months'
  }
];

export default function Home() {
  const services = [
    {
      title: 'WordPress Security Audit',
      description: 'Comprehensive vulnerability assessment with detailed remediation report and risk scoring.',
      icon: <Search size={24} />,
      link: '/wordpress-security-audit'
    },
    {
      title: 'WordPress Maintenance',
      description: 'Comprehensive care plans including daily backups, weekly updates, and 24/7 monitoring.',
      icon: <Hammer size={24} />,
      link: '/wordpress-maintenance-uk'
    },
    {
      title: 'Hacked Site Recovery',
      description: 'Emergency malware removal and site restoration. We get you back online in hours, not days.',
      icon: <Shield size={24} />,
      link: '/hacked-website-recovery-uk'
    },
    {
      title: 'Malware Removal',
      description: 'Targeted malware scanning, backdoor removal, and site hardening against reinfection.',
      icon: <Bug size={24} />,
      link: '/wordpress-malware-removal'
    },
    {
      title: 'Security Retainer',
      description: 'Dedicated security team, SLA guarantees, and executive reporting for enterprise WordPress sites.',
      icon: <Lock size={24} />,
      link: '/wordpress-security-retainer'
    },
    {
      title: 'Secure Hosting',
      description: 'Hardened WordPress hosting with WAF, DDoS protection, and 99.99% uptime SLA.',
      icon: <Database size={24} />,
      link: '/web-hosting-email-services'
    }
  ];

  const faqs = [
    {
      question: "How quickly can you fix a hacked WordPress website?",
      answer:
        "We typically start working immediately upon engagement. Most common malware infections are cleaned within 4-12 hours. Complex cases involving deeply embedded backdoors or database-level compromises may take up to 24 hours, but we prioritise getting your site back online safely."
    },
    {
      question: 'How much does WordPress security cost per month?',
      answer:
        'Our WordPress maintenance plans start at \u00a3449 per month for standard coverage including daily backups, weekly updates, and 24/7 monitoring. For enterprise-grade security retainers with dedicated analysts and SLA guarantees, plans start at \u00a32,999 per month. One-time security audits are available from \u00a31,499.'
    },
    {
      question: 'What happens if my WordPress site gets hacked?',
      answer:
        'If your site is hacked, we perform emergency containment to stop further damage, scan and remove all malware and backdoors, restore clean files from backups where possible, harden your site against future attacks, and monitor for 30 days post-recovery. Our fixed-fee emergency recovery service costs \u00a31,499.'
    },
    {
      question: 'Do you work with agencies on a white-label basis?',
      answer:
        'Yes. A large portion of our clients are digital agencies who white-label our security and maintenance services. We handle the technical security so you can focus on client relationships and growth. All reporting is unbranded and ready for your clients.'
    },
    {
      question: 'What is included in a WordPress security audit?',
      answer:
        'Our security audit includes vulnerability scanning of core, plugins, and themes, server configuration review, user permission analysis, database security assessment, SSL and HTTPS verification, malware scanning, and a detailed remediation report with risk scoring and prioritised recommendations.'
    },
    {
      question: 'How do you prevent WordPress sites from being hacked?',
      answer:
        'We implement a multi-layered security approach: Web Application Firewall, automated malware scanning, real-time threat monitoring, regular security patching, hardened server configurations, two-factor authentication, login attempt limiting, and regular security audits. Prevention is always more cost-effective than recovery.'
    },
    {
      question: 'Can you secure my WooCommerce store?',
      answer:
        'Absolutely. WooCommerce stores require additional security layers to protect customer data and payment information. We implement PCI-compliant configurations, secure payment gateway integration, order data encryption, and fraud detection systems alongside standard WordPress security measures.'
    },
    {
      question: 'Are your services GDPR compliant?',
      answer:
        'Yes. All our services are fully GDPR compliant. We store backups in UK/EU data centres, use encrypted connections for all data transfers, and follow strict data handling procedures. We can also help ensure your WordPress site meets GDPR technical requirements.'
    }
  ];

  const heroTitle =
    "High-ticket WordPress security for elite teams.<br /><span style='color: var(--primary)'>Stop worrying about WordPress security.</span>";
  const heroSubtitle =
    'Security-first retainers for UK businesses. Limited intake so we can deliver enterprise-grade guardrails to every client.';

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

  const schemas = [
    generateOrganizationSchema(),
    generateFAQSchema(faqs),
  ];

  return (
    <>
      <StructuredData schemas={schemas} />

      <Hero title={heroTitle} subtitle={heroSubtitle} showImage={false} />

      <TrustSignals />

      <section className={`${styles.highTicketSection} section-padding`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Curated, high-ticket engagements</h2>
            <p>We partner only with ambitious UK teams that value security, clarity, and lasting uptime.</p>
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
            <p>Security playbooks, uptime SLAs, and measurable results for premium UK brands.</p>
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
            <h2>WordPress Security Services</h2>
            <p>Everything you need to keep your WordPress site secure, fast, and resilient.</p>
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
            <h2>The WebAdish Standard</h2>
            <p>
              We don&apos;t just fix problems; we prevent them. Our proactive approach combines enterprise-grade security
              tools with expert human oversight.
            </p>
            <ul className={styles.benefitsList}>
              <li>
                <strong>Security First:</strong> Every decision we make prioritises the safety of your data and your customers&apos; data.
              </li>
              <li>
                <strong>Speed Obsessed:</strong> We optimise every line of code for maximum performance without compromising security.
              </li>
              <li>
                <strong>Transparent Communication:</strong> No jargon, just clear updates, monthly reports, and honest assessments.
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
