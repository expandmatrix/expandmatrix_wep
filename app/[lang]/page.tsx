import { getDictionary, isValidLocale, type Locale } from '@/lib/getDictionary';
import HomeClient from '@/components/home/HomeClient';
import type { Metadata } from 'next';

// Generate static params for all supported languages
export async function generateStaticParams() {
  return [{ lang: 'cs' }, { lang: 'en' }];
}

// Enhanced metadata with comprehensive SEO optimization
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
    title: dict.home.title,
    description: dict.home.description,
    keywords: locale === 'cs' 
      ? 'AI automatizace, umělá inteligence, business automatizace, digitální transformace'
      : 'AI automation, artificial intelligence, business automation, digital transformation',
    authors: [{ name: 'Expand Matrix', url: baseUrl }],
    creator: 'Expand Matrix',
    publisher: 'Expand Matrix',
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
    alternates: {
      canonical: currentUrl,
      languages: {
        'cs-CZ': `${baseUrl}/cs`,
        'en-US': `${baseUrl}/en`,
        'x-default': `${baseUrl}/cs`,
      },
    },
    openGraph: {
      title: dict.home.title,
      description: dict.home.description,
      url: currentUrl,
      siteName: 'Expand Matrix',
      locale: locale === 'cs' ? 'cs_CZ' : 'en_US',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: dict.home.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.home.title,
      description: dict.home.description,
      images: [`${baseUrl}/og-image.jpg`],
      creator: '@expand_matrix',
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  };
}

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://expandmatrix.com';

  // Enhanced structured data with proper i18n
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": "Expand Matrix",
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/logo.png`,
          "width": 512,
          "height": 512
        },
        "description": dict.home.description,
        "foundingDate": "2024",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": [
            locale === 'cs' ? 'Czech' : 'English',
            locale === 'cs' ? 'English' : 'Czech'
          ],
          "areaServed": ["CZ", "SK", "US", "GB", "EU"]
        },
        "sameAs": [
          "https://linkedin.com/company/expand-matrix",
          "https://twitter.com/expand_matrix"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "CZ",
          "addressLocality": dict.home.location || "Prague"
        }
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "Expand Matrix",
        "description": dict.home.description,
        "publisher": {
          "@id": `${baseUrl}/#organization`
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${baseUrl}/search?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        },
        "inLanguage": [
          {
            "@type": "Language",
            "name": "Czech",
            "alternateName": "cs-CZ"
          },
          {
            "@type": "Language", 
            "name": "English",
            "alternateName": "en-US"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/${locale}/#webpage`,
        "url": `${baseUrl}/${locale}`,
        "name": dict.home.title,
        "description": dict.home.description,
        "isPartOf": {
          "@id": `${baseUrl}/#website`
        },
        "about": {
          "@id": `${baseUrl}/#organization`
        },
        "inLanguage": locale === 'cs' ? 'cs-CZ' : 'en-US',
        "datePublished": "2024-01-01T00:00:00+00:00",
        "dateModified": new Date().toISOString()
      }
    ]
  };

  return (
    <>
      {/* Enhanced Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      <div className="min-h-screen bg-bg-primary overflow-x-hidden">
        <HomeClient dict={dict} lang={locale} />
      </div>
    </>
  );
}
