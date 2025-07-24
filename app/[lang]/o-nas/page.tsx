import { getDictionary, isValidLocale } from '@/lib/getDictionary';
import type { Metadata } from 'next';
import AboutClient from '@/components/about/AboutClient';

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
    title: dict.about?.meta?.title || 'O nás - Expand Matrix',
    description: dict.about?.meta?.description || 'Poznajte tým AI expertů za Expand Matrix a objevte naši misi transformovat firmy pomocí umělé inteligence.',
    keywords: dict.about?.meta?.keywords || 'AI tým, umělá inteligence experti, automatizační specialisté, Expand Matrix tým',
    alternates: {
      canonical: `${baseUrl}/cs/o-nas`,
      languages: {
        'cs': `${baseUrl}/cs/o-nas`,
        'en': `${baseUrl}/en/about-us`,
        'x-default': `${baseUrl}/cs/o-nas`,
      },
    },
    openGraph: {
      title: dict.about?.meta?.title || 'O nás - Expand Matrix',
      description: dict.about?.meta?.description,
      url: `${baseUrl}/cs/o-nas`,
      siteName: 'Expand Matrix',
      locale: 'cs_CZ',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.about?.meta?.title,
      description: dict.about?.meta?.description,
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

  return <AboutClient dict={dict} lang={locale} />;
}
