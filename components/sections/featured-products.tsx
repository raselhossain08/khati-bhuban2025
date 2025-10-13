'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth-context';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';

// Mock data - Replace with API call
const featuredProducts = [
  {
    id: '1',
    slug: 'bhuban-wild-honey',
    name: 'Bhuban Wild Honey',
    nameBn: 'ভুবন বন মধু',
    description: 'Pure wild forest honey collected from Bhuban forests',
    descriptionBn: 'ভুবন অরণ্য থেকে সংগৃহীত খাঁটি বন মধু',
    price: 450,
    originalPrice: 500,
    images: ['/products/wild-honey.jpg'],
    category: 'honey',
    inStock: true,
    stockQuantity: 50,
    isFeatured: true,
    isBestSeller: true,
    tags: ['wild', 'forest', 'pure'],
    weight: '500gm',
    rating: 4.8,
    reviewCount: 124
  },
  {
    id: '2',
    slug: 'pure-mustard-honey',
    name: 'Pure Mustard Honey',
    nameBn: 'খাঁটি সরিষার মধু',
    description: 'Golden mustard honey with rich flavor and aroma',
    descriptionBn: 'সমৃদ্ধ স্বাদ এবং সুগন্ধ সহ সোনালী সরিষার মধু',
    price: 400,
    originalPrice: 450,
    images: ['/products/mustard-honey.jpg'],
    category: 'honey',
    inStock: true,
    stockQuantity: 35,
    isFeatured: true,
    isBestSeller: true,
    tags: ['mustard', 'golden', 'pure'],
    weight: '500gm',
    rating: 4.6,
    reviewCount: 89
  },
  {
    id: '3',
    slug: 'cold-pressed-mustard-oil',
    name: 'Cold-Pressed Mustard Oil',
    nameBn: 'কোল্ড-প্রেসড সরিষার তেল',
    description: 'Pure cold-pressed mustard oil for healthy cooking',
    descriptionBn: 'স্বাস্থ্যকর রান্নার জন্য খাঁটি কোল্ড-প্রেসড সরিষার তেল',
    price: 350,
    originalPrice: 400,
    images: ['/products/mustard-oil.jpg'],
    category: 'mustard-oil',
    inStock: true,
    stockQuantity: 25,
    isFeatured: true,
    isBestSeller: true,
    tags: ['cold-pressed', 'pure', 'cooking'],
    weight: '1L',
    rating: 4.7,
    reviewCount: 67
  },
  {
    id: '4',
    slug: 'premium-dates',
    name: 'Premium Natural Dates',
    nameBn: 'প্রিমিয়াম প্রাকৃতিক খেজুর',
    description: 'Fresh and nutritious natural dates',
    descriptionBn: 'তাজা এবং পুষ্টিকর প্রাকৃতিক খেজুর',
    price: 600,
    originalPrice: 700,
    images: ['/products/dates.jpg'],
    category: 'natural-foods',
    inStock: true,
    stockQuantity: 40,
    isFeatured: true,
    isBestSeller: true,
    tags: ['dates', 'natural', 'nutritious'],
    weight: '1kg',
    rating: 4.9,
    reviewCount: 156
  }
];

export function FeaturedProducts() {
  const { addToCart, addToWishlist, wishlist } = useAuth();

  const handleAddToCart = (product: any) => {
    addToCart(product, 1);
  };

  const handleAddToWishlist = (productId: string) => {
    addToWishlist(productId);
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

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
            Featured <span className="text-gradient">Products</span>
          </h2>
          <p className="text-lg text-slate-600 mb-4 max-w-2xl mx-auto">
            Discover our most popular and premium quality products
          </p>
          <p className="text-slate-600 font-bengali">
            আমাদের সর্বাধিক জনপ্রিয় এবং প্রিমিয়াম মানের পণ্য আবিষ্কার করুন
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100">
                <div className="aspect-square relative flex items-center justify-center p-6">
                  {/* Product Image Placeholder */}
                  <div className="w-32 h-40 bg-gradient-to-b from-amber-300 to-amber-500 rounded-lg shadow-inner"></div>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      variant="secondary"
                      size="icon"
                      className="h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white"
                      onClick={() => handleAddToWishlist(product.id)}
                    >
                      <Heart 
                        className={`h-4 w-4 ${
                          isInWishlist(product.id) 
                            ? 'fill-rose-500 text-rose-500' 
                            : 'text-slate-600'
                        }`} 
                      />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white"
                      asChild
                    >
                      <Link href={`/products/${product.slug}`}>
                        <Eye className="h-4 w-4 text-slate-600" />
                      </Link>
                    </Button>
                  </div>

                  {/* Discount Badge */}
                  {product.originalPrice && product.originalPrice > product.price && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                {/* Category */}
                <p className="text-xs text-amber-600 font-medium mb-1 uppercase tracking-wide">
                  {product.category}
                </p>

                {/* Name */}
                <h3 className="font-semibold text-slate-900 mb-1 line-clamp-1">
                  {product.name}
                </h3>
                <p className="font-bengali text-slate-600 text-sm mb-2">
                  {product.nameBn}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-amber-400 fill-current" />
                    <span className="text-xs font-medium text-slate-900">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500">
                    ({product.reviewCount} reviews)
                  </span>
                </div>

                {/* Weight */}
                <p className="text-xs text-slate-500 mb-3">
                  Weight: {product.weight}
                </p>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-bold text-slate-900">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && product.originalPrice > product.price && (
                    <span className="text-sm text-slate-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <Button
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50" asChild>
            <Link href="/products">
              View All Products
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}