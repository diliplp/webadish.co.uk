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
      { source: '/wordpress-maintenance-au', destination: '/wordpress-maintenance-australia', permanent: true },
      { source: '/hacked-website-recovery', destination: '/hacked-website-recovery-uk', permanent: true },
      { source: '/hacked-site-recovery', destination: '/hacked-website-recovery-uk', permanent: true },
      { source: '/web-development', destination: '/web-development-services', permanent: true },
      { source: '/web-hosting', destination: '/web-hosting-email-services', permanent: true },
      { source: '/hosting-email', destination: '/web-hosting-email-services', permanent: true },
      { source: '/digital-marketing', destination: '/digital-marketing-london', permanent: true },
      { source: '/custom-web-design', destination: '/custom-web-design-services-london', permanent: true },

      // Policies
      { source: '/terms', destination: '/terms-conditions', permanent: true },
      { source: '/privacy', destination: '/privacy-policy', permanent: true }
    ];
  }
};

export default nextConfig;
