import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const siteUrl = 'https://www.webadish.co.uk';
const apiCatalogLinkHeader = `</.well-known/api-catalog>; rel="api-catalog"`;

const homepageMarkdown = `# WebAdish UK

WebAdish provides premium WordPress incident response, malware cleanup, forensic recovery, security audits, and ongoing security retainers for UK businesses.

## Core services

- [Hacked Website Recovery UK](${siteUrl}/hacked-website-recovery-uk)
- [WordPress Malware Removal](${siteUrl}/wordpress-malware-removal)
- [WordPress Security Audit](${siteUrl}/wordpress-security-audit)
- [WordPress Security Retainer](${siteUrl}/wordpress-security-retainer)

## Useful supporting pages

- [Contact](${siteUrl}/contact)
- [Blog](${siteUrl}/blog)
- [API Catalog](${siteUrl}/.well-known/api-catalog)

## Positioning

This site is designed for business-critical WordPress incidents, repeat-hack prevention, and security hardening rather than low-cost generic maintenance.
`;

function wantsMarkdown(request: NextRequest) {
  const accept = request.headers.get('accept') || '';
  return accept.includes('text/markdown');
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/' && wantsMarkdown(request)) {
    return new NextResponse(homepageMarkdown, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Cache-Control': 'public, max-age=300',
        Link: apiCatalogLinkHeader,
        Vary: 'Accept',
      },
    });
  }

  const response = NextResponse.next();

  if (pathname === '/') {
    response.headers.set('Link', apiCatalogLinkHeader);
    response.headers.set('Vary', 'Accept');
  }

  return response;
}

export const config = {
  matcher: ['/'],
};
