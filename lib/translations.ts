import cs from '@/translations/cs.json'
import en from '@/translations/en.json'

const translations = {
  cs,
  en,
}

export function getTranslations(locale: string) {
  return translations[locale as keyof typeof translations] || translations.cs
}

export type TranslationKeys = typeof cs
