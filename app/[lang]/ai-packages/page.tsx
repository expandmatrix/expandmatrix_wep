import AIPackagesHero from '@/components/ai-packages/AIPackagesHero';
import AIPackagesGrid from '@/components/ai-packages/AIPackagesGrid';
import AIPackagesComparison from '@/components/ai-packages/AIPackagesComparison';
import TrainingFinalCTA from '@/components/ai-training/TrainingFinalCTA';
import { getDictionary, isValidLocale } from '@/lib/getDictionary';
import type { Locale } from '@/lib/getDictionary';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isValidLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://expandmatrix.com';

  return {
    title: locale === 'cs' ? 'AI Balíčky - Expand Matrix' : 'AI Packages - Expand Matrix',
    description: locale === 'cs'
      ? 'Vyberte si AI balíček podle velikosti vaší firmy. Starter, Professional, Enterprise nebo Custom řešení s pokročilými funkcemi.'
      : 'Choose an AI package based on your company size. Starter, Professional, Enterprise or Custom solutions with advanced features.',
    alternates: {
      canonical: `${baseUrl}/${locale}/ai-packages`,
      languages: {
        cs: `${baseUrl}/cs/ai-balicky`,
        en: `${baseUrl}/en/ai-packages`,
      },
    },
  };
}

export default async function AIPackagesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isValidLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-bg-primary">
      <AIPackagesHero dict={dict} lang={locale} />
      <AIPackagesGrid dict={dict} lang={locale} />
      <AIPackagesComparison dict={dict} lang={locale} />
      <TrainingFinalCTA dict={dict} lang={locale} />
    </main>
  );
}
