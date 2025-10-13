'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MoreVertical, CheckCircle, Clock, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';

// Mock recent orders
const recentOrders = [
  {
    id: 'ORD-2567',
    customer: 'Riya Ahmed',
    product: 'Bhuban Wild Honey',
    amount: 900,
    status: 'delivered',
    date: '2024-01-20'
  },
  {
    id: 'ORD-2566',
    customer: 'John Rahman',
    product: 'Mustard Oil + Dates',
    amount: 950,
    status: 'shipped',
    date: '2024-01-19'
  },
  {
    id: 'ORD-2565',
    customer: 'Fatima Begum',
    product: 'Pure Mustard Honey',
    amount: 1200,
    status: 'processing',
    date: '2024-01-19'
  },
  {
    id: 'ORD-2564',
    customer: 'Aminul Islam',
    product: 'Premium Forest Honey',
    amount: 550,
    status: 'delivered',
    date: '2024-01-18'
  },
  {
    id: 'ORD-2563',
    customer: 'Sabrina Khan',
    product: 'Mixed Natural Honey',
    amount: 1140,
    status: 'shipped',
    date: '2024-01-18'
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'delivered': return CheckCircle;
    case 'shipped': return Truck;
    case 'processing': return Clock;
    default: return Clock;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'delivered': return 'text-green-600 bg-green-50';
    case 'shipped': return 'text-blue-600 bg-blue-50';
    case 'processing': return 'text-amber-600 bg-amber-50';
    default: return 'text-slate-600 bg-slate-50';
  }
};

export function RecentOrders() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-900">Recent Orders</h3>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {recentOrders.map((order, index) => {
          const StatusIcon = getStatusIcon(order.status);
          
          return (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${getStatusColor(order.status)}`}>
                  <StatusIcon className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium text-slate-900">{order.id}</div>
                  <div className="text-sm text-slate-500">{order.customer}</div>
                </div>
              </div>

              <div className="text-right">
                <div className="font-semibold text-slate-900">
                  {formatPrice(order.amount)}
                </div>
                <div className="text-sm text-slate-500 capitalize">
                  {order.status}
                </div>
              </div>

              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}