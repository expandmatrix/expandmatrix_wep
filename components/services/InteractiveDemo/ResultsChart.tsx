'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useDemoContext } from './context';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ResultsChartProps {
  dict?: any;
  lang: string;
}

export default function ResultsChart({ dict, lang }: ResultsChartProps) {
  const { state } = useDemoContext();

  if (!state.showResults || !state.simulationResult) {
    return (
      <div className="liquid-glass-card p-8 text-center">
        <p className="text-text-secondary">
          {dict?.results?.noData || 'Run simulation to see results'}
        </p>
      </div>
    );
  }

  const data = [
    {
      name: dict?.results?.efficiency || 'Efficiency',
      value: state.simulationResult.efficiency || 0,
      color: '#10B981'
    },
    {
      name: dict?.results?.timeSaved || 'Time Saved',
      value: state.simulationResult.timeSaved || 0,
      color: '#3B82F6'
    },
    {
      name: dict?.results?.costReduction || 'Cost Reduction',
      value: state.simulationResult.costReduction || 0,
      color: '#8B5CF6'
    },
    {
      name: dict?.results?.accuracy || 'Accuracy',
      value: state.simulationResult.accuracy || 0,
      color: '#F59E0B'
    }
  ];

  return (
    <motion.div
      className="liquid-glass-card p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-bold text-text-primary mb-6">
        {dict?.results?.title || 'Simulation Results'}
      </h3>

      <div className="h-80 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="name" 
              stroke="#9CA3AF"
              fontSize={12}
            />
            <YAxis 
              stroke="#9CA3AF"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#1F2937',
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#F9FAFB'
              }}
            />
            <Bar 
              dataKey="value" 
              fill="#10B981"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <motion.div
            key={item.name}
            className="text-center p-4 bg-bg-secondary/30 rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div 
              className="text-2xl font-bold mb-1"
              style={{ color: item.color }}
            >
              {item.value}%
            </div>
            <div className="text-sm text-text-secondary">{item.name}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
