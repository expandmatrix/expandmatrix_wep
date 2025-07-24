import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations } from '@/lib/translations'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import Navigation from '@/components/Navigation'

const locales = ['cs', 'en']

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const t = getTranslations(lang)

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'cs': '/cs',
        'en': '/en',
      },
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  if (!locales.includes(lang)) {
    notFound()
  }

  const t = getTranslations(lang)

  return (
    <html lang={lang}>
      <head>
        <link rel="alternate" hrefLang="cs" href="/cs" />
        <link rel="alternate" hrefLang="en" href="/en" />
        <link rel="alternate" hrefLang="x-default" href="/cs" />
      </head>
      <body>
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-900">
                  Expand Matrix
                </h1>
              </div>
              <div className="flex items-center space-x-8">
                <Navigation lang={lang} />
                <LanguageSwitcher currentLang={lang} />
              </div>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-50 border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-center text-gray-600">
              © 2024 Expand Matrix. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
