'use client';

import { motion } from 'framer-motion';
import { Server, MapPin, Zap, Shield } from 'lucide-react';
import type { Locale } from '@/lib/getDictionary';

interface VPSHeroProps {
  lang: Locale;
}

export default function VPSHero({ lang }: VPSHeroProps) {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 30% 40%, rgba(0,255,127,0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 40%, rgba(0,255,127,0.15) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-accent-primary/10 rounded-2xl mb-8"
          >
            <Server className="w-10 h-10 text-accent-primary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-text-primary mb-6"
          >
            VPS{' '}
            <span className="text-accent-primary">Hosting</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary mb-12 max-w-4xl mx-auto"
          >
            {lang === 'cs' 
              ? 'Vysokovýkonné VPS servery pro vaše AI aplikace a web projekty.'
              : 'High-performance VPS servers for your AI applications and web projects.'
            }
          </motion.p>

          {/* Czech Hosting Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-8 mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 bg-bg-secondary/50 backdrop-blur-sm border border-accent-primary/20 rounded-2xl px-6 py-4"
            >
              <MapPin className="w-6 h-6 text-accent-primary" />
              <div className="text-left">
                <div className="text-sm font-bold text-text-primary">
                  {lang === 'cs' ? 'České servery' : 'Czech Servers'}
                </div>
                <div className="text-xs text-text-secondary">
                  {lang === 'cs' ? 'Datacenter v ČR' : 'Czech Republic DC'}
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 bg-bg-secondary/50 backdrop-blur-sm border border-accent-primary/20 rounded-2xl px-6 py-4"
            >
              <Zap className="w-6 h-6 text-accent-primary" />
              <div className="text-left">
                <div className="text-sm font-bold text-text-primary">
                  {lang === 'cs' ? 'Čistá energie' : 'Clean Energy'}
                </div>
                <div className="text-xs text-text-secondary">
                  {lang === 'cs' ? '100% obnovitelná' : '100% renewable'}
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 bg-bg-secondary/50 backdrop-blur-sm border border-accent-primary/20 rounded-2xl px-6 py-4"
            >
              <Shield className="w-6 h-6 text-accent-primary" />
              <div className="text-left">
                <div className="text-sm font-bold text-text-primary">
                  {lang === 'cs' ? 'Dedikované' : 'Dedicated'}
                </div>
                <div className="text-xs text-text-secondary">
                  {lang === 'cs' ? '100% výkon' : '100% performance'}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
