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
  const currentUrl = `${baseUrl}/${locale}/our-services`;

  return {
    title: dict.services?.meta?.title || 'Our Services - Expand Matrix',
    description: dict.services?.meta?.description || 'Our AI services for business automation.',
    keywords: dict.services?.meta?.keywords || 'AI services, process automation',
    alternates: {
      canonical: currentUrl,
      languages: {
        'cs': `${baseUrl}/cs/sluzby`,
        'en': `${baseUrl}/en/our-services`,
      },
    },
    openGraph: {
      title: dict.services?.meta?.title || 'Our Services - Expand Matrix',
      description: dict.services?.meta?.description || 'Our AI services for business automation.',
      url: currentUrl,
      siteName: 'Expand Matrix',
      locale: 'en_US',
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
          {dict.services?.title || 'Our Services'}
        </h1>
        <p className="text-xl text-text-secondary mb-12">
          {dict.services?.description || 'Comprehensive AI solutions for business automation'}
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-bg-secondary/30 rounded-2xl border border-accent-primary/20">
            <h3 className="text-xl font-bold text-text-primary mb-4">AI Automation</h3>
            <p className="text-text-secondary">We automate your processes using cutting-edge AI technologies.</p>
          </div>
          <div className="p-6 bg-bg-secondary/30 rounded-2xl border border-accent-primary/20">
            <h3 className="text-xl font-bold text-text-primary mb-4">AI Chatbots</h3>
            <p className="text-text-secondary">Intelligent chatbots for customer support and sales.</p>
          </div>
          <div className="p-6 bg-bg-secondary/30 rounded-2xl border border-accent-primary/20">
            <h3 className="text-xl font-bold text-text-primary mb-4">Data Analysis</h3>
            <p className="text-text-secondary">Advanced data analysis for better decision making.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
