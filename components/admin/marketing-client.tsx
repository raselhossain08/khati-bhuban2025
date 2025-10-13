'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Tag,
  Mail,
  BarChart3,
  Users,
  TrendingUp,
  Plus,
  Eye,
  Edit2,
  MoreVertical
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock marketing data
const campaigns = [
  {
    id: '1',
    name: 'Winter Honey Sale',
    nameBn: 'শীতকালীন মধু সেল',
    type: 'Discount',
    status: 'active',
    audience: 'All Customers',
    startDate: '2024-01-15',
    endDate: '2024-01-31',
    budget: 5000,
    spent: 3200,
    conversions: 45,
    revenue: 22500
  },
  {
    id: '2',
    name: 'New Customer Welcome',
    nameBn: 'নতুন গ্রাহক স্বাগতম',
    type: 'Email',
    status: 'active',
    audience: 'New Customers',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    budget: 2000,
    spent: 800,
    conversions: 28,
    revenue: 14000
  },
  {
    id: '3',
    name: 'Loyalty Rewards',
    nameBn: 'লয়্যালটি রিওয়ার্ডস',
    type: 'Loyalty',
    status: 'paused',
    audience: 'VIP Customers',
    startDate: '2024-01-10',
    endDate: '2024-02-10',
    budget: 3000,
    spent: 1500,
    conversions: 32,
    revenue: 16000
  },
  {
    id: '4',
    name: 'Social Media Promotion',
    nameBn: 'সোশ্যাল মিডিয়া প্রমোশন',
    type: 'Social',
    status: 'completed',
    audience: 'Social Followers',
    startDate: '2023-12-01',
    endDate: '2023-12-31',
    budget: 4000,
    spent: 4000,
    conversions: 67,
    revenue: 33500
  }
];

const discountCodes = [
  {
    id: '1',
    code: 'WINTER20',
    type: 'Percentage',
    value: 20,
    usage: 45,
    maxUsage: 100,
    status: 'active',
    startDate: '2024-01-15',
    endDate: '2024-01-31'
  },
  {
    id: '2',
    code: 'WELCOME10',
    type: 'Percentage',
    value: 10,
    usage: 89,
    maxUsage: 200,
    status: 'active',
    startDate: '2024-01-01',
    endDate: '2024-12-31'
  },
  {
    id: '3',
    code: 'FREESHIP',
    type: 'Free Shipping',
    value: 0,
    usage: 156,
    maxUsage: 500,
    status: 'active',
    startDate: '2024-01-01',
    endDate: '2024-01-31'
  }
];

export function MarketingClient() {
  const [activeTab, setActiveTab] = useState('campaigns');

  const tabs = [
    { id: 'campaigns', label: 'Campaigns', labelBn: 'ক্যাম্পেইন', icon: BarChart3 },
    { id: 'discounts', label: 'Discounts', labelBn: 'ডিসকাউন্ট', icon: Tag },
    { id: 'email', label: 'Email Marketing', labelBn: 'ইমেইল মার্কেটিং', icon: Mail },
    { id: 'analytics', label: 'Analytics', labelBn: 'এনালিটিক্স', icon: TrendingUp }
  ];

  const activeCampaigns = campaigns.filter(c => c.status === 'active').length;
  const totalRevenue = campaigns.reduce((sum, camp) => sum + camp.revenue, 0);
  const totalConversions = campaigns.reduce((sum, camp) => sum + camp.conversions, 0);
  const roi = ((totalRevenue - campaigns.reduce((sum, camp) => sum + camp.spent, 0)) / campaigns.reduce((sum, camp) => sum + camp.spent, 0)) * 100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Marketing</h1>
          <p className="text-slate-600 mt-2">
            Create and manage marketing campaigns
          </p>
          <p className="text-slate-600 font-bengali text-sm">
            মার্কেটিং ক্যাম্পেইন তৈরি এবং ম্যানেজ করুন
          </p>
        </div>
        <div className="flex gap-3 mt-4 lg:mt-0">
          <Button variant="outline">Analytics Report</Button>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Create Campaign
          </Button>
        </div>
      </div>

      {/* Marketing Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Active Campaigns</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">{activeCampaigns}</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <BarChart3 className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Total Revenue</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">৳{(totalRevenue / 1000).toFixed(0)}K</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Conversions</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">{totalConversions}</p>
            </div>
            <div className="p-3 bg-amber-50 rounded-lg">
              <Users className="h-6 w-6 text-amber-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">ROI</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">{roi.toFixed(1)}%</p>
            </div>
            <div className="p-3 bg-emerald-50 rounded-lg">
              <Tag className="h-6 w-6 text-emerald-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4 mb-6">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-amber-50 text-amber-700 border border-amber-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
                <span className="text-xs font-bengali text-slate-500">
                  {tab.labelBn}
                </span>
              </button>
            );
          })}
        </div>

        {activeTab === 'campaigns' && <CampaignsTab campaigns={campaigns} />}
        {activeTab === 'discounts' && <DiscountsTab discounts={discountCodes} />}
        {activeTab === 'email' && <EmailTab />}
        {activeTab === 'analytics' && <AnalyticsTab />}
      </div>
    </div>
  );
}

// Campaigns Tab Component
function CampaignsTab({ campaigns }: any) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Campaign</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Type</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Status</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Audience</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Budget</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Conversions</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Revenue</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign: any, index: number) => (
              <motion.tr
                key={campaign.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
              >
                <td className="py-4 px-6">
                  <div>
                    <div className="font-medium text-slate-900">{campaign.name}</div>
                    <div className="text-sm text-slate-500 font-bengali">
                      {campaign.nameBn}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="text-sm text-slate-600">{campaign.type}</span>
                </td>
                <td className="py-4 px-6">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    campaign.status === 'active' 
                      ? 'bg-green-100 text-green-800'
                      : campaign.status === 'paused'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-slate-100 text-slate-800'
                  }`}>
                    {campaign.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="text-sm text-slate-600">{campaign.audience}</span>
                </td>
                <td className="py-4 px-6">
                  <div>
                    <div className="font-medium text-slate-900">৳{campaign.spent} / ৳{campaign.budget}</div>
                    <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden mt-1">
                      <div 
                        className="h-full bg-amber-500 rounded-full"
                        style={{ width: `${(campaign.spent / campaign.budget) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="font-medium text-slate-900">{campaign.conversions}</span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-medium text-slate-900">৳{campaign.revenue}</span>
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
  );
}

// Discounts Tab Component
function DiscountsTab({ discounts }: any) {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-slate-900">Discount Codes</h3>
        <Button className="bg-amber-600 hover:bg-amber-700 text-white flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Create Discount
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {discounts.map((discount: any, index: number) => (
          <motion.div
            key={discount.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <code className="text-lg font-bold text-slate-900 bg-white px-3 py-1 rounded-lg">
                {discount.code}
              </code>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                discount.status === 'active' 
                  ? 'bg-green-100 text-green-800'
                  : 'bg-slate-100 text-slate-800'
              }`}>
                {discount.status}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Type:</span>
                <span className="font-medium text-slate-900">{discount.type}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Value:</span>
                <span className="font-medium text-slate-900">
                  {discount.type === 'Percentage' ? `${discount.value}%` : 'Free Shipping'}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Usage:</span>
                <span className="font-medium text-slate-900">
                  {discount.usage} / {discount.maxUsage}
                </span>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-amber-500 rounded-full"
                  style={{ width: `${(discount.usage / discount.maxUsage) * 100}%` }}
                ></div>
              </div>
              <div className="text-xs text-slate-500">
                Valid until {new Date(discount.endDate).toLocaleDateString()}
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="sm" className="flex-1">
                Copy
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                Edit
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Email Tab Component
function EmailTab() {
  return (
    <div className="text-center py-12">
      <Mail className="h-16 w-16 text-slate-300 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-slate-900 mb-2">
        Email Marketing
      </h3>
      <p className="text-slate-600 mb-6">
        Create and send email campaigns to your customers
      </p>
      <Button className="bg-amber-600 hover:bg-amber-700 text-white">
        Create Email Campaign
      </Button>
    </div>
  );
}

// Analytics Tab Component
function AnalyticsTab() {
  return (
    <div className="text-center py-12">
      <BarChart3 className="h-16 w-16 text-slate-300 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-slate-900 mb-2">
        Marketing Analytics
      </h3>
      <p className="text-slate-600 mb-6">
        Detailed analytics and performance reports for your marketing campaigns
      </p>
      <Button className="bg-amber-600 hover:bg-amber-700 text-white">
        View Full Analytics
      </Button>
    </div>
  );
}