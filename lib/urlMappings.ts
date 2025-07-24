export type Locale = 'cs' | 'en';

// URL mappings for different languages
export const URL_MAPPINGS: Record<string, Record<Locale, string>> = {
  '/': {
    cs: '/',
    en: '/'
  },
  '/about': {
    cs: '/o-nas',
    en: '/about-us'
  },
  '/services': {
    cs: '/sluzby',
    en: '/our-services'
  },
  '/contact': {
    cs: '/kontakt',
    en: '/contact'
  },
  '/vps': {
    cs: '/vps',
    en: '/vps'
  }
};

// Reverse mapping for redirects
const REVERSE_MAPPINGS: Record<Locale, Record<string, string>> = {
  cs: {
    '/o-nas': '/about',
    '/sluzby': '/services',
    '/kontakt': '/contact',
    '/vps': '/vps'
  },
  en: {
    '/about-us': '/about',
    '/our-services': '/services',
    '/contact': '/contact',
    '/vps': '/vps'
  }
};

export function isValidPathForLanguage(path: string, locale: Locale): boolean {
  // Root path is always valid
  if (path === '/') return true;
  
  // Check if path exists in URL_MAPPINGS for this locale
  for (const [basePath, localeMap] of Object.entries(URL_MAPPINGS)) {
    if (localeMap[locale] === path) {
      return true;
    }
  }
  
  return false;
}

export function getRedirectPath(path: string, locale: Locale): string | null {
  // Check reverse mappings
  const reverseMap = REVERSE_MAPPINGS[locale];
  if (reverseMap[path]) {
    const basePath = reverseMap[path];
    return URL_MAPPINGS[basePath]?.[locale] || null;
  }
  
  return null;
}
