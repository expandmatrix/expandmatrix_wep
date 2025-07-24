import type { Locale } from './getDictionary';

interface NavigationItem {
  name: string;
  href: string;
}

export function getLocalizedNavigation(lang: Locale): NavigationItem[] {
  if (lang === 'cs') {
    return [
      { name: 'Domů', href: '/cs' },
      { name: 'O nás', href: '/cs/o-nas' },
      { name: 'Služby', href: '/cs/sluzby' },
      { name: 'VPS Hosting', href: '/cs/vps' },
      { name: 'Kontakt', href: '/cs/kontakt' },
    ];
  }

  return [
    { name: 'Home', href: '/en' },
    { name: 'About', href: '/en/about-us' },
    { name: 'Services', href: '/en/our-services' },
    { name: 'VPS Hosting', href: '/en/vps' },
    { name: 'Contact', href: '/en/contact-us' },
  ];
}
