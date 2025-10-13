'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Riya Ahmed',
    location: 'Dhaka',
    rating: 5,
    comment: 'The quality of Khati Bhuban honey is unmatched. You can actually taste the difference compared to market honey. My family loves it!',
    commentBn: 'খাঁটি ভুবনের মধুর মান অদ্বিতীয়। বাজারের মধুর তুলনায় আপনি আসলেই পার্থক্য অনুভব করতে পারবেন। আমার পরিবার এটি খুব পছন্দ করে!',
    image: '/testimonials/user1.jpg'
  },
  {
    id: 2,
    name: 'John Rahman',
    location: 'Sylhet',
    rating: 5,
    comment: 'As someone who values natural products, I can confidently say Khati Bhuban delivers what they promise. The mustard oil is exceptional.',
    commentBn: 'প্রাকৃতিক পণ্যের মূল্য দেয় এমন একজন হিসেবে আমি আত্মবিশ্বাসের সাথে বলতে পারি যে খাঁটি ভুবন তারা যা প্রতিশ্রুতি দেয় তা delivers। সরিষার তেল অসাধারণ।',
    image: '/testimonials/user2.jpg'
  },
  {
    id: 3,
    name: 'Fatima Begum',
    location: 'Chittagong',
    rating: 5,
    comment: 'Excellent customer service and premium quality products. The honey is pure and has helped with our seasonal allergies.',
    commentBn: 'চমৎকার গ্রাহক সেবা এবং প্রিমিয়াম মানের পণ্য। মধু খাঁটি এবং আমাদের seasonal allergies এ সাহায্য করেছে।',
    image: '/testimonials/user3.jpg'
  }
];

export function Testimonials() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Hear from our satisfied customers.
          </p>
          <p className="text-slate-600 font-bengali">
            শুধু আমাদের কথায় বিশ্বাস করবেন না। আমাদের সন্তুষ্ট গ্রাহকদের কাছ থেকে শুনুন।
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-amber-200 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? 'text-amber-400 fill-current'
                          : 'text-slate-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-slate-600 mb-4 leading-relaxed flex-1">
                  &quot;{testimonial.comment}&quot;
                </p>

                {/* Bengali Comment */}
                <p className="text-slate-500 font-bengali text-sm mb-6 leading-relaxed">
                  &quot;{testimonial.commentBn}&quot;
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-emerald-400 rounded-full opacity-20"></div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex flex-wrap justify-center gap-8 text-sm text-slate-600">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">4.8/5</div>
              <div>Average Rating</div>
              <div className="font-bengali text-xs">গড় রেটিং</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">5000+</div>
              <div>Happy Customers</div>
              <div className="font-bengali text-xs">সন্তুষ্ট গ্রাহক</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">98%</div>
              <div>Recommend Us</div>
              <div className="font-bengali text-xs">আমাদের সুপারিশ করে</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}