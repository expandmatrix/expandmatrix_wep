'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';

interface Package {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
  ctaLink: string;
  badge?: string;
  gradient: string;
}

const AISolutionPackages: React.FC = () => {
  const packages: Package[] = [
    {
      id: 'starter',
      name: 'AI Starter',
      description: 'Ideální pro malé firmy začínající s AI',
      price: '15 000 Kč',
      originalPrice: '25 000 Kč',
      features: [
        'Základní AI chatbot pro web',
        'Integrace s 1 platformou',
        'Základní analytics',
        '30 dní podpora',
        'Dokumentace a školení'
      ],
      ctaText: 'Začít s AI',
      ctaLink: '/ai-packages',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'professional',
      name: 'AI Professional',
      description: 'Pro rostoucí firmy s pokročilými potřebami',
      price: '35 000 Kč',
      originalPrice: '50 000 Kč',
      features: [
        'Pokročilý AI asistent',
        'Integrace s 5 platformami',
        'Pokročilé analytics a reporty',
        '90 dní podpora',
        'Vlastní trénink modelu',
        'API přístup',
        'Prioritní podpora'
      ],
      highlighted: true,
      badge: 'Nejpopulárnější',
      ctaText: 'Vybrat Professional',
      ctaLink: '/ai-packages',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 'enterprise',
      name: 'AI Enterprise',
      description: 'Komplexní řešení pro velké organizace',
      price: 'Na míru',
      features: [
        'Plně customizované AI řešení',
        'Neomezené integrace',
        'Pokročilé ML modely',
        '1 rok podpora a údržba',
        'Dedikovaný AI specialista',
        'On-premise nasazení',
        'SLA garance',
        'Školení týmu'
      ],
      ctaText: 'Kontaktovat',
      ctaLink: '/contact',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            AI Řešení <span className="text-accent-primary">Balíčky</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Vyberte si z našich připravených AI balíčků nebo si nechte vytvořit řešení na míru. 
            Každý balíček obsahuje vše potřebné pro úspěšné nasazení AI ve vaší firmě.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              className={`relative group ${
                pkg.highlighted ? 'lg:scale-105 z-10' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`px-4 py-2 bg-gradient-to-r ${pkg.gradient} text-white text-sm font-semibold rounded-full shadow-lg`}>
                    {pkg.badge}
                  </div>
                </div>
              )}

              <div className={`relative bg-gradient-to-br from-bg-secondary/80 to-bg-secondary/40 backdrop-blur-xl border ${
                pkg.highlighted ? 'border-accent-primary/40' : 'border-accent-primary/20'
              } rounded-3xl p-8 h-full overflow-hidden`}>
                {/* Holographic overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-primary/10 rounded-3xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                {/* Header */}
                <div className="relative z-10 mb-8">
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-text-secondary mb-6">
                    {pkg.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-text-primary">
                      {pkg.price}
                    </span>
                    {pkg.originalPrice && (
                      <span className="text-lg text-text-secondary line-through">
                        {pkg.originalPrice}
                      </span>
                    )}
                  </div>
                  {pkg.originalPrice && (
                    <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-sm font-semibold rounded-full">
                      Ušetříte {parseInt(pkg.originalPrice.replace(/\D/g, '')) - parseInt(pkg.price.replace(/\D/g, '') || '0')} Kč
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="relative z-10 mb-8">
                  <ul className="space-y-4">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${pkg.gradient} flex items-center justify-center mt-0.5`}>
                          <FaCheck className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-text-secondary">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="relative z-10 mt-auto">
                  <Link href={pkg.ctaLink}>
                    <motion.button
                      className={`w-full py-4 px-6 bg-gradient-to-r ${pkg.gradient} text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-primary/25 transition-all duration-300`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {pkg.ctaText}
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-6 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 rounded-2xl">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Potřebujete něco jiného?
              </h3>
              <p className="text-text-secondary">
                Vytvoříme vám AI řešení přesně na míru vašich potřeb
              </p>
            </div>
            <Link href="/contact">
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-primary/25 transition-all duration-300 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Konzultace zdarma
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AISolutionPackages;