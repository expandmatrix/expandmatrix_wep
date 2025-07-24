import { getDictionary, isValidLocale, type Locale } from '@/lib/getDictionary';
import HomeClient from '@/components/home/HomeClient';
import type { Metadata } from 'next';

// Generování statických parametrů pro všechny jazyky
export async function generateStaticParams() {
  return [{ lang: 'cs' }, { lang: 'en' }];
}

// Dynamická metadata pro domovskou stránku
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://expandmatrix.com';

  return {
    title: dict.home.title,
    description: dict.home.description,
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'cs': `${baseUrl}/cs`,
        'en': `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: dict.home.title,
      description: dict.home.description,
      url: `${baseUrl}/${locale}`,
      siteName: 'Expand Matrix',
      locale: locale === 'cs' ? 'cs_CZ' : 'en_US',
      type: 'website',
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

  // Rozšířené structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": "Expand Matrix",
        "url": baseUrl,
        "logo": `${baseUrl}/logo.png`,
        "description": dict.home.description,
        "foundingDate": "2024",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": ["Czech", "English"],
          "areaServed": ["CZ", "SK", "US", "GB"]
        },
        "sameAs": [
          "https://linkedin.com/company/expand-matrix",
          "https://twitter.com/expand_matrix"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "CZ",
          "addressLocality": "Prague"
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
        "inLanguage": [
          {
            "@type": "Language",
            "name": "Czech",
            "alternateName": "cs"
          },
          {
            "@type": "Language", 
            "name": "English",
            "alternateName": "en"
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
        "inLanguage": locale === 'cs' ? 'cs-CZ' : 'en-US'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-bg-primary overflow-x-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      <HomeClient dict={dict} lang={locale} />
    </div>
  );
}
