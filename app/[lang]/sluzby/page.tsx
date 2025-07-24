import { getTranslations } from '@/lib/translations'
import Link from 'next/link'
import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const t = getTranslations(lang)

  return {
    title: t.services.meta.title,
    description: t.services.meta.description,
    alternates: {
      canonical: `/${lang}/sluzby`,
      languages: {
        'cs': '/cs/sluzby',
        // TODO: Add EN when ready
        // 'en': '/en/services',
      },
    },
  }
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const t = getTranslations(lang)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        {t.services.title}
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        {t.services.description}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">{t.services.training}</h2>
          <p className="text-gray-600 mb-6">{t.services.trainingDesc}</p>
          <Link
            href={`/${lang}/sluzby/ai-skoleni`}
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            {t.common.learnMore}
          </Link>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">{t.services.packages}</h2>
          <p className="text-gray-600 mb-6">{t.services.packagesDesc}</p>
          <Link
            href={`/${lang}/sluzby/ai-balicky`}
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            {t.common.learnMore}
          </Link>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">{t.services.custom}</h2>
          <p className="text-gray-600 mb-6">{t.services.customDesc}</p>
          <Link
            href={`/${lang}/sluzby/ai-custom-systemy`}
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            {t.common.learnMore}
          </Link>
        </div>
      </div>
    </div>
  )
}