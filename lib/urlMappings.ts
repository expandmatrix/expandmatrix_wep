// Re-export Locale type for convenience
export type { Locale } from './getDictionary';
import type { Locale } from './getDictionary';

// URL mappings between Czech and English routes
export const urlMappings = {
  cs: {
    '/': '/',
    '/sluzby': '/sluzby',
    '/sluzby/ai-balicky': '/sluzby/ai-balicky',
    '/sluzby/ai-systemy-na-miru': '/sluzby/ai-systemy-na-miru',
    '/sluzby/ai-skoleni': '/sluzby/ai-skoleni',
    '/interaktivni-demo': '/interaktivni-demo',
    '/portfolio': '/portfolio',
    '/blog': '/blog',
    '/kontakt': '/kontakt',
    '/o-nas': '/o-nas',
    '/vps': '/vps'
  },
  en: {
    '/': '/',
    '/services': '/services',
    '/services/ai-packages': '/services/ai-packages',
    '/services/custom-ai-systems': '/services/custom-ai-systems',
    '/services/ai-training': '/services/ai-training',
    '/interactive-demo': '/interactive-demo',
    '/portfolio': '/portfolio',
    '/blog': '/blog',
    '/contact': '/contact',
    '/about-us': '/about-us',
    '/vps': '/vps'
  }
} as const;

// Path to the main services page for each supported locale
export const servicesPaths: Record<Locale, string> = {
  cs: '/sluzby',
  en: '/services'
} as const;


// Reverse mappings for language switching
export const reverseUrlMappings = {
  cs: {
    '/': '/',
    '/sluzby': '/services',
    '/sluzby/ai-balicky': '/services/ai-packages',
    '/sluzby/ai-systemy-na-miru': '/services/custom-ai-systems',
    '/sluzby/ai-skoleni': '/services/ai-training',
    '/interaktivni-demo': '/interactive-demo',
    '/portfolio': '/portfolio',
    '/blog': '/blog',
    '/kontakt': '/contact',
    '/o-nas': '/about-us',
    '/vps': '/vps'
  },
  en: {
    '/': '/',
    '/services': '/sluzby',
    '/services/ai-packages': '/sluzby/ai-balicky',
    '/services/custom-ai-systems': '/sluzby/ai-systemy-na-miru',
    '/services/ai-training': '/sluzby/ai-skoleni',
    '/interactive-demo': '/interaktivni-demo',
    '/portfolio': '/portfolio',
    '/blog': '/blog',
    '/contact': '/kontakt',
    '/about-us': '/o-nas',
    '/vps': '/vps'
  }
} as const;

/**
 * Get canonical path for given locale
 * @param path - Current path without locale prefix
 * @param locale - Target locale
 * @returns Canonical path for the locale or null if not found
 */
export function getCanonicalPath(path: string, locale: Locale): string | null {
  // Normalize path (remove trailing slash except for root)
  const normalizedPath = path === '/' ? '/' : path.replace(/\/$/, '');
  
  // Direct mapping exists
  if (urlMappings[locale] && urlMappings[locale][normalizedPath as keyof typeof urlMappings[typeof locale]]) {
    return urlMappings[locale][normalizedPath as keyof typeof urlMappings[typeof locale]];
  }
  
  // Try reverse mapping for language switching
  if (reverseUrlMappings[locale] && reverseUrlMappings[locale][normalizedPath as keyof typeof reverseUrlMappings[typeof locale]]) {
    return reverseUrlMappings[locale][normalizedPath as keyof typeof reverseUrlMappings[typeof locale]];
  }
  
  // Fallback: return the path as-is for unknown routes
  return normalizedPath;
}

/**
 * Get localized path for language switching
 * @param currentPath - Current full path with locale
 * @param targetLocale - Target locale to switch to
 * @returns Localized path for target locale
 */
export function getLocalizedPath(currentPath: string, targetLocale: Locale): string {
  // Extract current locale and path
  const pathParts = currentPath.split('/').filter(Boolean);
  const currentLocale = pathParts[0] as Locale;
  const pathWithoutLocale = '/' + pathParts.slice(1).join('/');
  
  // If switching from current locale, use reverse mapping
  if (currentLocale && reverseUrlMappings[currentLocale]) {
    const targetPath = reverseUrlMappings[currentLocale][pathWithoutLocale as keyof typeof reverseUrlMappings[typeof currentLocale]];
    if (targetPath) {
      return `/${targetLocale}${targetPath === '/' ? '' : targetPath}`;
    }
  }
  
  // Fallback to direct mapping
  const canonicalPath = getCanonicalPath(pathWithoutLocale, targetLocale);
  return `/${targetLocale}${canonicalPath === '/' ? '' : canonicalPath}`;
}

/**
 * Check if path exists for given locale
 * @param path - Path to check
 * @param locale - Locale to check against
 * @returns True if path exists for locale
 */
export function pathExistsForLocale(path: string, locale: Locale): boolean {
  const normalizedPath = path === '/' ? '/' : path.replace(/\/$/, '');
  return !!(urlMappings[locale] && urlMappings[locale][normalizedPath as keyof typeof urlMappings[typeof locale]]);
}

/**
 * Get all available paths for a locale
 * @param locale - Locale to get paths for
 * @returns Array of available paths
 */
export function getAvailablePathsForLocale(locale: Locale): string[] {
  return Object.keys(urlMappings[locale] || {});
}

// Navigation structure for menu generation
export interface NavigationItem {
  href: string;
  label: string;
  children?: NavigationItem[];
}

export const navigationStructure: Record<Locale, NavigationItem[]> = {
  cs: [
    {
      href: '/sluzby',
      label: 'Služby',
      children: [
        { href: '/sluzby/ai-balicky', label: 'AI Balíčky' },
        { href: '/sluzby/ai-systemy-na-miru', label: 'AI Systémy na míru' }
      ]
    },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/komunita', label: 'Komunita' },
    { href: '/blog', label: 'Blog' },
    { href: '/o-nas', label: 'O nás' },
    { href: '/kontakt', label: 'Kontakt' }
  ],
  en: [
    {
      href: '/services',
      label: 'Services',
      children: [
        { href: '/services/ai-packages', label: 'AI Packages' },
        { href: '/services/custom-ai-systems', label: 'Custom AI Systems' }
      ]
    },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/community', label: 'Community' },
    { href: '/blog', label: 'Blog' },
    { href: '/about-us', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ]
};
