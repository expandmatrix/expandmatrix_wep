import { NextRequest, NextResponse } from 'next/server';
import { 
  isValidPathForLanguage, 
  getRedirectPath, 
  type Locale,
  URL_MAPPINGS 
} from './lib/urlMappings';

// Supported locales with proper typing
const locales = ['cs', 'en'] as const;
const defaultLocale = 'cs';

// Enhanced locale detection with cookie support
function getLocale(request: NextRequest): string {
  // 1. Check for NEXT_LOCALE cookie first (highest priority)
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && locales.includes(cookieLocale as any)) {
    return cookieLocale;
  }

  // 2. Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  
  if (acceptLanguage) {
    // Parse Accept-Language header with quality values
    const languages = acceptLanguage
      .split(',')
      .map(lang => {
        const [locale, q = '1'] = lang.trim().split(';q=');
        return { 
          locale: locale.toLowerCase().split('-')[0], 
          quality: parseFloat(q) 
        };
      })
      .sort((a, b) => b.quality - a.quality);
    
    // Find first supported language
    for (const { locale } of languages) {
      if (locales.includes(locale as any)) {
        return locale;
      }
    }
  }
  
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  
  // Skip middleware for static files, API routes, and Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname === '/manifest.json'
  ) {
    return;
  }
  
  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) {
    const currentLocale = pathname.split('/')[1] as Locale;
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';
    
    // Temporarily allow all service paths to pass through
    if (pathWithoutLocale.startsWith('/sluzby/') || pathWithoutLocale.startsWith('/services/')) {
      const response = NextResponse.next();
      response.headers.set('Content-Language', currentLocale);
      response.cookies.set('NEXT_LOCALE', currentLocale, {
        maxAge: 365 * 24 * 60 * 60,
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax'
      });
      return response;
    }
    
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
    
    // Valid path - set headers for SEO
    const response = NextResponse.next();
    response.headers.set('Content-Language', currentLocale);
    response.cookies.set('NEXT_LOCALE', currentLocale, {
      maxAge: 365 * 24 * 60 * 60,
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    });
    return response;
  }
  
  // Redirect to localized URL
  const locale = getLocale(request);
  const newUrl = new URL(`/${locale}${pathname}${search}`, request.url);
  
  const response = NextResponse.redirect(newUrl, 302);
  response.cookies.set('NEXT_LOCALE', locale, {
    maxAge: 365 * 24 * 60 * 60,
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax'
  });
  
  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.json).*)',
  ],
};
