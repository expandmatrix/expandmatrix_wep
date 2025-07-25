import { type Route } from 'next';

interface NavigationItem {
  name: string;
  href: Route;
  submenu?: NavigationItem[];
}

export function getLocalizedNavigation(lang: string): NavigationItem[] {
  return [
    {
      name: lang === 'cs' ? 'Domů' : 'Home',
      href: `/${lang}` as Route,
    },
    {
      name: lang === 'cs' ? 'Služby' : 'Services', 
      href: `/${lang}/${lang === 'cs' ? 'sluzby' : 'services'}` as Route,
      submenu: [
        {
          name: lang === 'cs' ? 'AI Balíčky' : 'AI Packages',
          href: (lang === 'cs' ? `/${lang}/sluzby/ai-balicky` : `/${lang}/services/ai-packages`) as Route,
        },
        {
          name: lang === 'cs' ? 'AI Školení' : 'AI Training',
          href: (lang === 'cs' ? `/${lang}/sluzby/ai-skoleni` : `/${lang}/services/ai-training`) as Route,
        },
        {
          name: lang === 'cs' ? 'AI Systémy na míru' : 'Custom AI Systems',
          href: (lang === 'cs' ? `/${lang}/sluzby/ai-systemy-na-miru` : `/${lang}/services/custom-ai-systems`) as Route,
        },
      ]
    },
    {
      name: 'VPS',
      href: `/${lang}/vps` as Route,
    },
    {
      name: 'Portfolio',
      href: `/${lang}/portfolio` as Route,
    },
    {
      name: lang === 'cs' ? 'O nás' : 'About',
      href: (lang === 'cs' ? `/${lang}/o-nas` : `/${lang}/about-us`) as Route,
    },
    {
      name: lang === 'cs' ? 'Kontakt' : 'Contact',
      href: `/${lang}/${lang === 'cs' ? 'kontakt' : 'contact'}` as Route,
    },
  ];
}
