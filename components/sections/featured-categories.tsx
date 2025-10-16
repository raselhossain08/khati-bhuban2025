"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Droplets, ShoppingBasket } from "lucide-react";

const categories = [
  {
    name: "Pure Honey",
    nameBn: "খাঁটি মধু",
    description: "100% raw, unadulterated honey from Bhuban forests",
    descriptionBn: "ভুবন অরণ্যের ১০০% কাঁচা, ভেজালমুক্ত মধু",
    href: "/categories/honey",
    image: "/categories/honey.jpg",
    icon: Heart,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    productCount: 12,
  },
  {
    name: "Mustard Oil",
    nameBn: "সরিষার তেল",
    description: "Cold-pressed pure mustard oil for healthy cooking",
    descriptionBn: "স্বাস্থ্যকর রান্নার জন্য কোল্ড-প্রেসড খাঁটি সরিষার তেল",
    href: "/categories/mustard-oil",
    image: "/categories/mustard-oil.jpg",
    icon: Droplets,
    color: "from-yellow-500 to-lime-500",
    bgColor: "bg-lime-50",
    productCount: 8,
  },
  {
    name: "Natural Foods",
    nameBn: "প্রাকৃতিক খাবার",
    description: "Organic and natural food products",
    descriptionBn: "জৈব ও প্রাকৃতিক খাদ্য পণ্য",
    href: "/categories/natural-foods",
    image: "/categories/natural-foods.jpg",
    icon: ShoppingBasket,
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-50",
    productCount: 15,
  },
];

export function FeaturedCategories() {
  return (
    <section className="py-16 bg-white">
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
            Our <span className="text-gradient">Product Categories</span>
          </h2>
          <p className="text-lg text-slate-600 mb-4 max-w-2xl mx-auto">
            Discover our range of pure, natural products straight from nature
          </p>
          <p className="text-slate-600 font-bengali">
            প্রকৃতি থেকে সরাসরি আমাদের খাঁটি, প্রাকৃতিক পণ্যের সংগ্রহ আবিষ্কার
            করুন
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link href={category.href}>
                <div
                  className={`${category.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-amber-200 h-full flex flex-col`}
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {category.name}
                  </h3>
                  <h4 className="font-bengali text-slate-700 mb-3 text-lg">
                    {category.nameBn}
                  </h4>

                  <p className="text-slate-600 mb-3 text-sm leading-relaxed flex-1">
                    {category.description}
                  </p>
                  <p className="text-slate-500 font-bengali text-sm mb-4 leading-relaxed">
                    {category.descriptionBn}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200">
                    <span className="text-sm text-slate-500">
                      {category.productCount} products
                    </span>
                    <div className="flex items-center text-amber-600 group-hover:text-amber-700 transition-colors">
                      <span className="text-sm font-medium mr-2">Explore</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-amber-600 text-amber-600 hover:bg-amber-50"
            asChild
          >
            <Link href="/categories">
              View All Categories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
