import { getDictionary, isValidLocale, type Locale } from '@/lib/getDictionary';
import type { Metadata } from 'next';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import CaseStudies from '@/components/portfolio/CaseStudies';
import ClientShowcase from '@/components/portfolio/ClientShowcase';
import SuccessMetrics from '@/components/portfolio/SuccessMetrics';

export async function generateStaticParams() {
  return [{ lang: 'cs' }, { lang: 'en' }];
}

export default async function PortfolioPage({
  params: { lang }
}: {
  params: { lang: string }
}) {
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
