import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Check if pathname already has a locale
  const pathnameHasLocale = ['/cs', '/en'].some(
    (locale) => pathname.startsWith(`${locale}/`) || pathname === locale
  )

  if (pathnameHasLocale) return

  // Redirect to Czech as default
  const locale = 'cs'
  return NextResponse.redirect(
    new URL(`/${locale}${pathname}`, request.url)
  )
}

export const config = {
  matcher: [
    '/((?!_next|api|favicon.ico).*)',
  ],
}
