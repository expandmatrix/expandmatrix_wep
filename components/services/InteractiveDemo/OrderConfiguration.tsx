'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, ShoppingCart } from 'lucide-react';

interface Order {
  id: number;
  product: string;
  quantity: number;
  price: number;
}

interface OrderConfigurationProps {
  dict?: any;
  lang: string;
}

export default function OrderConfiguration({ dict, lang }: OrderConfigurationProps) {
  const [orders, setOrders] = useState<Order[]>([
    { id: 1, product: 'Premium Laptop', quantity: 1, price: 35000 },
    { id: 2, product: 'Wireless Headphones', quantity: 2, price: 3500 }
  ]);

  const [newOrder, setNewOrder] = useState({ product: '', quantity: 1, price: 0 });

  const addOrder = () => {
    if (orders.length >= 5 || !newOrder.product.trim()) return;
    
    const newId = Math.max(...orders.map(o => o.id), 0) + 1;
    setOrders(prev => [...prev, { 
      id: newId, 
      product: newOrder.product.trim(),
      quantity: newOrder.quantity,
      price: newOrder.price
    }]);
    setNewOrder({ product: '', quantity: 1, price: 0 });
  };

  const removeOrder = (id: number) => {
    if (orders.length > 1) {
      setOrders(prev => prev.filter(order => order.id !== id));
    }
  };

  const updateOrder = (id: number, field: keyof Order, value: string | number) => {
    setOrders(prev => prev.map(order => 
      order.id === id ? { ...order, [field]: value } : order
    ));
  };

  const totalValue = orders.reduce((sum, order) => sum + (order.quantity * order.price), 0);

  const formatCurrency = (amount: number) => {
    return lang === 'cs' 
      ? `${amount.toLocaleString('cs-CZ')} Kč`
      : `$${(amount / 25).toLocaleString('en-US')}`;
  };

  return (
    <div className="liquid-glass-card p-8">
      <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
        <ShoppingCart className="w-6 h-6 text-accent-primary" />
        {dict?.orders?.title || 'Configure Orders'}
      </h3>
      
      {/* Existing Orders */}
      <div className="space-y-4 mb-6">
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
              className="col-span-5 px-3 py-2 bg-bg-secondary border border-accent-primary/20 rounded-lg text-text-primary focus:border-accent-primary focus:outline-none transition-colors"
            />
            <input
              type="number"
              value={order.quantity}
              onChange={(e) => updateOrder(order.id, 'quantity', parseInt(e.target.value) || 1)}
              className="col-span-2 px-3 py-2 bg-bg-secondary border border-accent-primary/20 rounded-lg text-text-primary focus:border-accent-primary focus:outline-none transition-colors"
              min="1"
            />
            <input
              type="number"
              value={order.price}
              onChange={(e) => updateOrder(order.id, 'price', parseInt(e.target.value) || 0)}
              className="col-span-4 px-3 py-2 bg-bg-secondary border border-accent-primary/20 rounded-lg text-text-primary focus:border-accent-primary focus:outline-none transition-colors"
              min="0"
            />
            <button
              onClick={() => removeOrder(order.id)}
              disabled={orders.length <= 1}
              className="col-span-1 p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Minus className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Add New Order */}
      {orders.length < 5 && (
        <div className="grid grid-cols-12 gap-3 items-center p-4 bg-accent-primary/5 rounded-lg border border-accent-primary/20 mb-6">
          <input
            type="text"
            value={newOrder.product}
            onChange={(e) => setNewOrder(prev => ({ ...prev, product: e.target.value }))}
            placeholder={dict?.orders?.newProduct || 'New product'}
            className="col-span-5 px-3 py-2 bg-bg-secondary border border-accent-primary/20 rounded-lg text-text-primary focus:border-accent-primary focus:outline-none transition-colors"
          />
          <input
            type="number"
            value={newOrder.quantity}
            onChange={(e) => setNewOrder(prev => ({ ...prev, quantity: parseInt(e.target.value) || 1 }))}
            className="col-span-2 px-3 py-2 bg-bg-secondary border border-accent-primary/20 rounded-lg text-text-primary focus:border-accent-primary focus:outline-none transition-colors"
            min="1"
          />
          <input
            type="number"
            value={newOrder.price}
            onChange={(e) => setNewOrder(prev => ({ ...prev, price: parseInt(e.target.value) || 0 }))}
            className="col-span-4 px-3 py-2 bg-bg-secondary border border-accent-primary/20 rounded-lg text-text-primary focus:border-accent-primary focus:outline-none transition-colors"
            min="0"
          />
          <button
            onClick={addOrder}
            disabled={!newOrder.product.trim()}
            className="col-span-1 p-2 text-accent-primary hover:bg-accent-primary/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Total Value */}
      <div className="text-center p-4 bg-accent-primary/10 rounded-lg border border-accent-primary/20">
        <p className="text-text-secondary mb-1">{dict?.orders?.totalValue || 'Total Value'}</p>
        <p className="text-2xl font-bold text-accent-primary">{formatCurrency(totalValue)}</p>
      </div>
    </div>
  );
}
