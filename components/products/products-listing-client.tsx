"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  Grid,
  List,
  SlidersHorizontal,
  X,
  Star,
  Truck,
  Shield,
  Leaf,
  Sparkles,
  SortAsc,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/product-card";
import { useAuth } from "@/contexts/auth-context";
import { formatPrice } from "@/lib/utils";

export function ProductsListingClient() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addToCart } = useAuth();

  // Filter and sort products
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.nameBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => product.tags.includes(tag));

    return matchesSearch && matchesCategory && matchesPrice && matchesTags;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      case "rating":
        return b.rating - a.rating;
      case "featured":
      default:
        return (
          (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0) || b.sales - a.sales
        );
    }
  });

  const handleAddToCart = (product: any) => {
    addToCart(product, 1);
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedTags([]);
    setPriceRange([0, 2000]);
    setSearchTerm("");
    setSortBy("featured");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-emerald-50 py-12 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 border border-amber-200 mb-6"
            >
              <Sparkles className="h-4 w-4 text-amber-600 mr-2" />
              <span className="text-sm font-medium text-amber-700">
                100% Pure & Natural
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our <span className="text-gradient">Products</span>
            </h1>

            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
              Discover our complete collection of pure natural honey, organic
              oils, and healthy food products straight from the heart of nature.
            </p>

            <p className="text-slate-600 font-bengali mb-8 max-w-2xl mx-auto">
              প্রকৃতির গভীর থেকে সরাসরি আনা আমাদের সম্পূর্ণ সংগ্রহ - খাঁটি
              প্রাকৃতিক মধু, জৈব তেল এবং স্বাস্থ্যকর খাদ্য পণ্য আবিষ্কার করুন।
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-600" />
                <span>Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-blue-600" />
                <span>Free Shipping Over ৳500</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-4 w-4 text-emerald-600" />
                <span>100% Natural</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-80 flex-shrink-0"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sticky top-24">
              {/* Filters Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">Filters</h2>
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-amber-600 hover:text-amber-700 font-medium"
                >
                  Clear All
                </button>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Search Products
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label
                      key={category.value}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category.value)}
                        onChange={() => toggleCategory(category.value)}
                        className="rounded border-slate-300 text-amber-600 focus:ring-amber-500"
                      />
                      <span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
                        {category.label}
                      </span>
                      <span className="text-xs text-slate-400 ml-auto">
                        ({category.count})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">
                  Price Range
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>৳{priceRange[0]}</span>
                    <span>৳{priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-600"
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                        selectedTags.includes(tag)
                          ? "bg-amber-600 text-white"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Filters */}
              {(selectedCategories.length > 0 ||
                selectedTags.length > 0 ||
                priceRange[1] < 2000) && (
                <div className="pt-4 border-t border-slate-200">
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">
                    Active Filters
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCategories.map((category) => (
                      <span
                        key={category}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs"
                      >
                        {categories.find((c) => c.value === category)?.label}
                        <button
                          onClick={() => toggleCategory(category)}
                          className="hover:text-amber-900"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                    {selectedTags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs"
                      >
                        {tag}
                        <button
                          onClick={() => toggleTag(tag)}
                          className="hover:text-blue-900"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                    {priceRange[1] < 2000 && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                        Under ৳{priceRange[1]}
                        <button
                          onClick={() => setPriceRange([0, 2000])}
                          className="hover:text-green-900"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 p-4 mb-6"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                {/* Results Count */}
                <div className="flex items-center gap-4">
                  <span className="text-sm text-slate-600">
                    Showing {sortedProducts.length} of {products.length}{" "}
                    products
                  </span>

                  {/* Mobile Filter Button */}
                  <button
                    onClick={() => setShowFilters(true)}
                    className="lg:hidden flex items-center gap-2 px-3 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50"
                  >
                    <SlidersHorizontal className="h-4 w-4" />
                    <span>Filters</span>
                  </button>
                </div>

                {/* View Controls */}
                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <div className="flex items-center gap-2">
                    <SortAsc className="h-4 w-4 text-slate-400" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border-0 text-sm text-slate-700 focus:outline-none focus:ring-0"
                    >
                      <option value="featured">Featured</option>
                      <option value="name">Name A-Z</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                    </select>
                  </div>

                  {/* View Toggle */}
                  <div className="flex items-center gap-1 border border-slate-300 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded ${
                        viewMode === "grid"
                          ? "bg-amber-100 text-amber-600"
                          : "text-slate-400 hover:text-slate-600"
                      }`}
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded ${
                        viewMode === "list"
                          ? "bg-amber-100 text-amber-600"
                          : "text-slate-400 hover:text-slate-600"
                      }`}
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Products Grid/List */}
            <AnimatePresence mode="wait">
              {sortedProducts.length > 0 ? (
                <motion.div
                  key={viewMode}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                      : "space-y-6"
                  }
                >
                  {sortedProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <ProductCard
                        product={product}
                        viewMode={viewMode}
                        onAddToCart={handleAddToCart}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="h-8 w-8 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    No products found
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Try adjusting your search or filter criteria
                  </p>
                  <Button
                    onClick={clearAllFilters}
                    className="bg-amber-600 hover:bg-amber-700 text-white"
                  >
                    Clear All Filters
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Load More */}
            {sortedProducts.length > 0 && (
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
                  Load More Products
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      <AnimatePresence>
        {showFilters && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFilters(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />

            {/* Filters Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30 }}
              className="fixed top-0 left-0 h-full w-80 bg-white z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-slate-900">Filters</h2>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="p-2 hover:bg-slate-100 rounded-lg"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Mobile Filter Content - Same as desktop but adapted */}
                <div className="space-y-6">
                  {/* Search */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Search Products
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Categories */}
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-3">
                      Categories
                    </h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <label
                          key={category.value}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(
                              category.value
                            )}
                            onChange={() => toggleCategory(category.value)}
                            className="rounded border-slate-300 text-amber-600 focus:ring-amber-500"
                          />
                          <span className="text-sm text-slate-700">
                            {category.label}
                          </span>
                          <span className="text-xs text-slate-400 ml-auto">
                            ({category.count})
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Apply Filters Button */}
                  <Button
                    onClick={() => setShowFilters(false)}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// Data
const categories = [
  { value: "honey", label: "Pure Honey", count: 12 },
  { value: "mustard-oil", label: "Mustard Oil", count: 8 },
  { value: "natural-foods", label: "Natural Foods", count: 15 },
  { value: "organic", label: "Organic Products", count: 10 },
];

const popularTags = [
  "pure",
  "organic",
  "raw",
  "natural",
  "premium",
  "wild",
  "forest",
  "cold-pressed",
];

const products = [
  {
    id: "1",
    slug: "bhuban-wild-honey",
    name: "Bhuban Wild Honey",
    nameBn: "ভুবন বন মধু",
    description: "Pure wild forest honey collected from Bhuban forests",
    descriptionBn: "ভুবন অরণ্য থেকে সংগৃহীত খাঁটি বন মধু",
    price: 450,
    originalPrice: 500,
    images: ["/products/wild-honey.jpg"],
    category: "honey",
    inStock: true,
    stockQuantity: 50,
    isFeatured: true,
    isBestSeller: true,
    tags: ["wild", "forest", "pure", "premium"],
    weight: "500gm",
    rating: 4.8,
    reviewCount: 124,
    sales: 156,
  },
  {
    id: "2",
    slug: "pure-mustard-honey",
    name: "Pure Mustard Honey",
    nameBn: "খাঁটি সরিষার মধু",
    description: "Golden mustard honey with rich flavor and aroma",
    descriptionBn: "সমৃদ্ধ স্বাদ এবং সুগন্ধ সহ সোনালী সরিষার মধু",
    price: 400,
    originalPrice: 450,
    images: ["/products/mustard-honey.jpg"],
    category: "honey",
    inStock: true,
    stockQuantity: 35,
    isFeatured: true,
    isBestSeller: true,
    tags: ["mustard", "golden", "pure"],
    weight: "500gm",
    rating: 4.6,
    reviewCount: 89,
    sales: 128,
  },
  {
    id: "3",
    slug: "cold-pressed-mustard-oil",
    name: "Cold-Pressed Mustard Oil",
    nameBn: "কোল্ড-প্রেসড সরিষার তেল",
    description: "Pure cold-pressed mustard oil for healthy cooking",
    descriptionBn: "স্বাস্থ্যকর রান্নার জন্য খাঁটি কোল্ড-প্রেসড সরিষার তেল",
    price: 350,
    images: ["/products/mustard-oil.jpg"],
    category: "mustard-oil",
    inStock: true,
    stockQuantity: 25,
    isFeatured: false,
    isBestSeller: true,
    tags: ["cold-pressed", "pure", "cooking", "organic"],
    weight: "1L",
    rating: 4.7,
    reviewCount: 67,
    sales: 89,
  },
  {
    id: "4",
    slug: "premium-dates",
    name: "Premium Natural Dates",
    nameBn: "প্রিমিয়াম প্রাকৃতিক খেজুর",
    description: "Fresh and nutritious natural dates",
    descriptionBn: "তাজা এবং পুষ্টিকর প্রাকৃতিক খেজুর",
    price: 600,
    originalPrice: 700,
    images: ["/products/dates.jpg"],
    category: "natural-foods",
    inStock: true,
    stockQuantity: 40,
    isFeatured: true,
    isBestSeller: false,
    tags: ["dates", "natural", "nutritious", "premium"],
    weight: "1kg",
    rating: 4.9,
    reviewCount: 156,
    sales: 76,
  },
  {
    id: "5",
    slug: "mixed-natural-honey",
    name: "Mixed Natural Honey",
    nameBn: "মিশ্র প্রাকৃতিক মধু",
    description: "Blend of different natural honey varieties",
    descriptionBn: "বিভিন্ন প্রাকৃতিক মধুর varieties এর মিশ্রণ",
    price: 380,
    images: ["/products/mixed-honey.jpg"],
    category: "honey",
    inStock: true,
    stockQuantity: 60,
    isFeatured: false,
    isBestSeller: false,
    tags: ["mixed", "natural", "blend"],
    weight: "500gm",
    rating: 4.5,
    reviewCount: 45,
    sales: 64,
  },
  {
    id: "6",
    slug: "organic-mustard-oil",
    name: "Organic Mustard Oil",
    nameBn: "জৈব সরিষার তেল",
    description: "100% organic cold-pressed mustard oil",
    descriptionBn: "১০০% জৈব কোল্ড-প্রেসড সরিষার তেল",
    price: 420,
    images: ["/products/organic-oil.jpg"],
    category: "mustard-oil",
    inStock: true,
    stockQuantity: 30,
    isFeatured: true,
    isBestSeller: false,
    tags: ["organic", "cold-pressed", "pure"],
    weight: "500ml",
    rating: 4.8,
    reviewCount: 78,
    sales: 52,
  },
];
