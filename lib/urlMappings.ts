export type Locale = 'cs' | 'en';

// Define valid URL patterns for each language
export const URL_MAPPINGS = {
  '/': { cs: '/', en: '/' },
  '/o-nas': { cs: '/o-nas', en: '/about-us' },
  '/about-us': { cs: '/o-nas', en: '/about-us' },
  '/sluzby': { cs: '/sluzby', en: '/services' },
  '/services': { cs: '/sluzby', en: '/services' },
  '/vps': { cs: '/vps', en: '/vps' },
  '/portfolio': { cs: '/portfolio', en: '/portfolio' },
  '/kontakt': { cs: '/kontakt', en: '/contact' },
  '/contact': { cs: '/kontakt', en: '/contact' },
  '/blog': { cs: '/blog', en: '/blog' },
  '/blog/news': { cs: '/blog/news', en: '/blog/news' },
  '/blog/case-studies': { cs: '/blog/case-studies', en: '/blog/case-studies' },
  '/blog/tutorials': { cs: '/blog/tutorials', en: '/blog/tutorials' },
} as const;

// Cross-language URL mappings for redirects
export const CROSS_LANGUAGE_MAPPINGS = {
  // Czech URLs that should redirect when accessed in English context
  'en': {
    '/o-nas': '/about-us',
    '/sluzby': '/services',
    '/sluzby/ai-balicky': '/services/ai-packages',
    '/sluzby/ai-skoleni': '/services/ai-training',
    '/sluzby/ai-systemy-na-miru': '/services/custom-ai-systems',
    '/kontakt': '/contact',
  },
  // English URLs that should redirect when accessed in Czech context
  'cs': {
    '/about-us': '/o-nas',
    '/services': '/sluzby',
    '/services/ai-packages': '/sluzby/ai-balicky',
    '/services/ai-training': '/sluzby/ai-skoleni',
    '/services/custom-ai-systems': '/sluzby/ai-systemy-na-miru',
    '/contact': '/kontakt',
  }
} as const;

// Get all valid paths for a specific language
export function getValidPathsForLanguage(locale: Locale): string[] {
  return VALID_PATHS_BY_LANGUAGE[locale] || [];
}

// Check if a path is valid for a specific language
export function isValidPathForLanguage(path: string, locale: Locale): boolean {
  return getValidPathsForLanguage(locale).includes(path);
}

// Get redirect path for invalid language/URL combination
export function getRedirectPath(path: string, locale: Locale): string | null {
  const mappings = CROSS_LANGUAGE_MAPPINGS[locale];
  return mappings[path as keyof typeof mappings] || null;
}

// Get canonical URL for a path in a specific language
export function getCanonicalPath(path: string, targetLocale: Locale): string | null {
  // First check if path is valid for target language
  if (isValidPathForLanguage(path, targetLocale)) {
    return path;
  }
  
  // Find the equivalent path in target language
  const sourceLocale = targetLocale === 'cs' ? 'en' : 'cs';
  const sourceMappings = URL_MAPPINGS[sourceLocale];
  const targetMappings = URL_MAPPINGS[targetLocale];
  
  // Find matching path
  for (const [key, value] of Object.entries(sourceMappings)) {
    if (value === path) {
      return targetMappings[key as keyof typeof targetMappings] || null;
    }
  }
  
  return null;
}

export const VALID_PATHS_BY_LANGUAGE = {
  cs: ['/', '/o-nas', '/sluzby', '/vps', '/portfolio', '/kontakt', '/blog', '/blog/news', '/blog/case-studies', '/blog/tutorials'],
  en: ['/', '/about-us', '/services', '/vps', '/portfolio', '/contact', '/blog', '/blog/news', '/blog/case-studies', '/blog/tutorials']
} as const;
