import { MetadataRoute } from 'next';
import { URL_MAPPINGS, type Locale } from '@/lib/urlMappings';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://expandmatrix.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Define page priorities and change frequencies
  const pageConfig = {
    '/': { priority: 1.0, changeFreq: 'weekly' as const },
    '/o-nas': { priority: 0.8, changeFreq: 'monthly' as const },
    '/about-us': { priority: 0.8, changeFreq: 'monthly' as const },
    '/sluzby': { priority: 0.9, changeFreq: 'weekly' as const },
    '/our-services': { priority: 0.9, changeFreq: 'weekly' as const },
    '/vps': { priority: 0.8, changeFreq: 'weekly' as const },
    '/kontakt': { priority: 0.7, changeFreq: 'monthly' as const },
    '/contact-us': { priority: 0.7, changeFreq: 'monthly' as const },
  };

  // Generate entries for each language
  Object.entries(URL_MAPPINGS).forEach(([locale, urls]) => {
    Object.values(urls).forEach((path) => {
      const config = pageConfig[path as keyof typeof pageConfig];
      if (config) {
        sitemapEntries.push({
          url: `${baseUrl}/${locale}${path === '/' ? '' : path}`,
          lastModified: new Date(),
          changeFrequency: config.changeFreq,
          priority: config.priority,
        });
      }
    });
  });

  return sitemapEntries;
}
