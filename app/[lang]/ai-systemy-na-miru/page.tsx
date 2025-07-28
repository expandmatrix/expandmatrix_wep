import { getDictionary } from '@/lib/getDictionary';
import type { Locale } from '@/lib/getDictionary';
import { Metadata } from 'next';

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: Locale }>
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === 'cs' ? 'AI Systémy na míru - Expand Matrix' : 'Custom AI Systems - Expand Matrix',
    description: lang === 'cs' 
      ? 'Vyvíjíme AI systémy přesně podle vašich potřeb. Automatizace procesů, inteligentní analýza dat a custom AI řešení.'
      : 'We develop AI systems exactly according to your needs. Process automation, intelligent data analysis and custom AI solutions.',
    keywords: lang === 'cs'
      ? 'AI systémy na míru, custom AI, automatizace procesů, AI vývoj, machine learning'
      : 'custom AI systems, bespoke AI, process automation, AI development, machine learning'
  };
}

export default async function CustomAISystemsPage({
  params
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-bg-primary pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-text-primary">
            {lang === 'cs' ? (
              <>
                AI Systémy{' '}
                <span className="text-accent-primary">na míru</span>
              </>
            ) : (
              <>
                Custom{' '}
                <span className="text-accent-primary">AI Systems</span>
              </>
            )}
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {lang === 'cs'
              ? 'Vytváříme pokročilé AI řešení přesně podle vašich potřeb a požadavků. Od automatizace po inteligentní analýzu dat.'
              : 'We create advanced AI solutions exactly according to your needs and requirements. From automation to intelligent data analysis.'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              {lang === 'cs' ? 'Automatizace procesů' : 'Process Automation'}
            </h3>
            <p className="text-text-secondary mb-6">
              {lang === 'cs'
                ? 'Automatizujeme opakující se úkoly a optimalizujeme workflow.'
                : 'We automate repetitive tasks and optimize workflows.'
              }
            </p>
            <ul className="space-y-2 text-text-secondary">
              <li>• {lang === 'cs' ? 'Workflow automatizace' : 'Workflow Automation'}</li>
              <li>• {lang === 'cs' ? 'Reporty v reálném čase' : 'Real-time Reports'}</li>
              <li>• {lang === 'cs' ? 'ROI tracking' : 'ROI Tracking'}</li>
            </ul>
          </div>

          <div className="p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              {lang === 'cs' ? 'Inteligentní analýza' : 'Intelligent Analysis'}
            </h3>
            <p className="text-text-secondary mb-6">
              {lang === 'cs'
                ? 'Pokročilá analýza dat s využitím AI algoritmů.'
                : 'Advanced data analysis using AI algorithms.'
              }
            </p>
            <ul className="space-y-2 text-text-secondary">
              <li>• {lang === 'cs' ? 'Prediktivní analýza' : 'Predictive Analytics'}</li>
              <li>• {lang === 'cs' ? 'Pattern recognition' : 'Pattern Recognition'}</li>
              <li>• {lang === 'cs' ? 'Business intelligence' : 'Business Intelligence'}</li>
            </ul>
          </div>

          <div className="p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              {lang === 'cs' ? 'Custom AI modely' : 'Custom AI Models'}
            </h3>
            <p className="text-text-secondary mb-6">
              {lang === 'cs'
                ? 'Vyvíjíme AI modely specifické pro vaše potřeby.'
                : 'We develop AI models specific to your needs.'
              }
            </p>
            <ul className="space-y-2 text-text-secondary">
              <li>• {lang === 'cs' ? 'Machine Learning' : 'Machine Learning'}</li>
              <li>• {lang === 'cs' ? 'Deep Learning' : 'Deep Learning'}</li>
              <li>• {lang === 'cs' ? 'NLP řešení' : 'NLP Solutions'}</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}