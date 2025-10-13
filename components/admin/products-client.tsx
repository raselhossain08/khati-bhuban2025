'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Package,
  Plus,
  Search,
  Filter,
  Edit2,
  Trash2,
  Eye,
  MoreVertical
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';

// Mock products data
const products = [
  {
    id: '1',
    name: 'Bhuban Wild Honey',
    nameBn: 'ভুবন বন মধু',
    category: 'Honey',
    price: 450,
    stock: 50,
    status: 'active',
    featured: true,
    sales: 156,
    createdAt: '2024-01-01'
  },
  {
    id: '2',
    name: 'Pure Mustard Honey',
    nameBn: 'খাঁটি সরিষার মধু',
    category: 'Honey',
    price: 400,
    stock: 35,
    status: 'active',
    featured: true,
    sales: 128,
    createdAt: '2024-01-02'
  },
  {
    id: '3',
    name: 'Cold-Pressed Mustard Oil',
    nameBn: 'কোল্ড-প্রেসড সরিষার তেল',
    category: 'Mustard Oil',
    price: 350,
    stock: 25,
    status: 'active',
    featured: false,
    sales: 89,
    createdAt: '2024-01-03'
  },
  {
    id: '4',
    name: 'Premium Natural Dates',
    nameBn: 'প্রিমিয়াম প্রাকৃতিক খেজুর',
    category: 'Natural Foods',
    price: 600,
    stock: 40,
    status: 'active',
    featured: true,
    sales: 76,
    createdAt: '2024-01-04'
  },
  {
    id: '5',
    name: 'Mixed Natural Honey',
    nameBn: 'মিশ্র প্রাকৃতিক মধু',
    category: 'Honey',
    price: 380,
    stock: 0,
    status: 'out-of-stock',
    featured: false,
    sales: 64,
    createdAt: '2024-01-05'
  }
];

const categories = ['All', 'Honey', 'Mustard Oil', 'Natural Foods'];
const statuses = ['All', 'Active', 'Out of Stock', 'Draft'];

export function ProductsClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.nameBn.includes(searchTerm);
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || 
                         (selectedStatus === 'Active' && product.status === 'active') ||
                         (selectedStatus === 'Out of Stock' && product.status === 'out-of-stock') ||
                         (selectedStatus === 'Draft' && product.status === 'draft');
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Products</h1>
          <p className="text-slate-600 mt-2">
            Manage your product catalog and inventory
          </p>
          <p className="text-slate-600 font-bengali text-sm">
            আপনার পণ্য ক্যাটালগ এবং ইনভেন্টরি ম্যানেজ করুন
          </p>
        </div>
        <Button className="bg-amber-600 hover:bg-amber-700 text-white mt-4 lg:mt-0">
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Total Products</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">156</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <Package className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Active Products</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">142</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <Package className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Out of Stock</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">8</p>
            </div>
            <div className="p-3 bg-amber-50 rounded-lg">
              <Package className="h-6 w-6 text-amber-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Low Stock</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">6</p>
            </div>
            <div className="p-3 bg-rose-50 rounded-lg">
              <Package className="h-6 w-6 text-rose-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div className="lg:col-span-2">
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

          {/* Category Filter */}
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Product</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Category</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Price</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Stock</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Status</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Sales</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, index) => (
                <motion.tr
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg flex items-center justify-center">
                        <div className="w-8 h-10 bg-gradient-to-b from-amber-300 to-amber-500 rounded"></div>
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">{product.name}</div>
                        <div className="text-sm text-slate-500 font-bengali">
                          {product.nameBn}
                        </div>
                        {product.featured && (
                          <span className="inline-block bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full mt-1">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-slate-600">{product.category}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-medium text-slate-900">
                      {formatPrice(product.price)}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`text-sm font-medium ${
                      product.stock > 10 ? 'text-green-600' : 
                      product.stock > 0 ? 'text-amber-600' : 'text-rose-600'
                    }`}>
                      {product.stock} in stock
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      product.status === 'active' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-rose-100 text-rose-800'
                    }`}>
                      {product.status === 'active' ? 'Active' : 'Out of Stock'}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-slate-600">{product.sales} sold</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-rose-600" />
                      </Button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200">
          <div className="text-sm text-slate-600">
            Showing 1 to {filteredProducts.length} of {products.length} results
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Previous</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}