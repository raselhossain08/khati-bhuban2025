'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/cart-context';
import { formatPrice } from '@/lib/utils';

// Mock related products - Replace with API call
const relatedProducts = [
  {
    id: '5',
    slug: 'premium-forest-honey',
    name: 'Premium Forest Honey',
    nameBn: 'প্রিমিয়াম বন মধু',
    description: 'Premium quality honey from deep forests',
    price: 550,
    originalPrice: 600,
    images: ['/products/forest-honey.jpg'],
    category: 'honey',
    inStock: true,
    rating: 4.9,
    reviewCount: 89,
    weight: '500gm'
  },
  {
    id: '6',
    slug: 'organic-mustard-oil',
    name: 'Organic Mustard Oil',
    nameBn: 'জৈব সরিষার তেল',
    description: '100% organic cold-pressed mustard oil',
    price: 400,
    images: ['/products/organic-oil.jpg'],
    category: 'mustard-oil',
    inStock: true,
    rating: 4.7,
    reviewCount: 45,
    weight: '500ml'
  },
  {
    id: '7',
    slug: 'mixed-natural-honey',
    name: 'Mixed Natural Honey',
    nameBn: 'মিশ্র প্রাকৃতিক মধু',
    description: 'Blend of different natural honey varieties',
    price: 380,
    images: ['/products/mixed-honey.jpg'],
    category: 'honey',
    inStock: true,
    rating: 4.6,
    reviewCount: 67,
    weight: '500gm'
  }
];

interface RelatedProductsProps {
  currentProduct: any;
}

export function RelatedProducts({ currentProduct }: RelatedProductsProps) {
  const { addItem } = useCart();

  const handleAddToCart = (product: any) => {
    addItem(product, 1);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Related <span className="text-gradient">Products</span>
          </h2>
          <p className="text-slate-600">
            You might also like these similar products
          </p>
          <p className="text-slate-600 font-bengali">
            আপনি এই একই ধরনের পণ্যগুলোও পছন্দ করতে পারেন
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts
            .filter(product => product.id !== currentProduct.id)
            .map((product, index) => (
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
                <Link href={`/products/${product.slug}`}>
                  <div className="aspect-square bg-gradient-to-br from-amber-50 to-amber-100 relative overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center p-6">
                      <div className="w-32 h-40 bg-gradient-to-b from-amber-300 to-amber-500 rounded-lg shadow-inner"></div>
                    </div>
                  </div>
                </Link>

                {/* Product Info */}
                <div className="p-4">
                  <Link href={`/products/${product.slug}`}>
                    <h3 className="font-semibold text-slate-900 mb-1 hover:text-amber-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="font-bengali text-slate-600 text-sm mb-2">
                      {product.nameBn}
                    </p>
                  </Link>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-amber-400 fill-current" />
                      <span className="text-xs font-medium text-slate-900">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500">
                      ({product.reviewCount})
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
                    {product.originalPrice && (
                      <span className="text-sm text-slate-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <Button
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}