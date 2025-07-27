'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, Bot, User } from 'lucide-react';
import { useDemoContext } from './context';
import type { ChatMessage } from './types';

interface MiniChatbotProps {
  dict: any;
  lang: string;
}

const mockAIResponses = {
  ecommerce: [
    "Optimalizujte sklad pomocí AI predikce poptávky - ušetříte až 30% nákladů na skladování.",
    "Automatizujte zpracování objednávek s AI - snížíte chyby o 85% a zrychlíte proces 5x.",
    "Implementujte chatboty pro zákaznický servis - vyřešte 70% dotazů automaticky 24/7."
  ],
  hr: [
    "AI screening kandidátů zkrátí proces náboru z týdnů na dny s 90% přesností.",
    "Automatizujte onboarding s personalizovanými AI asistenty pro každého zaměstnance.",
    "Predikujte fluktuaci zaměstnanců pomocí AI analýzy a preventivně reagujte."
  ],
  marketing: [
    "Generujte SEO-optimalizovaný obsah pomocí AI - zvyšte organický traffic o 150%.",
    "Personalizujte marketing kampaně s AI segmentací - zvyšte konverze o 40%.",
    "Automatizujte A/B testování s AI optimalizací - najděte nejlepší varianty rychleji."
  ]
};

export default function MiniChatbot({ dict, lang }: MiniChatbotProps) {
  const { state, dispatch } = useDemoContext();
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const generateAIResponse = (userMessage: string): string => {
    const responses = mockAIResponses[state.mode] || mockAIResponses.ecommerce;
    
    // Simple keyword matching for more relevant responses
    const keywords = userMessage.toLowerCase();
    if (keywords.includes('cost') || keywords.includes('náklad')) {
      return responses[0];
    } else if (keywords.includes('time') || keywords.includes('čas')) {
      return responses[1];
    } else {
      return responses[Math.floor(Math.random() * responses.length)];
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      type: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    dispatch({ type: 'ADD_CHAT_MESSAGE', payload: userMessage });
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: `msg-${Date.now()}-ai`,
        type: 'ai',
        content: generateAIResponse(input),
        timestamp: new Date()
      };

      dispatch({ type: 'ADD_CHAT_MESSAGE', payload: aiResponse });
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="liquid-glass-card p-6"
    >
      <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-3">
        <MessageCircle className="w-5 h-5 text-accent-primary" />
        {dict?.chat?.title || 'AI Assistant'}
      </h3>

      {/* Chat Messages */}
      <div className="h-64 overflow-y-auto mb-4 space-y-3 scrollbar-thin scrollbar-thumb-accent-primary/20">
        <AnimatePresence>
          {state.chatMessages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-text-secondary text-sm py-8"
            >
              {dict?.chat?.placeholder || 'Ask me about AI optimization for your business...'}
            </motion.div>
          )}

          {state.chatMessages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.type === 'ai' && (
                <div className="flex-shrink-0 w-8 h-8 bg-accent-primary/20 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-accent-primary" />
                </div>
              )}
              
              <div className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                message.type === 'user'
                  ? 'bg-accent-primary text-bg-primary'
                  : 'bg-bg-secondary/50 text-text-primary'
              }`}>
                {message.content}
              </div>

              {message.type === 'user' && (
                <div className="flex-shrink-0 w-8 h-8 bg-bg-secondary/50 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-text-secondary" />
                </div>
              )}
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-3 justify-start"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-accent-primary/20 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-accent-primary" />
              </div>
              <div className="bg-bg-secondary/50 px-3 py-2 rounded-lg">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce delay-100" />
                  <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={dict?.chat?.inputPlaceholder || 'Ask about AI optimization...'}
          className="flex-1 px-3 py-2 bg-bg-secondary/30 border border-accent-primary/20 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-primary/50 transition-colors"
          disabled={isTyping}
          aria-label="Chat input"
        />
        <motion.button
          onClick={handleSendMessage}
          disabled={!input.trim() || isTyping}
          className="px-3 py-2 bg-accent-primary text-bg-primary rounded-lg hover:bg-accent-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Send message"
        >
          <Send className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}