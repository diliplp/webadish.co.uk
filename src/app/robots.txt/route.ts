const robotsBody = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /private/
Disallow: /admin/
Disallow: /lp/

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

Content-Signal: ai-train=no, search=yes, ai-input=yes
Sitemap: https://www.webadish.co.uk/sitemap.xml
`;

export async function GET() {
  return new Response(robotsBody, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
