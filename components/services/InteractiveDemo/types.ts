export interface Order {
  id: string;
  product: string;
  quantity: number;
  priority: 'High' | 'Medium' | 'Low';
  status: 'pending' | 'processing' | 'completed';
  estimatedTime: number;
}

import React from 'react';

export interface ProcessStep {
  id: string;
  name: string;
  icon: React.ReactElement;
  manualTime: number;
  aiTime: number;
  completed: boolean;
  category: 'input' | 'processing' | 'output';
  position: number;
  hasError?: boolean;
  errorMessage?: string;
  aiOptimized?: boolean;
}

export interface SimulationResult {
  totalTime: number;
  totalCost: number;
  errors: number;
  efficiency: number;
  stepsCompleted: number;
  errorDetails: string[];
  savings: {
    time: number;
    cost: number;
    percentage: number;
  };
}

export interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

export interface ValidationErrors {
  [key: string]: string | undefined;
}

export interface DemoState {
  mode: 'ecommerce' | 'hr' | 'marketing';
  orders: Order[];
  workflowSteps: ProcessStep[];
  currentStep: number;
  progress: number;
  isRunning: boolean;
  simulationMode: 'manual' | 'ai' | null;
  stepErrors: string[];
  showResults: boolean;
  simulationResult: SimulationResult | null;
  chatMessages: ChatMessage[];
  validationErrors: ValidationErrors;
}

export interface DragItem {
  id: string;
  step: ProcessStep;
}

export type DemoAction =
  | { type: 'SET_MODE'; payload: 'ecommerce' | 'hr' | 'marketing' }
  | { type: 'SET_ORDERS'; payload: Order[] }
  | { type: 'SET_WORKFLOW_STEPS'; payload: ProcessStep[] }
  | { type: 'START_SIMULATION'; payload: 'manual' | 'ai' }
  | { type: 'SET_CURRENT_STEP'; payload: number }
  | { type: 'SET_PROGRESS'; payload: number }
  | { type: 'ADD_ERROR'; payload: string }
  | { type: 'SET_SIMULATION_RESULT'; payload: SimulationResult }
  | { type: 'ADD_CHAT_MESSAGE'; payload: ChatMessage }
  | { type: 'SET_VALIDATION_ERROR'; payload: { field: string; message: string } }
  | { type: 'RESET_DEMO' };
