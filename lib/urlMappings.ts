export type Locale = 'cs' | 'en';

// Define valid URL patterns for each language
export const URL_MAPPINGS = {
  cs: {
    '/': '/',
    '/o-nas': '/o-nas',
    '/sluzby': '/sluzby',
    '/sluzby/ai-balicky': '/sluzby/ai-balicky',
    '/sluzby/ai-skoleni': '/sluzby/ai-skoleni',
    '/sluzby/ai-systemy-na-miru': '/sluzby/ai-systemy-na-miru',
    '/vps': '/vps',
    '/portfolio': '/portfolio',
    '/kontakt': '/kontakt',
  },
  en: {
    '/': '/',
    '/about-us': '/about-us',
    '/services': '/services',
    '/services/ai-packages': '/services/ai-packages',
    '/services/ai-training': '/services/ai-training',
    '/services/custom-ai-systems': '/services/custom-ai-systems',
    '/vps': '/vps',
    '/portfolio': '/portfolio',
    '/contact': '/contact',
  }
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
  return Object.values(URL_MAPPINGS[locale]);
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
