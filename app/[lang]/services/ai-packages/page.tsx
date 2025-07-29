import { getDictionary, isValidLocale, type Locale } from '@/lib/getDictionary';
import type { Metadata } from 'next';
import AIPackagesHero from '@/components/ai-packages/AIPackagesHero';
import AIPackagesGrid from '@/components/ai-packages/AIPackagesGrid';
import AIPackagesComparison from '@/components/ai-packages/AIPackagesComparison';
import TrainingFinalCTA from '@/components/ai-training/TrainingFinalCTA';

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

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://expandmatrix.com';
  const currentUrl = `${baseUrl}/${locale}/services/ai-packages`;

  return {
    title: 'AI Packages - Expand Matrix',
    description: 'Choose an AI package based on your company size. Starter, Professional, Enterprise or Custom solutions with advanced features.',
    alternates: {
      canonical: currentUrl,
      languages: {
        'cs': `${baseUrl}/cs/sluzby/ai-balicky`,
        'en': `${baseUrl}/en/services/ai-packages`,
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
  const locale: Locale = isValidLocale(lang) ? lang : 'en';
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
