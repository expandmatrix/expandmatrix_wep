'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
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

  // Extract current language from pathname
  const currentLang = pathname.split('/')[1] as Locale || 'cs';
  
  // Get the other language (not current)
  const otherLanguage = languages.find(lang => lang.code !== currentLang) || languages[0];

  const handleLanguageChange = () => {
    const newLang = otherLanguage.code as Locale;
    
    if (newLang === currentLang) return;

    startTransition(() => {
      try {
        // Set cookie for language preference
        document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=${365 * 24 * 60 * 60}; SameSite=Lax`;
        
        // Get localized path using URL mappings
        const newPath = getLocalizedPath(pathname, newLang);
        
        // Navigate to new language
        router.push(newPath as Route);
      } catch (error) {
        console.error('Language switch error:', error);
        // Fallback to homepage
        router.push(`/${newLang}` as Route);
      }
    });
  };

  return (
    <motion.button
      onClick={handleLanguageChange}
      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-bg-secondary/50 hover:bg-bg-secondary/70 transition-all duration-300 border border-border-color/30 hover:border-accent-primary/30"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={isPending}
      aria-label={`Switch to ${otherLanguage.name}`}
    >
      <Globe className="w-4 h-4 text-accent-primary" />
      <span className="text-sm font-medium text-text-primary">
        {otherLanguage.flag} {otherLanguage.code.toUpperCase()}
      </span>
      {isPending && (
        <motion.div
          className="w-3 h-3 border border-accent-primary border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      )}
    </motion.button>
  );
}
