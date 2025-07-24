import { getTranslations } from '@/lib/translations'
import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const t = getTranslations(lang)

  return {
    title: "AI Balíčky - Expand Matrix",
    description: "Předpřipravené AI řešení pro rychlé nasazení ve vašem businessu.",
    alternates: {
      canonical: `/${lang}/sluzby/ai-balicky`,
      languages: {
        'cs': '/cs/sluzby/ai-balicky',
        // TODO: Add EN when ready
        // 'en': '/en/services/ai-packages',
      },
    },
  }
}

export default async function AIPackagesPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const t = getTranslations(lang)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        AI Balíčky
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Předpřipravené AI řešení pro rychlé nasazení a okamžité výsledky ve vašem businessu.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg border">
          <h3 className="text-xl font-bold mb-4">Starter Balíček</h3>
          <p className="text-gray-600 mb-4">Základní AI nástroje pro malé firmy</p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>ChatGPT integrace</li>
            <li>Automatizace emailů</li>
            <li>Základní analytics</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg border">
          <h3 className="text-xl font-bold mb-4">Business Balíček</h3>
          <p className="text-gray-600 mb-4">Pokročilé AI řešení pro střední firmy</p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>Custom AI asistenti</li>
            <li>Pokročilá automatizace</li>
            <li>Prediktivní analytics</li>
          </ul>
        </div>
      </div>
    </div>
  )
}