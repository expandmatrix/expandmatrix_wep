import { getDictionary, isValidLocale, type Locale } from '@/lib/getDictionary';
import type { Metadata } from 'next';
import CustomAIHero from '@/components/custom-ai-systems/CustomAIHero';
import TargetAudience from '@/components/custom-ai-systems/TargetAudience';
import WhyAutomation from '@/components/custom-ai-systems/WhyAutomation';
import OurApproach from '@/components/custom-ai-systems/OurApproach';
import CustomAICTA from '@/components/custom-ai-systems/CustomAICTA';

export async function generateStaticParams() {
  return [{ lang: 'cs' }, { lang: 'en' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : 'en';
  const dict = await getDictionary(locale);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://expandmatrix.com';
  const currentUrl = `${baseUrl}/${locale}/services/custom-ai-systems`;

  return {
    title: 'Custom AI Systems - Expand Matrix | Tailored AI Solutions for Your Business',
    description: 'We create AI systems tailored precisely to your business needs. From analysis to implementation - comprehensive custom AI solutions for enterprises, SMBs, and entrepreneurs.',
    keywords: 'custom AI systems, bespoke AI solutions, AI development, machine learning, process automation, enterprise AI, AI consulting',
    alternates: {
      canonical: currentUrl,
      languages: {
        'cs': `${baseUrl}/cs/sluzby/ai-systemy-na-miru`,
        'en': `${baseUrl}/en/services/custom-ai-systems`,
      },
    },
    openGraph: {
      title: 'Custom AI Systems - Expand Matrix',
      description: 'We create AI systems tailored precisely to your business needs. Comprehensive solutions from analysis to implementation.',
      url: currentUrl,
      siteName: 'Expand Matrix',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Custom AI Systems - Expand Matrix',
      description: 'We create AI systems tailored precisely to your business needs. Comprehensive solutions from analysis to implementation.',
    },
  };
}

export default async function CustomAISystemsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isValidLocale(lang) ? lang : 'en';
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-bg-primary">
      <CustomAIHero dict={dict} lang={locale} />
      <TargetAudience dict={dict} lang={locale} />
      <WhyAutomation dict={dict} lang={locale} />
      <OurApproach dict={dict} lang={locale} />
      <CustomAICTA dict={dict} lang={locale} />
    </main>
  );
}
