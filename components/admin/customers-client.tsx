'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  UserPlus,
  Mail,
  Phone,
  MapPin,
  ShoppingBag,
  Star,
  MoreVertical,
  Search,
  Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';

// Mock customers data
const customersData = [
  {
    id: '1',
    name: 'Riya Ahmed',
    email: 'riya.ahmed@example.com',
    phone: '+880 1234-567890',
    location: 'Dhaka, Bangladesh',
    orders: 12,
    totalSpent: 12500,
    lastOrder: '2024-01-20',
    status: 'active',
    joinDate: '2023-06-15',
    rating: 4.8
  },
  {
    id: '2',
    name: 'John Rahman',
    email: 'john.rahman@example.com',
    phone: '+880 1234-567891',
    location: 'Sylhet, Bangladesh',
    orders: 8,
    totalSpent: 8900,
    lastOrder: '2024-01-19',
    status: 'active',
    joinDate: '2023-08-22',
    rating: 4.9
  },
  {
    id: '3',
    name: 'Fatima Begum',
    email: 'fatima.begum@example.com',
    phone: '+880 1234-567892',
    location: 'Chittagong, Bangladesh',
    orders: 15,
    totalSpent: 18700,
    lastOrder: '2024-01-18',
    status: 'active',
    joinDate: '2023-05-10',
    rating: 4.7
  },
  {
    id: '4',
    name: 'Aminul Islam',
    email: 'aminul.islam@example.com',
    phone: '+880 1234-567893',
    location: 'Khulna, Bangladesh',
    orders: 3,
    totalSpent: 2400,
    lastOrder: '2024-01-15',
    status: 'inactive',
    joinDate: '2023-11-05',
    rating: 4.5
  },
  {
    id: '5',
    name: 'Sabrina Khan',
    email: 'sabrina.khan@example.com',
    phone: '+880 1234-567894',
    location: 'Rajshahi, Bangladesh',
    orders: 6,
    totalSpent: 7200,
    lastOrder: '2024-01-10',
    status: 'active',
    joinDate: '2023-09-18',
    rating: 4.6
  }
];

const statusFilters = ['All', 'Active', 'Inactive'];
const orderFilters = ['All', 'High Value', 'Regular'];

export function CustomersClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedOrder, setSelectedOrder] = useState('All');

  const filteredCustomers = customersData.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'All' || customer.status === selectedStatus.toLowerCase();
    const matchesOrder = selectedOrder === 'All' || 
                        (selectedOrder === 'High Value' && customer.totalSpent > 10000) ||
                        (selectedOrder === 'Regular' && customer.totalSpent <= 10000);
    
    return matchesSearch && matchesStatus && matchesOrder;
  });

  const totalCustomers = customersData.length;
  const activeCustomers = customersData.filter(c => c.status === 'active').length;
  const totalRevenue = customersData.reduce((sum, customer) => sum + customer.totalSpent, 0);
  const avgOrderValue = totalRevenue / customersData.reduce((sum, customer) => sum + customer.orders, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Customers</h1>
          <p className="text-slate-600 mt-2">
            Manage and analyze your customer base
          </p>
          <p className="text-slate-600 font-bengali text-sm">
            আপনার গ্রাহক বেস ম্যানেজ এবং বিশ্লেষণ করুন
          </p>
        </div>
        <div className="flex gap-3 mt-4 lg:mt-0">
          <Button variant="outline" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Email All
          </Button>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            Add Customer
          </Button>
        </div>
      </div>

      {/* Customer Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Total Customers</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">{totalCustomers}</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Active Customers</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">{activeCustomers}</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <Users className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Total Revenue</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">{formatPrice(totalRevenue)}</p>
            </div>
            <div className="p-3 bg-emerald-50 rounded-lg">
              <ShoppingBag className="h-6 w-6 text-emerald-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Avg. Order Value</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">{formatPrice(avgOrderValue)}</p>
            </div>
            <div className="p-3 bg-amber-50 rounded-lg">
              <Star className="h-6 w-6 text-amber-600" />
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
                placeholder="Search customers by name or email..."
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
              value={selectedOrder}
              onChange={(e) => setSelectedOrder(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              {orderFilters.map(filter => (
                <option key={filter} value={filter}>{filter}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Customer</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Contact</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Location</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Orders</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Total Spent</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Last Order</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Status</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Rating</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer, index) => (
                <motion.tr
                  key={customer.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                        <span className="font-semibold text-amber-600">
                          {customer.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">{customer.name}</div>
                        <div className="text-sm text-slate-500">
                          Joined {new Date(customer.joinDate).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Mail className="h-4 w-4" />
                        {customer.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Phone className="h-4 w-4" />
                        {customer.phone}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="h-4 w-4" />
                      {customer.location}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-medium text-slate-900">{customer.orders}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-medium text-slate-900">
                      {formatPrice(customer.totalSpent)}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-slate-600">
                      {new Date(customer.lastOrder).toLocaleDateString()}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      customer.status === 'active' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-slate-100 text-slate-800'
                    }`}>
                      {customer.status === 'active' ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-amber-400 fill-current" />
                      <span className="text-sm font-medium text-slate-900">{customer.rating}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Customer Segments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Customers */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Top Customers</h3>
          <div className="space-y-4">
            {customersData
              .sort((a, b) => b.totalSpent - a.totalSpent)
              .slice(0, 5)
              .map((customer, index) => (
                <div key={customer.id} className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-amber-600">
                        {customer.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 text-sm">{customer.name}</div>
                      <div className="text-xs text-slate-500">{customer.orders} orders</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-slate-900 text-sm">
                      {formatPrice(customer.totalSpent)}
                    </div>
                    <div className="text-xs text-slate-500">total spent</div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Customer Activity */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <UserPlus className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <div className="font-medium text-slate-900 text-sm">New customer registered</div>
                <div className="text-xs text-slate-500">2 hours ago</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <ShoppingBag className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <div className="font-medium text-slate-900 text-sm">High value order placed</div>
                <div className="text-xs text-slate-500">5 hours ago</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                <Star className="h-4 w-4 text-amber-600" />
              </div>
              <div>
                <div className="font-medium text-slate-900 text-sm">New 5-star review received</div>
                <div className="text-xs text-slate-500">1 day ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}