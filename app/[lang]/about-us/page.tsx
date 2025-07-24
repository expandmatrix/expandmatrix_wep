import { getDictionary, isValidLocale } from '@/lib/getDictionary';
import type { Metadata } from 'next';
import AboutClient from '@/components/about/AboutClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : 'en';
  const dict = await getDictionary(locale);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://expandmatrix.com';
  const currentUrl = `${baseUrl}/${locale}/about-us`;

  return {
    title: dict.about?.meta?.title || 'About Us - Expand Matrix',
    description: dict.about?.meta?.description || 'Meet the AI expert team behind Expand Matrix and discover our mission to transform businesses through artificial intelligence.',
    keywords: dict.about?.meta?.keywords || 'AI team, artificial intelligence experts, automation specialists, Expand Matrix team',
    alternates: {
      canonical: currentUrl,
      languages: {
        'cs': `${baseUrl}/cs/o-nas`,
        'en': `${baseUrl}/en/about-us`,
      },
    },
    openGraph: {
      title: dict.about?.meta?.title || 'About Us - Expand Matrix',
      description: dict.about?.meta?.description || 'Meet the AI expert team behind Expand Matrix.',
      url: currentUrl,
      siteName: 'Expand Matrix',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/og-about.jpg`,
          width: 1200,
          height: 630,
          alt: 'Expand Matrix Team',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.about?.meta?.title || 'About Us - Expand Matrix',
      description: dict.about?.meta?.description || 'Meet the AI expert team behind Expand Matrix.',
      images: [`${baseUrl}/og-about.jpg`],
    },
  };
}

interface AboutPageProps {
  params: Promise<{ lang: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : 'en';
  const dict = await getDictionary(locale);

  return <AboutClient dict={dict} lang={locale} />;
}
