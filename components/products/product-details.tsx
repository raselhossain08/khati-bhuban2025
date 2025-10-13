'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Truck, Shield, Heart, Share2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth-context';
import { useCart } from '@/contexts/cart-context';
import { formatPrice } from '@/lib/utils';

interface ProductDetailsProps {
  product: any;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToWishlist, removeFromWishlist, wishlist } = useAuth();
  const { addItem } = useCart();

  const isInWishlist = wishlist.includes(product.id);

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  const handleBuyNow = () => {
    addItem(product, quantity);
    // Redirect to cart page
    window.location.href = '/cart';
  };

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Product link copied to clipboard!');
    }
  };

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center p-8">
                <div className="w-64 h-80 bg-gradient-to-b from-amber-300 to-amber-500 rounded-lg shadow-inner"></div>
              </div>
            </div>

            {/* Image Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((_: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 border-2 transition-all ${
                    selectedImage === index
                      ? 'border-amber-500 shadow-md'
                      : 'border-transparent hover:border-amber-300'
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center p-2">
                    <div className="w-12 h-16 bg-gradient-to-b from-amber-300 to-amber-500 rounded"></div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-slate-500">
              <span>Home</span>
              <span>/</span>
              <span className="capitalize">{product.category}</span>
              <span>/</span>
              <span className="text-slate-900 font-medium">{product.name}</span>
            </nav>

            {/* Product Title */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                {product.name}
              </h1>
              <h2 className="text-2xl font-bengali text-slate-700">
                {product.nameBn}
              </h2>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-amber-400 fill-current'
                          : 'text-slate-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-slate-900">
                  {product.rating}
                </span>
              </div>
              <span className="text-slate-500">
                ({product.reviewCount} reviews)
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-green-600 font-semibold">
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-slate-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <>
                  <span className="text-xl text-slate-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="bg-rose-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                    Save {formatPrice(product.originalPrice - product.price)}
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <div className="prose prose-slate">
              <p className="text-slate-600 leading-relaxed">
                {product.description}
              </p>
              <p className="text-slate-600 font-bengali leading-relaxed mt-2">
                {product.descriptionBn}
              </p>
            </div>

            {/* Weight */}
            <div className="flex items-center gap-2 text-slate-600">
              <span className="font-semibold">Weight:</span>
              <span>{product.weight}</span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="font-semibold text-slate-900">Quantity:</span>
              <div className="flex items-center border border-slate-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-2 border-x border-slate-300 min-w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  +
                </button>
              </div>
              <span className="text-sm text-slate-500">
                {product.stockQuantity} available
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg"
                size="lg"
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              <Button
                onClick={handleBuyNow}
                disabled={!product.inStock}
                className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-3 text-lg"
                size="lg"
              >
                Buy Now
              </Button>
            </div>

            {/* Secondary Actions */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={handleWishlistToggle}
                className="flex items-center gap-2"
              >
                <Heart
                  className={`h-5 w-5 ${
                    isInWishlist
                      ? 'fill-rose-500 text-rose-500'
                      : 'text-slate-600'
                  }`}
                />
                {isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}
              </Button>
              <Button
                variant="outline"
                onClick={handleShare}
                className="flex items-center gap-2"
              >
                <Share2 className="h-5 w-5 text-slate-600" />
                Share
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Truck className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Free Shipping</div>
                  <div className="text-sm text-slate-500">On orders over ৳500</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Quality Guaranteed</div>
                  <div className="text-sm text-slate-500">100% pure & natural</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <Check className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Easy Returns</div>
                  <div className="text-sm text-slate-500">7-day return policy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}