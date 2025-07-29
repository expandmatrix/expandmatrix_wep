'use client';

import { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Zap, Mail, ArrowRight, CheckCircle, ExternalLink, Linkedin, Twitter, Github } from 'lucide-react';
import Link from 'next/link';
import { type Locale } from '@/lib/getDictionary';

interface FooterProps {
  dict: any;
  lang: Locale;
}

export default function Footer({ dict, lang }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('Newsletter subscribe failed', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="relative bg-bg-secondary text-text-primary overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-primary/10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-primary/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Top Glow Border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/60 to-transparent"
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 3xl:px-24 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          {/* Logo and Description */}
          <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <motion.div 
                className="relative w-12 h-12 bg-gradient-to-br from-accent-primary via-accent-dark to-accent-primary rounded-2xl flex items-center justify-center overflow-hidden"
                whileHover={{ 
                  rotate: 360,
                  boxShadow: '0 0 30px rgba(0, 255, 127, 0.6)'
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent-primary to-accent-dark"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <div className="relative z-10">
                  <Zap className="w-6 h-6 text-bg-primary" />
                </div>
              </motion.div>

              <div className="flex flex-col">
                <span className="text-text-primary font-black text-xl tracking-tight group-hover:text-accent-primary transition-colors duration-300">
                  Expand Matrix
                </span>
                <span className="text-text-secondary text-xs font-medium tracking-wider opacity-70">
                  AI AGENCY
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <p className="text-text-secondary text-sm leading-relaxed">
              {dict?.footer?.description || 'Futuristická AI agentura pro automatizaci vašeho businessu.'}
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { 
                  name: 'linkedin', 
                  icon: Linkedin, 
                  href: 'https://linkedin.com/company/expand-matrix',
                  label: 'LinkedIn'
                },
                { 
                  name: 'twitter', 
                  icon: Twitter, 
                  href: 'https://twitter.com/expand_matrix',
                  label: 'Twitter'
                },
                { 
                  name: 'github', 
                  icon: Github, 
                  href: 'https://github.com/expand-matrix',
                  label: 'GitHub'
                }
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 0 20px rgba(0, 255, 127, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-bg-primary/50 backdrop-blur-sm border border-accent-primary/20 rounded-xl flex items-center justify-center text-text-secondary hover:text-accent-primary hover:border-accent-primary/60 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-semibold text-text-primary relative">
              {lang === 'cs' ? 'Rychlé odkazy' : 'Quick links'}
              <motion.div
                className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-accent-primary to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </h4>
            <ul className="space-y-3">
              {[
                { href: `/${lang}`, label: dict.nav?.home || 'Home' },
                { href: lang === 'cs' ? `/${lang}/o-nas` : `/${lang}/about-us`, label: dict.nav?.about || 'About' },
                { href: `/${lang}/services`, label: dict.nav?.services || 'Services' },
                { href: `/${lang}/portfolio`, label: dict.nav?.portfolio || 'Portfolio' },
              ].map((link, index) => (
                <motion.li
                  key={link.href}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-accent-primary transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Important Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-semibold text-text-primary relative">
              {dict.footer?.important || (lang === 'cs' ? 'Důležité odkazy' : 'Important links')}
              <motion.div
                className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-accent-primary to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </h4>
            <ul className="space-y-3">
              {[
                { href: `/${lang}/blog`, label: 'Blog' },
                { href: `/${lang}/privacy`, label: dict.footer?.privacy || 'Privacy Policy' },
                { href: `/${lang}/terms`, label: dict.footer?.terms || 'Terms of Service' },
                { href: `/${lang}/contact`, label: lang === 'cs' ? 'Kontakt' : 'Contact' },
              ].map((link, index) => (
                <motion.li
                  key={link.href}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-accent-primary transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-semibold text-text-primary relative">
              {dict.footer?.newsletterTitle || 'Newsletter'}
              <motion.div
                className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-accent-primary to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </h4>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 bg-accent-primary/10 backdrop-blur-sm border border-accent-primary/30 rounded-2xl"
              >
                <div className="flex items-center space-x-3 text-accent-primary">
                  <CheckCircle className="w-6 h-6" />
                  <span className="font-medium">
                    {lang === 'cs' ? 'Děkujeme za přihlášení!' : 'Thank you for subscribing!'}
                  </span>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={dict.footer?.newsletterPlaceholder || 'Your email'}
                    className="w-full px-4 py-3 bg-bg-primary/50 backdrop-blur-sm border border-accent-primary/20 rounded-xl text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-primary/60 focus:ring-2 focus:ring-accent-primary/20 transition-all duration-300"
                  />
                  <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-secondary" />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full relative bg-accent-primary text-bg-primary font-semibold py-3 rounded-xl transition-all duration-300 overflow-hidden group disabled:opacity-50"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent-primary via-accent-dark to-accent-primary"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-bg-primary/30 border-t-bg-primary rounded-full"
                      />
                    ) : (
                      dict.footer?.newsletterCta || 'Subscribe'
                    )}
                  </span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="relative mt-16 pt-8"
        >
          {/* Divider */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          />

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-text-secondary text-sm text-center md:text-left">
              <p className="mb-1">
                {dict?.footer?.copyright || '© 2024 Expand Matrix, s.r.o. Všechna práva vyhrazena.'}
              </p>
              <p className="text-xs opacity-70">
                {lang === 'cs' ? 'Provozovatel: Expand Matrix, s.r.o.' : 'Operator: Expand Matrix, s.r.o.'}
              </p>
            </div>

            <motion.div
              className="flex items-center space-x-2 text-xs text-text-secondary"
              whileHover={{ scale: 1.05 }}
            >
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-accent-primary"
              >
                ⚡
              </motion.div>
              <span>by Expand Matrix</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent-primary/40 to-transparent"
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scaleX: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </footer>
  );
}
