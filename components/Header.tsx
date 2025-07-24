import { Dictionary } from '@/lib/getDictionary';

interface HeaderProps {
  dict: Dictionary;
  lang: string;
}

export default function Header({ dict, lang }: HeaderProps) {
  return (
    <header className="bg-bg-secondary border-b border-accent-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-text-primary">ExpandMatrix</h1>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href={`/${lang}`} className="text-text-primary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium">
                {dict.nav?.home || 'Home'}
              </a>
              <a href={`/${lang}/${lang === 'cs' ? 'o-nas' : 'about-us'}`} className="text-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium">
                {dict.nav?.about || 'About'}
              </a>
              <a href={`/${lang}/${lang === 'cs' ? 'sluzby' : 'our-services'}`} className="text-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium">
                {dict.nav?.services || 'Services'}
              </a>
              <a href={`/${lang}/contact`} className="text-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium">
                {dict.nav?.contact || 'Contact'}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
