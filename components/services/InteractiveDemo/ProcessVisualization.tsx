'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useDemoContext } from './context';
import { ArrowRight, CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface ProcessVisualizationProps {
  dict?: any;
}

export default function ProcessVisualization({ dict }: ProcessVisualizationProps) {
  const { state } = useDemoContext();

  const steps = [
    {
      id: 'input',
      title: dict?.process?.input || 'Data Input',
      status: state.currentStep >= 0 ? 'completed' : 'pending'
    },
    {
      id: 'analysis',
      title: dict?.process?.analysis || 'AI Analysis',
      status: state.currentStep >= 1 ? 'completed' : state.isSimulating ? 'active' : 'pending'
    },
    {
      id: 'optimization',
      title: dict?.process?.optimization || 'Optimization',
      status: state.currentStep >= 2 ? 'completed' : 'pending'
    },
    {
      id: 'results',
      title: dict?.process?.results || 'Results',
      status: state.showResults ? 'completed' : 'pending'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'active':
        return <Clock className="w-5 h-5 text-yellow-400 animate-spin" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <div className="liquid-glass-card p-8">
      <h3 className="text-2xl font-bold text-text-primary mb-6">
        {dict?.process?.title || 'Process Visualization'}
      </h3>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step.id}>
            <motion.div
              className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
                step.status === 'active' ? 'bg-accent-primary/10 border border-accent-primary/20' :
                step.status === 'completed' ? 'bg-green-400/10 border border-green-400/20' :
                'bg-bg-secondary/30 border border-gray-400/20'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {getStatusIcon(step.status)}
              <span className={`font-medium ${
                step.status === 'completed' ? 'text-green-400' :
                step.status === 'active' ? 'text-accent-primary' :
                'text-text-secondary'
              }`}>
                {step.title}
              </span>
            </motion.div>

            {index < steps.length - 1 && (
              <div className="flex justify-center py-2">
                <ArrowRight className="w-4 h-4 text-text-secondary" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
