export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  datePublished: string;
  dateModified: string;
  category: 'WordPress Security' | 'Maintenance' | 'Recovery' | 'Guides';
  author: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'wordpress-security-checklist-2026-complete-guide-uk',
    title: 'WordPress Security Checklist 2026: Complete Guide for UK Businesses',
    excerpt:
      'A comprehensive security checklist covering every layer of WordPress protection, from hosting configuration to user permissions, tailored for UK businesses.',
    datePublished: '2026-03-03',
    dateModified: '2026-03-03',
    category: 'WordPress Security',
    author: 'WebAdish',
  },
  {
    slug: 'how-much-does-wordpress-malware-removal-cost-uk',
    title: 'How Much Does WordPress Malware Removal Cost in the UK?',
    excerpt:
      'A transparent breakdown of WordPress malware removal pricing in the UK, what affects the cost, and how to avoid overpaying for emergency recovery services.',
    datePublished: '2026-03-03',
    dateModified: '2026-03-03',
    category: 'Recovery',
    author: 'WebAdish',
  },
  {
    slug: 'why-wordpress-sites-get-hacked-7-common-vulnerabilities',
    title: 'Why WordPress Sites Get Hacked: 7 Most Common Vulnerabilities',
    excerpt:
      'Discover the seven most exploited WordPress vulnerabilities, how attackers find them, and the straightforward fixes that eliminate each risk.',
    datePublished: '2026-03-03',
    dateModified: '2026-03-03',
    category: 'WordPress Security',
    author: 'WebAdish',
  },
  {
    slug: 'wordpress-security-ecommerce-protecting-woocommerce',
    title: 'WordPress Security for E-Commerce: Protecting WooCommerce Stores',
    excerpt:
      'WooCommerce stores process payments and store customer data, making them prime targets. Learn the essential security measures every WooCommerce site needs.',
    datePublished: '2026-03-03',
    dateModified: '2026-03-03',
    category: 'WordPress Security',
    author: 'WebAdish',
  },
  {
    slug: 'how-to-choose-wordpress-security-agency-cto-checklist',
    title: 'How to Choose a WordPress Security Agency (CTO Checklist)',
    excerpt:
      'A structured evaluation framework for CTOs and technical decision-makers assessing WordPress security providers. Covers SLAs, certifications, and red flags.',
    datePublished: '2026-03-03',
    dateModified: '2026-03-03',
    category: 'Guides',
    author: 'WebAdish',
  },
  {
    slug: 'true-cost-wordpress-security-breach-uk-smes',
    title: 'The True Cost of a WordPress Security Breach for UK SMEs',
    excerpt:
      'Beyond the ransom: quantifying the real financial impact of a WordPress breach including downtime, data loss, GDPR fines, and reputational damage for UK businesses.',
    datePublished: '2026-03-03',
    dateModified: '2026-03-03',
    category: 'WordPress Security',
    author: 'WebAdish',
  },
  {
    slug: 'gdpr-wordpress-security-uk-business-owners',
    title: 'GDPR and WordPress Security: What UK Business Owners Must Know',
    excerpt:
      'How GDPR intersects with WordPress security obligations. Covers data breach notification requirements, technical measures, and compliance strategies.',
    datePublished: '2026-03-03',
    dateModified: '2026-03-03',
    category: 'WordPress Security',
    author: 'WebAdish',
  },
  {
    slug: 'wordpress-incident-response-plan-template',
    title: 'Incident Response Plan Template for WordPress Website Owners',
    excerpt:
      'A ready-to-use incident response plan template specifically designed for WordPress sites, covering detection, containment, eradication, and recovery phases.',
    datePublished: '2026-03-03',
    dateModified: '2026-03-03',
    category: 'Guides',
    author: 'WebAdish',
  },
  // Legacy posts (kept)
  {
    slug: 'signs-your-wordpress-website-has-been-hacked-and-what-to-do-next-in-london',
    title: 'Signs Your WordPress Website Has Been Hacked and What to Do Next',
    excerpt:
      'Early warning signs of a WordPress hack, immediate containment steps, and a response checklist for UK business owners.',
    datePublished: '2025-06-15',
    dateModified: '2026-03-03',
    category: 'Recovery',
    author: 'WebAdish',
  },
  {
    slug: 'revive-your-site-a-practical-guide-to-manually-restoring-your-wordpress-website',
    title: 'A Practical Guide to Manually Restoring Your WordPress Website',
    excerpt:
      'Step-by-step walkthrough of manual WordPress restoration, from database recovery to file-level repair.',
    datePublished: '2025-06-01',
    dateModified: '2026-03-03',
    category: 'Recovery',
    author: 'WebAdish',
  },
];
