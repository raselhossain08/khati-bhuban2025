'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Leaf,
  Heart,
  Target,
  Users,
  Award,
  Shield,
  Sparkles,
  MapPin,
  Clock,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AboutClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 via-white to-emerald-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-amber-200 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-20 w-48 h-48 bg-emerald-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-amber-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                <Sparkles className="h-4 w-4 text-amber-600 mr-2" />
                <span className="text-sm font-medium text-amber-700">
                  Since 2015
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
              >
                Our Story of{' '}
                <span className="text-gradient">Pure Goodness</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-2xl md:text-3xl font-bengali text-slate-700 mb-6 leading-relaxed"
              >
                খাঁটি ভুবনের গল্প -{' '}
                <span className="text-amber-600">প্রকৃতির বিশুদ্ধতা</span> এর যাত্রা
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg text-slate-600 mb-8 leading-relaxed"
              >
                From the lush forests of Bhuban to your home, we bring you the purest 
                natural products. Our journey began with a simple mission: to preserve 
                nature&apos;s purity and share it with families across Bangladesh.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-slate-600 font-bengali mb-8 leading-relaxed"
              >
                ভুবনের সবুজ অরণ্য থেকে সরাসরি আপনার বাড়িতে, আমরা নিয়ে আসি প্রকৃতির সবচেয়ে খাঁটি পণ্য। 
                আমাদের যাত্রা শুরু হয়েছিল একটি সহজ মিশন নিয়ে: প্রকৃতির বিশুদ্ধতা সংরক্ষণ করা 
                এবং বাংলাদেশের পরিবারগুলির সাথে তা ভাগ করে নেওয়া।
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
                  Our Products
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-amber-600 text-amber-600 hover:bg-amber-50">
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl p-8 shadow-2xl shadow-amber-500/20">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* Hero Image Placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-amber-50 to-emerald-100 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-48 h-48 bg-gradient-to-b from-amber-300 to-amber-500 rounded-full mx-auto mb-6 shadow-2xl shadow-amber-500/30"></div>
                          <div className="w-64 h-4 bg-amber-200 rounded-full mx-auto"></div>
                        </div>
                      </div>
                      
                      {/* Floating Elements */}
                      <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute top-8 left-8 w-12 h-12 bg-amber-400 rounded-full opacity-20"
                      ></motion.div>
                      <motion.div
                        animate={{ y: [0, -30, 0] }}
                        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                        className="absolute top-16 right-12 w-8 h-8 bg-emerald-400 rounded-full opacity-30"
                      ></motion.div>
                      <motion.div
                        animate={{ y: [0, -25, 0] }}
                        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                        className="absolute bottom-12 left-20 w-10 h-10 bg-amber-300 rounded-full opacity-25"
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-amber-200 to-amber-300 rounded-full opacity-60 blur-xl"
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-r from-emerald-200 to-emerald-300 rounded-full opacity-40 blur-2xl"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our <span className="text-gradient">Mission & Vision</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We are committed to bringing the purest natural products while supporting 
              sustainable practices and local communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                To deliver 100% pure, unadulterated natural products directly from 
                Bhuban&apos;s forests to your home. We ensure every product maintains 
                its natural goodness without any artificial processing.
              </p>
              <p className="text-slate-600 font-bengali leading-relaxed">
                ভুবনের অরণ্য থেকে সরাসরি আপনার বাড়িতে ১০০% খাঁটি, ভেজালমুক্ত প্রাকৃতিক পণ্য পৌঁছে দেওয়া। 
                আমরা নিশ্চিত করি যে প্রতিটি পণ্য তার প্রাকৃতিক গুণাবলী বজায় রাখে কোন কৃত্রিম প্রক্রিয়াকরণ ছাড়াই।
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <Leaf className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                To become Bangladesh&apos;s most trusted brand for natural products, 
                promoting sustainable beekeeping and organic farming while preserving 
                our rich biodiversity.
              </p>
              <p className="text-slate-600 font-bengali leading-relaxed">
                বাংলাদেশের সবচেয়ে বিশ্বস্ত প্রাকৃতিক পণ্যের ব্র্যান্ড হওয়া, টেকসই মৌমাছি পালন 
                এবং জৈব চাষকে উত্সাহিত করার পাশাপাশি আমাদের সমৃদ্ধ জীববৈচিত্র্য সংরক্ষণ করা।
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              These principles guide everything we do and define who we are as a brand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl p-8 shadow-lg border border-amber-200 group-hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <value.icon className="h-10 w-10 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {value.description}
                  </p>
                  <p className="text-slate-500 font-bengali text-sm leading-relaxed">
                    {value.descriptionBn}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted name in natural products
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                        <Clock className="h-6 w-6 text-amber-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-amber-600">{item.year}</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-3">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                    <p className="text-slate-500 font-bengali mt-3 leading-relaxed">
                      {item.descriptionBn}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center md:w-24">
                  <div className="w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-lg"></div>
                  {index !== timeline.length - 1 && (
                    <div className="hidden md:block w-1 h-24 bg-amber-200 rounded-full -my-12"></div>
                  )}
                </div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Passionate individuals dedicated to bringing you the purest natural products
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 shadow-lg border border-slate-200 group-hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-32 h-32 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us in Our Journey of Purity
            </h2>
            <p className="text-amber-100 text-lg mb-8 leading-relaxed">
              Experience the difference that pure, natural products can make in your life. 
              Join thousands of satisfied customers who trust Khati Bhuban for quality and purity.
            </p>
            <p className="text-amber-100 font-bengali text-lg mb-8 leading-relaxed">
              আপনার জীবনে খাঁটি, প্রাকৃতিক পণ্যের পার্থক্য অনুভব করুন। 
              মান এবং খাঁটিত্বের জন্য খাঁটি ভুবনের উপর বিশ্বাস রাখা হাজার হাজার সন্তুষ্ট গ্রাহকের সাথে যোগ দিন।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-3 text-lg">
                Shop Our Products
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-amber-700 px-8 py-3 text-lg">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Data
const values = [
  {
    icon: Shield,
    title: 'Purity Guaranteed',
    description: 'Every product is 100% pure with no additives, preservatives, or artificial processing.',
    descriptionBn: 'প্রতিটি পণ্য ১০০% খাঁটি কোন additives, preservatives বা কৃত্রিম প্রক্রিয়াকরণ ছাড়া।'
  },
  {
    icon: Heart,
    title: 'Quality First',
    description: 'We never compromise on quality. Every batch is lab tested for purity and safety.',
    descriptionBn: 'আমরা কখনো মানের সাথে আপস করি না। প্রতিটি ব্যাচ খাঁটিত্ব এবং নিরাপত্তার জন্য ল্যাবে পরীক্ষিত।'
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'We work directly with local farmers and beekeepers, supporting sustainable livelihoods.',
    descriptionBn: 'আমরা স্থানীয় কৃষক এবং মৌয়ালদের সাথে সরাসরি কাজ করি, টেকসই জীবিকা 지원 করি।'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Sustainable practices that protect our environment and preserve biodiversity.',
    descriptionBn: 'টেকসই চর্চা যা আমাদের পরিবেশ রক্ষা করে এবং জীববৈচিত্র্য সংরক্ষণ করে।'
  }
];

const timeline = [
  {
    year: '2015',
    title: 'The Beginning',
    description: 'Khati Bhuban started as a small initiative to bring pure forest honey from Bhuban to local communities.',
    descriptionBn: 'খাঁটি ভুবন শুরু হয়েছিল ভুবনের খাঁটি বন মধু স্থানীয় সম্প্রদায়ের কাছে পৌঁছে দেওয়ার একটি ছোট উদ্যোগ হিসেবে।'
  },
  {
    year: '2017',
    title: 'Expanding Reach',
    description: 'We expanded our product range to include mustard oil and other natural foods, reaching customers across Bangladesh.',
    descriptionBn: 'আমরা সরিষার তেল এবং অন্যান্য প্রাকৃতিক খাদ্য অন্তর্ভুক্ত করে আমাদের পণ্যের পরিসর প্রসারিত করি, সারা বাংলাদেশে গ্রাহকদের কাছে পৌঁছাই।'
  },
  {
    year: '2019',
    title: 'Quality Certification',
    description: 'Received quality certifications and implemented lab testing for all our products to ensure purity.',
    descriptionBn: 'গুণমান সার্টিফিকেশন প্রাপ্তি এবং খাঁটিত্ব নিশ্চিত করতে আমাদের সকল পণ্যের জন্য ল্যাব পরীক্ষা বাস্তবায়ন।'
  },
  {
    year: '2022',
    title: 'Digital Transformation',
    description: 'Launched our e-commerce platform to make pure natural products accessible to everyone online.',
    descriptionBn: 'খাঁটি প্রাকৃতিক পণ্য সবার জন্য অনলাইনে অ্যাক্সেসযোগ্য করতে আমাদের ই-কমার্স প্ল্যাটফর্ম চালু।'
  },
  {
    year: '2024',
    title: 'Growing Family',
    description: 'Serving over 10,000 satisfied customers with a commitment to purity and quality that never changes.',
    descriptionBn: '১০,০০০-এরও বেশি সন্তুষ্ট গ্রাহককে সেবা প্রদান করা, খাঁটিত্ব এবং মানের প্রতি অঙ্গীকার যা কখনো পরিবর্তিত হয় না।'
  }
];

const team = [
  {
    name: 'Abdul Rahman',
    role: 'Founder & CEO',
    description: 'Passionate about preserving natural purity and supporting local communities. With over 15 years of experience in natural products.'
  },
  {
    name: 'Fatima Begum',
    role: 'Quality Manager',
    description: 'Ensures every product meets our strict quality standards. Background in food science and nutrition.'
  },
  {
    name: 'Mohammad Ali',
    role: 'Head of Operations',
    description: 'Manages our supply chain and works directly with local farmers and beekeepers in Bhuban region.'
  }
];