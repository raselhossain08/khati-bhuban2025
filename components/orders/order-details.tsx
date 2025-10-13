'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Package, 
  Truck, 
  CheckCircle, 
  MapPin, 
  CreditCard,
  Calendar,
  Phone,
  Download,
  Share2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';

interface OrderDetailsProps {
  order: any;
  onBack: () => void;
}

const orderSteps = [
  { key: 'processing', label: 'Order Placed', labelBn: 'অর্ডার প্লেসড' },
  { key: 'confirmed', label: 'Confirmed', labelBn: 'কনফার্মড' },
  { key: 'shipped', label: 'Shipped', labelBn: 'শিপড' },
  { key: 'delivered', label: 'Delivered', labelBn: 'ডেলিভার্ড' }
];

export function OrderDetails({ order, onBack }: OrderDetailsProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processing': return Package;
      case 'shipped': return Truck;
      case 'delivered': return CheckCircle;
      default: return Package;
    }
  };

  const getStatusColor = (status: string, step: string) => {
    const statusOrder = ['processing', 'confirmed', 'shipped', 'delivered'];
    const currentIndex = statusOrder.indexOf(order.status);
    const stepIndex = statusOrder.indexOf(step);
    
    if (stepIndex < currentIndex) return 'text-green-600 bg-green-50 border-green-200';
    if (stepIndex === currentIndex) return 'text-amber-600 bg-amber-50 border-amber-200';
    return 'text-slate-400 bg-slate-50 border-slate-200';
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-BD', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCurrentStepIndex = () => {
    const steps = ['processing', 'confirmed', 'shipped', 'delivered'];
    return steps.indexOf(order.status);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="ghost"
              onClick={onBack}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Orders
            </Button>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-slate-900">
                Order #{order.id}
              </h1>
              <p className="text-slate-600">
                Placed on {formatDate(order.createdAt)}
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Invoice
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Order Progress */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-6">
                  Order Status
                </h2>
                
                <div className="relative">
                  {/* Progress Line */}
                  <div className="absolute top-5 left-4 right-4 h-0.5 bg-slate-200">
                    <div 
                      className="h-full bg-green-500 transition-all duration-500"
                      style={{ width: `${(getCurrentStepIndex() / 3) * 100}%` }}
                    ></div>
                  </div>

                  {/* Steps */}
                  <div className="relative grid grid-cols-4 gap-4">
                    {orderSteps.map((step, index) => {
                      const Icon = getStatusIcon(step.key);
                      const isCompleted = index <= getCurrentStepIndex();
                      const isCurrent = index === getCurrentStepIndex();
                      
                      return (
                        <div key={step.key} className="text-center">
                          <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center mx-auto mb-2 transition-colors ${
                            isCompleted 
                              ? 'bg-green-500 border-green-500 text-white'
                              : isCurrent
                              ? 'bg-amber-500 border-amber-500 text-white'
                              : 'bg-white border-slate-300 text-slate-400'
                          }`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="text-sm font-medium text-slate-900">
                            {step.label}
                          </div>
                          <div className="text-xs text-slate-500 font-bengali">
                            {step.labelBn}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Status Message */}
                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Package className="h-5 w-5 text-amber-600" />
                    <div>
                      <p className="font-medium text-amber-900">
                        {order.status === 'processing' && 'Your order is being processed'}
                        {order.status === 'shipped' && 'Your order has been shipped'}
                        {order.status === 'delivered' && 'Your order has been delivered'}
                      </p>
                      <p className="text-amber-700 text-sm">
                        {order.status === 'shipped' && order.estimatedDelivery && 
                          `Estimated delivery: ${formatDate(order.estimatedDelivery)}`
                        }
                        {order.status === 'delivered' && order.deliveredAt &&
                          `Delivered on: ${formatDate(order.deliveredAt)}`
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-6">
                  Order Items
                </h2>
                
                <div className="space-y-4">
                  {order.items.map((item: any, index: number) => (
                    <div key={index} className="flex items-center gap-4 p-4 border border-slate-200 rounded-lg">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="w-10 h-12 bg-gradient-to-b from-amber-300 to-amber-500 rounded"></div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900">
                          {item.product.name}
                        </h3>
                        <p className="text-slate-600 font-bengali text-sm">
                          {item.product.nameBn}
                        </p>
                        <p className="text-slate-500 text-sm">
                          Weight: {item.product.weight}
                        </p>
                      </div>
                      
                      <div className="text-right">
                        <p className="font-semibold text-slate-900">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                        <p className="text-slate-500 text-sm">
                          {item.quantity} × {formatPrice(item.product.price)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Total */}
                <div className="border-t border-slate-200 mt-6 pt-6 space-y-3">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span>{formatPrice(order.totalAmount)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-slate-900 border-t border-slate-200 pt-3">
                    <span>Total</span>
                    <span>{formatPrice(order.totalAmount)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Shipping Address */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Shipping Address
                </h2>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-slate-400" />
                    <div>
                      <p className="font-medium text-slate-900">{order.shippingAddress.name}</p>
                      <p className="text-slate-600 text-sm">{order.shippingAddress.street}</p>
                      <p className="text-slate-600 text-sm">
                        {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                      </p>
                      <p className="text-slate-600 text-sm">{order.shippingAddress.country}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-slate-400" />
                    <span className="text-slate-600">{order.shippingAddress.phone}</span>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Payment Information
                </h2>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-slate-400" />
                    <div>
                      <p className="font-medium text-slate-900 capitalize">
                        {order.paymentMethod}
                      </p>
                      <p className={`text-sm font-medium ${
                        order.paymentStatus === 'paid' ? 'text-green-600' : 'text-amber-600'
                      }`}>
                        {order.paymentStatus === 'paid' ? 'Paid' : 'Pending'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-slate-400" />
                    <span className="text-slate-600">
                      {formatDate(order.createdAt)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Support */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <h3 className="font-semibold text-amber-900 mb-2">
                  Need Help?
                </h3>
                <p className="text-amber-700 text-sm mb-4">
                  If you have any questions about your order, our support team is here to help.
                </p>
                <Button variant="outline" className="w-full border-amber-200 text-amber-600 hover:bg-amber-100">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}