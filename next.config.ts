import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy core pages
      { source: '/about', destination: '/about-webadish-web-agency', permanent: true },
      { source: '/contact', destination: '/contact-webadish-web-design', permanent: true },
      { source: '/portfolio', destination: '/web-design-portfolio', permanent: true },
      { source: '/services', destination: '/web-design-services', permanent: true },

      // Legacy service slugs
      { source: '/wordpress-maintenance', destination: '/wordpress-maintenance-uk', permanent: true },
      { source: '/wordpress-maintenance-uk-london', destination: '/wordpress-maintenance-uk', permanent: true },
      { source: '/hacked-website-recovery', destination: '/hacked-website-recovery-uk', permanent: true },
      { source: '/hacked-site-recovery', destination: '/hacked-website-recovery-uk', permanent: true },
      { source: '/web-development', destination: '/web-development-services', permanent: true },
      { source: '/web-hosting', destination: '/web-hosting-email-services', permanent: true },
      { source: '/hosting-email', destination: '/web-hosting-email-services', permanent: true },

      // Removed off-brand pages → redirect to relevant pages
      { source: '/branding-services', destination: '/about-webadish-web-agency', permanent: true },
      { source: '/digital-marketing-london', destination: '/', permanent: true },
      { source: '/digital-marketing', destination: '/', permanent: true },
      { source: '/custom-web-design-services-london', destination: '/web-design-services', permanent: true },
      { source: '/custom-web-design', destination: '/web-design-services', permanent: true },

      // Removed Australia pages → redirect to UK equivalents
      { source: '/wordpress-maintenance-australia', destination: '/wordpress-maintenance-uk', permanent: true },
      { source: '/wordpress-maintenance-au', destination: '/wordpress-maintenance-uk', permanent: true },
      { source: '/hacked-website-recovery-australia', destination: '/hacked-website-recovery-uk', permanent: true },

      // Special offers → Security audit page
      { source: '/special-offers', destination: '/wordpress-security-audit', permanent: true },

      // Blog rename
      { source: '/web-design-blog', destination: '/blog', permanent: true },

      // Redirect generic web design blog posts to blog index
      { source: '/10-inspiring-beautifully-designed-websites', destination: '/blog', permanent: true },
      { source: '/the-top-web-design-trends-to-watch-in-2024', destination: '/blog', permanent: true },
      { source: '/a-comprehensive-website-solution-for-your-businesss-online-growth-waas', destination: '/blog', permanent: true },

      // Policies
      { source: '/terms', destination: '/terms-conditions', permanent: true },
      { source: '/privacy', destination: '/privacy-policy', permanent: true },
    ];
  },
};

export default nextConfig;
