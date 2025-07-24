'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Menu, X } from 'lucide-react';
import { type Locale } from '@/lib/getDictionary';
import { getLocalizedNavigation } from '@/lib/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  dict: any;
  lang: Locale;
}

export default function Header({ dict, lang }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const navigation = getLocalizedNavigation(lang);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clean up hover state when component unmounts or navigation changes
  useEffect(() => {
    setActiveItem(null);
  }, [lang]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-bg-primary/70 backdrop-blur-2xl border-b border-accent-primary/30 shadow-2xl shadow-accent-primary/10' 
          : 'bg-bg-primary/40 backdrop-blur-xl border-b border-accent-primary/10'
      }`}
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent-primary/5 via-transparent to-accent-primary/5"
        animate={{
          opacity: isScrolled ? [0.3, 0.6, 0.3] : [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Link 
              href={`/${lang}`}
              className="flex items-center space-x-3 group"
            >
              {/* Animated Logo Icon */}
              <motion.div 
                className="relative w-12 h-12 bg-gradient-to-br from-accent-primary via-accent-dark to-accent-primary rounded-2xl flex items-center justify-center overflow-hidden"
                whileHover={{ 
                  rotate: 360,
                  boxShadow: '0 0 30px rgba(0, 255, 127, 0.6)'
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent-primary to-accent-dark"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Logo content */}
                <div className="relative z-10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-bg-primary" />
                </div>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-accent-primary/20 blur-xl rounded-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Company Name */}
              <div className="flex flex-col">
                <motion.span 
                  className="text-text-primary font-black text-xl tracking-tight group-hover:text-accent-primary transition-colors duration-300"
                  whileHover={{ x: 2 }}
                >
                  Expand Matrix
                </motion.span>
                <motion.span 
                  className="text-text-secondary text-xs font-medium tracking-wider opacity-70"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 0.7, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  AI AGENCY
                </motion.span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation - FIXED HOVER EFFECTS */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigation.map((item, index) => (
              <motion.div
                key={`${item.name}-${lang}`} // Ensure unique key per language
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="relative"
              >
                <Link
                  href={item.href}
                  className="relative block px-5 py-3 text-text-secondary font-medium text-sm tracking-wide transition-colors duration-300 group"
                  onMouseEnter={() => setActiveItem(item.name)}
                  onMouseLeave={() => setActiveItem(null)}
                >
                  {/* Glassmorphism Hover Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 via-accent-primary/15 to-accent-primary/10 rounded-xl backdrop-blur-sm border border-accent-primary/20"
                    initial={{ 
                      scale: 0.8, 
                      opacity: 0,
                      y: 10
                    }}
                    animate={{ 
                      scale: activeItem === item.name ? 1 : 0.8,
                      opacity: activeItem === item.name ? 1 : 0,
                      y: activeItem === item.name ? 0 : 10
                    }}
                    transition={{ 
                      duration: 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  />

                  {/* Animated Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-accent-primary/5 rounded-xl blur-md"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: activeItem === item.name ? 1.2 : 0,
                      opacity: activeItem === item.name ? 1 : 0
                    }}
                    transition={{ 
                      duration: 0.4,
                      ease: "easeOut"
                    }}
                  />

                  {/* Text Content */}
                  <motion.span 
                    className="relative z-10 flex items-center space-x-2"
                    animate={{
                      color: activeItem === item.name ? '#00FF7F' : undefined,
                      scale: activeItem === item.name ? 1.05 : 1
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>{item.name}</span>
                    
                    {/* Animated Indicator Dot */}
                    <motion.div
                      className="w-1.5 h-1.5 bg-accent-primary rounded-full"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: activeItem === item.name ? 1 : 0,
                        opacity: activeItem === item.name ? 1 : 0,
                        rotate: activeItem === item.name ? 360 : 0
                      }}
                      transition={{ 
                        duration: 0.3,
                        ease: "easeOut"
                      }}
                    />
                  </motion.span>

                  {/* Bottom Accent Line */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-accent-primary via-accent-dark to-accent-primary rounded-full"
                    initial={{ 
                      width: 0,
                      x: '-50%',
                      opacity: 0
                    }}
                    animate={{
                      width: activeItem === item.name ? '90%' : 0,
                      opacity: activeItem === item.name ? 1 : 0,
                      boxShadow: activeItem === item.name ? '0 0 10px rgba(0, 255, 127, 0.5)' : '0 0 0px rgba(0, 255, 127, 0)'
                    }}
                    transition={{ 
                      duration: 0.4, 
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  />

                  {/* Top Accent Line */}
                  <motion.div
                    className="absolute top-0 left-1/2 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent"
                    initial={{ 
                      width: 0,
                      x: '-50%',
                      opacity: 0
                    }}
                    animate={{
                      width: activeItem === item.name ? '70%' : 0,
                      opacity: activeItem === item.name ? 0.6 : 0
                    }}
                    transition={{ 
                      duration: 0.3, 
                      delay: activeItem === item.name ? 0.1 : 0,
                      ease: "easeOut"
                    }}
                  />

                  {/* Side Glow Effects */}
                  <motion.div
                    className="absolute left-0 top-1/2 w-px h-0 bg-accent-primary/60 -translate-y-1/2"
                    animate={{
                      height: activeItem === item.name ? '60%' : 0,
                      opacity: activeItem === item.name ? 1 : 0
                    }}
                    transition={{ 
                      duration: 0.3,
                      delay: activeItem === item.name ? 0.15 : 0
                    }}
                  />
                  
                  <motion.div
                    className="absolute right-0 top-1/2 w-px h-0 bg-accent-primary/60 -translate-y-1/2"
                    animate={{
                      height: activeItem === item.name ? '60%' : 0,
                      opacity: activeItem === item.name ? 1 : 0
                    }}
                    transition={{ 
                      duration: 0.3,
                      delay: activeItem === item.name ? 0.15 : 0
                    }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <LanguageSwitcher />
            </motion.div>

            {/* CTA Button (Desktop) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="hidden md:block"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 30px rgba(0, 255, 127, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                className="relative px-6 py-3 bg-accent-primary text-bg-primary font-semibold text-sm rounded-xl transition-all duration-300 overflow-hidden group"
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
                
                <span className="relative z-10">
                  {lang === 'cs' ? 'Kontakt' : 'Contact'}
                </span>
              </motion.button>
            </motion.div>

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="lg:hidden"
            >
              <MobileMenu dict={dict} lang={lang} />
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Bottom border glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent"
        animate={{
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.header>
  );
}
