import { getDictionary, isValidLocale } from '@/lib/getDictionary';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://expandmatrix.com';
  const currentUrl = `${baseUrl}/${locale}/services`;

  return {
    title: dict.services.meta.title,
    description: dict.services.meta.description,
    keywords: dict.services.meta.keywords,
    alternates: {
      canonical: currentUrl,
      languages: {
        'cs': `${baseUrl}/cs/services`,
        'en': `${baseUrl}/en/services`,
      },
    },
    openGraph: {
      title: dict.services.meta.title,
      description: dict.services.meta.description,
      url: currentUrl,
      siteName: 'Expand Matrix',
      locale: locale === 'cs' ? 'cs_CZ' : 'en_US',
      type: 'website',
    },
  };
}

interface ServicesPageProps {
  params: Promise<{ lang: string }>;
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);

  return (
    <div className="min-h-screen bg-bg-primary pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-black text-text-primary mb-6">
          {dict.services.title}
        </h1>
        <p className="text-xl text-text-secondary">
          {dict.services.description}
        </p>
        <div className="mt-8 p-8 bg-bg-secondary/30 rounded-2xl border border-accent-primary/20">
          <p className="text-text-secondary">
            {locale === 'cs' 
              ? 'Stránka služeb je ve vývoji. Brzy zde najdete kompletní přehled našich AI řešení.'
              : 'Services page is under development. You will soon find a complete overview of our AI solutions here.'
            }
          </p>
        </div>
      </div>
    </div>
  );
}