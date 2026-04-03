import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy core pages
      { source: '/about', destination: '/about-webadish-web-agency', permanent: true },
      { source: '/contact-webadish-web-design', destination: '/contact', permanent: true },
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
      { source: '/10-inspiring-beautifully-designed-websites', destination: 'https://www.webadish.com/web-design', permanent: true },
      { source: '/10-inspiring-beautifully-designed-websites/', destination: 'https://www.webadish.com/web-design', permanent: true },
      { source: '/the-top-web-design-trends-to-watch-in-2024', destination: '/blog', permanent: true },
      { source: '/a-comprehensive-website-solution-for-your-businesss-online-growth-waas', destination: '/blog', permanent: true },

      // Policies
      { source: '/terms', destination: '/terms-conditions', permanent: true },
      { source: '/privacy', destination: '/privacy-policy', permanent: true },

      // Old WordPress 404s from GSC coverage report (2026-03-09)
      { source: '/ai-trends-for-web-designers', destination: '/blog', permanent: true },
      { source: '/ai-trends-for-web-designers/', destination: '/blog', permanent: true },
      { source: '/web-design-development-email-hosting-services', destination: '/web-hosting-email-services', permanent: true },
      { source: '/web-design-development-email-hosting-services/', destination: '/web-hosting-email-services', permanent: true },
      { source: '/design', destination: '/web-design-services', permanent: true },
      { source: '/design/', destination: '/web-design-services', permanent: true },
      { source: '/support-hosting', destination: '/web-hosting-email-services', permanent: true },
      { source: '/support-hosting/', destination: '/web-hosting-email-services', permanent: true },

      // Old WordPress blog posts & author archives (from GSC "Crawled not indexed" report 2026-03-11)
      { source: '/10-common-web-design-mistakes-to-avoid', destination: '/blog', permanent: true },
      { source: '/10-common-web-design-mistakes-to-avoid/', destination: '/blog', permanent: true },
      { source: '/author/:path*', destination: '/about-webadish-web-agency', permanent: true },

      // Old WordPress hacked-site post → new blog post (357 impressions, consolidate link equity)
      { source: '/signs-your-wordpress-website-has-been-hacked-and-what-to-do-next-in-london', destination: '/wordpress-site-keeps-getting-hacked', permanent: true },
      { source: '/signs-your-wordpress-website-has-been-hacked-and-what-to-do-next-in-london/', destination: '/wordpress-site-keeps-getting-hacked', permanent: true },
      { source: '/gdpr-wordpress-security-uk-business-owners', destination: '/gdpr-wordpress-security', permanent: true },
      { source: '/gdpr-wordpress-security-uk-business-owners/', destination: '/gdpr-wordpress-security', permanent: true },

      // WordPress-specific paths (from old WordPress site — fix 404s + 403s in GSC)
      { source: '/wp-login.php', destination: '/', permanent: true },
      { source: '/xmlrpc.php', destination: '/', permanent: true },
      { source: '/wp-admin', destination: '/', permanent: true },
      { source: '/wp-admin/:path*', destination: '/', permanent: true },
      { source: '/wp-content/:path*', destination: '/', permanent: true },
      { source: '/wp-includes/:path*', destination: '/', permanent: true },
      { source: '/wp-json/:path*', destination: '/', permanent: true },
      { source: '/feed', destination: '/blog', permanent: true },
      { source: '/feed/', destination: '/blog', permanent: true },
      // Note: /?feed=rss2 (query string) cannot be matched in Next.js redirect source
      // — handled at Cloudflare level or ignored (negligible traffic)
    ];
  },
};

export default nextConfig;
