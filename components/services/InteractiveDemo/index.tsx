
'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { DemoProvider } from './context';
import OrderConfiguration from './OrderConfiguration';
import WorkflowBuilder from './WorkflowBuilder';
import SimulationControls from './SimulationControls';
import ProcessVisualization from './ProcessVisualization';
import ResultsChart from './ResultsChart';
import MiniChatbot from './MiniChatbot';
import ExportControls from './ExportControls';
import ModeSelector from './ModeSelector';
import LoadingSpinner from './LoadingSpinner';

interface InteractiveDemoProps {
  dict: any;
  lang: string;
}

export default function InteractiveDemo({ dict, lang }: InteractiveDemoProps) {
  return (
    <DemoProvider>
      <section className="py-20 bg-gradient-to-b from-bg-primary to-bg-secondary/30 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-text-primary mb-6">
              {dict?.title || 'Interactive AI Demo'}
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              {dict?.description || 'Experience the power of AI automation with our interactive demonstration.'}
            </p>
          </motion.div>

          {/* Mode Selector */}
          <ModeSelector dict={dict} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <OrderConfiguration dict={dict} lang={lang} />
            <SimulationControls dict={dict} lang={lang} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <WorkflowBuilder dict={dict} />
            <ProcessVisualization dict={dict} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <Suspense fallback={<LoadingSpinner />}>
                <ResultsChart dict={dict} lang={lang} />
              </Suspense>
            </div>
            <div className="space-y-6">
              <MiniChatbot dict={dict} lang={lang} />
              <ExportControls dict={dict} lang={lang} />
            </div>
          </div>
        </div>
      </section>
    </DemoProvider>
  );
}
