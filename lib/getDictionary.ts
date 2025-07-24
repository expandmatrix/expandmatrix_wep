import 'server-only'

const dictionaries = {
  cs: () => import('./dictionaries/cs.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
}

export type Locale = keyof typeof dictionaries

export const getDictionary = async (locale: Locale) => {
  try {
    return await dictionaries[locale]()
  } catch (error) {
    console.error(`Failed to load dictionary for locale: ${locale}`, error)
    // Fallback to Czech if loading fails
    return await dictionaries.cs()
  }
}

export const isValidLocale = (locale: string): locale is Locale => {
  return locale in dictionaries
}
