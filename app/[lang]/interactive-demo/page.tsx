import InteractiveDemo from '@/components/services/InteractiveDemo';
import { getDictionary, isValidLocale, type Locale } from '@/lib/getDictionary';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return [{ lang: 'cs' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }>; }): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isValidLocale(lang) ? lang : 'en';
  const dict = await getDictionary(locale);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://expandmatrix.com';
  const currentUrl = `${baseUrl}/${locale}/interactive-demo`;

  return {
    title: `${dict.services.demo.title} - Expand Matrix`,
    description: dict.services.demo.subtitle,
    alternates: {
      canonical: currentUrl,
      languages: {
        'cs': `${baseUrl}/cs/interaktivni-demo`,
        'en': `${baseUrl}/en/interactive-demo`,
      },
    },
  };
}

export default async function InteractiveDemoPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale: Locale = isValidLocale(lang) ? lang : 'en';
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-bg-primary">
      <InteractiveDemo dict={dict.services.demo} lang={locale} />
    </main>
  );
}
