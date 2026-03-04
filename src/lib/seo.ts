import type { Metadata } from 'next';

const SITE_URL = 'https://www.webadish.co.uk';
const SITE_NAME = 'WebAdish';
const DEFAULT_OG_IMAGE = '/og-default.png';
const TWITTER_HANDLE = '@webadish';

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage,
  type = 'website',
  noIndex = false,
  publishedTime,
  modifiedTime,
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const image = ogImage || DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_GB',
      type: type === 'article' ? 'article' : 'website',
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: TWITTER_HANDLE,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export { SITE_URL, SITE_NAME };
