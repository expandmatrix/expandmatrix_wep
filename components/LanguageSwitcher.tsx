'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useTransition, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown } from 'lucide-react';
import { getLocalizedPath, type Locale } from '@/lib/urlMappings';
import { type Route } from 'next';

const languages = [
  { code: 'cs', name: 'Čeština', flag: '🇨🇿', nativeName: 'Čeština' },
  { code: 'en', name: 'English', flag: '🇺🇸', nativeName: 'English' },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  // Extract current language from pathname
  const currentLang = pathname.split('/')[1] as Locale || 'cs';
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('[data-language-switcher]')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleLanguageChange = (newLang: Locale) => {
    if (newLang === currentLang) {
      setIsOpen(false);
      return;
    }

    startTransition(() => {
      try {
        // Set cookie for language preference
        document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=${365 * 24 * 60 * 60}; SameSite=Lax`;
        
        // Get localized path using URL mappings
        const newPath = getLocalizedPath(pathname, newLang);
        
        // Navigate to new language
        router.push(newPath as Route);
        setIsOpen(false);
      } catch (error) {
        console.error('Language switch error:', error);
        // Fallback to homepage
        router.push(`/${newLang}` as Route);
        setIsOpen(false);
      }
    });
  };

  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0];

  return (
    <div className="relative" data-language-switcher>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-bg-secondary/50 hover:bg-bg-secondary/70 transition-all duration-300 border border-border-color/30 hover:border-accent-primary/30"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isPending}
        aria-label="Change language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe className="w-4 h-4 text-accent-primary" />
        <span className="text-sm font-medium text-text-primary">
          {currentLanguage.flag} {currentLanguage.code.toUpperCase()}
        </span>
        <ChevronDown 
          className={`w-4 h-4 text-text-secondary transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
        {isPending && (
          <div className="w-4 h-4 border-2 border-accent-primary border-t-transparent rounded-full animate-spin" />
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 py-2 bg-bg-secondary border border-border-color rounded-2xl shadow-lg min-w-[140px] z-50"
            role="listbox"
          >
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code as Locale)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 rounded-xl mx-2 flex items-center gap-3 ${
                  lang.code === currentLang
                    ? 'bg-accent-primary/20 text-accent-primary'
                    : 'hover:bg-bg-tertiary text-text-primary'
                }`}
                whileHover={{ x: 2 }}
                disabled={isPending || lang.code === currentLang}
                role="option"
                aria-selected={lang.code === currentLang}
              >
                <span className="text-base">{lang.flag}</span>
                <div>
                  <div className="font-medium">{lang.nativeName}</div>
                  <div className="text-xs text-text-secondary">{lang.name}</div>
                </div>
                {lang.code === currentLang && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-auto w-2 h-2 bg-accent-primary rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
