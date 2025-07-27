'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useDemoContext } from './context';
import { Package, Users, Workflow } from 'lucide-react';

interface ModeSelectorProps {
  dict?: any;
}

export default function ModeSelector({ dict }: ModeSelectorProps) {
  const { state, dispatch } = useDemoContext();

  const modes = [
    {
      id: 'ecommerce' as const,
      title: dict?.modes?.ecommerce || 'E-commerce',
      icon: Package,
      description: dict?.modes?.ecommerceDesc || 'Optimize inventory and orders'
    },
    {
      id: 'hr' as const,
      title: dict?.modes?.hr || 'HR Management',
      icon: Users,
      description: dict?.modes?.hrDesc || 'Streamline HR processes'
    },
    {
      id: 'workflow' as const,
      title: dict?.modes?.workflow || 'Custom Workflow',
      icon: Workflow,
      description: dict?.modes?.workflowDesc || 'Build custom automation'
    }
  ];

  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {modes.map((mode) => (
          <motion.button
            key={mode.id}
            onClick={() => dispatch({ type: 'SET_MODE', payload: mode.id })}
            className={`p-6 rounded-xl border-2 transition-all text-left ${
              state.mode === mode.id
                ? 'border-accent-primary bg-accent-primary/10'
                : 'border-accent-primary/20 bg-bg-secondary/30 hover:border-accent-primary/40'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <mode.icon className={`w-8 h-8 mb-4 ${
              state.mode === mode.id ? 'text-accent-primary' : 'text-text-secondary'
            }`} />
            <h3 className="text-xl font-bold text-text-primary mb-2">{mode.title}</h3>
            <p className="text-text-secondary">{mode.description}</p>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
