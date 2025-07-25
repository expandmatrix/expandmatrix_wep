'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Calendar, Phone } from 'lucide-react';
import Link from 'next/link';
import type { Locale } from '@/lib/getDictionary';

interface ServicesCTAProps {
  dict: any;
  lang: Locale;
}

export default function ServicesCTA({ dict, lang }: ServicesCTAProps) {
  const ctaOptions = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: lang === 'cs' ? 'Bezplatná konzultace' : 'Free Consultation',
      description: lang === 'cs' ? '30min hovor o vašich potřebách' : '30min call about your needs',
      action: lang === 'cs' ? 'Domluvit hovor' : 'Schedule Call',
      href: `/${lang}/${lang === 'cs' ? 'kontakt' : 'contact'}`,
      primary: true
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: lang === 'cs' ? 'Demo prezentace' : 'Demo Presentation',
      description: lang === 'cs' ? 'Ukážeme vám naše AI řešení' : 'We\'ll show you our AI solutions',
      action: lang === 'cs' ? 'Rezervovat demo' : 'Book Demo',
      href: `/${lang}/${lang === 'cs' ? 'kontakt' : 'contact'}?type=demo`,
      primary: false
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: lang === 'cs' ? 'Okamžitý kontakt' : 'Immediate Contact',
      description: lang === 'cs' ? 'Zavolejte nám přímo' : 'Call us directly',
      action: '+420 123 456 789',
      href: 'tel:+420123456789',
      primary: false
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-bg-primary via-bg-secondary/20 to-bg-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-1/4 w-96 h-96 bg-accent-primary/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent-primary/6 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        {/* Floating elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-accent-primary/20 rounded-full"
            style={{
              left: `${20 + (i * 10) % 60}%`,
              top: `${20 + (i * 8) % 60}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.7,
              ease: [0.4, 0, 0.6, 1]
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-text-primary">
            {lang === 'cs' ? (
              <>
                Připraveni{' '}
                <span className="text-accent-primary relative">
                  začít?
                  <motion.div
                    className="absolute -inset-2 bg-accent-primary/20 blur-2xl rounded-lg"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [0.8, 1.1, 0.8],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </span>
              </>
            ) : (
              <>
                Ready to{' '}
                <span className="text-accent-primary relative">
                  start?
                  <motion.div
                    className="absolute -inset-2 bg-accent-primary/20 blur-2xl rounded-lg"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [0.8, 1.1, 0.8],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </span>
              </>
            )}
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-medium">
            {lang === 'cs'
              ? 'Začněte svou AI transformaci ještě dnes. Vyberte si způsob, jak se s námi spojit.'
              : 'Start your AI transformation today. Choose how you want to connect with us.'
            }
          </p>
        </motion.div>

        {/* CTA Options */}
        <div className="grid md:grid-cols-3 gap-8">
          {ctaOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true }}
              className="group relative"
            >
              <Link href={option.href} className="block">
                <div className={`relative h-full p-8 rounded-3xl backdrop-blur-xl border transition-all duration-700 ease-out hover:scale-[1.02] hover:shadow-[0_25px_80px_rgba(0,0,0,0.4)] ${
                  option.primary 
                    ? 'bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 border-accent-primary/40 hover:border-accent-primary/60' 
                    : 'bg-gradient-to-br from-white/[0.08] to-white/[0.02] border-white/[0.08] hover:border-accent-primary/30'
                }`}>
                  
                  {/* Icon */}
                  <div className="relative mb-6 flex justify-center">
                    <div className={`relative p-4 rounded-2xl border transition-all duration-500 ${
                      option.primary 
                        ? 'bg-accent-primary/20 border-accent-primary/40 group-hover:border-accent-primary/60' 
                        : 'bg-gradient-to-br from-accent-primary/10 to-accent-primary/5 border-accent-primary/20 group-hover:border-accent-primary/40'
                    }`}>
                      <div className="text-accent-primary group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(0,255,127,0.6)] transition-all duration-500">
                        {option.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-3 text-text-primary group-hover:text-accent-primary transition-colors duration-500">
                      {option.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed font-medium">
                      {option.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-500 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(0,255,127,0.4)] ${
                      option.primary 
                        ? 'bg-accent-primary text-bg-primary hover:bg-accent-primary/90' 
                        : 'bg-gradient-to-r from-white/10 to-white/5 text-text-primary border border-accent-primary/30 hover:border-accent-primary/60 hover:bg-accent-primary/10'
                    }`}
                  >
                    <span className="mr-3">
                      {option.action}
                    </span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-primary/[0.03] via-transparent to-accent-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
