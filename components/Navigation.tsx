'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  lang: 'cs' | 'en';
}

export default function Navigation({ lang }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { href: `/${lang}`, label: lang === 'cs' ? 'Domů' : 'Home' },
    { 
      href: `/${lang}/${lang === 'cs' ? 'sluzby' : 'services'}`, 
      label: lang === 'cs' ? 'Služby' : 'Services',
      submenu: [
        {
          href: `/${lang}/${lang === 'cs' ? 'sluzby/ai-systemy-na-miru' : 'services/custom-ai-systems'}`,
          label: lang === 'cs' ? 'AI Systémy na míru' : 'Custom AI Systems'
        },
        {
          href: `/${lang}/${lang === 'cs' ? 'sluzby/ai-balicky' : 'services/ai-packages'}`,
          label: lang === 'cs' ? 'AI Balíčky' : 'AI Packages'
        },
        {
          href: `/${lang}/${lang === 'cs' ? 'sluzby/ai-skoleni' : 'services/ai-training'}`,
          label: lang === 'cs' ? 'AI Školení' : 'AI Training'
        }
      ]
    },
    { href: `/${lang}/vps`, label: 'VPS' },
    { href: `/${lang}/portfolio`, label: 'Portfolio' }
  ];

  const isActive = (href: string) => {
    if (href === `/${lang}`) {
      return pathname === `/${lang}` || pathname === `/${lang}/`;
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-bg-primary/95 backdrop-blur-md border-b border-accent-primary/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-lg flex items-center justify-center">
              <span className="text-bg-primary font-bold text-sm">EM</span>
            </div>
            <span className="text-text-primary font-bold text-xl">Expand Matrix</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-accent-primary'
                    : 'text-text-secondary hover:text-accent-primary'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-primary"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href={pathname.replace(`/${lang}`, '/cs')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                lang === 'cs' 
                  ? 'bg-accent-primary text-bg-primary' 
                  : 'text-text-secondary hover:text-accent-primary'
              }`}
            >
              CS
            </Link>
            <Link
              href={pathname.replace(`/${lang}`, '/en')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                lang === 'en' 
                  ? 'bg-accent-primary text-bg-primary' 
                  : 'text-text-secondary hover:text-accent-primary'
              }`}
            >
              EN
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-text-secondary hover:text-accent-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-primary/95 backdrop-blur-md border-b border-accent-primary/20"
          >
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-accent-primary bg-accent-primary/10'
                      : 'text-text-secondary hover:text-accent-primary hover:bg-accent-primary/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="flex items-center space-x-2 pt-4 border-t border-accent-primary/20">
                <span className="text-text-secondary text-sm">Language:</span>
                <Link
                  href={pathname.replace(`/${lang}`, '/cs')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    lang === 'cs' 
                      ? 'bg-accent-primary text-bg-primary' 
                      : 'text-text-secondary hover:text-accent-primary'
                  }`}
                >
                  CS
                </Link>
                <Link
                  href={pathname.replace(`/${lang}`, '/en')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    lang === 'en' 
                      ? 'bg-accent-primary text-bg-primary' 
                      : 'text-text-secondary hover:text-accent-primary'
                  }`}
                >
                  EN
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
