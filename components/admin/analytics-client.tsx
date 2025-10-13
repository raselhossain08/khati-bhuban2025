'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  TrendingUp,
  Users,
  ShoppingCart,
  DollarSign,
  Eye,
  Download,
  Calendar,
  Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock analytics data
const analyticsData = {
  overview: {
    sessions: 12543,
    pageViews: 45678,
    bounceRate: 32.5,
    avgSessionDuration: '4m 12s',
    conversionRate: 4.2
  },
  trafficSources: [
    { source: 'Direct', visitors: 5243, percentage: 42 },
    { source: 'Organic Search', visitors: 3890, percentage: 31 },
    { source: 'Social Media', visitors: 2156, percentage: 17 },
    { source: 'Email', visitors: 1254, percentage: 10 }
  ],
  topPages: [
    { page: '/', views: 15678, bounceRate: 28.3 },
    { page: '/products/honey', views: 8923, bounceRate: 35.2 },
    { page: '/products/mustard-oil', views: 5678, bounceRate: 42.1 },
    { page: '/about', views: 3456, bounceRate: 38.7 },
    { page: '/blog', views: 2345, bounceRate: 45.2 }
  ],
  salesData: [
    { date: 'Jan 1', sales: 45000, orders: 45 },
    { date: 'Jan 2', sales: 52000, orders: 52 },
    { date: 'Jan 3', sales: 48000, orders: 48 },
    { date: 'Jan 4', sales: 61000, orders: 61 },
    { date: 'Jan 5', sales: 55000, orders: 55 },
    { date: 'Jan 6', sales: 72000, orders: 72 },
    { date: 'Jan 7', sales: 68000, orders: 68 }
  ]
};

const timeRanges = [
  { label: 'Today', value: 'today' },
  { label: 'Last 7 Days', value: '7d' },
  { label: 'Last 30 Days', value: '30d' },
  { label: 'Last 90 Days', value: '90d' },
  { label: 'This Year', value: 'year' }
];

export function AnalyticsClient() {
  const [selectedRange, setSelectedRange] = useState('7d');
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', labelBn: 'ওভারভিউ' },
    { id: 'traffic', label: 'Traffic', labelBn: 'ট্রাফিক' },
    { id: 'sales', label: 'Sales', labelBn: 'বিক্রয়' },
    { id: 'conversion', label: 'Conversion', labelBn: 'কনভার্সন' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Analytics</h1>
          <p className="text-slate-600 mt-2">
            Comprehensive analytics and insights for your store
          </p>
          <p className="text-slate-600 font-bengali text-sm">
            আপনার দোকানের জন্য বিস্তৃত এনালিটিক্স এবং অন্তর্দৃষ্টি
          </p>
        </div>
        <div className="flex gap-3 mt-4 lg:mt-0">
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {timeRanges.find(r => r.value === selectedRange)?.label}
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Time Range Selector */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4">
        <div className="flex flex-wrap gap-2">
          {timeRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => setSelectedRange(range.value)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                selectedRange === range.value
                  ? 'bg-amber-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-amber-50 text-amber-700 border border-amber-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>{tab.label}</span>
              <span className="text-xs font-bengali text-slate-500">
                {tab.labelBn}
              </span>
            </button>
          ))}
        </div>

        {activeTab === 'overview' && <OverviewTab data={analyticsData} />}
        {activeTab === 'traffic' && <TrafficTab data={analyticsData} />}
        {activeTab === 'sales' && <SalesTab data={analyticsData} />}
        {activeTab === 'conversion' && <ConversionTab data={analyticsData} />}
      </div>

      {/* Quick Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Total Sessions</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">
                {analyticsData.overview.sessions.toLocaleString()}
              </p>
              <div className="flex items-center gap-1 mt-2 text-green-600 text-sm">
                <TrendingUp className="h-4 w-4" />
                <span>+12.5% from last period</span>
              </div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <Eye className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Page Views</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">
                {analyticsData.overview.pageViews.toLocaleString()}
              </p>
              <div className="flex items-center gap-1 mt-2 text-green-600 text-sm">
                <TrendingUp className="h-4 w-4" />
                <span>+8.3% from last period</span>
              </div>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <BarChart3 className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Conversion Rate</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">
                {analyticsData.overview.conversionRate}%
              </p>
              <div className="flex items-center gap-1 mt-2 text-green-600 text-sm">
                <TrendingUp className="h-4 w-4" />
                <span>+2.1% from last period</span>
              </div>
            </div>
            <div className="p-3 bg-amber-50 rounded-lg">
              <ShoppingCart className="h-6 w-6 text-amber-600" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Avg. Session</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">
                {analyticsData.overview.avgSessionDuration}
              </p>
              <div className="flex items-center gap-1 mt-2 text-green-600 text-sm">
                <TrendingUp className="h-4 w-4" />
                <span>+45s from last period</span>
              </div>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Overview Tab Component
function OverviewTab({ data }: any) {
  return (
    <div className="space-y-6">
      {/* Sales Chart */}
      <div className="bg-slate-50 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Sales Overview</h3>
        <div className="flex items-end justify-between h-48 gap-2">
          {data.salesData.map((item: any, index: number) => {
            const maxSales = Math.max(...data.salesData.map((d: any) => d.sales));
            const height = (item.sales / maxSales) * 120;
            
            return (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="flex items-end justify-center gap-1 h-32 w-full">
                  <div 
                    className="w-4 bg-amber-500 rounded-t transition-all duration-500 hover:bg-amber-600 relative group"
                    style={{ height: `${height}px` }}
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      ৳ {item.sales.toLocaleString()}
                    </div>
                  </div>
                </div>
                <span className="text-xs text-slate-500 mt-2">{item.date}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Sources */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Traffic Sources</h3>
          <div className="space-y-4">
            {data.trafficSources.map((source: any, index: number) => (
              <div key={source.source} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <span className="font-medium text-slate-900">{source.source}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-slate-600">{source.visitors.toLocaleString()} visitors</span>
                  <span className="font-semibold text-slate-900">{source.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Pages */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Top Pages</h3>
          <div className="space-y-4">
            {data.topPages.map((page: any, index: number) => (
              <div key={page.page} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="font-medium text-slate-900 truncate">{page.page}</div>
                  <div className="text-sm text-slate-500">Bounce rate: {page.bounceRate}%</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-slate-900">{page.views.toLocaleString()}</div>
                  <div className="text-sm text-slate-500">views</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Traffic Tab Component
function TrafficTab({ data }: any) {
  return (
    <div className="text-center py-12">
      <BarChart3 className="h-16 w-16 text-slate-300 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-slate-900 mb-2">
        Traffic Analytics
      </h3>
      <p className="text-slate-600 mb-6">
        Detailed traffic analysis and user behavior insights
      </p>
      <Button className="bg-amber-600 hover:bg-amber-700 text-white">
        View Traffic Report
      </Button>
    </div>
  );
}

// Sales Tab Component
function SalesTab({ data }: any) {
  return (
    <div className="text-center py-12">
      <DollarSign className="h-16 w-16 text-slate-300 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-slate-900 mb-2">
        Sales Analytics
      </h3>
      <p className="text-slate-600 mb-6">
        Comprehensive sales performance and revenue analytics
      </p>
      <Button className="bg-amber-600 hover:bg-amber-700 text-white">
        View Sales Report
      </Button>
    </div>
  );
}

// Conversion Tab Component
function ConversionTab({ data }: any) {
  return (
    <div className="text-center py-12">
      <TrendingUp className="h-16 w-16 text-slate-300 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-slate-900 mb-2">
        Conversion Analytics
      </h3>
      <p className="text-slate-600 mb-6">
        Conversion rate optimization and funnel analysis
      </p>
      <Button className="bg-amber-600 hover:bg-amber-700 text-white">
        View Conversion Report
      </Button>
    </div>
  );
}