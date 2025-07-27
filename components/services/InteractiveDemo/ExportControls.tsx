'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, BarChart3, Loader2 } from 'lucide-react';
import { useDemoContext } from './context';

interface ExportControlsProps {
  dict: any;
  lang: string;
}

export default function ExportControls({ dict, lang }: ExportControlsProps) {
  const { state } = useDemoContext();
  const [isExporting, setIsExporting] = useState(false);

  const formatCurrency = (amount: number) => {
    return lang === 'cs' 
      ? `${amount.toLocaleString('cs-CZ')} Kč`
      : `$${(amount / 25).toLocaleString('en-US')}`;
  };

  const generateCSVData = () => {
    if (!state.simulationResult) return '';

    const headers = [
      'Metric',
      'Manual Process',
      'AI Process',
      'Savings',
      'Improvement %'
    ];

    const rows = [
      [
        'Processing Time (minutes)',
        '30',
        state.simulationResult.totalTime.toString(),
        `${30 - state.simulationResult.totalTime}`,
        `${state.simulationResult.savings.percentage}%`
      ],
      [
        'Total Cost',
        formatCurrency(500),
        formatCurrency(state.simulationResult.totalCost),
        formatCurrency(state.simulationResult.savings.cost),
        `${Math.round((state.simulationResult.savings.cost / 500) * 100)}%`
      ],
      [
        'Error Rate',
        '15%',
        `${state.simulationResult.errors}%`,
        `${15 - state.simulationResult.errors}%`,
        `${Math.round(((15 - state.simulationResult.errors) / 15) * 100)}%`
      ],
      [
        'Efficiency',
        '60%',
        `${state.simulationResult.efficiency}%`,
        `${state.simulationResult.efficiency - 60}%`,
        `${Math.round(((state.simulationResult.efficiency - 60) / 60) * 100)}%`
      ]
    ];

    return [headers, ...rows]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');
  };

  const generatePDFContent = () => {
    if (!state.simulationResult) return '';

    return `
# AI Optimization Report - ${state.mode.toUpperCase()}

## Executive Summary
Your ${state.mode} process analysis shows significant optimization opportunities with AI implementation.

## Key Metrics
- **Time Savings**: ${state.simulationResult.savings.time} minutes (${state.simulationResult.savings.percentage}% improvement)
- **Cost Reduction**: ${formatCurrency(state.simulationResult.savings.cost)}
- **Efficiency Gain**: ${state.simulationResult.efficiency - 60}% improvement
- **Error Reduction**: ${15 - state.simulationResult.errors}% fewer errors

## Process Analysis
### Current Manual Process
- Processing Time: 30 minutes
- Total Cost: ${formatCurrency(500)}
- Error Rate: 15%
- Efficiency: 60%

### AI-Optimized Process
- Processing Time: ${state.simulationResult.totalTime} minutes
- Total Cost: ${formatCurrency(state.simulationResult.totalCost)}
- Error Rate: ${state.simulationResult.errors}%
- Efficiency: ${state.simulationResult.efficiency}%

## Recommendations
Based on your ${state.mode} workflow analysis, we recommend implementing AI automation to achieve these improvements.

## Next Steps
Contact Expand Matrix for a detailed implementation plan tailored to your business needs.

Generated on: ${new Date().toLocaleDateString(lang === 'cs' ? 'cs-CZ' : 'en-US')}
    `.trim();
  };

  const exportToCSV = async () => {
    if (!state.simulationResult) return;

    setIsExporting(true);
    
    try {
      const csvContent = generateCSVData();
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `ai-optimization-report-${state.mode}-${Date.now()}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setTimeout(() => setIsExporting(false), 1000);
    }
  };

  const exportToPDF = async () => {
    if (!state.simulationResult) return;

    setIsExporting(true);
    
    try {
      const pdfContent = generatePDFContent();
      const blob = new Blob([pdfContent], { type: 'text/plain;charset=utf-8;' });
      const link = document.createElement('a');
      
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `ai-optimization-report-${state.mode}-${Date.now()}.txt`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setTimeout(() => setIsExporting(false), 1000);
    }
  };

  if (!state.showResults || !state.simulationResult) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="liquid-glass-card p-6"
    >
      <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-3">
        <Download className="w-5 h-5 text-accent-primary" />
        {dict?.export?.title || 'Export Results'}
      </h3>

      <p className="text-text-secondary text-sm mb-6">
        {dict?.export?.description || 'Download your optimization analysis for further review.'}
      </p>

      <div className="space-y-3">
        <motion.button
          onClick={exportToCSV}
          disabled={isExporting}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-lg transition-colors disabled:opacity-50"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Export to CSV"
        >
          {isExporting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <BarChart3 className="w-4 h-4" />
          )}
          {dict?.export?.csv || 'Export CSV'}
        </motion.button>

        <motion.button
          onClick={exportToPDF}
          disabled={isExporting}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-colors disabled:opacity-50"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Export to PDF"
        >
          {isExporting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <FileText className="w-4 h-4" />
          )}
          {dict?.export?.pdf || 'Export Report'}
        </motion.button>
      </div>

      {/* Feedback Message */}
      {state.simulationResult.savings.percentage > 50 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-4 p-3 bg-green-400/10 border border-green-400/30 rounded-lg"
        >
          <p className="text-green-400 text-sm font-medium">
            🎉 {dict?.export?.feedback || `Excellent! You could save ${state.simulationResult.savings.time} hours - perfect for scaling your business!`}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}