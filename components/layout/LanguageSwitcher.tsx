'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'cs', name: 'Čeština', flag: '🇨🇿' }
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'cs';
  
  // Get the other language (not current)
  const otherLanguage = languages.find(lang => lang.code !== currentLang) || languages[0];

  return (
    <Link
      href={`/${otherLanguage.code}${pathname.replace(/^\/[a-z]{2}/, '')}`}
      className="flex items-center space-x-2 px-4 py-2 rounded-full bg-bg-secondary hover:bg-bg-tertiary transition-colors duration-200"
    >
      <Globe className="w-4 h-4 text-accent-primary" />
      <span className="text-sm font-medium">{otherLanguage.flag} {otherLanguage.code.toUpperCase()}</span>
    </Link>
  );
}
