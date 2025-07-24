import Link from 'next/link'
import { getTranslations } from '@/lib/translations'

interface NavigationProps {
  lang: string
}

export default function Navigation({ lang }: NavigationProps) {
  const t = getTranslations(lang)

  // Define navigation items based on language
  const getNavItems = (lang: string) => {
    if (lang === 'en') {
      return [
        { href: `/en`, label: t.nav.home },
        { href: `/en/services`, label: t.nav.services },
        { href: `/en/services/ai-training`, label: t.nav.training },
        { href: `/en/services/ai-packages`, label: t.nav.packages },
        { href: `/en/services/custom-ai-systems`, label: t.nav.custom },
      ]
    }
    
    return [
      { href: `/cs`, label: t.nav.home },
      { href: `/cs/sluzby`, label: t.nav.services },
      { href: `/cs/sluzby/ai-skoleni`, label: t.nav.training },
      { href: `/cs/sluzby/ai-balicky`, label: t.nav.packages },
      { href: `/cs/sluzby/ai-custom-systemy`, label: t.nav.custom },
    ]
  }

  const navItems = getNavItems(lang)

  return (
    <nav className="flex space-x-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
