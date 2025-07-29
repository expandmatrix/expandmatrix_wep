'use client';

import { motion } from 'framer-motion';
import { FaCrown, FaDiscord } from 'react-icons/fa';
import BenefitList from './BenefitList';

interface PremiumCommunityProps {
  dict: any;
}

export default function PremiumCommunitySection({ dict }: PremiumCommunityProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-green-500/5 to-blue-500/5">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {dict.community.premium.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {dict.community.premium.subtitle}
          </p>
        </motion.div>

        {/* Premium Discord Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-3xl p-8 border border-yellow-500/30 relative overflow-hidden">
            {/* Premium badge */}
            <div className="absolute top-4 right-4">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full flex items-center gap-2 font-bold">
                <FaCrown className="text-sm" />
                PREMIUM
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
                <FaDiscord className="text-4xl text-white" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {dict.community.premium.discord.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {dict.community.premium.discord.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-xl font-bold hover:from-green-600 hover:to-blue-600 transition-all duration-300 hover:scale-105">
                    {dict.community.premium.discord.cta}
                  </button>
                  <div className="text-2xl font-bold text-yellow-400">
                    {dict.community.premium.discord.price}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Premium Benefits */}
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
  );
}