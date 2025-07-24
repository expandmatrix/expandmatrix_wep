'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import type { Locale } from '@/lib/getDictionary';
import { getLocalizedNavigation } from '@/lib/navigation';

interface MobileMenuProps {
  dict: any;
  lang: Locale;
}

export default function MobileMenu({ dict, lang }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = getLocalizedNavigation(lang);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Menu Toggle Button */}
      <motion.button
        onClick={toggleMenu}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative p-3 rounded-xl bg-bg-secondary/50 border border-accent-primary/20 text-text-primary hover:border-accent-primary/40 transition-all duration-300 backdrop-blur-sm"
        aria-label="Toggle menu"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button glow effect */}
        <motion.div
          className="absolute inset-0 bg-accent-primary/10 rounded-xl blur-sm"
          animate={{
            opacity: isOpen ? [0.5, 1, 0.5] : 0,
          }}
          transition={{
            duration: 2,
            repeat: isOpen ? Infinity : 0,
            ease: "easeInOut"
          }}
        />
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
              className="fixed inset-0 bg-bg-primary/90 backdrop-blur-xl z-40"
              onClick={toggleMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%', scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: '100%', scale: 0.95 }}
              transition={{ 
                type: 'spring', 
                damping: 25, 
                stiffness: 200,
                duration: 0.4 
              }}
              className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-bg-secondary/95 backdrop-blur-2xl border-l border-accent-primary/20 z-50 overflow-hidden"
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-primary/10"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <div className="relative flex flex-col h-full">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center justify-between p-6 border-b border-accent-primary/20"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-accent-primary to-accent-dark rounded-lg flex items-center justify-center">
                      <span className="text-bg-primary font-black text-xs">EM</span>
                    </div>
                    <span className="text-text-primary font-bold text-lg">Menu</span>
                  </div>
                  
                  <motion.button
                    onClick={toggleMenu}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-bg-primary/50 border border-accent-primary/20 text-text-primary hover:border-accent-primary/40 transition-all duration-200"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </motion.div>

                {/* Navigation Links */}
                <nav className="flex-1 p-6">
                  <div className="space-y-2">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * (index + 2), duration: 0.4 }}
                      >
                        <Link
                          href={item.href}
                          onClick={toggleMenu}
                          className="group flex items-center justify-between px-4 py-4 rounded-xl text-text-secondary hover:text-accent-primary hover:bg-accent-primary/10 transition-all duration-300 font-medium border border-transparent hover:border-accent-primary/20"
                        >
                          <span className="text-lg">{item.name}</span>
                          <motion.div
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            whileHover={{ x: 5 }}
                          >
                            <ArrowRight className="w-5 h-5" />
                          </motion.div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* Footer CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="p-6 border-t border-accent-primary/20"
                >
                  <motion.button
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: '0 10px 30px rgba(0, 255, 127, 0.3)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={toggleMenu}
                    className="w-full px-6 py-4 bg-accent-primary text-bg-primary font-bold text-lg rounded-xl transition-all duration-300 overflow-hidden relative group"
                  >
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent-primary via-accent-dark to-accent-primary"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <span>{lang === 'cs' ? 'Začít projekt' : 'Start Project'}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
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
