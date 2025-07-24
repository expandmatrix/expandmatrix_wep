import { getTranslations } from '@/lib/translations'
import Link from 'next/link'

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const t = getTranslations(lang)

  // Define service links based on language
  const getServiceLinks = (lang: string) => {
    if (lang === 'en') {
      return {
        training: `/en/services/ai-training`,
        packages: `/en/services/ai-packages`,
        custom: `/en/services/custom-ai-systems`,
      }
    }
    
    return {
      training: `/cs/sluzby/ai-skoleni`,
      packages: `/cs/sluzby/ai-balicky`,
      custom: `/cs/sluzby/ai-custom-systemy`,
    }
  }

  const serviceLinks = getServiceLinks(lang)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {t.home.title}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {t.home.subtitle}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Link
            href={serviceLinks.training}
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              {t.services.training}
            </h3>
            <p className="text-gray-600">{t.home.trainingDesc}</p>
          </Link>
          
          <Link
            href={serviceLinks.packages}
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              {t.services.packages}
            </h3>
            <p className="text-gray-600">{t.home.packagesDesc}</p>
          </Link>
          
          <Link
            href={serviceLinks.custom}
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              {t.services.custom}
            </h3>
            <p className="text-gray-600">{t.home.customDesc}</p>
          </Link>
        </div>

        <div className="mt-12">
          <Link
            href={lang === 'en' ? '/en/services' : '/cs/sluzby'}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            {t.common.learnMore}
          </Link>
        </div>
      </div>
    </div>
  )
}
