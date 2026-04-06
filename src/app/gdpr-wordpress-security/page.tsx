import { generatePageMetadata } from '@/lib/seo';
import GDPRWordPressArticle from './GDPRWordPressArticle';

export const metadata = generatePageMetadata({
  title: 'GDPR and WordPress Security: What UK Business Owners Must Know | WebAdish',
  description:
    'How GDPR intersects with WordPress security obligations. Covers data breach notification requirements, technical measures, and practical compliance strategies for UK websites.',
  path: '/gdpr-wordpress-security',
  type: 'article',
  publishedTime: '2024-11-14',
  modifiedTime: '2026-03-03',
});

export default GDPRWordPressArticle;
