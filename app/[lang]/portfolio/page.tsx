import { getDictionary, isValidLocale, type Locale } from '@/lib/getDictionary';
import type { Metadata } from 'next';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import CaseStudies from '@/components/portfolio/CaseStudies';
import ClientShowcase from '@/components/portfolio/ClientShowcase';
import SuccessMetrics from '@/components/portfolio/SuccessMetrics';

export async function generateStaticParams() {
  return [{ lang: 'cs' }, { lang: 'en' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isValidLocale(lang) ? lang : 'en';
  const dict = await getDictionary(locale);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://expandmatrix.com';
  const currentUrl = `${baseUrl}/${locale}/portfolio`;

  return {
    title: locale === 'cs' ? 'Portfolio - Expand Matrix' : 'Portfolio - Expand Matrix',
    description: locale === 'cs' 
      ? 'Prohlédněte si naše úspěšné AI projekty a automatizační řešení. Případové studie, reference klientů a dosažené výsledky.'
      : 'Explore our successful AI projects and automation solutions. Case studies, client references, and achieved results.',
    alternates: {
      canonical: currentUrl,
      languages: {
        'cs': `${baseUrl}/cs/portfolio`,
        'en': `${baseUrl}/en/portfolio`,
      },
    },
    openGraph: {
      title: locale === 'cs' ? 'Portfolio - Expand Matrix' : 'Portfolio - Expand Matrix',
      description: locale === 'cs' 
        ? 'Prohlédněte si naše úspěšné AI projekty a automatizační řešení.'
        : 'Explore our successful AI projects and automation solutions.',
      url: currentUrl,
      siteName: 'Expand Matrix',
      locale: locale === 'cs' ? 'cs_CZ' : 'en_US',
      type: 'website',
    },
  };
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isValidLocale(lang) ? lang : 'en';
  const dict = await getDictionary(locale);

  return (
    <>
      <main className="min-h-screen bg-bg-primary">
        <PortfolioHero dict={dict} lang={locale} />
        <CaseStudies dict={dict} lang={locale} />
        <ClientShowcase dict={dict} lang={locale} />
        <SuccessMetrics dict={dict} lang={locale} />
      </main>
    </>
  );
}
