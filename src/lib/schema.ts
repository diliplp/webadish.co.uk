import { SITE_URL } from './seo';

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'WebAdish',
    url: `${SITE_URL}/`,
    telephone: '+441923751614',
    email: 'sales@webadish.co.uk',
    logo: `${SITE_URL}/brand/webadish-logo-white.png`,
    description:
      'High-ticket WordPress security, maintenance, and recovery retainers for UK businesses.',
    areaServed: 'United Kingdom',
    serviceType: 'WordPress Security & Maintenance',
    priceRange: '$$$',
    foundingDate: '2020',
    knowsAbout: [
      'WordPress Security',
      'Malware Removal',
      'Website Maintenance',
      'GDPR Compliance',
      'WordPress Hosting',
      'Hacked Website Recovery',
      'WordPress Security Audits',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'WordPress Security Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'WordPress Security Audit',
            description: 'Comprehensive security assessment for WordPress websites',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'WordPress Maintenance Retainer',
            description: 'Ongoing security monitoring, updates, and maintenance',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Hacked Website Recovery',
            description: 'Emergency malware removal and site restoration',
          },
        },
      ],
    },
  };
}

export function generateServiceSchema(
  name: string,
  description: string,
  url: string,
  priceRange?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: {
      '@type': 'Organization',
      name: 'WebAdish',
      url: `${SITE_URL}/`,
    },
    areaServed: 'United Kingdom',
    ...(priceRange && { priceRange }),
  };
}

export function generateFAQSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function generateArticleSchema(
  title: string,
  description: string,
  datePublished: string,
  dateModified: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    dateModified,
    url: `${SITE_URL}${url}`,
    author: {
      '@type': 'Organization',
      name: 'WebAdish',
      url: `${SITE_URL}/`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'WebAdish',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/brand/webadish-logo-white.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${url}`,
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateHowToSchema(
  name: string,
  description: string,
  steps: { name: string; text: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}
