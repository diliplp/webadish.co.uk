import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import StructuredData from '@/components/StructuredData';
import { generatePageMetadata } from '@/lib/seo';
import { generateBreadcrumbSchema } from '@/lib/schema';
import { BLOG_POSTS } from '@/data/posts';

export const metadata = generatePageMetadata({
  title: 'WordPress Security Blog UK | Malware, GDPR & Incident Response Insights',
  description:
    'Expert WordPress security guides for UK businesses covering malware removal, incident response, GDPR exposure, audits, and ongoing protection.',
  path: '/blog',
});

export default function BlogIndex() {
  const schemas = [
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' },
    ]),
  ];

  const categories = ['All', ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))];
  const sortedPosts = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );

  return (
    <>
      <StructuredData schemas={schemas} />

      <PageHeader
        title="WordPress Security <br /><span style='color: var(--primary)'>Blog</span>"
        subtitle="Expert guides, threat analysis, and practical security advice informed by 20+ years in business and hands-on web operations."
        badge="Security Insights"
      />

      <section className="section-padding">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            {[
              { href: '/wordpress-security-audit', label: 'Security Audit', desc: 'Start with a formal review of your risk posture.' },
              { href: '/hacked-website-recovery-uk', label: 'Hacked Site Recovery', desc: 'For urgent malware, blacklist, and compromise response.' },
              { href: '/wordpress-security-retainer', label: 'Security Retainer', desc: 'For ongoing monitoring and monthly security oversight.' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  textDecoration: 'none',
                }}
              >
                <div style={{ color: 'var(--foreground)', fontWeight: 700, marginBottom: '0.35rem' }}>{item.label}</div>
                <p style={{ color: '#a1a1aa', margin: 0, lineHeight: 1.6, fontSize: '0.92rem' }}>{item.desc}</p>
              </Link>
            ))}
          </div>

          {/* Category tags */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {categories.map((cat) => (
              <span
                key={cat}
                style={{
                  padding: '0.4rem 1rem',
                  borderRadius: '20px',
                  border: '1px solid var(--border)',
                  fontSize: '0.85rem',
                  color: cat === 'All' ? 'var(--foreground)' : '#a1a1aa',
                  background: cat === 'All' ? 'var(--surface)' : 'transparent',
                }}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Blog posts grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem',
          }}>
            {sortedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/${post.slug}`}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '2rem',
                  transition: 'border-color 0.2s ease, transform 0.2s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                }}
              >
                <span style={{
                  color: 'var(--primary)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.75rem',
                }}>
                  {post.category}
                </span>
                <h2 style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--foreground)',
                  marginBottom: '0.75rem',
                  lineHeight: 1.3,
                }}>
                  {post.title}
                </h2>
                <p style={{
                  color: '#a1a1aa',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  flex: 1,
                }}>
                  {post.excerpt}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '1.25rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border)',
                  fontSize: '0.85rem',
                  color: '#71717a',
                }}>
                  <time dateTime={post.datePublished}>
                    {new Date(post.datePublished).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </time>
                  <span style={{ color: 'var(--primary)' }}>Read more &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Need Immediate Security Help?"
        subtitle="Whether you need a security audit, ongoing protection, or emergency recovery, our WordPress security experts are ready to help."
      />
    </>
  );
}
