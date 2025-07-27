import React from 'react';
import { 
  ShoppingCart, 
  Package, 
  FileText, 
  Truck,
  BarChart3,
  Zap,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { ProcessStep, Order } from './types';

export const defaultSteps = (dict: any): ProcessStep[] => [
  {
    id: 'receive',
    name: dict?.steps?.manual?.receive || 'Receive Orders',
    icon: React.createElement(ShoppingCart, { className: "w-6 h-6" }),
    manualTime: 3000,
    aiTime: 1000,
    completed: false,
    category: 'input',
    position: 0
  },
  {
    id: 'inventory',
    name: dict?.steps?.manual?.inventory || 'Check Inventory',
    icon: React.createElement(Package, { className: "w-6 h-6" }),
    manualTime: 3000,
    aiTime: 1000,
    completed: false,
    hasError: true,
    errorMessage: dict?.errors?.inventory || 'Stock shortage detected',
    category: 'processing',
    position: 1
  },
  {
    id: 'invoice',
    name: dict?.steps?.manual?.invoice || 'Generate Invoice',
    icon: React.createElement(FileText, { className: "w-6 h-6" }),
    manualTime: 3000,
    aiTime: 1000,
    completed: false,
    category: 'processing',
    position: 2
  },
  {
    id: 'shipping',
    name: dict?.steps?.manual?.shipping || 'Prepare Shipping',
    icon: React.createElement(Truck, { className: "w-6 h-6" }),
    manualTime: 3000,
    aiTime: 1000,
    completed: false,
    category: 'output',
    position: 3
  },
  {
    id: 'reporting',
    name: dict?.steps?.manual?.reporting || 'Generate Reports',
    icon: React.createElement(BarChart3, { className: "w-6 h-6" }),
    manualTime: 3000,
    aiTime: 1000,
    completed: false,
    category: 'output',
    position: 4
  }
];

export const aiOptimizedSteps = (dict: any): ProcessStep[] => [
  {
    id: 'ai_detection',
    name: dict?.steps?.ai?.detection || 'AI Error Detection & Optimization',
    icon: React.createElement(Zap, { className: "w-6 h-6" }),
    manualTime: 15000,
    aiTime: 2000,
    completed: false,
    category: 'processing',
    position: 0,
    aiOptimized: true
  },
  {
    id: 'ai_processing',
    name: dict?.steps?.ai?.processing || 'Automated Processing',
    icon: React.createElement(CheckCircle, { className: "w-6 h-6" }),
    manualTime: 15000,
    aiTime: 3000,
    completed: false,
    category: 'processing',
    position: 1,
    aiOptimized: true
  }
];

export const validateOrder = (order: Partial<Order>): string[] => {
  const errors: string[] = [];
  
  if (!order.product?.trim()) {
    errors.push('Product name is required');
  }
  
  if (!order.quantity || order.quantity <= 0) {
    errors.push('Quantity must be greater than 0');
  }
  
  if (!order.price || order.price < 0) {
    errors.push('Price must be positive');
  }
  
  return errors;
};

export const generateAIResponse = (message: string, orders: Order[]): string => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('order') || lowerMessage.includes('objednávka')) {
    return `I found ${orders.length} orders with total value ${orders.reduce((sum, o) => sum + o.quantity * o.price, 0)} CZK. All orders are confirmed and ready for processing.`;
  }
  
  if (lowerMessage.includes('time') || lowerMessage.includes('čas')) {
    return 'AI processing typically takes 5 minutes compared to 30 minutes manual processing - that\'s 80% time savings!';
  }
  
  if (lowerMessage.includes('cost') || lowerMessage.includes('náklady')) {
    return 'AI automation reduces processing costs by 80% - from 500 CZK to 100 CZK per batch.';
  }
  
  if (lowerMessage.includes('error') || lowerMessage.includes('chyba')) {
    return 'AI automatically detects and fixes common errors like inventory shortages, invalid data, and processing bottlenecks.';
  }
  
  return 'I can help you with order processing, time estimates, cost calculations, and error handling. What would you like to know?';
};

export const calculateSavings = (orders: Order[], mode: 'manual' | 'ai') => {
  const baseTime = 30; // minutes for manual
  const baseCost = 500; // CZK for manual
  
  const orderMultiplier = Math.max(1, orders.length / 2);
  
  if (mode === 'ai') {
    const aiTime = Math.max(2, 5 / orderMultiplier);
    const aiCost = Math.max(50, 100 / orderMultiplier);
    
    return {
      time: aiTime,
      cost: aiCost,
      savings: {
        time: baseTime - aiTime,
        cost: baseCost - aiCost,
        percentage: Math.round(((baseTime - aiTime) / baseTime) * 100)
      }
    };
  }
  
  return {
    time: baseTime * orderMultiplier,
    cost: baseCost * orderMultiplier,
    savings: { time: 0, cost: 0, percentage: 0 }
  };
};

// Icon factory functions for better type safety
export const createIcon = (IconComponent: typeof ShoppingCart, className: string = "w-6 h-6") => {
  return React.createElement(IconComponent, { className });
};

// Predefined icon configurations
export const iconConfigs = {
  shoppingCart: { component: ShoppingCart, className: "w-6 h-6" },
  package: { component: Package, className: "w-6 h-6" },
  fileText: { component: FileText, className: "w-6 h-6" },
  truck: { component: Truck, className: "w-6 h-6" },
  barChart: { component: BarChart3, className: "w-6 h-6" },
  zap: { component: Zap, className: "w-6 h-6" },
  checkCircle: { component: CheckCircle, className: "w-6 h-6" },
  alertTriangle: { component: AlertTriangle, className: "w-6 h-6" }
} as const;

// Type-safe step creation helpers
export const createProcessStep = (
  id: string,
  name: string,
  iconConfig: typeof iconConfigs[keyof typeof iconConfigs],
  manualTime: number,
  aiTime: number,
  category: 'input' | 'processing' | 'output',
  position: number,
  options?: {
    hasError?: boolean;
    errorMessage?: string;
    aiOptimized?: boolean;
  }
): ProcessStep => ({
  id,
  name,
  icon: React.createElement(iconConfig.component, { className: iconConfig.className }),
  manualTime,
  aiTime,
  completed: false,
  category,
  position,
  ...options
});

// Error messages constants
export const ERROR_MESSAGES = {
  PRODUCT_REQUIRED: 'Product name is required',
  QUANTITY_INVALID: 'Quantity must be greater than 0',
  PRICE_INVALID: 'Price must be positive',
  INVENTORY_SHORTAGE: 'Stock shortage detected',
  PROCESSING_ERROR: 'Processing error occurred',
  NETWORK_ERROR: 'Network connection failed'
} as const;

// Time constants
export const TIME_CONSTANTS = {
  MANUAL_BASE_TIME: 30, // minutes
  AI_BASE_TIME: 5, // minutes
  STEP_DURATION_MANUAL: 3000, // milliseconds
  STEP_DURATION_AI: 2000, // milliseconds
  ANIMATION_DELAY: 500 // milliseconds
} as const;

// Cost constants
export const COST_CONSTANTS = {
  MANUAL_BASE_COST: 500, // CZK
  AI_BASE_COST: 100, // CZK
  CURRENCY_CONVERSION_RATE: 25 // CZK to USD
} as const;

// Validation rules
export const VALIDATION_RULES = {
  MAX_ORDERS: 5,
  MIN_QUANTITY: 1,
  MIN_PRICE: 0,
  MAX_PRODUCT_NAME_LENGTH: 100
} as const;

// Default values
export const DEFAULT_VALUES = {
  NEW_ORDER: {
    product: '',
    quantity: 1,
    price: 0
  },
  SIMULATION_PROGRESS: 0,
  CURRENT_STEP: 0
} as const;
