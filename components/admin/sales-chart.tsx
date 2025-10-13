'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

// Mock sales data
const salesData = [
  { month: 'Jan', sales: 40000, orders: 45 },
  { month: 'Feb', sales: 30000, orders: 52 },
  { month: 'Mar', sales: 50000, orders: 48 },
  { month: 'Apr', sales: 45000, orders: 60 },
  { month: 'May', sales: 60000, orders: 75 },
  { month: 'Jun', sales: 55000, orders: 68 },
  { month: 'Jul', sales: 75000, orders: 82 },
  { month: 'Aug', sales: 70000, orders: 78 },
  { month: 'Sep', sales: 65000, orders: 85 },
  { month: 'Oct', sales: 80000, orders: 92 },
  { month: 'Nov', sales: 85000, orders: 88 },
  { month: 'Dec', sales: 90000, orders: 95 }
];

export function SalesChart() {
  const maxSales = Math.max(...salesData.map(d => d.sales));
  const maxOrders = Math.max(...salesData.map(d => d.orders));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Sales Overview</h3>
          <p className="text-slate-600 text-sm">Monthly revenue and orders</p>
        </div>
        <div className="flex items-center gap-2 text-green-600">
          <TrendingUp className="h-4 w-4" />
          <span className="text-sm font-medium">+23.5% this month</span>
        </div>
      </div>

      <div className="flex items-end justify-between h-64 gap-2">
        {salesData.map((data, index) => {
          const salesHeight = (data.sales / maxSales) * 80;
          const ordersHeight = (data.orders / maxOrders) * 80;
          
          return (
            <div key={data.month} className="flex-1 flex flex-col items-center">
              <div className="flex items-end justify-center gap-1 h-48 w-full">
                {/* Sales Bar */}
                <div 
                  className="w-3 bg-amber-500 rounded-t transition-all duration-500 hover:bg-amber-600 relative group"
                  style={{ height: `${salesHeight}%` }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    ৳ {data.sales.toLocaleString()}
                  </div>
                </div>
                
                {/* Orders Bar */}
                <div 
                  className="w-3 bg-blue-500 rounded-t transition-all duration-500 hover:bg-blue-600 relative group"
                  style={{ height: `${ordersHeight}%` }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {data.orders} orders
                  </div>
                </div>
              </div>
              <span className="text-xs text-slate-500 mt-2">{data.month}</span>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-amber-500 rounded"></div>
          <span className="text-sm text-slate-600">Revenue (৳)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded"></div>
          <span className="text-sm text-slate-600">Orders</span>
        </div>
      </div>
    </motion.div>
  );
}