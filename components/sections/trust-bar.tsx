'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Shield, Leaf, Clock } from 'lucide-react';

const trustItems = [
  {
    icon: Truck,
    title: 'Free Shipping',
    titleBn: 'বিনামূল্যে ডেলিভারি',
    description: 'On orders over ৳500',
    descriptionBn: '৫০০ টাকার উপর অর্ডারে'
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    titleBn: 'মানের গ্যারান্টি',
    description: '100% pure & natural',
    descriptionBn: '১০০% খাঁটি ও প্রাকৃতিক'
  },
  {
    icon: Leaf,
    title: 'Eco Friendly',
    titleBn: 'পরিবেশ বান্ধব',
    description: 'Sustainable practices',
    descriptionBn: 'টেকসই চর্চা'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    titleBn: '২৪/৭ সহায়তা',
    description: 'Always here to help',
    descriptionBn: 'সর্বদা সাহায্যের জন্য'
  }
];

export function TrustBar() {
  return (
    <section className="py-8 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                <item.icon className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-slate-900 text-sm mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 mb-1">
                {item.description}
              </p>
              <p className="text-xs text-slate-500 font-bengali">
                {item.titleBn}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}