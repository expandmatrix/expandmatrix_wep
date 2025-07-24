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
    title: t.training.meta.title,
    description: t.training.meta.description,
    alternates: {
      canonical: `/${lang}/sluzby/ai-skoleni`,
      languages: {
        'cs': '/cs/sluzby/ai-skoleni',
        // TODO: Add EN when ready
        // 'en': '/en/services/ai-training',
      },
    },
  }
}

export default async function AITrainingPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const t = getTranslations(lang)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        {t.training.title}
      </h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          {t.training.description}
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">{t.training.whatYouLearn}</h2>
        <ul className="list-disc pl-6 space-y-2">
          {t.training.topics.map((topic: string, index: number) => (
            <li key={index} className="text-gray-700">{topic}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t.training.benefits}</h2>
        <ul className="list-disc pl-6 space-y-2">
          {t.training.benefitsList.map((benefit: string, index: number) => (
            <li key={index} className="text-gray-700">{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}