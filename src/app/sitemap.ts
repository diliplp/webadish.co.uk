import { MetadataRoute } from 'next';
import { ALL_ROUTES } from '@/lib/routes';
import { BLOG_POSTS } from '@/data/posts';

const BASE_URL = 'https://www.webadish.co.uk';

export default function sitemap(): MetadataRoute.Sitemap {
    const pageRoutes = ALL_ROUTES.map((route) => ({
        url: `${BASE_URL}${route.path}`,
        lastModified: new Date(route.lastModified),
        changeFrequency: route.changeFreq as MetadataRoute.Sitemap[number]['changeFrequency'],
        priority: route.priority,
    }));

    const blogRoutes = BLOG_POSTS.map((post) => ({
        url: `${BASE_URL}/${post.slug}`,
        lastModified: new Date(post.dateModified || post.datePublished),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...pageRoutes, ...blogRoutes];
}
