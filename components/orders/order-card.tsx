'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CreditCard, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';

interface OrderCardProps {
  order: any;
  onViewDetails: () => void;
}

export function OrderCard({ order, onViewDetails }: OrderCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processing': return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'shipped': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'delivered': return 'text-green-600 bg-green-50 border-green-200';
      case 'cancelled': return 'text-rose-600 bg-rose-50 border-rose-200';
      default: return 'text-slate-600 bg-slate-50 border-slate-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'processing': return 'Processing';
      case 'shipped': return 'Shipped';
      case 'delivered': return 'Delivered';
      case 'cancelled': return 'Cancelled';
      default: return 'Unknown';
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-BD', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all"
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Order Info */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
            <div>
              <h3 className="font-semibold text-slate-900 text-lg">
                Order #{order.id}
              </h3>
              <p className="text-slate-500 text-sm">
                Placed on {formatDate(order.createdAt)}
              </p>
            </div>
            
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium ${getStatusColor(order.status)}`}>
              {getStatusText(order.status)}
            </div>
          </div>

          {/* Order Items Preview */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex -space-x-2">
              {order.items.slice(0, 3).map((item: any, index: number) => (
                <div
                  key={index}
                  className="w-12 h-12 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg border-2 border-white flex items-center justify-center"
                >
                  <div className="w-8 h-10 bg-gradient-to-b from-amber-300 to-amber-500 rounded"></div>
                </div>
              ))}
              {order.items.length > 3 && (
                <div className="w-12 h-12 bg-slate-100 rounded-lg border-2 border-white flex items-center justify-center text-xs font-medium text-slate-600">
                  +{order.items.length - 3}
                </div>
              )}
            </div>
            
            <div className="flex-1">
              <p className="text-slate-600 text-sm">
                {order.items.length} item{order.items.length > 1 ? 's' : ''} • Total: {formatPrice(order.totalAmount)}
              </p>
              <p className="text-slate-500 text-xs">
                {order.items[0].product.name}
                {order.items.length > 1 && ` and ${order.items.length - 1} more`}
              </p>
            </div>
          </div>

          {/* Order Meta */}
          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{order.shippingAddress.city}</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              <span className="capitalize">{order.paymentMethod}</span>
            </div>
            {order.estimatedDelivery && (
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Est. delivery: {formatDate(order.estimatedDelivery)}</span>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-2">
          <Button
            onClick={onViewDetails}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Eye className="h-4 w-4" />
            View Details
          </Button>
          
          {order.status === 'delivered' && (
            <Button variant="outline" className="border-amber-200 text-amber-600 hover:bg-amber-50">
              Reorder
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}