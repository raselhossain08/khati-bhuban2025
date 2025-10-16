"use client";

import React, { useState } from "react";
import { blogPosts } from "./blogPosts";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  Clock,
  User,
  Eye,
  Heart,
  MessageCircle,
  BookOpen,
  Calendar,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function BlogClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("latest");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Sort posts
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === "latest") {
      return (
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    } else if (sortBy === "popular") {
      return b.views - a.views;
    }
    return 0;
  });

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
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 border border-amber-200 mb-6"
              >
                <BookOpen className="h-4 w-4 text-amber-600 mr-2" />
                <span className="text-sm font-medium text-amber-700">
                  Knowledge & Wellness
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
              >
                Khati Bhuban <span className="text-gradient">Blog</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-2xl md:text-3xl font-bengali text-slate-700 mb-6 leading-relaxed"
              >
                স্বাস্থ্য টিপস ও{" "}
                <span className="text-amber-600">প্রাকৃতিক উপকারিতা</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto"
              >
                Discover the amazing benefits of pure honey, natural foods, and
                healthy lifestyle tips from our experts. Learn how to
                incorporate nature&apos;s goodness into your daily life.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-slate-600 font-bengali mb-8 leading-relaxed max-w-3xl mx-auto"
              >
                খাঁটি মধুর আশ্চর্যজনক উপকারিতা, প্রাকৃতিক খাদ্য এবং স্বাস্থ্যকর
                জীবনযাপনের টিপস আবিষ্কার করুন আমাদের বিশেষজ্ঞদের কাছ থেকে। শিখুন
                কিভাবে প্রকৃতির উপকারিতা আপনার দৈনন্দিন জীবনে অন্তর্ভুক্ত করতে
                হয়।
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="flex-1 w-full lg:max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
              >
                <option value="latest">Latest</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured <span className="text-gradient">Article</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Don&apos;t miss our latest and most popular article
            </p>
          </motion.div>

          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-video lg:aspect-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <BookOpen className="h-16 w-16 mx-auto mb-4 opacity-80" />
                      <div className="text-2xl font-bold">Featured</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-slate-500">
                      {new Date(featuredPost.publishedAt).toLocaleDateString()}
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {/* {featuredPost.readTime} */}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {featuredPost.views.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        {featuredPost.likes}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">
                          {featuredPost.author}
                        </div>
                        <div className="text-sm text-slate-500">
                          Expert Beekeeper
                        </div>
                      </div>
                    </div>
                    <Button
                      asChild
                      className="bg-amber-600 hover:bg-amber-700 text-white"
                    >
                      <Link href={`/blog/${featuredPost.slug}`}>Read More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Latest <span className="text-gradient">Articles</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore our collection of informative articles about natural
              health and wellness
            </p>
          </motion.div>

          {sortedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Image */}
                  <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-200 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="h-12 w-12 text-amber-600 opacity-60" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 text-amber-700 text-sm font-medium backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center gap-1 text-sm text-slate-500">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-slate-500">
                        <Clock className="h-4 w-4" />
                        {/* {post.readTime} */}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-amber-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-amber-600" />
                        </div>
                        <span className="text-sm text-slate-700 font-medium">
                          {post.author}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {post.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {post.likes}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <div className="px-6 pb-6">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-amber-200 text-amber-600 hover:bg-amber-50"
                    >
                      <Link href={`/blog/${post.slug}`}>Read Article</Link>
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <BookOpen className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                No articles found
              </h3>
              <p className="text-slate-600">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}

          {/* Load More Button */}
          {sortedPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-amber-600 text-amber-600 hover:bg-amber-50"
              >
                Load More Articles
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Explore <span className="text-gradient">Categories</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover articles by topics that interest you most
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <motion.button
                key={category.value}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedCategory(category.value)}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                  selectedCategory === category.value
                    ? "border-amber-500 bg-amber-50 shadow-lg"
                    : "border-slate-200 bg-slate-50 hover:border-amber-300 hover:bg-amber-25"
                }`}
              >
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <category.icon className="h-6 w-6 text-amber-600" />
                </div>
                <div className="font-semibold text-slate-900 mb-1">
                  {category.label}
                </div>
                <div className="text-sm text-slate-500">
                  {category.count} articles
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with Natural Health Tips
            </h2>
            <p className="text-amber-100 text-lg mb-8 leading-relaxed">
              Get the latest articles, health tips, and exclusive offers
              delivered directly to your inbox. Join our community of
              health-conscious readers.
            </p>
            <p className="text-amber-100 font-bengali text-lg mb-8 leading-relaxed">
              সর্বশেষ নিবন্ধ, স্বাস্থ্য টিপস এবং এক্সক্লুসিভ অফার সরাসরি আপনার
              ইনবক্সে পান। স্বাস্থ্য-সচেতন পাঠকদের আমাদের কমিউনিটিতে যোগ দিন।
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-xl border border-amber-500 bg-amber-500/20 text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <Button
                size="lg"
                className="bg-white text-amber-600 hover:bg-amber-50 px-8 font-semibold"
              >
                Subscribe
              </Button>
            </div>

            <p className="text-amber-200 text-sm mt-4">
              No spam ever. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Data
const categories = [
  {
    value: "health-benefits",
    label: "Health Benefits",
    count: 12,
    icon: Heart,
  },
  {
    value: "recipes",
    label: "Recipes",
    count: 8,
    icon: BookOpen,
  },
  {
    value: "beekeeping",
    label: "Beekeeping",
    count: 6,
    icon: Tag,
  },
  {
    value: "natural-foods",
    label: "Natural Foods",
    count: 10,
    icon: Filter,
  },
];

const featuredPost = blogPosts[0];
