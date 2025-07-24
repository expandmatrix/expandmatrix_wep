import { getDictionary, isValidLocale, type Locale } from '@/lib/getDictionary';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);
  
  return {
    title: dict.about?.meta?.title || 'O nás - ExpandMatrix',
    description: dict.about?.meta?.description || 'Poznejte náš tým a naši misi.',
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          {dict.about?.title || 'O nás'}
        </h1>
        
        <p className="text-xl text-text-secondary text-center mb-12">
          {dict.about?.description || 'Jsme tým odborníků specializujících se na moderní technologie'}
        </p>

        <div className="mt-8 p-8 bg-bg-secondary/30 rounded-2xl border border-accent-primary/20">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            {dict.about?.mission?.title || 'Naše mise'}
          </h2>
          <p className="text-text-secondary">
            {dict.about?.mission?.description || 'Věříme v sílu umělé inteligence a moderních technologií.'}
          </p>
        </div>
      </div>
    </div>
  );
}
