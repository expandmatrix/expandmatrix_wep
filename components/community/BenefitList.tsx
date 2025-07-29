'use client';

import { motion } from 'framer-motion';
import { FaCheck, FaStar, FaRocket, FaBrain, FaGem, FaCrown } from 'react-icons/fa';

interface BenefitListProps {
  title: string;
  items: string[];
  type: 'benefits' | 'content';
  premium?: boolean;
}

export default function BenefitList({ title, items, type, premium = false }: BenefitListProps) {
  const getIcon = () => {
    if (premium) {
      return type === 'benefits' ? FaCrown : FaGem;
    }
    return type === 'benefits' ? FaCheck : FaBrain;
  };

  const Icon = getIcon();
  const iconColor = premium ? 'text-yellow-400' : 'text-accent-primary';
  const borderColor = premium ? 'border-yellow-400/30' : 'border-accent-primary/30';
  const glowColor = premium ? 'shadow-yellow-400/10' : 'shadow-accent-primary/10';

  return (
    <motion.div
      initial={{ opacity: 0, x: type === 'benefits' ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`liquid-glass-card glow-on-hover p-8 border ${borderColor} shadow-xl ${glowColor} relative overflow-hidden`}
    >
      {/* Background pattern */}
      <div className="absolute top-4 right-4 opacity-5">
        <Icon className={`text-6xl ${iconColor}`} />
      </div>
      
      <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3 relative z-10">
        <div className={`p-2 rounded-lg bg-gradient-to-r ${premium ? 'from-yellow-400/20 to-orange-400/20' : 'from-accent-primary/20 to-accent-secondary/20'}`}>
          <Icon className={`text-xl ${iconColor}`} />
        </div>
        {title}
      </h3>
      
      <ul className="space-y-4 relative z-10">
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 text-text-secondary hover:text-text-primary transition-colors duration-300 group"
          >
            <div className={`w-3 h-3 rounded-full ${premium ? 'bg-gradient-to-r from-yellow-400 to-orange-400' : 'bg-gradient-to-r from-accent-primary to-accent-secondary'} mt-2 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`} />
            <span className="leading-relaxed">{item}</span>
          </motion.li>
        ))}
      </ul>
      
      {/* Hover glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${premium ? 'from-yellow-400/0 via-yellow-400/5 to-yellow-400/0' : 'from-accent-primary/0 via-accent-primary/5 to-accent-primary/0'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
    </motion.div>
  );
}
