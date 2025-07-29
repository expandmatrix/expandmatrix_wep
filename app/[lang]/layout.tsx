import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getDictionary, isValidLocale, type Locale } from '@/lib/getDictionary';
import localFont from 'next/font/local';

const inter = localFont({
  src: '../../public/fonts/Inter-Variable.ttf',
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  weight: '100 900',
  style: 'normal',
});

// Generate static params for all supported locales
export async function generateStaticParams() {
  return [{ lang: 'cs' }, { lang: 'en' }];
}

// Enhanced metadata with proper SEO optimization
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://expandmatrix.com';
  const currentUrl = `${baseUrl}/${locale}`;

  return {
    title: {
      default: dict.home?.title || 'Expand Matrix - AI Automatizace pro Váš Business',
      template: '%s | Expand Matrix'
    },
    description: dict.home?.description || 'Futuristická AI agentura, která pomáhá firmám automatizovat procesy.',
    keywords: 'AI automatizace, umělá inteligence, business automatizace',
    authors: [{ name: 'Expand Matrix' }],
    creator: 'Expand Matrix',
    publisher: 'Expand Matrix',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: currentUrl,
      languages: {
        'cs': `${baseUrl}/cs`,
        'en': `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: dict.home?.title || 'Expand Matrix - AI Automatizace pro Váš Business',
      description: dict.home?.description || 'Futuristická AI agentura, která pomáhá firmám automatizovat procesy.',
      url: currentUrl,
      siteName: 'Expand Matrix',
      locale: locale === 'cs' ? 'cs_CZ' : 'en_US',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: dict.home?.title || 'Expand Matrix',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.home?.title || 'Expand Matrix - AI Automatizace pro Váš Business',
      description: dict.home?.description || 'Futuristická AI agentura, která pomáhá firmám automatizovat procesy.',
      images: [`${baseUrl}/og-image.jpg`],
      creator: '@expandmatrix',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      yandex: process.env.YANDEX_VERIFICATION,
      yahoo: process.env.YAHOO_VERIFICATION,
    },
    other: {
      'google-site-verification': process.env.GOOGLE_SITE_VERIFICATION || '',
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Expand Matrix",
    "url": `https://expandmatrix.com/${locale}`,
    "logo": "https://expandmatrix.com/logo.png",
    "description": dict.home?.description,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CZ"
    },
    "sameAs": [
      "https://linkedin.com/company/expandmatrix",
      "https://twitter.com/expandmatrix"
    ]
  };

  return (
    <html lang={locale} className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-bg-primary text-text-primary relative`}>
        <Header dict={dict} lang={locale} />
        <main className="min-h-screen" style={{ paddingBottom: 'var(--footer-height)' }}>
          {children}
        </main>
        <Footer dict={dict} lang={locale} />
      </body>
    </html>
  );
}
