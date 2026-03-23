# webadish.co.uk — Codex Context

## This project
Next.js 15 App Router site for **UK WordPress security & maintenance** services.
- **Domain:** webadish.co.uk
- **Repo:** github.com/diliplp/webadish-uk (private)
- **Hosting:** Vercel
- **Local path:** `/Users/dilipparmar/projects2/webadishuk-git/webadish-uk`

## Sister site
**webadish.com** is a separate project for the global and India market.
- Local path: `/Users/dilipparmar/projects2/webadish-websites/webadish-com`
- Repo: github.com/diliplp/webadish-bright

**Cross-project sync file** (read this to see what's changed on .com and shared decisions):
`/Users/dilipparmar/projects2/webadish-websites/shared-brand-sync.md`

Only sync infrastructure-level or genuinely shared brand behavior. Do not sync pricing, positioning, SEO copy, navigation, or trust messaging across the two sites unless explicitly requested.

## Stack
- Next.js 15, TypeScript, SCSS Modules
- Vercel Analytics + GTM (GTM-NZLQFW58) + Google Ads (AW-17995549251) — consent-gated via CookieBanner
- Nodemailer contact form at `/api/contact`

## Focus
UK audience. Premium WordPress incident response and security retainers. Emergency-driven tone.
All content references UK context: GDPR, ICO, £GBP pricing, "UK businesses".

## Key files
- `src/lib/seo.ts` — SITE_URL = webadish.co.uk, locale en_GB
- `src/lib/schema.ts` — JSON-LD generators (ServiceSchema, FAQSchema, BreadcrumbSchema, ArticleSchema)
- `src/lib/routes.ts` — sitemap route config
- `src/data/posts.ts` — blog post metadata registry
- `src/components/` — 28 shared components
- `next.config.ts` — redirects for old WordPress URLs

## SEO status (as of 2026-03-15)
- 512 impressions/day (up from 48/day in early March)
- `/wordpress-maintenance-uk` — 903 impressions/wk, pos 82.54 (improving)
- `/wordpress-malware-removal` — pos 4.73 for "wordpress malware removal uk"
- `/wordpress-site-keeps-getting-hacked` — pos 35.66, 2 clicks
- Daily SEO tracker scheduled at 8am: `seo-tracker/daily-reports/`
