import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/schema';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schema = generateBreadcrumbSchema(items);

  return (
    <>
      <StructuredData schemas={[schema]} />
      <nav
        aria-label="Breadcrumb"
        style={{
          fontSize: '0.85rem',
          color: '#a1a1aa',
          marginBottom: '1.5rem',
          paddingTop: '1rem',
        }}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <span key={item.url}>
              {index > 0 && <span style={{ margin: '0 0.5rem' }}>/</span>}
              {isLast ? (
                <span style={{ color: 'var(--foreground)' }}>{item.name}</span>
              ) : (
                <Link href={item.url} style={{ color: '#a1a1aa' }}>
                  {item.name}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}
