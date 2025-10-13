'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Package,
  AlertTriangle,
  TrendingDown,
  TrendingUp,
  Download,
  Upload,
  Plus,
  Filter,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';

// Mock inventory data
const inventoryData = [
  {
    id: '1',
    name: 'Bhuban Wild Honey',
    nameBn: 'ভুবন বন মধু',
    sku: 'HBW-500',
    category: 'Honey',
    currentStock: 50,
    lowStockThreshold: 10,
    status: 'in-stock',
    cost: 300,
    price: 450,
    value: 15000,
    lastUpdated: '2024-01-20'
  },
  {
    id: '2',
    name: 'Pure Mustard Honey',
    nameBn: 'খাঁটি সরিষার মধু',
    sku: 'HPM-500',
    category: 'Honey',
    currentStock: 5,
    lowStockThreshold: 10,
    status: 'low-stock',
    cost: 280,
    price: 400,
    value: 2000,
    lastUpdated: '2024-01-19'
  },
  {
    id: '3',
    name: 'Cold-Pressed Mustard Oil',
    nameBn: 'কোল্ড-প্রেসড সরিষার তেল',
    sku: 'OIL-1000',
    category: 'Mustard Oil',
    currentStock: 0,
    lowStockThreshold: 5,
    status: 'out-of-stock',
    cost: 250,
    price: 350,
    value: 0,
    lastUpdated: '2024-01-18'
  },
  {
    id: '4',
    name: 'Premium Natural Dates',
    nameBn: 'প্রিমিয়াম প্রাকৃতিক খেজুর',
    sku: 'DAT-1000',
    category: 'Natural Foods',
    currentStock: 40,
    lowStockThreshold: 15,
    status: 'in-stock',
    cost: 450,
    price: 600,
    value: 24000,
    lastUpdated: '2024-01-20'
  },
  {
    id: '5',
    name: 'Mixed Natural Honey',
    nameBn: 'মিশ্র প্রাকৃতিক মধু',
    sku: 'HMN-500',
    category: 'Honey',
    currentStock: 25,
    lowStockThreshold: 10,
    status: 'in-stock',
    cost: 260,
    price: 380,
    value: 9500,
    lastUpdated: '2024-01-17'
  }
];

const statusFilters = ['All', 'In Stock', 'Low Stock', 'Out of Stock'];
const categories = ['All', 'Honey', 'Mustard Oil', 'Natural Foods'];

export function InventoryClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredInventory = inventoryData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'All' || 
                         (selectedStatus === 'In Stock' && item.status === 'in-stock') ||
                         (selectedStatus === 'Low Stock' && item.status === 'low-stock') ||
                         (selectedStatus === 'Out of Stock' && item.status === 'out-of-stock');
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const totalValue = inventoryData.reduce((sum, item) => sum + item.value, 0);
  const lowStockItems = inventoryData.filter(item => item.status === 'low-stock').length;
  const outOfStockItems = inventoryData.filter(item => item.status === 'out-of-stock').length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in-stock': return 'text-green-600 bg-green-50';
      case 'low-stock': return 'text-amber-600 bg-amber-50';
      case 'out-of-stock': return 'text-rose-600 bg-rose-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'in-stock': return 'In Stock';
      case 'low-stock': return 'Low Stock';
      case 'out-of-stock': return 'Out of Stock';
      default: return 'Unknown';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Inventory Management</h1>
          <p className="text-slate-600 mt-2">
            Track and manage your product inventory
          </p>
          <p className="text-slate-600 font-bengali text-sm">
            আপনার পণ্য ইনভেন্টরি ট্র্যাক এবং ম্যানেজ করুন
          </p>
        </div>
        <div className="flex gap-3 mt-4 lg:mt-0">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Import
          </Button>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Stock Update
          </Button>
        </div>
      </div>

      {/* Inventory Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Total Inventory Value</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">{formatPrice(totalValue)}</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <Package className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Total Products</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">{inventoryData.length}</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Low Stock Items</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">{lowStockItems}</p>
            </div>
            <div className="p-3 bg-amber-50 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-amber-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Out of Stock</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">{outOfStockItems}</p>
            </div>
            <div className="p-3 bg-rose-50 rounded-lg">
              <TrendingDown className="h-6 w-6 text-rose-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search by product name or SKU..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              {statusFilters.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>

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
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Product</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">SKU</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Category</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Current Stock</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Low Stock Alert</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Status</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Cost</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Price</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Value</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInventory.map((item, index) => (
                <motion.tr
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg flex items-center justify-center">
                        <div className="w-6 h-8 bg-gradient-to-b from-amber-300 to-amber-500 rounded"></div>
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">{item.name}</div>
                        <div className="text-sm text-slate-500 font-bengali">
                          {item.nameBn}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <code className="text-sm text-slate-600 bg-slate-100 px-2 py-1 rounded">
                      {item.sku}
                    </code>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-slate-600">{item.category}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-medium ${
                        item.currentStock > item.lowStockThreshold 
                          ? 'text-green-600' 
                          : item.currentStock > 0 
                          ? 'text-amber-600' 
                          : 'text-rose-600'
                      }`}>
                        {item.currentStock}
                      </span>
                      {item.currentStock <= item.lowStockThreshold && item.currentStock > 0 && (
                        <AlertTriangle className="h-4 w-4 text-amber-500" />
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-slate-600">{item.lowStockThreshold}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                      {getStatusText(item.status)}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-slate-600">{formatPrice(item.cost)}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-medium text-slate-900">{formatPrice(item.price)}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-medium text-slate-900">{formatPrice(item.value)}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Update
                      </Button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Low Stock Alerts */}
      {lowStockItems > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-amber-50 border border-amber-200 rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-6 w-6 text-amber-600" />
            <h3 className="text-lg font-semibold text-amber-900">
              Low Stock Alerts
            </h3>
          </div>
          <p className="text-amber-700 mb-4">
            You have {lowStockItems} product(s) running low on stock. Consider restocking soon to avoid running out.
          </p>
          <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100">
            View Low Stock Items
          </Button>
        </motion.div>
      )}
    </div>
  );
}