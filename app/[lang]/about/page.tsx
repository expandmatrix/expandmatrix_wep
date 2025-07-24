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
  const currentUrl = `${baseUrl}/${locale}/about`;

  return {
    title: dict.about?.meta?.title || 'O nás - Expand Matrix',
    description: dict.about?.meta?.description || 'Poznajte tým AI expertů za Expand Matrix.',
    keywords: dict.about?.meta?.keywords || 'AI tým, umělá inteligence experti',
    alternates: {
      canonical: currentUrl,
      languages: {
        'cs': `${baseUrl}/cs/about`,
        'en': `${baseUrl}/en/about`,
      },
    },
    openGraph: {
      title: dict.about?.meta?.title || 'O nás - Expand Matrix',
      description: dict.about?.meta?.description || 'Poznajte tým AI expertů za Expand Matrix.',
      url: currentUrl,
      siteName: 'Expand Matrix',
      locale: locale === 'cs' ? 'cs_CZ' : 'en_US',
      type: 'website',
    },
  };
}

interface AboutPageProps {
  params: Promise<{ lang: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);

  return (
    <div className="min-h-screen bg-bg-primary pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-black text-text-primary mb-6">
          {dict.about?.title || 'O nás'}
        </h1>
        <p className="text-xl text-text-secondary mb-8">
          {dict.about?.description || 'Jsme tým AI expertů.'}
        </p>
        
        <div className="mt-8 p-8 bg-bg-secondary/30 rounded-2xl border border-accent-primary/20">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            {dict.about?.mission?.title || 'Naše mise'}
          </h2>
          <p className="text-text-secondary">
            {dict.about?.mission?.description || 'Věříme v sílu umělé inteligence.'}
          </p>
        </div>
      </div>
    </div>
  );
}
