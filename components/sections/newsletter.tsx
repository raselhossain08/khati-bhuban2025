'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Gift, Shield, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      alert('Thank you for subscribing! You will receive 10% off your first order.');
    }, 1000);
  };

  const benefits = [
    {
      icon: Gift,
      title: '10% Off First Order',
      titleBn: 'প্রথম অর্ডারে ১০% ছাড়'
    },
    {
      icon: Shield,
      title: 'Exclusive Offers',
      titleBn: 'বিশেষ অফার'
    },
    {
      icon: Truck,
      title: 'Early Access',
      titleBn: 'প্রাথমিক অ্যাক্সেস'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join The Khati Bhuban Family
            </h2>
            <p className="text-amber-100 text-lg mb-6">
              Subscribe to our newsletter and get 10% off your first order
            </p>
            <p className="text-amber-100 font-bengali mb-8 text-lg">
              আমাদের নিউজলেটার সাবস্ক্রাইব করুন এবং আপনার প্রথম অর্ডারে ১০% ছাড় পান
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-3">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-amber-100 text-sm">{benefit.titleBn}</p>
                </motion.div>
              ))}
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-400" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-amber-500 border border-amber-400 placeholder-amber-200 text-white focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </div>
            </form>

            {/* Privacy Note */}
            <p className="text-amber-200 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
            <p className="text-amber-200 font-bengali text-sm">
              আমরা আপনার গোপনীয়তা সম্মান করি। যেকোনো সময় আনসাবস্ক্রাইব করতে পারবেন।
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}