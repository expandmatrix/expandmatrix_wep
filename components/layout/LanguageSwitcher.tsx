'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'cs', name: 'Čeština' }
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'en';
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-full bg-bg-secondary hover:bg-bg-tertiary transition-colors duration-200"
      >
        <span className="text-sm font-medium">{currentLang.toUpperCase()}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 py-2 bg-bg-secondary border border-border-color rounded-2xl shadow-lg min-w-[120px] z-50">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={`/${lang.code}${pathname.replace(/^\/[a-z]{2}/, '')}`}
              className="block px-4 py-2 text-sm hover:bg-bg-tertiary transition-colors duration-200 rounded-full mx-2"
              onClick={() => setIsOpen(false)}
            >
              {lang.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
