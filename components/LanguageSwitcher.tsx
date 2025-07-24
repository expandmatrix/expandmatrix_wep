'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'

interface LanguageSwitcherProps {
  currentLang: string
}

// URL mapping between languages
const urlMappings = {
  cs: {
    '/cs': '/en',
    '/cs/sluzby': '/en/services',
    '/cs/sluzby/ai-skoleni': '/en/services/ai-training',
    '/cs/sluzby/ai-balicky': '/en/services/ai-packages',
    '/cs/sluzby/ai-custom-systemy': '/en/services/custom-ai-systems',
  },
  en: {
    '/en': '/cs',
    '/en/services': '/cs/sluzby',
    '/en/services/ai-training': '/cs/sluzby/ai-skoleni',
    '/en/services/ai-packages': '/cs/sluzby/ai-balicky',
    '/en/services/custom-ai-systems': '/cs/sluzby/ai-custom-systemy',
  }
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)

  const switchLanguage = async (newLang: string) => {
    if (newLang === currentLang) return

    setIsLoading(true)

    // Set cookie
    document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000`

    // Get mapped URL or fallback to language root
    const mappings = urlMappings[currentLang as keyof typeof urlMappings]
    const newPath = mappings?.[pathname as keyof typeof mappings] || `/${newLang}`

    if (newLang === 'en') {
      // For now, show alert for English pages except home
      if (pathname !== '/cs') {
        alert('English version coming soon!')
        setIsLoading(false)
        return
      }
    }

    router.push(newPath)
    setIsLoading(false)
  }

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => switchLanguage('cs')}
        disabled={isLoading}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          currentLang === 'cs'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        CS
      </button>
      <button
        onClick={() => switchLanguage('en')}
        disabled={isLoading}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          currentLang === 'en'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        EN
      </button>
    </div>
  )
}
