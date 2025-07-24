import { getDictionary, type Locale } from '@/lib/getDictionary';

interface FooterProps {
  dict: any;
  lang: Locale;
}

export default function Footer({ dict, lang }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo a popis */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">Expand Matrix</h3>
            <p className="text-gray-300 mb-4 text-clean">
              {dict?.footer?.description || 'Futuristic AI agency for automating your business.'}
            </p>
          </div>

          {/* Rychlé odkazy */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Rychlé odkazy</h4>
            <ul className="space-y-2">
              <li>
                <a href={`/${lang}`} className="text-gray-300 hover:text-white transition-colors">
                  {dict.nav.home}
                </a>
              </li>
              <li>
                <a href={lang === 'cs' ? `/${lang}/o-nas` : `/${lang}/about-us`} className="text-gray-300 hover:text-white transition-colors">
                  {dict.nav.about}
                </a>
              </li>
              <li>
                <a href={`/${lang}/services`} className="text-gray-300 hover:text-white transition-colors">
                  {dict.nav.services}
                </a>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="text-gray-300 space-y-2">
              <p>info@expandmatrix.com</p>
              <p>+420 123 456 789</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-clean">
            {dict?.footer?.copyright || '© 2024 Expand Matrix. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
