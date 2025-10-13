'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Truck, Shield, Leaf, Heart } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: '100% Pure & Natural',
    titleBn: '১০০% খাঁটি ও প্রাকৃতিক',
    description: 'All our products are 100% pure with no additives or preservatives',
    descriptionBn: 'আমাদের সকল পণ্য ১০০% খাঁটি কোন additives বা preservatives ছাড়া'
  },
  {
    icon: Truck,
    title: 'Direct from Source',
    titleBn: 'উৎস থেকে সরাসরি',
    description: 'We work directly with local farmers and beekeepers in Bhuban',
    descriptionBn: 'আমরা ভুবনের স্থানীয় কৃষক এবং মৌয়ালদের সাথে সরাসরি কাজ করি'
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    titleBn: 'মানের গ্যারান্টি',
    description: 'Every batch is lab tested for purity and quality assurance',
    descriptionBn: 'প্রতিটি ব্যাচ খাঁটিত্ব এবং মান নিশ্চিত করতে ল্যাবে পরীক্ষিত'
  },
  {
    icon: Leaf,
    title: 'Eco Friendly',
    titleBn: 'পরিবেশ বান্ধব',
    description: 'Sustainable practices that help local ecosystem thrive',
    descriptionBn: 'টেকসই চর্চা যা স্থানীয় বাস্তুতন্ত্রকে বিকশিত হতে সাহায্য করে'
  },
  {
    icon: Heart,
    title: 'Health Benefits',
    titleBn: 'স্বাস্থ্য উপকারিতা',
    description: 'Natural products with proven health and nutritional benefits',
    descriptionBn: 'প্রমাণিত স্বাস্থ্য এবং পুষ্টিগুণ সহ প্রাকৃতিক পণ্য'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why Choose <span className="text-gradient">Khati Bhuban?</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We are committed to bringing you the purest natural products 
              straight from the heart of Bangladesh. Our dedication to quality 
              and authenticity sets us apart.
            </p>
            <p className="text-slate-600 font-bengali mb-8 leading-relaxed">
              আমরা বাংলাদেশের গভীর থেকে আপনার জন্য সবচেয়ে খাঁটি প্রাকৃতিক পণ্য 
              আনার জন্য প্রতিশ্রুতিবদ্ধ। মান এবং খাঁটিত্বের প্রতি আমাদের অঙ্গীকার 
              আমাদেরকে আলাদা করে তোলে।
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-1">
                      {feature.description}
                    </p>
                    <p className="text-slate-500 font-bengali text-sm">
                      {feature.titleBn}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Stats Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-amber-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">5000+</div>
                  <div className="text-sm text-slate-600">Happy Customers</div>
                  <div className="text-xs text-slate-500 font-bengali">সন্তুষ্ট গ্রাহক</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
                  <div className="text-sm text-slate-600">Pure Products</div>
                  <div className="text-xs text-slate-500 font-bengali">খাঁটি পণ্য</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
                  <div className="text-sm text-slate-600">Local Partners</div>
                  <div className="text-xs text-slate-500 font-bengali">স্থানীয় অংশীদার</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">4.8★</div>
                  <div className="text-sm text-slate-600">Customer Rating</div>
                  <div className="text-xs text-slate-500 font-bengali">গ্রাহক রেটিং</div>
                </div>
              </div>

              {/* Quality Badge */}
              <div className="mt-8 p-4 bg-white rounded-xl shadow-sm border border-amber-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Quality Certified</h4>
                    <p className="text-sm text-slate-600">Lab tested for purity & safety</p>
                    <p className="text-xs text-slate-500 font-bengali">খাঁটিত্ব ও নিরাপত্তার জন্য ল্যাব টেস্টেড</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-60 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-200 rounded-full opacity-40 blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}