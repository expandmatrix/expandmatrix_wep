'use client';

import { useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GripVertical, Zap, AlertTriangle } from 'lucide-react';
import { useDemoContext } from './context';

interface WorkflowBuilderProps {
  dict?: any;
}

export default function WorkflowBuilder({ dict }: WorkflowBuilderProps) {
  const { state, dispatch } = useDemoContext();

  const moveStep = useCallback((dragIndex: number, hoverIndex: number) => {
    if (!state.workflowSteps || state.workflowSteps.length === 0) return;
    
    const draggedStep = state.workflowSteps[dragIndex];
    const newSteps = [...state.workflowSteps];
    newSteps.splice(dragIndex, 1);
    newSteps.splice(hoverIndex, 0, draggedStep);
    
    const updatedSteps = newSteps.map((step, index) => ({
      ...step,
      position: index
    }));
    
    dispatch({ type: 'SET_WORKFLOW_STEPS', payload: updatedSteps });
  }, [state.workflowSteps, dispatch]);

  // Fallback pokud nejsou kroky
  if (!state.workflowSteps || state.workflowSteps.length === 0) {
    return (
      <div className="liquid-glass-card p-8">
        <h3 className="text-2xl font-bold text-text-primary mb-6">
          {dict?.workflow?.title || 'Workflow Builder'}
        </h3>
        <p className="text-text-secondary">Loading workflow steps...</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="liquid-glass-card p-8"
    >
      <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
        <GripVertical className="w-6 h-6 text-accent-primary" />
        {dict?.workflow?.title || 'Workflow Builder'}
      </h3>

      <p className="text-text-secondary mb-6 text-sm">
        {dict?.workflow?.description || 'Drag and drop to reorder workflow steps. See how AI optimizes each step.'}
      </p>

      <div className="space-y-3">
        <AnimatePresence>
          {state.workflowSteps
            .sort((a, b) => a.position - b.position)
            .map((step, index) => (
              <motion.div
                key={step.id}
                className={`liquid-glass-card p-4 border-2 border-dashed transition-all duration-200 cursor-move relative ${
                  step.completed 
                    ? 'border-green-400/50 bg-green-400/10' 
                    : step.hasError 
                    ? 'border-red-400/50 bg-red-400/10'
                    : 'border-accent-primary/30 hover:border-accent-primary/50'
                }`}
                whileHover={{ scale: 1.02 }}
                layout
              >
                <div className="flex items-center gap-3">
                  <GripVertical className="w-5 h-5 text-text-secondary" />
                  {step.icon}
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary">{step.name}</h4>
                    <div className="flex gap-4 text-sm text-text-secondary">
                      <span>Manual: {step.manualTime}ms</span>
                      <span>AI: {step.aiTime}ms</span>
                    </div>
                  </div>
                  {step.hasError && (
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                  )}
                  {step.aiOptimized && (
                    <Zap className="w-5 h-5 text-accent-primary" />
                  )}
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
