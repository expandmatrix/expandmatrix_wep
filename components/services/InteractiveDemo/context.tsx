'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';

export interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

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

export interface DemoState {
  mode: 'ecommerce' | 'hr' | 'workflow';
  showResults: boolean;
  isSimulating: boolean;
  simulationResult: any;
  currentStep: number;
  chatMessages: ChatMessage[];
  workflowSteps: ProcessStep[];
  orders: any[];
  progress: number;
  isRunning: boolean;
  simulationMode: 'manual' | 'ai' | null;
  stepErrors: string[];
  validationErrors: { [key: string]: string };
}

export type DemoAction = 
  | { type: 'SET_MODE'; payload: 'ecommerce' | 'hr' | 'workflow' }
  | { type: 'START_SIMULATION' }
  | { type: 'STOP_SIMULATION' }
  | { type: 'SET_RESULTS'; payload: any }
  | { type: 'NEXT_STEP' }
  | { type: 'ADD_CHAT_MESSAGE'; payload: ChatMessage }
  | { type: 'SET_WORKFLOW_STEPS'; payload: ProcessStep[] }
  | { type: 'SET_ORDERS'; payload: any[] }
  | { type: 'RESET' };

const defaultSteps: ProcessStep[] = [
  {
    id: 'receive',
    name: 'Receive Orders',
    icon: React.createElement('div', { className: "w-6 h-6" }),
    manualTime: 3000,
    aiTime: 1000,
    completed: false,
    category: 'input',
    position: 0
  },
  {
    id: 'process',
    name: 'Process Data',
    icon: React.createElement('div', { className: "w-6 h-6" }),
    manualTime: 5000,
    aiTime: 2000,
    completed: false,
    category: 'processing',
    position: 1
  }
];

const initialState: DemoState = {
  mode: 'ecommerce',
  showResults: false,
  isSimulating: false,
  simulationResult: null,
  currentStep: 0,
  chatMessages: [],
  workflowSteps: defaultSteps,
  orders: [],
  progress: 0,
  isRunning: false,
  simulationMode: null,
  stepErrors: [],
  validationErrors: {},
};

function demoReducer(state: DemoState, action: DemoAction): DemoState {
  switch (action.type) {
    case 'SET_MODE':
      return { 
        ...state, 
        mode: action.payload, 
        showResults: false, 
        chatMessages: [],
        workflowSteps: defaultSteps 
      };
    case 'START_SIMULATION':
      return { ...state, isSimulating: true, currentStep: 0, isRunning: true };
    case 'STOP_SIMULATION':
      return { ...state, isSimulating: false, showResults: true, isRunning: false };
    case 'SET_RESULTS':
      return { ...state, simulationResult: action.payload, showResults: true };
    case 'NEXT_STEP':
      return { ...state, currentStep: state.currentStep + 1 };
    case 'ADD_CHAT_MESSAGE':
      return { ...state, chatMessages: [...state.chatMessages, action.payload] };
    case 'SET_WORKFLOW_STEPS':
      return { ...state, workflowSteps: action.payload };
    case 'SET_ORDERS':
      return { ...state, orders: action.payload };
    case 'RESET':
      return { ...initialState, mode: state.mode, workflowSteps: defaultSteps };
    default:
      return state;
  }
}

const DemoContext = createContext<{
  state: DemoState;
  dispatch: React.Dispatch<DemoAction>;
} | null>(null);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(demoReducer, initialState);

  return (
    <DemoContext.Provider value={{ state, dispatch }}>
      {children}
    </DemoContext.Provider>
  );
}

export function useDemoContext() {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error('useDemoContext must be used within DemoProvider');
  }
  return context;
}
