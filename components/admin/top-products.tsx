'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp } from 'lucide-react';

// Mock top products
const topProducts = [
  {
    id: 1,
    name: 'Bhuban Wild Honey',
    nameBn: 'ভুবন বন মধু',
    sales: 156,
    revenue: 70200,
    rating: 4.8,
    trend: 'up'
  },
  {
    id: 2,
    name: 'Pure Mustard Honey',
    nameBn: 'খাঁটি সরিষার মধু',
    sales: 128,
    revenue: 51200,
    rating: 4.6,
    trend: 'up'
  },
  {
    id: 3,
    name: 'Cold-Pressed Mustard Oil',
    nameBn: 'কোল্ড-প্রেসড সরিষার তেল',
    sales: 89,
    revenue: 31150,
    rating: 4.7,
    trend: 'up'
  },
  {
    id: 4,
    name: 'Premium Natural Dates',
    nameBn: 'প্রিমিয়াম প্রাকৃতিক খেজুর',
    sales: 76,
    revenue: 45600,
    rating: 4.9,
    trend: 'up'
  },
  {
    id: 5,
    name: 'Mixed Natural Honey',
    nameBn: 'মিশ্র প্রাকৃতিক মধু',
    sales: 64,
    revenue: 24320,
    rating: 4.5,
    trend: 'down'
  }
];

export function TopProducts() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6"
    >
      <h3 className="text-lg font-semibold text-slate-900 mb-6">Top Products</h3>

      <div className="space-y-4">
        {topProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex items-center justify-between p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg flex items-center justify-center">
                <div className="w-6 h-8 bg-gradient-to-b from-amber-300 to-amber-500 rounded"></div>
              </div>
              <div>
                <div className="font-medium text-slate-900 text-sm">
                  {product.name}
                </div>
                <div className="text-xs text-slate-500 font-bengali">
                  {product.nameBn}
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="h-3 w-3 text-amber-400 fill-current" />
                  <span className="text-xs text-slate-600">{product.rating}</span>
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="flex items-center gap-1 justify-end">
                <TrendingUp className={`h-3 w-3 ${
                  product.trend === 'up' ? 'text-green-600' : 'text-rose-600 rotate-180'
                }`} />
                <span className="text-sm font-semibold text-slate-900">
                  {product.sales}
                </span>
              </div>
              <div className="text-xs text-slate-500">sales</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}