'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Shield, Clock } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

interface OrderSummaryProps {
  items: any[];
  total: number;
  shippingCost: number;
  finalTotal: number;
}

export function OrderSummary({ items, total, shippingCost, finalTotal }: OrderSummaryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sticky top-8"
    >
      <h2 className="text-xl font-bold text-slate-900 mb-6">
        Order Summary
      </h2>

      {/* Order Items */}
      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={item.product.id} className="flex items-center gap-3">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <div className="w-10 h-12 bg-gradient-to-b from-amber-300 to-amber-500 rounded"></div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-slate-900 text-sm truncate">
                {item.product.name}
              </h3>
              <p className="text-slate-500 text-xs">
                Qty: {item.quantity} × {formatPrice(item.product.price)}
              </p>
            </div>
            <div className="font-semibold text-slate-900">
              {formatPrice(item.product.price * item.quantity)}
            </div>
          </div>
        ))}
      </div>

      {/* Price Breakdown */}
      <div className="space-y-3 border-t border-slate-200 pt-4 mb-6">
        <div className="flex justify-between text-slate-600">
          <span>Subtotal</span>
          <span>{formatPrice(total)}</span>
        </div>
        <div className="flex justify-between text-slate-600">
          <span>Shipping</span>
          <span>
            {shippingCost === 0 ? (
              <span className="text-green-600">Free</span>
            ) : (
              formatPrice(shippingCost)
            )}
          </span>
        </div>
        {shippingCost > 0 && (
          <div className="text-sm text-amber-600 bg-amber-50 p-2 rounded-lg">
            Add {formatPrice(500 - total)} more for free shipping!
          </div>
        )}
        <div className="border-t border-slate-200 pt-3">
          <div className="flex justify-between text-lg font-bold text-slate-900">
            <span>Total</span>
            <span>{formatPrice(finalTotal)}</span>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="space-y-3 border-t border-slate-200 pt-4">
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <Truck className="h-4 w-4 text-green-600" />
          <span>Free shipping on orders over ৳500</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <Shield className="h-4 w-4 text-blue-600" />
          <span>Quality guaranteed</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <Clock className="h-4 w-4 text-amber-600" />
          <span>Delivery within 2-3 business days</span>
        </div>
      </div>
    </motion.div>
  );
}