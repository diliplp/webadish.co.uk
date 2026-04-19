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
    slug: 'wordpress-care-plans-uk',
    title: "WordPress Care Plans UK: What's Included and Which Plan Is Right for You",
    excerpt:
      "A practical guide to WordPress care plans for UK businesses — what should be included, what to avoid, how much to pay, and how to choose between a care plan and a security retainer.",
    datePublished: '2026-04-19',
    dateModified: '2026-04-19',
    category: 'Maintenance',
    author: 'WebAdish',
  },
  {
    slug: 'wordpress-hacked-what-to-do',
    title: 'WordPress Hacked: What To Do Right Now',
    excerpt:
      'Your WordPress site has been hacked. Here is the exact sequence to follow — contain first, investigate second, clean third — so you do not make the situation worse before you make it better.',
    datePublished: '2026-04-17',
    dateModified: '2026-04-17',
    category: 'Recovery',
    author: 'WebAdish',
  },
  {
    slug: 'state-of-wordpress-security-2025-uk-business-takeaways',
    title: 'What the State of WordPress Security in 2025 Means for UK Businesses',
    excerpt:
      'Patchstack’s latest WordPress ecosystem data shows why plugin sprawl, weak prioritisation, and cheap cleanup continue to leave UK businesses exposed.',
    datePublished: '2026-04-02',
    dateModified: '2026-04-02',
    category: 'WordPress Security',
    author: 'WebAdish',
  },
  {
    slug: 'do-you-need-to-report-a-hacked-website-to-the-ico',
    title: 'Do You Need to Report a Hacked Website to the ICO?',
    excerpt:
      'A practical guide for UK businesses assessing whether a hacked WordPress site may trigger ICO breach reporting and what the 72-hour rule means operationally.',
    datePublished: '2026-03-31',
    dateModified: '2026-03-31',
    category: 'Guides',
    author: 'WebAdish',
  },
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
    datePublished: '2025-08-12',
    dateModified: '2026-03-03',
    category: 'Recovery',
    author: 'WebAdish',
  },
  {
    slug: 'why-wordpress-sites-get-hacked-7-common-vulnerabilities',
    title: 'Why WordPress Sites Get Hacked: 7 Most Common Vulnerabilities',
    excerpt:
      'Discover the seven most exploited WordPress vulnerabilities, how attackers find them, and the straightforward fixes that eliminate each risk.',
    datePublished: '2024-10-22',
    dateModified: '2026-03-03',
    category: 'WordPress Security',
    author: 'WebAdish',
  },
  {
    slug: 'wordpress-security-ecommerce-protecting-woocommerce',
    title: 'WordPress Security for E-Commerce: Protecting WooCommerce Stores',
    excerpt:
      'WooCommerce stores process payments and store customer data, making them prime targets. Learn the essential security measures every WooCommerce site needs.',
    datePublished: '2024-12-05',
    dateModified: '2026-03-03',
    category: 'WordPress Security',
    author: 'WebAdish',
  },
  {
    slug: 'how-to-choose-wordpress-security-agency-cto-checklist',
    title: 'How to Choose a WordPress Security Agency (CTO Checklist)',
    excerpt:
      'A structured evaluation framework for CTOs and technical decision-makers assessing WordPress security providers. Covers SLAs, certifications, and red flags.',
    datePublished: '2025-01-16',
    dateModified: '2026-03-03',
    category: 'Guides',
    author: 'WebAdish',
  },
  {
    slug: 'true-cost-wordpress-security-breach-uk-smes',
    title: 'The True Cost of a WordPress Security Breach for UK SMEs',
    excerpt:
      'Beyond the ransom: quantifying the real financial impact of a WordPress breach including downtime, data loss, GDPR fines, and reputational damage for UK businesses.',
    datePublished: '2025-03-04',
    dateModified: '2026-03-03',
    category: 'WordPress Security',
    author: 'WebAdish',
  },
  {
    slug: 'gdpr-wordpress-security',
    title: 'GDPR and WordPress Security: What UK Business Owners Must Know',
    excerpt:
      'How GDPR intersects with WordPress security obligations. Covers data breach notification requirements, technical measures, and compliance strategies.',
    datePublished: '2024-11-14',
    dateModified: '2026-03-03',
    category: 'WordPress Security',
    author: 'WebAdish',
  },
  {
    slug: 'wordpress-incident-response-plan-template',
    title: 'Incident Response Plan Template for WordPress Website Owners',
    excerpt:
      'A ready-to-use incident response plan template specifically designed for WordPress sites, covering detection, containment, eradication, and recovery phases.',
    datePublished: '2025-05-20',
    dateModified: '2026-03-03',
    category: 'Guides',
    author: 'WebAdish',
  },
  {
    slug: 'wordpress-maintenance-service-uk-what-is-included-and-how-much-it-costs',
    title: "WordPress Maintenance Service UK: What's Included & How Much It Costs",
    excerpt:
      "Everything UK businesses need to know about WordPress maintenance services — what's included, what it costs, and how to choose the right plan.",
    datePublished: '2026-01-15',
    dateModified: '2026-03-09',
    category: 'Maintenance',
    author: 'WebAdish',
  },
  {
    slug: 'wordpress-site-keeps-getting-hacked',
    title: "WordPress Site Keeps Getting Hacked? Here's Why & How to Stop It",
    excerpt:
      'If your WordPress site keeps getting hacked even after cleanup, backdoors are almost certainly the cause. Learn why repeat hacks happen and how to break the cycle permanently.',
    datePublished: '2026-03-09',
    dateModified: '2026-03-09',
    category: 'Recovery',
    author: 'WebAdish',
  },
  // Legacy posts (kept)
  {
    slug: 'revive-your-site-a-practical-guide-to-manually-restoring-your-wordpress-website',
    title: 'A Practical Guide to Manually Restoring Your WordPress Website',
    excerpt:
      'Step-by-step walkthrough of manual WordPress restoration, from database recovery to file-level repair.',
    datePublished: '2024-07-18',
    dateModified: '2026-03-03',
    category: 'Recovery',
    author: 'WebAdish',
  },
];
