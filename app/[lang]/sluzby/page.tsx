import { getDictionary, isValidLocale } from '@/lib/getDictionary';
import type { Metadata } from 'next';
import ServicesHero from '@/components/services/ServicesHero';
import CustomAISystems from '@/components/services/CustomAISystems';
import AISolutionPackages from '@/components/services/AISolutionPackages';
import AITrainingConsulting from '@/components/services/AITrainingConsulting';
import ServicesCTA from '@/components/services/ServicesCTA';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://expandmatrix.com';
  const currentUrl = `${baseUrl}/${locale}/sluzby`;

  return {
    title: dict.services.meta.title,
    description: dict.services.meta.description,
    keywords: dict.services.meta.keywords,
    alternates: {
      canonical: currentUrl,
      languages: {
        'cs': `${baseUrl}/cs/sluzby`,
        'en': `${baseUrl}/en/services`,
      },
    },
    openGraph: {
      title: dict.services.meta.title,
      description: dict.services.meta.description,
      url: currentUrl,
      siteName: 'Expand Matrix',
      locale: 'cs_CZ',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/og-services.jpg`,
          width: 1200,
          height: 630,
          alt: dict.services.meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.services.meta.title,
      description: dict.services.meta.description,
      images: [`${baseUrl}/og-services.jpg`],
    },
  };
}

interface ServicesPageProps {
  params: Promise<{ lang: string }>;
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-bg-primary">
      <ServicesHero dict={dict} lang={locale} />
      <CustomAISystems dict={dict} lang={locale} />
      <AISolutionPackages dict={dict} lang={locale} />
      <AITrainingConsulting dict={dict} lang={locale} />
      <ServicesCTA dict={dict} lang={locale} />
    </main>
  );
}
