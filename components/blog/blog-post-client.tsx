"use client";

import React from "react";
import { blogPosts } from "./blogPosts";
import { motion } from "framer-motion";
import {
  Clock,
  User,
  Calendar,
  Eye,
  Heart,
  Share2,
  MessageCircle,
  ArrowLeft,
  BookOpen,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BlogPostClientProps {
  post: any;
}

export function BlogPostClient({ post }: BlogPostClientProps) {
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Blog</span>
            </Link>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Heart className="h-4 w-4" />
                Like
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 border border-amber-200 mb-6">
              <span className="text-sm font-medium text-amber-700 capitalize">
                {post.category.replace("-", " ")}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-600">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span className="font-semibold">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                <span>{post.views.toLocaleString()} views</span>
              </div>
            </div>
          </motion.header>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-video bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl mb-12 flex items-center justify-center relative overflow-hidden"
          >
            <div className="text-white text-center">
              <BookOpen className="h-16 w-16 mx-auto mb-4 opacity-80" />
              <div className="text-2xl font-bold">Khati Bhuban Blog</div>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            {/* This is where your actual article content would go */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
              <h2>Introduction to {post.title}</h2>
              <p>
                This is a sample blog post content. In a real application, this
                would be replaced with actual markdown or rich text content from
                your CMS or database.
              </p>

              <h3>Key Points Covered</h3>
              <ul>
                <li>Detailed explanation of the topic</li>
                <li>Scientific research and evidence</li>
                <li>Practical tips and recommendations</li>
                <li>Real-life examples and case studies</li>
              </ul>

              <h3>Conclusion</h3>
              <p>
                The benefits of pure natural products are numerous and
                well-documented. By incorporating these into your daily routine,
                you can experience significant improvements in your health and
                wellbeing.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-slate-200">
                {post.tags.map((tag: string, index: number) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Article Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-between items-center mt-12 pt-8 border-t border-slate-200"
          >
            <div className="flex items-center gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Like ({post.likes})
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
            <Button
              asChild
              className="bg-amber-600 hover:bg-amber-700 text-white"
            >
              <Link href="/blog">Back to Blog</Link>
            </Button>
          </motion.div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
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
                Related <span className="text-gradient">Articles</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                You might also be interested in these similar articles
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-200 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-amber-600 opacity-60" />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-slate-500 capitalize">
                        {relatedPost.category.replace("-", " ")}
                      </span>
                      <span className="text-slate-300">•</span>
                      {/* <span className="text-xs text-slate-500">
                        {relatedPost.readTime}
                      </span> */}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight line-clamp-2">
                      {relatedPost.title}
                    </h3>

                    <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {relatedPost.excerpt}
                    </p>

                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full border-amber-200 text-amber-600 hover:bg-amber-50"
                    >
                      <Link href={`/blog/${relatedPost.slug}`}>Read More</Link>
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
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
              Enjoyed This Article?
            </h2>
            <p className="text-amber-100 text-lg mb-8 leading-relaxed">
              Subscribe to our newsletter to get more health tips, recipes, and
              natural wellness advice delivered directly to your inbox.
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
