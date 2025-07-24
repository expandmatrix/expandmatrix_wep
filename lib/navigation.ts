import { type Route } from 'next';

interface NavigationItem {
  name: string;
  href: Route;
}

export function getLocalizedNavigation(lang: string): NavigationItem[] {
  return [
    {
      name: lang === 'cs' ? 'Domů' : 'Home',
      href: `/${lang}` as Route,
    },
    {
      name: lang === 'cs' ? 'Služby' : 'Services', 
      href: `/${lang}/services` as Route,
    },
    {
      name: lang === 'cs' ? 'VPS' : 'VPS',
      href: `/${lang}/vps` as Route,
    },
    {
      name: lang === 'cs' ? 'O nás' : 'About',
      href: (lang === 'cs' ? `/${lang}/o-nas` : `/${lang}/about-us`) as Route,
    },
    {
      name: lang === 'cs' ? 'Kontakt' : 'Contact',
      href: `/${lang}/contact` as Route,
    },
  ];
}
