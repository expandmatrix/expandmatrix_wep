'use client';

import { motion } from 'framer-motion';
import { FaCheck, FaStar, FaRocket, FaBrain } from 'react-icons/fa';

interface BenefitListProps {
  title: string;
  items: string[];
  type: 'benefits' | 'content';
  premium?: boolean;
}

export default function BenefitList({ title, items, type, premium = false }: BenefitListProps) {
  const getIcon = () => {
    if (premium) {
      return type === 'benefits' ? FaStar : FaRocket;
    }
    return type === 'benefits' ? FaCheck : FaBrain;
  };

  const Icon = getIcon();
  const iconColor = premium ? 'text-yellow-400' : 'text-green-400';
  const borderColor = premium ? 'border-yellow-500/30' : 'border-green-500/30';

  return (
    <motion.div
      initial={{ opacity: 0, x: type === 'benefits' ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border ${borderColor}`}
    >
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <Icon className={`text-xl ${iconColor}`} />
        {title}
      </h3>
      
      <ul className="space-y-4">
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start gap-3 text-gray-300"
          >
            <div className={`w-2 h-2 rounded-full ${premium ? 'bg-yellow-400' : 'bg-green-400'} mt-2 flex-shrink-0`} />
            <span className="leading-relaxed">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}