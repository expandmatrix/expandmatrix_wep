'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { type Locale } from '@/lib/getDictionary';
import { getLocalizedNavigation } from '@/lib/navigation';
import LanguageSwitcher from './layout/LanguageSwitcher';

interface MobileMenuProps {
  dict: any;
  lang: Locale;
}

export default function MobileMenu({ dict, lang }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null);
  const navigation = getLocalizedNavigation(lang);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setExpandedSubmenu(null);
  };

  const toggleSubmenu = (itemName: string) => {
    setExpandedSubmenu(expandedSubmenu === itemName ? null : itemName);
  };

  return (
    <>
      {/* Menu Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleMenu}
        className="relative p-3 bg-gradient-to-br from-accent-primary/10 to-accent-primary/5 border border-accent-primary/20 rounded-xl backdrop-blur-sm hover:border-accent-primary/40 transition-all duration-300"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-accent-primary" />
          ) : (
            <Menu className="w-6 h-6 text-accent-primary" />
          )}
        </motion.div>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl z-40"
              onClick={toggleMenu}
            />

            {/* Menu Panel - opraveno pro celou výšku */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 sm:max-w-[90vw] bg-bg-primary border-l border-accent-primary/20 shadow-2xl z-50 flex flex-col"
              style={{ height: '100vh', height: '100dvh' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-accent-primary/20 bg-bg-primary">
                <motion.h2
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="text-xl font-bold text-text-primary"
                >
                  Menu
                </motion.h2>
                
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMenu}
                  className="p-3 bg-accent-primary/20 border border-accent-primary/40 rounded-xl text-accent-primary hover:bg-accent-primary/30 transition-all duration-300"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Navigation Links - scrollable content */}
              <nav className="flex-1 p-6 overflow-y-auto">
                <div className="space-y-4">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * (index + 2), duration: 0.4 }}
                      className="space-y-3"
                    >
                      {/* Main Navigation Item */}
                      <div className="group flex items-center justify-between px-6 py-5 rounded-2xl bg-bg-primary border-2 border-accent-primary/30 text-text-primary hover:text-accent-primary hover:bg-accent-primary/10 hover:border-accent-primary/50 transition-all duration-300 font-medium shadow-lg">
                        <Link
                          href={item.href}
                          onClick={item.submenu ? undefined : toggleMenu}
                          className="flex-1 text-lg font-semibold"
                        >
                          {item.name}
                        </Link>
                        
                        {item.submenu ? (
                          <motion.button
                            onClick={() => toggleSubmenu(item.name)}
                            className="p-3 bg-accent-primary/20 hover:bg-accent-primary/30 rounded-xl transition-colors duration-300 border border-accent-primary/30"
                            whileTap={{ scale: 0.95 }}
                          >
                            <motion.div
                              animate={{
                                rotate: expandedSubmenu === item.name ? 180 : 0
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="w-5 h-5 text-accent-primary" />
                            </motion.div>
                          </motion.button>
                        ) : (
                          <motion.div
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            whileHover={{ x: 5 }}
                          >
                            <ArrowRight className="w-5 h-5 text-accent-primary" />
                          </motion.div>
                        )}
                      </div>

                      {/* Submenu Items */}
                      <AnimatePresence>
                        {item.submenu && expandedSubmenu === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="ml-4 space-y-2 overflow-hidden"
                          >
                            {item.submenu.map((subItem, subIndex) => (
                              <motion.div
                                key={subItem.name}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.05, duration: 0.3 }}
                              >
                                <Link
                                  href={subItem.href}
                                  onClick={toggleMenu}
                                  className="group flex items-center px-5 py-4 text-text-secondary hover:text-accent-primary bg-bg-primary/80 hover:bg-accent-primary/10 transition-all duration-300 rounded-xl border-l-4 border-accent-primary/40 hover:border-accent-primary shadow-md"
                                >
                                  <span className="text-base font-medium group-hover:translate-x-1 transition-transform duration-300">
                                    {subItem.name}
                                  </span>
                                  
                                  <motion.div
                                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    whileHover={{ x: 3 }}
                                  >
                                    <div className="w-2 h-2 bg-accent-primary rounded-full" />
                                  </motion.div>
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </nav>

              {/* Footer - Language Switcher + Contact */}
              <div className="p-6 border-t border-accent-primary/20 bg-bg-primary">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="flex flex-col gap-4"
                >
                  {/* Language Switcher - jednoduchý přepínač */}
                  <div className="flex justify-center">
                    <LanguageSwitcher />
                  </div>
                  
                  {/* Contact Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-4 bg-accent-primary text-bg-primary font-semibold text-base rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent-primary/20"
                  >
                    {lang === 'cs' ? 'Kontakt' : 'Contact'}
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
