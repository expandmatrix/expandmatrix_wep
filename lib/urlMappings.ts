export type Locale = 'cs' | 'en';

// Define valid URL patterns for each language
export const URL_MAPPINGS = {
  cs: {
    '/': '/',
    '/o-nas': '/o-nas',
    '/sluzby': '/sluzby', 
    '/vps': '/vps',
    '/kontakt': '/kontakt',
  },
  en: {
    '/': '/',
    '/about-us': '/about-us',
    '/services': '/services',
    '/vps': '/vps',
    '/contact': '/contact',
  }
} as const;

// Cross-language URL mappings for redirects
export const CROSS_LANGUAGE_MAPPINGS = {
  // Czech URLs that should redirect when accessed in English context
  'en': {
    '/o-nas': '/about-us',
    '/sluzby': '/services',
    '/kontakt': '/contact',
  },
  // English URLs that should redirect when accessed in Czech context
  'cs': {
    '/about-us': '/o-nas',
    '/services': '/sluzby',
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
