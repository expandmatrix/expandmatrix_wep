import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isValidLocale, type Locale } from '@/lib/getDictionary';
import { pathExistsForLocale, getCanonicalPath } from '@/lib/urlMappings';

// Valid paths for each language
const validPaths = {
  cs: [
    '/',
    '/sluzby',
    '/sluzby/ai-balicky',
    '/sluzby/ai-systemy-na-miru',
    '/sluzby/ai-skoleni',
    '/interaktivni-demo',
    '/komunita',
    '/portfolio',
    '/blog',
    '/blog/*',
    '/o-nas',
    '/kontakt',
    '/vps',
    '/systrix/vps'
  ],
  en: [
    '/',
    '/services',
    '/services/ai-packages',
    '/services/custom-ai-systems',
    '/services/ai-training',
    '/interactive-demo',
    '/community',
    '/portfolio',
    '/blog',
    '/blog/*',
    '/about-us',
    '/contact',
    '/vps',
    '/systrix/vps'
  ]
};

function isValidPathForLanguage(path: string, locale: Locale): boolean {
  const normalizedPath = path === '/' ? '/' : path.replace(/\/$/, '');
  const paths = validPaths[locale] || [];
  return paths.some((p) => {
    if (p.endsWith('/*')) {
      const base = p.slice(0, -1);
      return normalizedPath.startsWith(base);
    }
    return normalizedPath === p;
  });
}

function getRedirectPath(path: string, locale: Locale): string | null {
  // Path mappings for redirects
  const redirectMappings = {
    cs: {
      '/services': '/sluzby',
      '/services/ai-packages': '/sluzby/ai-balicky',
      '/services/custom-ai-systems': '/sluzby/ai-systemy-na-miru',
      '/services/ai-training': '/sluzby/ai-skoleni',
      '/services/interactive-demo': '/interaktivni-demo',
      '/community': '/komunita',
      '/about-us': '/o-nas',
      '/contact': '/kontakt'
    },
    en: {
      '/sluzby': '/services',
      '/sluzby/ai-balicky': '/services/ai-packages',
      '/sluzby/ai-systemy-na-miru': '/services/custom-ai-systems',
      '/sluzby/ai-skoleni': '/services/ai-training',
      '/sluzby/interaktivni-demo': '/interactive-demo',
      '/komunita': '/community',
      '/o-nas': '/about-us',
      '/kontakt': '/contact'
    }
  };

  const normalizedPath = path === '/' ? '/' : path.replace(/\/$/, '');
  return redirectMappings[locale]?.[normalizedPath] || null;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const search = request.nextUrl.search;

  // Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.includes('.') ||
    pathname.startsWith('/favicon')
  ) {
    return NextResponse.next();
  }

  // Extract locale from pathname
  const segments = pathname.split('/').filter(Boolean);
  const maybeLocale = segments[0];
  const pathWithoutLocale = '/' + segments.slice(1).join('/');

  // Check if first segment is a valid locale
  if (isValidLocale(maybeLocale)) {
    const currentLocale = maybeLocale as Locale;
    
    // Check if path is valid for current language
    if (!isValidPathForLanguage(pathWithoutLocale, currentLocale)) {
      const redirectPath = getRedirectPath(pathWithoutLocale, currentLocale);
      
      if (redirectPath) {
        const redirectUrl = new URL(`/${currentLocale}${redirectPath}${search}`, request.url);
        const response = NextResponse.redirect(redirectUrl, 301);
        
        response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
        response.cookies.set('NEXT_LOCALE', currentLocale, {
          maxAge: 365 * 24 * 60 * 60,
          httpOnly: false,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax'
        });
        
        return response;
      } else {
        return new NextResponse(null, { status: 404 });
      }
    }

    // Valid path, continue
    return NextResponse.next();
  }

  // No locale in pathname, redirect to default locale
  const defaultLocale = 'cs';
  const redirectUrl = new URL(`/${defaultLocale}${pathname}${search}`, request.url);
  const response = NextResponse.redirect(redirectUrl, 307);
  
  response.cookies.set('NEXT_LOCALE', defaultLocale, {
    maxAge: 365 * 24 * 60 * 60,
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax'
  });

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*|api/).*)',
  ],
};
