'use client';

import { motion } from 'framer-motion';
import { FaDiscord, FaLinkedin, FaFacebook, FaRobot, FaNetworkWired, FaUsers, FaArrowRight } from 'react-icons/fa';
import BenefitList from './BenefitList';

interface FreeCommunityProps {
  dict: any;
}

export default function FreeCommunitySection({ dict }: FreeCommunityProps) {
  const communities = [
    {
      name: dict.community.free.discord.title,
      description: dict.community.free.discord.description,
      icon: FaDiscord,
      aiIcon: FaRobot,
      link: 'https://whop.com/expandmatrix-academy/',
      color: 'from-accent-primary to-accent-secondary'
    },
    {
      name: dict.community.free.linkedin.title,
      description: dict.community.free.linkedin.description,
      icon: FaLinkedin,
      aiIcon: FaNetworkWired,
      link: 'https://www.linkedin.com/groups/10146798/',
      color: 'from-accent-secondary to-accent-primary'
    },
    {
      name: dict.community.free.facebook.title,
      description: dict.community.free.facebook.description,
      icon: FaFacebook,
      aiIcon: FaUsers,
      link: 'https://www.facebook.com/groups/700239506208261/',
      color: 'from-accent-primary to-accent-secondary'
    }
  ];

  return (
    <section className="py-20 px-4 bg-bg-secondary relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="fluid-heading text-text-primary mb-6 font-bold">
            {dict.community.free.title}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {dict.community.free.subtitle}
          </p>
        </motion.div>

        {/* Community Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {communities.map((community, index) => (
            <motion.div
              key={community.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group flex"
            >
              <div className="liquid-glass-card glow-on-hover p-8 h-full relative overflow-hidden flex flex-col min-h-[320px] w-full">
                {/* AI pattern background */}
                <div className="absolute top-4 right-4 opacity-5">
                  <community.aiIcon className="text-6xl text-accent-primary" />
                </div>
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${community.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent-primary/20`}>
                  <community.icon className="text-2xl text-bg-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-accent-primary transition-colors duration-300">
                  {community.name}
                </h3>
                
                <p className="text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300 flex-grow mb-6">
                  {community.description}
                </p>
                
                {/* Join Button */}
                <a
                  href={community.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-accent-primary hover:bg-accent-secondary text-bg-primary font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-accent-primary/30 group/btn cursor-pointer relative z-20"
                  style={{ pointerEvents: 'auto' }}
                >
                  <span>Připojit se</span>
                  <motion.div
                    whileHover={{ x: 3 }}
                    className="group-hover/btn:translate-x-1 transition-transform duration-300"
                  >
                    <FaArrowRight className="text-sm" />
                  </motion.div>
                </a>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/0 via-accent-primary/5 to-accent-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 gap-12">
          <BenefitList
            title={dict.community.free.benefits.title}
            items={dict.community.free.benefits.items}
            type="benefits"
          />
          <BenefitList
            title={dict.community.free.content.title}
            items={dict.community.free.content.items}
            type="content"
          />
        </div>
      </div>
    </section>
  );
}
