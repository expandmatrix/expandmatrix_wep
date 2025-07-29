'use client';

import { motion } from 'framer-motion';

interface CommunityHeroProps {
  dict: any;
}

export default function CommunityHero({ dict }: CommunityHeroProps) {
  return (
    <section className="relative py-32 px-4 overflow-hidden bg-bg-primary">
      {/* AI-themed background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent-primary rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-primary rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-primary/5" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="fluid-hero font-black text-text-primary mb-8 leading-tight"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <span className="text-accent-primary">{dict.community.title}</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {dict.community.subtitle}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
