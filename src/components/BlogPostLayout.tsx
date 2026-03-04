import type { ReactNode } from 'react';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';
import styles from './BlogPostLayout.module.scss';

interface BlogPostLayoutProps {
  title: string;
  lead: string;
  kicker?: string;
  children: ReactNode;
  ctaText?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  category?: string;
  slug?: string;
  summaryPoints?: string[];
}

export default function BlogPostLayout({
  title,
  lead,
  kicker = 'WordPress Security',
  children,
  ctaText,
  datePublished,
  dateModified,
  author = 'WebAdish',
  category,
  slug,
  summaryPoints,
}: BlogPostLayoutProps) {
  const schemas = [];

  if (slug && datePublished) {
    schemas.push(
      generateArticleSchema(
        title,
        lead,
        datePublished,
        dateModified || datePublished,
        `/${slug}`
      )
    );
  }

  schemas.push(
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: title, url: `/${slug || ''}` },
    ])
  );

  return (
    <main className={styles.wrapper}>
      {schemas.length > 0 && <StructuredData schemas={schemas} />}

      <article className={`container ${styles.article}`}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ fontSize: '0.85rem', color: '#a1a1aa', marginBottom: '1.5rem' }}>
          <Link href="/" style={{ color: '#a1a1aa' }}>Home</Link>
          <span style={{ margin: '0 0.5rem' }}>/</span>
          <Link href="/blog" style={{ color: '#a1a1aa' }}>Blog</Link>
          <span style={{ margin: '0 0.5rem' }}>/</span>
          <span style={{ color: 'var(--foreground)' }}>{title}</span>
        </nav>

        <span className={styles.kicker}>{category || kicker}</span>
        <h1 className={styles.title}>{title}</h1>

        {/* Meta line */}
        {(datePublished || author) && (
          <div style={{ fontSize: '0.9rem', color: '#a1a1aa', marginBottom: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {author && <span>By {author}</span>}
            {datePublished && (
              <time dateTime={datePublished}>
                {new Date(datePublished).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </time>
            )}
          </div>
        )}

        <p className={styles.lead}>{lead}</p>

        {/* Summary box */}
        {summaryPoints && summaryPoints.length > 0 && (
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '2rem',
          }}>
            <strong style={{ color: 'var(--primary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Key Takeaways
            </strong>
            <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem', lineHeight: '1.8' }}>
              {summaryPoints.map((point, i) => (
                <li key={i} style={{ color: 'var(--foreground)' }}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        <div className={styles.content}>{children}</div>

        {ctaText ? <p className={styles.cta}>{ctaText}</p> : (
          <div style={{
            background: 'linear-gradient(135deg, var(--surface), rgba(99, 102, 241, 0.1))',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '2rem',
            marginTop: '3rem',
            textAlign: 'center',
          }}>
            <h3 style={{ color: 'var(--foreground)', marginBottom: '0.75rem' }}>Need Help With WordPress Security?</h3>
            <p style={{ color: '#a1a1aa', marginBottom: '1.25rem' }}>
              Get a professional security audit or speak to our team about protecting your WordPress site.
            </p>
            <Link href="/contact-webadish-web-design" className="btn btn-primary">
              Request a Security Review
            </Link>
          </div>
        )}
      </article>
    </main>
  );
}
