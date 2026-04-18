const siteUrl = 'https://www.webadish.co.uk';

const apiCatalog = {
  linkset: [
    {
      anchor: `${siteUrl}/`,
      item: [
        {
          href: `${siteUrl}/hacked-website-recovery-uk`,
          rel: 'service-desc',
          type: 'text/html',
          title: 'Hacked website recovery service',
        },
        {
          href: `${siteUrl}/wordpress-security-audit`,
          rel: 'service-desc',
          type: 'text/html',
          title: 'WordPress security audit service',
        },
        {
          href: `${siteUrl}/contact`,
          rel: 'service-doc',
          type: 'text/html',
          title: 'Contact and incident assessment',
        },
        {
          href: `${siteUrl}/blog`,
          rel: 'service-doc',
          type: 'text/html',
          title: 'Articles and guidance for WordPress security and incident response',
        },
      ],
    },
  ],
};

export async function GET() {
  return Response.json(apiCatalog, {
    headers: {
      'Content-Type': 'application/linkset+json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
