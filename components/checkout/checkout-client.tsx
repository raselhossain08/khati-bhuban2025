'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  CreditCard, 
  Truck, 
  MapPin, 
  User, 
  Phone, 
  Mail,
  Lock,
  Shield,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/cart-context';
import { useAuth } from '@/contexts/auth-context';
import { formatPrice } from '@/lib/utils';
import { CheckoutForm } from './checkout-form';
import { OrderSummary } from './order-summary';

interface CheckoutClientProps {
  user?: any;
}

export function CheckoutClient({ user }: CheckoutClientProps) {
  const { state } = useCart();
  const { user: authUser } = useAuth();
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(1);
  const [orderData, setOrderData] = useState<any>(null);

  const { items, total } = state;
  const shippingCost = total > 500 ? 0 : 60;
  const finalTotal = total + shippingCost;

  if (items.length === 0) {
    router.push('/cart');
    return null;
  }

  const steps = [
    { number: 1, title: 'Shipping', titleBn: 'ডেলিভারি', icon: Truck },
    { number: 2, title: 'Payment', titleBn: 'পেমেন্ট', icon: CreditCard },
    { number: 3, title: 'Confirmation', titleBn: 'কনফার্মেশন', icon: CheckCircle },
  ];

  const handleOrderSuccess = (order: any) => {
    setOrderData(order);
    setActiveStep(3);
  };

  return (
    <section className="min-h-screen bg-slate-50 py-8">
      <div className="container mx-auto px-4">
        {/* Checkout Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Checkout
          </h1>
          
          {/* Progress Steps */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center">
              {steps.map((step, index) => (
                <React.Fragment key={step.number}>
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors ${
                      activeStep >= step.number
                        ? 'bg-amber-600 border-amber-600 text-white'
                        : 'bg-white border-slate-300 text-slate-400'
                    }`}>
                      <step.icon className="h-6 w-6" />
                    </div>
                    <span className={`text-sm mt-2 font-medium ${
                      activeStep >= step.number ? 'text-amber-600' : 'text-slate-400'
                    }`}>
                      {step.title}
                    </span>
                    <span className="text-xs font-bengali text-slate-500">
                      {step.titleBn}
                    </span>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-1 mx-4 ${
                      activeStep > step.number ? 'bg-amber-600' : 'bg-slate-300'
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            {activeStep === 1 && (
              <CheckoutForm 
                user={authUser || user} 
                onContinue={() => setActiveStep(2)}
              />
            )}
            
            {activeStep === 2 && (
              <PaymentSection 
                orderTotal={finalTotal}
                onBack={() => setActiveStep(1)}
                onSuccess={handleOrderSuccess}
              />
            )}
            
            {activeStep === 3 && orderData && (
              <OrderConfirmation order={orderData} />
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary 
              items={items}
              total={total}
              shippingCost={shippingCost}
              finalTotal={finalTotal}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Payment Section Component
function PaymentSection({ orderTotal, onBack, onSuccess }: any) {
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentMethods = [
    {
      id: 'cod',
      name: 'Cash on Delivery',
      nameBn: 'ক্যাশ অন ডেলিভারি',
      description: 'Pay when you receive your order',
      descriptionBn: 'অর্ডার পাওয়ার সময় পেমেন্ট করুন',
      icon: Truck
    },
    {
      id: 'bkash',
      name: 'bKash',
      nameBn: 'বিকাশ',
      description: 'Pay securely with bKash',
      descriptionBn: 'বিকাশ দিয়ে নিরাপদে পেমেন্ট করুন',
      icon: CreditCard
    },
    {
      id: 'card',
      name: 'Credit/Debit Card',
      nameBn: 'ক্রেডিট/ডেবিট কার্ড',
      description: 'Pay with your card securely',
      descriptionBn: 'আপনার কার্ড দিয়ে নিরাপদে পেমেন্ট করুন',
      icon: CreditCard
    }
  ];

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      const order = {
        id: `ORD-${Date.now()}`,
        items: [],
        totalAmount: orderTotal,
        paymentMethod,
        status: 'confirmed',
        createdAt: new Date(),
      };
      onSuccess(order);
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6"
    >
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Payment Method
      </h2>

      {/* Payment Methods */}
      <div className="space-y-4 mb-6">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            onClick={() => setPaymentMethod(method.id)}
            className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
              paymentMethod === method.id
                ? 'border-amber-500 bg-amber-50'
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                paymentMethod === method.id ? 'bg-amber-100' : 'bg-slate-100'
              }`}>
                <method.icon className={`h-6 w-6 ${
                  paymentMethod === method.id ? 'text-amber-600' : 'text-slate-600'
                }`} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">
                  {method.name}
                </h3>
                <p className="text-sm text-slate-600">
                  {method.description}
                </p>
                <p className="text-xs text-slate-500 font-bengali">
                  {method.descriptionBn}
                </p>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 ${
                paymentMethod === method.id
                  ? 'bg-amber-500 border-amber-500'
                  : 'border-slate-300'
              }`}>
                {paymentMethod === method.id && (
                  <div className="w-full h-full rounded-full bg-white scale-50" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Security Badge */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
        <div className="flex items-center gap-3">
          <Shield className="h-6 w-6 text-green-600" />
          <div>
            <h4 className="font-semibold text-green-900">Secure Payment</h4>
            <p className="text-sm text-green-700">
              Your payment information is encrypted and secure
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex-1"
        >
          Back to Shipping
        </Button>
        <Button
          onClick={handlePlaceOrder}
          disabled={isProcessing}
          className="flex-1 bg-amber-600 hover:bg-amber-700 text-white"
        >
          {isProcessing ? (
            <>
              <div className="loading-spinner mr-2"></div>
              Processing...
            </>
          ) : (
            `Place Order - ${formatPrice(orderTotal)}`
          )}
        </Button>
      </div>
    </motion.div>
  );
}

// Order Confirmation Component
function OrderConfirmation({ order }: any) {
  const { clearCart } = useCart();
  
  React.useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center"
    >
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="h-10 w-10 text-green-600" />
      </div>
      
      <h2 className="text-3xl font-bold text-slate-900 mb-4">
        Order Confirmed!
      </h2>
      
      <p className="text-slate-600 mb-2">
        Thank you for your purchase. Your order has been confirmed.
      </p>
      <p className="text-slate-600 font-bengali mb-6">
        আপনার অর্ডারটি কনফার্ম হয়েছে। ক্রয় করার জন্য ধন্যবাদ।
      </p>

      <div className="bg-slate-50 rounded-xl p-6 mb-6">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="text-left">
            <span className="text-slate-500">Order ID:</span>
            <div className="font-semibold text-slate-900">{order.id}</div>
          </div>
          <div className="text-left">
            <span className="text-slate-500">Total Amount:</span>
            <div className="font-semibold text-slate-900">
              {formatPrice(order.totalAmount)}
            </div>
          </div>
          <div className="text-left">
            <span className="text-slate-500">Payment Method:</span>
            <div className="font-semibold text-slate-900 capitalize">
              {order.paymentMethod}
            </div>
          </div>
          <div className="text-left">
            <span className="text-slate-500">Status:</span>
            <div className="font-semibold text-green-600 capitalize">
              {order.status}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
          <a href="/orders">
            View Order Details
          </a>
        </Button>
        <Button asChild variant="outline" className="w-full">
          <a href="/products">
            Continue Shopping
          </a>
        </Button>
      </div>
    </motion.div>
  );
}