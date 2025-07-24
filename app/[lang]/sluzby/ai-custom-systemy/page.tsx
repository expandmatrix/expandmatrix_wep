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
    title: "Custom AI Systémy - Expand Matrix",
    description: "Vývoj AI systémů na míru podle vašich specifických požadavků.",
    alternates: {
      canonical: `/${lang}/sluzby/ai-custom-systemy`,
      languages: {
        'cs': '/cs/sluzby/ai-custom-systemy',
        // TODO: Add EN when ready
        // 'en': '/en/services/custom-ai-systems',
      },
    },
  }
}

export default async function CustomAISystemsPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const t = getTranslations(lang)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Custom AI Systémy
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Vyvíjíme AI systémy přesně podle vašich specifických požadavků a potřeb.
      </p>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Náš Přístup</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold mb-2">Analýza</h3>
              <p className="text-sm text-gray-600">Důkladná analýza vašich potřeb a procesů</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold mb-2">Vývoj</h3>
              <p className="text-sm text-gray-600">Vytvoření custom AI řešení na míru</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold mb-2">Implementace</h3>
              <p className="text-sm text-gray-600">Nasazení a optimalizace systému</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Typy Systémů</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Chatboti a virtuální asistenti</li>
            <li>Systémy pro analýzu dat</li>
            <li>Automatizace business procesů</li>
            <li>Prediktivní modely</li>
            <li>Computer vision aplikace</li>
          </ul>
        </section>
      </div>
    </div>
  )
}