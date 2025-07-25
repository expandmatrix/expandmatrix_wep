import { getDictionary, isValidLocale, type Locale } from '@/lib/getDictionary';
import type { Metadata } from 'next';
import AITrainingHero from '@/components/ai-training/AITrainingHero';
import TrainingPrograms from '@/components/ai-training/TrainingPrograms';
import LearningPath from '@/components/ai-training/LearningPath';
import TrainingBenefits from '@/components/ai-training/TrainingBenefits';
import TrainingCTA from '@/components/ai-training/TrainingCTA';
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
  const locale = isValidLocale(lang) ? lang : 'cs';

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://expandmatrix.com';
  const currentUrl = `${baseUrl}/${locale}/sluzby/ai-skoleni`;

  return {
    title: 'AI Školení - Expand Matrix',
    description: 'Připravte svůj tým na budoucnost s našimi komplexními AI školeními a certifikačními programy.',
    alternates: {
      canonical: currentUrl,
      languages: {
        'cs': `${baseUrl}/cs/sluzby/ai-skoleni`,
        'en': `${baseUrl}/en/services/ai-training`,
      },
    },
  };
}

export default async function AITrainingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isValidLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-bg-primary">
      <AITrainingHero dict={dict} lang={locale} />
      <TrainingPrograms dict={dict} lang={locale} />
      <LearningPath dict={dict} lang={locale} />
      <TrainingBenefits dict={dict} lang={locale} />
      <TrainingCTA dict={dict} lang={locale} />
      <TrainingFinalCTA dict={dict} lang={locale} />
    </main>
  );
}
