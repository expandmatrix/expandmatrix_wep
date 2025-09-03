import { getDictionary, isValidLocale, type Locale } from '@/lib/getDictionary';
import type { Metadata } from 'next';
import CustomAIHero from '@/components/custom-ai-systems/CustomAIHero';
import TargetAudience from '@/components/custom-ai-systems/TargetAudience';
import WhyAutomation from '@/components/custom-ai-systems/WhyAutomation';
import OurApproach from '@/components/custom-ai-systems/OurApproach';
import ServicesCTA from '@/components/services/ServicesCTA';

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
  const dict = await getDictionary(locale);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://expandmatrix.com';
  const currentUrl = `${baseUrl}/${locale}/sluzby/ai-systemy-na-miru`;

  return {
    title: 'AI Systémy na míru - Expand Matrix | Řešení AI přesně pro váš business',
    description: 'Vytváříme AI systémy přesně podle potřeb vašeho podnikání. Od analýzy po implementaci - komplexní custom AI řešení pro podniky, SMB i podnikatele.',
    keywords: 'AI systémy na míru, custom AI řešení, vývoj AI, strojové učení, automatizace procesů, podnikové AI, AI konzultace',
    alternates: {
      canonical: currentUrl,
      languages: {
        'cs': `${baseUrl}/cs/sluzby/ai-systemy-na-miru`,
        'en': `${baseUrl}/en/services/custom-ai-systems`,
      },
    },
    openGraph: {
      title: 'AI Systémy na míru - Expand Matrix',
      description: 'Vytváříme AI systémy přesně podle potřeb vašeho podnikání. Komplexní řešení od analýzy po implementaci.',
      url: currentUrl,
      siteName: 'Expand Matrix',
      locale: 'cs_CZ',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'AI Systémy na míru - Expand Matrix',
      description: 'Vytváříme AI systémy přesně podle potřeb vašeho podnikání. Komplexní řešení od analýzy po implementaci.',
    },
  };
}

export default async function AISystemyNaMiruPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isValidLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-bg-primary">
      <CustomAIHero dict={dict} lang={locale} />
      <WhyAutomation dict={dict} lang={locale} />
      <TargetAudience dict={dict} lang={locale} />
      <OurApproach dict={dict} lang={locale} />
      <ServicesCTA dict={dict} lang={locale} />
    </main>
  );
}
