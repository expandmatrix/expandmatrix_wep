'use client';

import { motion } from 'framer-motion';
import { Package, Star, CheckCircle, ArrowRight } from 'lucide-react';
import type { Locale } from '@/lib/getDictionary';

interface AISolutionPackagesProps {
  dict: any;
  lang: Locale;
}

export default function AISolutionPackages({ dict, lang }: AISolutionPackagesProps) {
  const packages = [
    {
      name: lang === 'cs' ? 'Starter' : 'Starter',
      price: lang === 'cs' ? 'Od 50 000 Kč' : 'From $2,000',
      description: lang === 'cs' ? 'Ideální pro malé firmy začínající s AI' : 'Perfect for small businesses starting with AI',
      features: lang === 'cs' ? [
        'Základní AI chatbot',
        'Jednoduchá automatizace',
        'Email podpora',
        'Základní analytics'
      ] : [
        'Basic AI chatbot',
        'Simple automation',
        'Email support',
        'Basic analytics'
      ]
    },
    {
      name: lang === 'cs' ? 'Professional' : 'Professional',
      price: lang === 'cs' ? 'Od 150 000 Kč' : 'From $6,000',
      description: lang === 'cs' ? 'Pro střední firmy s pokročilými potřebami' : 'For medium businesses with advanced needs',
      features: lang === 'cs' ? [
        'Pokročilý AI systém',
        'Komplexní automatizace',
        'Prioritní podpora',
        'Pokročilé analytics',
        'Integrace s CRM'
      ] : [
        'Advanced AI system',
        'Complex automation',
        'Priority support',
        'Advanced analytics',
        'CRM integration'
      ],
      popular: true
    },
    {
      name: lang === 'cs' ? 'Enterprise' : 'Enterprise',
      price: lang === 'cs' ? 'Na míru' : 'Custom',
      description: lang === 'cs' ? 'Kompletní AI transformace pro velké firmy' : 'Complete AI transformation for large companies',
      features: lang === 'cs' ? [
        'Vlastní AI modely',
        'Plná automatizace',
        '24/7 podpora',
        'Vlastní dashboard',
        'API přístup',
        'Školení týmu'
      ] : [
        'Custom AI models',
        'Full automation',
        '24/7 support',
        'Custom dashboard',
        'API access',
        'Team training'
      ]
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-bg-secondary/20 to-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-text-primary">
            {lang === 'cs' ? (
              <>
                AI řešení{' '}
                <span className="text-accent-primary relative">
                  balíčky
                </span>
              </>
            ) : (
              <>
                AI Solution{' '}
                <span className="text-accent-primary relative">
                  Packages
                </span>
              </>
            )}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {lang === 'cs' 
              ? 'Vyberte si balíček, který nejlépe odpovídá velikosti a potřebám vaší firmy'
              : 'Choose the package that best fits your company size and needs'
            }
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-3xl backdrop-blur-xl border transition-all duration-700 hover:scale-[1.02] ${
                pkg.popular 
                  ? 'bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 border-accent-primary/40' 
                  : 'bg-gradient-to-br from-white/[0.08] to-white/[0.02] border-white/[0.08] hover:border-accent-primary/30'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent-primary text-bg-primary px-4 py-2 rounded-full text-sm font-bold flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    {lang === 'cs' ? 'Nejpopulárnější' : 'Most Popular'}
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-text-primary mb-2">{pkg.name}</h3>
                <div className="text-3xl font-black text-accent-primary mb-4">{pkg.price}</div>
                <p className="text-text-secondary">{pkg.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-text-secondary">
                    <CheckCircle className="w-5 h-5 text-accent-primary mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-500 flex items-center justify-center ${
                  pkg.popular 
                    ? 'bg-accent-primary text-bg-primary hover:bg-accent-primary/90' 
                    : 'bg-gradient-to-r from-white/10 to-white/5 text-text-primary border border-accent-primary/30 hover:border-accent-primary/60 hover:bg-accent-primary/10'
                }`}
              >
                <span className="mr-3">
                  {lang === 'cs' ? 'Vybrat balíček' : 'Choose Package'}
                </span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
