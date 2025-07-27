'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, 
  Package, 
  FileText, 
  Clock, 
  Zap, 
  TrendingUp,
  Play,
  RotateCcw,
  CheckCircle
} from 'lucide-react';
import type { Locale } from '@/lib/getDictionary';

interface Order {
  id: number;
  product: string;
  quantity: number;
  price: number;
}

interface DemoProps {
  dict: any;
  lang: Locale;
}

interface ProcessStep {
  id: string;
  name: string;
  icon: React.ReactNode;
  manualTime: number;
  aiTime: number;
  completed: boolean;
}

export default function InteractiveDemo({ dict, lang }: DemoProps) {
  const [orders, setOrders] = useState<Order[]>([
    { id: 1, product: 'Laptop', quantity: 2, price: 25000 },
    { id: 2, product: 'Mouse', quantity: 5, price: 500 },
    { id: 3, product: 'Keyboard', quantity: 3, price: 1200 }
  ]);

  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [mode, setMode] = useState<'manual' | 'ai' | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [progress, setProgress] = useState(0);

  const steps: ProcessStep[] = [
    {
      id: 'receive',
      name: dict.steps.receive,
      icon: <ShoppingCart className="w-6 h-6" />,
      manualTime: 180, // 3 minutes
      aiTime: 30, // 30 seconds
      completed: false
    },
    {
      id: 'process',
      name: dict.steps.process,
      icon: <Package className="w-6 h-6" />,
      manualTime: 300, // 5 minutes
      aiTime: 45, // 45 seconds
      completed: false
    },
    {
      id: 'invoice',
      name: dict.steps.invoice,
      icon: <FileText className="w-6 h-6" />,
      manualTime: 240, // 4 minutes
      aiTime: 15, // 15 seconds
      completed: false
    }
  ];

  const totalManualTime = steps.reduce((sum, step) => sum + step.manualTime, 0);
  const totalAiTime = steps.reduce((sum, step) => sum + step.aiTime, 0);
  const timeSaved = totalManualTime - totalAiTime;
  const percentageSaved = Math.round((timeSaved / totalManualTime) * 100);

  const chartData = [
    {
      name: dict.chart.manual,
      time: Math.round(totalManualTime / 60),
      fill: '#FF6B6B'
    },
    {
      name: dict.chart.ai,
      time: Math.round(totalAiTime / 60),
      fill: '#00FF7F'
    }
  ];

  const updateOrder = (id: number, field: keyof Order, value: string | number) => {
    setOrders(prev => prev.map(order => 
      order.id === id ? { ...order, [field]: value } : order
    ));
  };

  const addOrder = () => {
    const newId = Math.max(...orders.map(o => o.id)) + 1;
    setOrders(prev => [...prev, { 
      id: newId, 
      product: 'New Product', 
      quantity: 1, 
      price: 1000 
    }]);
  };

  const removeOrder = (id: number) => {
    if (orders.length > 1) {
      setOrders(prev => prev.filter(order => order.id !== id));
    }
  };

  const runSimulation = (selectedMode: 'manual' | 'ai') => {
    setMode(selectedMode);
    setIsRunning(true);
    setCurrentStep(0);
    setProgress(0);
    setShowResults(false);

    const stepDuration = selectedMode === 'manual' ? 2000 : 800; // Faster for AI
    let stepIndex = 0;

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / (steps.length * 10));
        return Math.min(newProgress, 100);
      });

      if (stepIndex < steps.length) {
        setTimeout(() => {
          setCurrentStep(stepIndex + 1);
          stepIndex++;
          
          if (stepIndex >= steps.length) {
            clearInterval(interval);
            setTimeout(() => {
              setIsRunning(false);
              setShowResults(true);
            }, 500);
          }
        }, stepDuration);
      }
    }, stepDuration / 10);
  };

  const resetDemo = () => {
    setIsRunning(false);
    setCurrentStep(0);
    setMode(null);
    setShowResults(false);
    setProgress(0);
  };

  return (
    <section className="py-32 bg-bg-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-primary/3 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            {dict.title}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {dict.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Order Configuration */}
            <div className="liquid-glass-card p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <ShoppingCart className="w-6 h-6 text-accent-primary" />
                {dict.orders.title}
              </h3>
              
              <div className="space-y-4">
                {orders.map((order) => (
                  <motion.div
                    key={order.id}
                    layout
                    className="grid grid-cols-12 gap-3 items-center p-4 bg-bg-secondary/30 rounded-lg"
                  >
                    <input
                      type="text"
                      value={order.product}
                      onChange={(e) => updateOrder(order.id, 'product', e.target.value)}
                      className="col-span-5 px-3 py-2 bg-bg-secondary border border-accent-primary/20 rounded-lg text-text-primary focus:border-accent-primary focus:outline-none"
                      disabled={isRunning}
                      aria-label={`${dict.orders.product} ${order.id}`}
                    />
                    <input
                      type="number"
                      value={order.quantity}
                      onChange={(e) => updateOrder(order.id, 'quantity', parseInt(e.target.value) || 1)}
                      className="col-span-2 px-3 py-2 bg-bg-secondary border border-accent-primary/20 rounded-lg text-text-primary focus:border-accent-primary focus:outline-none"
                      min="1"
                      disabled={isRunning}
                      aria-label={`${dict.orders.quantity} ${order.id}`}
                    />
                    <input
                      type="number"
                      value={order.price}
                      onChange={(e) => updateOrder(order.id, 'price', parseInt(e.target.value) || 0)}
                      className="col-span-3 px-3 py-2 bg-bg-secondary border border-accent-primary/20 rounded-lg text-text-primary focus:border-accent-primary focus:outline-none"
                      min="0"
                      disabled={isRunning}
                      aria-label={`${dict.orders.price} ${order.id}`}
                    />
                    <button
                      onClick={() => removeOrder(order.id)}
                      disabled={isRunning || orders.length <= 1}
                      className="col-span-2 px-2 py-2 text-red-400 hover:text-red-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label={`${dict.orders.remove} ${order.id}`}
                    >
                      ×
                    </button>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={addOrder}
                disabled={isRunning}
                className="mt-4 w-full py-3 border-2 border-accent-primary/30 border-dashed rounded-lg text-accent-primary hover:border-accent-primary hover:bg-accent-primary/5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label={dict.orders.add}
              >
                + {dict.orders.add}
              </button>
            </div>

            {/* Control Buttons */}
            <div className="flex gap-4">
              <motion.button
                onClick={() => runSimulation('manual')}
                disabled={isRunning}
                className="flex-1 py-4 px-6 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-xl text-text-primary font-semibold hover:from-red-500/30 hover:to-orange-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label={dict.buttons.manual}
              >
                <Clock className="w-5 h-5" />
                {dict.buttons.manual}
              </motion.button>

              <motion.button
                onClick={() => runSimulation('ai')}
                disabled={isRunning}
                className="flex-1 py-4 px-6 bg-gradient-to-r from-accent-primary/20 to-green-400/20 border border-accent-primary/30 rounded-xl text-text-primary font-semibold hover:from-accent-primary/30 hover:to-green-400/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 glow-on-hover"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label={dict.buttons.ai}
              >
                <Zap className="w-5 h-5" />
                {dict.buttons.ai}
              </motion.button>
            </div>

            {isRunning && (
              <motion.button
                onClick={resetDemo}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full py-3 px-6 border border-accent-primary/30 rounded-xl text-accent-primary hover:bg-accent-primary/10 transition-all duration-300 flex items-center justify-center gap-3"
                aria-label={dict.buttons.reset}
              >
                <RotateCcw className="w-5 h-5" />
                {dict.buttons.reset}
              </motion.button>
            )}
          </motion.div>

          {/* Right Column - Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Process Steps */}
            <div className="liquid-glass-card p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                {dict.process.title}
              </h3>

              <div className="space-y-4">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-500 ${
                      currentStep > index 
                        ? 'bg-accent-primary/10 border border-accent-primary/30' 
                        : currentStep === index && isRunning
                        ? 'bg-accent-primary/5 border border-accent-primary/20 animate-pulse'
                        : 'bg-bg-secondary/20 border border-transparent'
                    }`}
                    animate={{
                      scale: currentStep === index && isRunning ? 1.02 : 1,
                    }}
                  >
                    <div className={`p-3 rounded-full ${
                      currentStep > index 
                        ? 'bg-accent-primary text-bg-primary' 
                        : 'bg-bg-secondary text-text-secondary'
                    }`}>
                      {currentStep > index ? <CheckCircle className="w-6 h-6" /> : step.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-text-primary">{step.name}</h4>
                      <p className="text-sm text-text-secondary">
                        {dict.process.time}: {mode === 'ai' ? step.aiTime : step.manualTime}s
                      </p>
                    </div>

                    {currentStep === index && isRunning && (
                      <motion.div
                        className="w-6 h-6 border-2 border-accent-primary border-t-transparent rounded-full animate-spin"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Progress Bar */}
              {isRunning && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6"
                >
                  <div className="flex justify-between text-sm text-text-secondary mb-2">
                    <span>{dict.process.progress}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full bg-bg-secondary rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-accent-primary to-green-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Results Chart */}
            <AnimatePresence>
              {showResults && (
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.9 }}
                  className="liquid-glass-card p-8"
                >
                  <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-accent-primary" />
                    {dict.results.title}
                  </h3>

                  <div className="h-64 mb-6 flex items-end justify-center gap-8">
                    {/* Simple Bar Chart */}
                    <div className="flex flex-col items-center">
                      <div 
                        className="w-20 bg-red-500/70 rounded-t-lg mb-2 transition-all duration-1000"
                        style={{ height: `${(totalManualTime / 60) * 8}px` }}
                      />
                      <span className="text-sm text-text-secondary">{dict.chart.manual}</span>
                      <span className="text-lg font-bold text-text-primary">{Math.round(totalManualTime / 60)}min</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div 
                        className="w-20 bg-accent-primary rounded-t-lg mb-2 transition-all duration-1000"
                        style={{ height: `${(totalAiTime / 60) * 8}px` }}
                      />
                      <span className="text-sm text-text-secondary">{dict.chart.ai}</span>
                      <span className="text-lg font-bold text-text-primary">{Math.round(totalAiTime / 60)}min</span>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center p-6 bg-gradient-to-r from-accent-primary/10 to-green-400/10 rounded-xl border border-accent-primary/20"
                  >
                    <div className="text-4xl font-bold text-accent-primary mb-2">
                      {percentageSaved}%
                    </div>
                    <p className="text-text-primary font-semibold">
                      {dict.results.saved}
                    </p>
                    <p className="text-sm text-text-secondary mt-2">
                      {dict.results.details.replace('{time}', Math.round(timeSaved / 60).toString())}
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Future Enhancement Comments */}
        {/* TODO: Add drag-and-drop functionality for reordering process steps */}
        {/* TODO: Add more complex scenarios (inventory management, customer service) */}
        {/* TODO: Add real-time cost calculations */}
        {/* TODO: Add export functionality for results */}
      </div>
    </section>
  );
}
