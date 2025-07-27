export type Locale = 'cs' | 'en';

// Define valid URL patterns for each language
export const URL_MAPPINGS = {
  '/': { cs: '/', en: '/' },
  '/o-nas': { cs: '/o-nas', en: '/about-us' },
  '/about-us': { cs: '/o-nas', en: '/about-us' },
  '/sluzby': { cs: '/sluzby', en: '/services' },
  '/services': { cs: '/sluzby', en: '/services' },
  '/sluzby/ai-systemy-na-miru': { cs: '/sluzby/ai-systemy-na-miru', en: '/services/custom-ai-systems' },
  '/services/custom-ai-systems': { cs: '/sluzby/ai-systemy-na-miru', en: '/services/custom-ai-systems' },
  '/sluzby/ai-balicky': { cs: '/sluzby/ai-balicky', en: '/services/ai-packages' },
  '/services/ai-packages': { cs: '/sluzby/ai-balicky', en: '/services/ai-packages' },
  '/sluzby/ai-skoleni': { cs: '/sluzby/ai-skoleni', en: '/services/ai-training' },
  '/services/ai-training': { cs: '/sluzby/ai-skoleni', en: '/services/ai-training' },
  '/vps': { cs: '/vps', en: '/vps' },
  '/portfolio': { cs: '/portfolio', en: '/portfolio' },
  '/kontakt': { cs: '/kontakt', en: '/contact' },
  '/contact': { cs: '/kontakt', en: '/contact' },
  '/blog': { cs: '/blog', en: '/blog' },
  '/blog/news': { cs: '/blog/news', en: '/blog/news' },
  '/blog/case-studies': { cs: '/blog/case-studies', en: '/blog/case-studies' },
  '/blog/tutorials': { cs: '/blog/tutorials', en: '/blog/tutorials' },
} as const;

export function isValidPathForLanguage(path: string, locale: Locale): boolean {
  const mapping = URL_MAPPINGS[path as keyof typeof URL_MAPPINGS];
  return mapping ? mapping[locale] === path : false;
}

export function getRedirectPath(path: string, locale: Locale): string | null {
  const mapping = URL_MAPPINGS[path as keyof typeof URL_MAPPINGS];
  return mapping ? mapping[locale] : null;
}
