'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart, Eye, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';

interface ProductCardProps {
  product: any;
  viewMode: 'grid' | 'list';
  onAddToCart: (product: any) => void;
  onAddToWishlist?: (productId: string) => void;
}

export function ProductCard({ product, viewMode, onAddToCart, onAddToWishlist }: ProductCardProps) {
  if (viewMode === 'list') {
    return <ProductCardList product={product} onAddToCart={onAddToCart} onAddToWishlist={onAddToWishlist} />;
  }

  return <ProductCardGrid product={product} onAddToCart={onAddToCart} onAddToWishlist={onAddToWishlist} />;
}

function ProductCardGrid({ product, onAddToCart, onAddToWishlist }: { product: any; onAddToCart: (product: any) => void; onAddToWishlist?: (productId: string) => void }) {
  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToWishlist?.(product.id);
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
    >
      {/* Image Section */}
      <div className="relative aspect-square bg-gradient-to-br from-amber-50 to-amber-100 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="w-32 h-40 bg-gradient-to-b from-amber-300 to-amber-500 rounded-lg shadow-inner"></div>
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isFeatured && (
            <span className="inline-flex items-center px-2 py-1 rounded-full bg-amber-500 text-white text-xs font-bold">
              <Zap className="h-3 w-3 mr-1" />
              Featured
            </span>
          )}
          {product.isBestSeller && (
            <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-500 text-white text-xs font-bold">
              Best Seller
            </span>
          )}
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="inline-flex items-center px-2 py-1 rounded-full bg-rose-500 text-white text-xs font-bold">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            variant="secondary" 
            size="icon" 
            className="h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm hover:bg-rose-50 hover:text-rose-500"
            onClick={handleWishlist}
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm" asChild>
            <Link href={`/products/${product.slug}`}>
              <Eye className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Category */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-amber-600 uppercase tracking-wide">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 text-amber-400 fill-current" />
            <span className="text-xs font-medium text-slate-700">{product.rating || '4.5'}</span>
          </div>
        </div>

        {/* Name */}
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-semibold text-slate-900 mb-1 line-clamp-1 group-hover:text-amber-600 transition-colors">
            {product.name}
          </h3>
          <p className="font-bengali text-slate-600 text-sm mb-2 line-clamp-1">
            {product.nameBn}
          </p>
        </Link>

        {/* Description */}
        <p className="text-slate-600 text-sm mb-3 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

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
          onClick={() => onAddToCart(product)}
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2.5"
          disabled={!product.inStock}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </div>
    </motion.div>
  );
}

function ProductCardList({ product, onAddToCart, onAddToWishlist }: { product: any; onAddToCart: (product: any) => void; onAddToWishlist?: (productId: string) => void }) {
  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToWishlist?.(product.id);
  };

  return (
    <motion.div
      whileHover={{ x: 4 }}
      className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
    >
      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        <div className="sm:w-48 aspect-square bg-gradient-to-br from-amber-50 to-amber-100 relative overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="w-24 h-32 bg-gradient-to-b from-amber-300 to-amber-500 rounded-lg shadow-inner"></div>
          </div>
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isFeatured && (
              <span className="inline-flex items-center px-2 py-1 rounded-full bg-amber-500 text-white text-xs font-bold">
                <Zap className="h-3 w-3 mr-1" />
                Featured
              </span>
            )}
            {product.isBestSeller && (
              <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-500 text-white text-xs font-bold">
                Best Seller
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          <div className="flex flex-col h-full">
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <span className="text-xs font-medium text-amber-600 uppercase tracking-wide mb-1 block">
                    {product.category}
                  </span>
                  <Link href={`/products/${product.slug}`}>
                    <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="font-bengali text-slate-600 text-sm mb-2">
                      {product.nameBn}
                    </p>
                  </Link>
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 text-sm text-slate-600 flex-shrink-0 ml-4">
                  <Star className="h-4 w-4 text-amber-400 fill-current" />
                  <span className="font-medium">{product.rating || '4.5'}</span>
                  <span className="text-slate-400">({product.reviewCount || 0})</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 mb-4 leading-relaxed">
                {product.description}
              </p>

              {/* Details */}
              <div className="flex items-center gap-4 text-sm text-slate-600 mb-4 flex-wrap">
                <span>Weight: {product.weight}</span>
                <span>•</span>
                <span>{product.sales || 0} sold</span>
                <span>•</span>
                <span className={`font-medium ${product.inStock ? 'text-green-600' : 'text-rose-600'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-slate-900">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <>
                    <span className="text-lg text-slate-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-rose-500 text-white text-xs font-bold">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  </>
                )}
              </div>
              
              <div className="flex items-center gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2"
                  onClick={handleWishlist}
                >
                  <Heart className="h-4 w-4" />
                  Wishlist
                </Button>
                <Button
                  onClick={() => onAddToCart(product)}
                  className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-6"
                  disabled={!product.inStock}
                  size="sm"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Skeleton Loader for Product Cards
export function ProductCardSkeleton({ viewMode }: { viewMode: 'grid' | 'list' }) {
  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden animate-pulse">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-48 aspect-square bg-slate-200"></div>
          <div className="flex-1 p-6">
            <div className="flex flex-col h-full gap-4">
              <div className="h-4 bg-slate-200 rounded w-1/4"></div>
              <div className="h-6 bg-slate-200 rounded w-3/4"></div>
              <div className="h-4 bg-slate-200 rounded w-full"></div>
              <div className="h-4 bg-slate-200 rounded w-2/3"></div>
              <div className="flex items-center justify-between mt-auto">
                <div className="h-8 bg-slate-200 rounded w-1/4"></div>
                <div className="flex gap-2">
                  <div className="h-9 bg-slate-200 rounded w-24"></div>
                  <div className="h-9 bg-slate-200 rounded w-32"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden animate-pulse">
      <div className="aspect-square bg-slate-200"></div>
      <div className="p-4 space-y-3">
        <div className="flex justify-between">
          <div className="h-4 bg-slate-200 rounded w-1/4"></div>
          <div className="h-4 bg-slate-200 rounded w-1/6"></div>
        </div>
        <div className="h-5 bg-slate-200 rounded w-3/4"></div>
        <div className="h-4 bg-slate-200 rounded w-full"></div>
        <div className="h-4 bg-slate-200 rounded w-1/3"></div>
        <div className="h-6 bg-slate-200 rounded w-1/2"></div>
        <div className="h-10 bg-slate-200 rounded w-full"></div>
      </div>
    </div>
  );
}