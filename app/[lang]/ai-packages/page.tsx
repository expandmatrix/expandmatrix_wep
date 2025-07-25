import AIPackagesHero from '@/components/ai-packages/AIPackagesHero';
import AIPackagesGrid from '@/components/ai-packages/AIPackagesGrid';
import AIPackagesComparison from '@/components/ai-packages/AIPackagesComparison';
import AIPackagesCTA from '@/components/ai-packages/AIPackagesCTA';
import TrainingFinalCTA from '@/components/ai-training/TrainingFinalCTA';
import { getDictionary } from '@/lib/getDictionary';
import type { Locale } from '@/lib/getDictionary';
import type { Metadata } from 'next';

export async function generateMetadata({
  params: { lang }
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const dict = await getDictionary(lang);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://expandmatrix.com';
  
  return {
    title: lang === 'cs' ? 'AI Balíčky - Expand Matrix' : 'AI Packages - Expand Matrix',
    description: lang === 'cs' 
      ? 'Vyberte si AI balíček podle velikosti vaší firmy. Starter, Professional, Enterprise nebo Custom řešení s pokročilými funkcemi.'
      : 'Choose an AI package based on your company size. Starter, Professional, Enterprise or Custom solutions with advanced features.',
    alternates: {
      canonical: `${baseUrl}/${lang}/ai-packages`,
      languages: {
        'cs': `${baseUrl}/cs/ai-balicky`,
        'en': `${baseUrl}/en/ai-packages`,
      },
    },
  };
}

export default async function AIPackagesPage({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-bg-primary">
      <AIPackagesHero dict={dict} lang={lang} />
      <AIPackagesGrid dict={dict} lang={lang} />
      <AIPackagesComparison dict={dict} lang={lang} />
      <AIPackagesCTA dict={dict} lang={lang} />
      <TrainingFinalCTA dict={dict} lang={lang} />
    </main>
  );
}
