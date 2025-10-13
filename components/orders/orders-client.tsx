'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Package, 
  Truck, 
  CheckCircle, 
  Clock, 
  XCircle,
  Search,
  Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OrderCard } from './order-card';
import { OrderDetails } from './order-details';
import { apiService } from '@/services/api';
import { formatPrice } from '@/lib/utils';

// Mock orders data - Replace with API call
const mockOrders = [
  {
    id: 'ORD-001',
    items: [
      {
        product: {
          id: '1',
          name: 'Bhuban Wild Honey',
          nameBn: 'ভুবন বন মধু',
          price: 450,
          images: ['/products/wild-honey.jpg'],
          weight: '500gm'
        },
        quantity: 2
      }
    ],
    totalAmount: 900,
    shippingAddress: {
      name: 'John Doe',
      street: '123 Main Street',
      city: 'Dhaka',
      state: 'Dhaka Division',
      zipCode: '1200',
      country: 'Bangladesh',
      phone: '+8801234567890'
    },
    status: 'delivered',
    paymentStatus: 'paid',
    paymentMethod: 'cod',
    createdAt: new Date('2024-01-15'),
    deliveredAt: new Date('2024-01-18')
  },
  {
    id: 'ORD-002',
    items: [
      {
        product: {
          id: '3',
          name: 'Cold-Pressed Mustard Oil',
          nameBn: 'কোল্ড-প্রেসড সরিষার তেল',
          price: 350,
          images: ['/products/mustard-oil.jpg'],
          weight: '1L'
        },
        quantity: 1
      },
      {
        product: {
          id: '4',
          name: 'Premium Natural Dates',
          nameBn: 'প্রিমিয়াম প্রাকৃতিক খেজুর',
          price: 600,
          images: ['/products/dates.jpg'],
          weight: '1kg'
        },
        quantity: 1
      }
    ],
    totalAmount: 950,
    shippingAddress: {
      name: 'John Doe',
      street: '123 Main Street',
      city: 'Dhaka',
      state: 'Dhaka Division',
      zipCode: '1200',
      country: 'Bangladesh',
      phone: '+8801234567890'
    },
    status: 'shipped',
    paymentStatus: 'paid',
    paymentMethod: 'bkash',
    createdAt: new Date('2024-01-20'),
    estimatedDelivery: new Date('2024-01-25')
  },
  {
    id: 'ORD-003',
    items: [
      {
        product: {
          id: '2',
          name: 'Pure Mustard Honey',
          nameBn: 'খাঁটি সরিষার মধু',
          price: 400,
          images: ['/products/mustard-honey.jpg'],
          weight: '500gm'
        },
        quantity: 3
      }
    ],
    totalAmount: 1200,
    shippingAddress: {
      name: 'John Doe',
      street: '123 Main Street',
      city: 'Dhaka',
      state: 'Dhaka Division',
      zipCode: '1200',
      country: 'Bangladesh',
      phone: '+8801234567890'
    },
    status: 'processing',
    paymentStatus: 'paid',
    paymentMethod: 'card',
    createdAt: new Date('2024-01-22')
  }
];

const statusFilters = [
  { value: 'all', label: 'All Orders', labelBn: 'সমস্ত অর্ডার', icon: Package },
  { value: 'processing', label: 'Processing', labelBn: 'প্রক্রিয়াধীন', icon: Clock },
  { value: 'shipped', label: 'Shipped', labelBn: 'শিপড', icon: Truck },
  { value: 'delivered', label: 'Delivered', labelBn: 'ডেলিভার্ড', icon: CheckCircle },
  { value: 'cancelled', label: 'Cancelled', labelBn: 'বাতিল', icon: XCircle }
];

interface OrdersClientProps {
  user?: any;
}

export function OrdersClient({ user }: OrdersClientProps) {
  const [orders, setOrders] = useState(mockOrders);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    setIsLoading(true);
    try {
      // const userOrders = await apiService.getOrders(user.id);
      // setOrders(userOrders);
      setOrders(mockOrders); // Using mock data for now
    } catch (error) {
      console.error('Failed to load orders:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.items.some((item: any) => 
        item.product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processing': return Clock;
      case 'shipped': return Truck;
      case 'delivered': return CheckCircle;
      case 'cancelled': return XCircle;
      default: return Package;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processing': return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'shipped': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'delivered': return 'text-green-600 bg-green-50 border-green-200';
      case 'cancelled': return 'text-rose-600 bg-rose-50 border-rose-200';
      default: return 'text-slate-600 bg-slate-50 border-slate-200';
    }
  };

  if (selectedOrder) {
    return (
      <OrderDetails 
        order={selectedOrder} 
        onBack={() => setSelectedOrder(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Order History
              </h1>
              <p className="text-slate-600">
                Track and manage your orders
              </p>
              <p className="text-slate-600 font-bengali text-sm">
                আপনার অর্ডারগুলি ট্র্যাক এবং ম্যানেজ করুন
              </p>
            </div>
            
            <div className="mt-4 lg:mt-0">
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                <a href="/products">
                  Continue Shopping
                </a>
              </Button>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search orders or products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              {/* Status Filter */}
              <div className="flex flex-wrap gap-2">
                {statusFilters.map((filter) => {
                  const Icon = filter.icon;
                  return (
                    <button
                      key={filter.value}
                      onClick={() => setStatusFilter(filter.value)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                        statusFilter === filter.value
                          ? 'bg-amber-50 border-amber-200 text-amber-700'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm font-medium">{filter.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Orders List */}
          <div className="space-y-4">
            {isLoading ? (
              // Loading Skeleton
              Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 animate-pulse">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="h-4 bg-slate-200 rounded w-32"></div>
                      <div className="h-3 bg-slate-200 rounded w-24"></div>
                    </div>
                    <div className="h-6 bg-slate-200 rounded w-20"></div>
                  </div>
                </div>
              ))
            ) : filteredOrders.length > 0 ? (
              filteredOrders.map((order, index) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <OrderCard 
                    order={order}
                    onViewDetails={() => setSelectedOrder(order)}
                  />
                </motion.div>
              ))
            ) : (
              // Empty State
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12 text-center"
              >
                <Package className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  No orders found
                </h3>
                <p className="text-slate-600 mb-6">
                  {searchTerm || statusFilter !== 'all' 
                    ? 'Try adjusting your search or filter criteria'
                    : 'You haven\'t placed any orders yet'
                  }
                </p>
                <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                  <a href="/products">
                    Start Shopping
                  </a>
                </Button>
              </motion.div>
            )}
          </div>

          {/* Order Stats */}
          {filteredOrders.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {statusFilters.slice(1).map((filter) => {
                const Icon = filter.icon;
                const count = orders.filter(order => order.status === filter.value).length;
                
                return (
                  <div key={filter.value} className="bg-white rounded-xl p-4 text-center border border-slate-200">
                    <Icon className={`h-8 w-8 mx-auto mb-2 ${
                      filter.value === 'processing' ? 'text-amber-600' :
                      filter.value === 'shipped' ? 'text-blue-600' :
                      filter.value === 'delivered' ? 'text-green-600' :
                      'text-rose-600'
                    }`} />
                    <div className="text-2xl font-bold text-slate-900">{count}</div>
                    <div className="text-sm text-slate-600">{filter.label}</div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}