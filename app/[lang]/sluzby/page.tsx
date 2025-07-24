import { getDictionary, isValidLocale } from '@/lib/getDictionary';
import type { Metadata } from 'next';

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
    title: dict.services?.meta?.title || 'Služby - Expand Matrix',
    description: dict.services?.meta?.description || 'Naše AI služby pro automatizaci vašeho businessu.',
    keywords: dict.services?.meta?.keywords || 'AI služby, automatizace procesů',
    alternates: {
      canonical: currentUrl,
      languages: {
        'cs': `${baseUrl}/cs/sluzby`,
        'en': `${baseUrl}/en/our-services`,
      },
    },
    openGraph: {
      title: dict.services?.meta?.title || 'Služby - Expand Matrix',
      description: dict.services?.meta?.description || 'Naše AI služby pro automatizaci vašeho businessu.',
      url: currentUrl,
      siteName: 'Expand Matrix',
      locale: 'cs_CZ',
      type: 'website',
    },
  };
}

export default async function ServicesPage({ 
  params 
}: { 
  params: Promise<{ lang: string }> 
}) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);

  return (
    <div className="min-h-screen bg-bg-primary pt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-black text-text-primary mb-6">
          {dict.services?.title || 'Naše služby'}
        </h1>
        <p className="text-xl text-text-secondary mb-12">
          {dict.services?.description || 'Komplexní AI řešení pro automatizaci vašeho businessu'}
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-bg-secondary/30 rounded-2xl border border-accent-primary/20">
            <h3 className="text-xl font-bold text-text-primary mb-4">AI Automatizace</h3>
            <p className="text-text-secondary">Automatizujeme vaše procesy pomocí nejmodernějších AI technologií.</p>
          </div>
          <div className="p-6 bg-bg-secondary/30 rounded-2xl border border-accent-primary/20">
            <h3 className="text-xl font-bold text-text-primary mb-4">AI Chatboty</h3>
            <p className="text-text-secondary">Inteligentní chatboty pro zákaznickou podporu a prodej.</p>
          </div>
          <div className="p-6 bg-bg-secondary/30 rounded-2xl border border-accent-primary/20">
            <h3 className="text-xl font-bold text-text-primary mb-4">Analýza dat</h3>
            <p className="text-text-secondary">Pokročilá analýza dat pro lepší rozhodování.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
