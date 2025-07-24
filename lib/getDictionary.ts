import 'server-only';

const dictionaries = {
  cs: () => import('@/dictionaries/cs.json').then((module) => module.default),
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

export function isValidLocale(locale: string): locale is Locale {
  return locale in dictionaries;
}

export const getDictionary = async (locale: Locale) => {
  if (!isValidLocale(locale)) {
    return dictionaries.cs();
  }
  return dictionaries[locale]();
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
