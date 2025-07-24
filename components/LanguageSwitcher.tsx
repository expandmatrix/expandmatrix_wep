'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown } from 'lucide-react';
import { getCanonicalPath, type Locale } from '@/lib/urlMappings';
import { type Route } from 'next';

const languages = [
  { code: 'cs', name: 'Čeština', flag: '🇨🇿', nativeName: 'Čeština' },
  { code: 'en', name: 'English', flag: '🇺🇸', nativeName: 'English' },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  
  // Get current language from URL
  const currentLang = pathname.split('/')[1] as Locale || 'cs';
  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0];
  
  // Create localized path for language switch using URL mappings
  const getLocalizedPath = (newLang: Locale): Route => {
    const currentPath = pathname.replace(`/${currentLang}`, '') || '/';
    const targetPath = getCanonicalPath(currentPath, newLang);
    
    if (targetPath) {
      return `/${newLang}${targetPath === '/' ? '' : targetPath}` as Route;
    }
    
    // Fallback to homepage if no mapping found
    return `/${newLang}` as Route;
  };

  const handleLanguageChange = (newLang: Locale) => {
    if (newLang === currentLang) {
      setIsOpen(false);
      return;
    }

    startTransition(() => {
      // Set cookie for language preference
      document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=${365 * 24 * 60 * 60}; SameSite=Lax`;
      
      // Navigate to new language with proper URL mapping
      const newPath = getLocalizedPath(newLang);
      router.push(newPath);
      setIsOpen(false);
    });
  };

  return (
    <div className="relative">
      {/* Language Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-bg-secondary/50 border border-accent-primary/20 text-text-primary hover:border-accent-primary/40 transition-all duration-200 disabled:opacity-50"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-48 bg-bg-secondary/95 backdrop-blur-xl border border-accent-primary/20 rounded-xl shadow-2xl z-50"
          >
            <div className="p-2">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code as Locale)}
                  disabled={isPending}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200 disabled:opacity-50 ${
                    language.code === currentLang
                      ? 'bg-accent-primary/20 text-accent-primary'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-primary/50'
                  }`}
                >
                  <span className="text-lg">{language.flag}</span>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{language.nativeName}</div>
                    <div className="text-xs opacity-70">{language.name}</div>
                  </div>
                  {language.code === currentLang && (
                    <div className="w-2 h-2 bg-accent-primary rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
