'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Truck, Shield, Leaf } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-emerald-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-amber-200 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-20 w-32 h-32 bg-emerald-200 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-amber-300 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 border border-amber-200 mb-6"
            >
              <Star className="h-4 w-4 text-amber-600 mr-2 fill-current" />
              <span className="text-sm font-medium text-amber-700">
                Bangladesh&apos;s Most Trusted Honey Brand
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
            >
              Experience The{' '}
              <span className="text-gradient">Pure Taste</span>{' '}
              Of Nature
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-3xl font-bengali text-slate-700 mb-6 leading-relaxed"
            >
              প্রকৃতির <span className="text-amber-600">খাঁটি স্বাদের</span> অভিজ্ঞতা নিন
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed"
            >
              100% raw, unadulterated honey straight from the heart of Bhuban&apos;s forests. 
              Guaranteed purity, guaranteed goodness for your family.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-slate-600 font-bengali mb-8 leading-relaxed"
            >
              ভুবনের অরণ্যের গভীর থেকে সরাসরি আপনার বাড়িতে। 
              <span className="text-amber-600"> গ্যারান্টিড খাঁটি। গ্যারান্টিড উপকারিতা।</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg" asChild>
                <Link href="/categories/honey">
                  Shop Pure Honey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-amber-600 text-amber-600 hover:bg-amber-50" asChild>
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-slate-600"
            >
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-amber-600" />
                <span>Free Shipping Over ৳500</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-amber-600" />
                <span>Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-amber-600" />
                <span>100% Natural</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl p-8 shadow-2xl shadow-amber-500/20">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="aspect-square relative rounded-lg overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100">
                    {/* Honey Jar Image Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-40 bg-gradient-to-b from-amber-300 to-amber-500 rounded-lg mx-auto mb-4 shadow-inner"></div>
                        <div className="w-24 h-2 bg-amber-200 rounded-full mx-auto"></div>
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute top-4 left-4 w-8 h-8 bg-amber-400 rounded-full opacity-20"
                    ></motion.div>
                    <motion.div
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                      className="absolute top-8 right-6 w-6 h-6 bg-amber-300 rounded-full opacity-30"
                    ></motion.div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <h3 className="font-semibold text-slate-900 text-lg">Bhuban Wild Honey</h3>
                    <p className="text-amber-600 font-bold text-xl mt-2">৳ 450</p>
                    <p className="text-slate-500 text-sm mt-1 font-bengali">বন মধু - ৫০০ গ্রাম</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-amber-200 to-amber-300 rounded-full opacity-60 blur-xl"
            ></motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-emerald-200 to-emerald-300 rounded-full opacity-40 blur-2xl"
            ></motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-amber-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-amber-600 rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}