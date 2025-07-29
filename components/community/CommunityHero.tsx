'use client';

import { motion } from 'framer-motion';

interface CommunityHeroProps {
  dict: any;
}

export default function CommunityHero({ dict }: CommunityHeroProps) {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {dict.community.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {dict.community.subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}