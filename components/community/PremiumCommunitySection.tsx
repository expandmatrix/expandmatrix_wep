'use client';

import { motion } from 'framer-motion';
import { FaCrown, FaDiscord, FaStar, FaGem } from 'react-icons/fa';
import BenefitList from './BenefitList';

interface PremiumCommunityProps {
  dict: any;
}

export default function PremiumCommunitySection({ dict }: PremiumCommunityProps) {
  return (
    // Zakomentováno na žádost uživatele - kompletní premium sekce
    <div style={{ display: 'none' }}>
    {/*
    <section className="py-20 px-4 bg-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-orange-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="fluid-heading text-text-primary mb-6 font-bold">
            {dict.community.premium.title}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {dict.community.premium.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-bg-secondary via-bg-secondary to-bg-primary border border-yellow-400/30 shadow-2xl shadow-yellow-400/10">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-orange-400/5 to-yellow-400/5 rounded-3xl" />
            
            <div className="absolute top-4 right-4 opacity-10">
              <FaGem className="text-8xl text-yellow-400 animate-pulse" />
            </div>
            
            <div className="absolute top-6 right-6 z-10">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-bg-primary px-6 py-3 rounded-full flex items-center gap-3 font-bold shadow-lg shadow-yellow-400/30 animate-pulse-glow">
                <FaCrown className="text-lg" />
                PREMIUM
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-r from-accent-primary to-accent-secondary flex items-center justify-center shadow-xl shadow-accent-primary/30 group-hover:scale-110 transition-transform duration-300">
                <FaDiscord className="text-4xl text-bg-primary" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-text-primary mb-4 flex items-center gap-3 justify-center md:justify-start">
                  <FaStar className="text-yellow-400" />
                  {dict.community.premium.discord.title}
                </h3>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  {dict.community.premium.discord.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <button className="btn-primary bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-secondary hover:to-accent-primary shadow-lg shadow-accent-primary/30">
                    {dict.community.premium.discord.cta}
                  </button>
                  <div className="text-2xl font-bold text-yellow-400 flex items-center gap-2">
                    <FaCrown className="text-lg" />
                    {dict.community.premium.discord.price}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <BenefitList
            title={dict.community.premium.benefits.title}
            items={dict.community.premium.benefits.items}
            type="benefits"
            premium={true}
          />
          <BenefitList
            title={dict.community.premium.content.title}
            items={dict.community.premium.content.items}
            type="content"
            premium={true}
          />
        </div>
      </div>
    </section>
    */}
    </div>
  );
}
