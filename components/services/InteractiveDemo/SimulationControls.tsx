'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useDemoContext } from './context';
import { Play, Pause, RotateCcw, Settings } from 'lucide-react';

interface SimulationControlsProps {
  dict?: any;
  lang: string;
}

export default function SimulationControls({ dict, lang }: SimulationControlsProps) {
  const { state, dispatch } = useDemoContext();

  const handleStartSimulation = () => {
    dispatch({ type: 'START_SIMULATION' });
    
    // Simulate processing
    setTimeout(() => {
      dispatch({ 
        type: 'SET_RESULTS', 
        payload: {
          efficiency: 95,
          timeSaved: 75,
          costReduction: 40,
          accuracy: 98
        }
      });
      dispatch({ type: 'STOP_SIMULATION' });
    }, 3000);
  };

  return (
    <div className="liquid-glass-card p-8">
      <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
        <Settings className="w-6 h-6 text-accent-primary" />
        {dict?.simulation?.title || 'Simulation Controls'}
      </h3>

      <div className="space-y-6">
        {/* Status */}
        <div className="p-4 bg-bg-secondary/30 rounded-lg">
          <p className="text-text-secondary mb-2">{dict?.simulation?.status || 'Status'}</p>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${
              state.isSimulating ? 'bg-yellow-400 animate-pulse' : 
              state.showResults ? 'bg-green-400' : 'bg-gray-400'
            }`} />
            <span className="text-text-primary font-medium">
              {state.isSimulating ? 'Running...' : 
               state.showResults ? 'Completed' : 'Ready'}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-3">
          <motion.button
            onClick={handleStartSimulation}
            disabled={state.isSimulating}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-accent-primary text-bg-primary font-semibold rounded-lg hover:bg-accent-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: state.isSimulating ? 1 : 1.02 }}
            whileTap={{ scale: state.isSimulating ? 1 : 0.98 }}
          >
            {state.isSimulating ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
            {state.isSimulating ? 'Running...' : (dict?.simulation?.start || 'Start')}
          </motion.button>

          <motion.button
            onClick={() => dispatch({ type: 'RESET' })}
            className="px-4 py-3 bg-bg-secondary border border-accent-primary/20 text-text-primary rounded-lg hover:border-accent-primary/40 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <RotateCcw className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Progress */}
        {state.isSimulating && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-text-secondary">Progress</span>
              <span className="text-accent-primary">Processing...</span>
            </div>
            <div className="w-full bg-bg-secondary rounded-full h-2">
              <motion.div
                className="bg-accent-primary h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 3, ease: 'easeInOut' }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
