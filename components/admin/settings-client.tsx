'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Settings,
  Store,
  Truck,
  CreditCard,
  Mail,
  Shield,
  Users,
  Globe,
  Save
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const settingsTabs = [
  { id: 'general', label: 'General', labelBn: 'সাধারণ', icon: Settings },
  { id: 'store', label: 'Store', labelBn: 'দোকান', icon: Store },
  { id: 'shipping', label: 'Shipping', labelBn: 'শিপিং', icon: Truck },
  { id: 'payments', label: 'Payments', labelBn: 'পেমেন্ট', icon: CreditCard },
  { id: 'notifications', label: 'Notifications', labelBn: 'নোটিফিকেশন', icon: Mail },
  { id: 'security', label: 'Security', labelBn: 'সুরক্ষা', icon: Shield },
  { id: 'users', label: 'Users', labelBn: 'ব্যবহারকারী', icon: Users }
];

export function SettingsClient() {
  const [activeTab, setActiveTab] = useState('general');
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
          <p className="text-slate-600 mt-2">
            Manage your store settings and preferences
          </p>
          <p className="text-slate-600 font-bengali text-sm">
            আপনার দোকানের সেটিংস এবং পছন্দসমূহ ম্যানেজ করুন
          </p>
        </div>
        <Button
          onClick={handleSave}
          disabled={isLoading}
          className="bg-amber-600 hover:bg-amber-700 text-white mt-4 lg:mt-0"
        >
          {isLoading ? (
            <>
              <div className="loading-spinner mr-2"></div>
              Saving...
            </>
          ) : (
            <>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </>
          )}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <nav className="space-y-1">
              {settingsTabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <div className="flex-1 text-left">
                      <div>{tab.label}</div>
                      <div className="text-xs font-bengali text-slate-500">
                        {tab.labelBn}
                      </div>
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            {activeTab === 'general' && <GeneralSettings />}
            {activeTab === 'store' && <StoreSettings />}
            {activeTab === 'shipping' && <ShippingSettings />}
            {activeTab === 'payments' && <PaymentSettings />}
            {activeTab === 'notifications' && <NotificationSettings />}
            {activeTab === 'security' && <SecuritySettings />}
            {activeTab === 'users' && <UserSettings />}
          </div>
        </div>
      </div>
    </div>
  );
}

// General Settings Component
function GeneralSettings() {
  const [settings, setSettings] = useState({
    siteName: 'Khati Bhuban',
    siteTagline: 'Pure Natural Honey & Foods',
    siteDescription: 'Experience the pure taste of nature. 100% raw, unadulterated honey straight from Bhuban\'s forests.',
    contactEmail: 'info@khatibhuban.com',
    contactPhone: '+880 1234-567890',
    address: 'Bhuban, Bangladesh',
    timezone: 'Asia/Dhaka',
    currency: 'BDT',
    language: 'bn'
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-slate-900">General Settings</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Site Name</label>
          <input
            type="text"
            value={settings.siteName}
            onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Site Tagline</label>
          <input
            type="text"
            value={settings.siteTagline}
            onChange={(e) => setSettings({ ...settings, siteTagline: e.target.value })}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>

        <div className="md:col-span-2 space-y-2">
          <label className="text-sm font-medium text-slate-700">Site Description</label>
          <textarea
            value={settings.siteDescription}
            onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
            rows={3}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Contact Email</label>
          <input
            type="email"
            value={settings.contactEmail}
            onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Contact Phone</label>
          <input
            type="tel"
            value={settings.contactPhone}
            onChange={(e) => setSettings({ ...settings, contactPhone: e.target.value })}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Timezone</label>
          <select
            value={settings.timezone}
            onChange={(e) => setSettings({ ...settings, timezone: e.target.value })}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            <option value="Asia/Dhaka">Bangladesh Standard Time (BST)</option>
            <option value="UTC">UTC</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Currency</label>
          <select
            value={settings.currency}
            onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            <option value="BDT">Bangladeshi Taka (৳)</option>
            <option value="USD">US Dollar ($)</option>
          </select>
        </div>
      </div>
    </motion.div>
  );
}

// Store Settings Component
function StoreSettings() {
  const [settings, setSettings] = useState({
    maintenanceMode: false,
    storeClosed: false,
    enableReviews: true,
    enableWishlist: true,
    enableCompare: true,
    minOrderAmount: 0,
    taxRate: 0,
    taxInclusive: true
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-slate-900">Store Settings</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
          <div>
            <h3 className="font-medium text-slate-900">Maintenance Mode</h3>
            <p className="text-sm text-slate-600">Temporarily close your store for maintenance</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.maintenanceMode}
              onChange={(e) => setSettings({ ...settings, maintenanceMode: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
          <div>
            <h3 className="font-medium text-slate-900">Enable Product Reviews</h3>
            <p className="text-sm text-slate-600">Allow customers to leave reviews on products</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.enableReviews}
              onChange={(e) => setSettings({ ...settings, enableReviews: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
          <div>
            <h3 className="font-medium text-slate-900">Enable Wishlist</h3>
            <p className="text-sm text-slate-600">Allow customers to save products to wishlist</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.enableWishlist}
              onChange={(e) => setSettings({ ...settings, enableWishlist: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Minimum Order Amount</label>
            <input
              type="number"
              value={settings.minOrderAmount}
              onChange={(e) => setSettings({ ...settings, minOrderAmount: Number(e.target.value) })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Tax Rate (%)</label>
            <input
              type="number"
              value={settings.taxRate}
              onChange={(e) => setSettings({ ...settings, taxRate: Number(e.target.value) })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Shipping Settings Component
function ShippingSettings() {
  const [settings, setSettings] = useState({
    freeShippingEnabled: true,
    freeShippingMin: 500,
    shippingCost: 60,
    shippingMethods: ['home_delivery', 'pickup'],
    processingTime: '1-2 days',
    deliveryAreas: ['dhaka', 'chittagong', 'sylhet', 'khulna', 'rajshahi', 'barisal', 'rangpur', 'mymensingh']
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-slate-900">Shipping Settings</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
          <div>
            <h3 className="font-medium text-slate-900">Free Shipping</h3>
            <p className="text-sm text-slate-600">Enable free shipping for orders above minimum amount</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.freeShippingEnabled}
              onChange={(e) => setSettings({ ...settings, freeShippingEnabled: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
          </label>
        </div>

        {settings.freeShippingEnabled && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Minimum Order for Free Shipping (৳)</label>
            <input
              type="number"
              value={settings.freeShippingMin}
              onChange={(e) => setSettings({ ...settings, freeShippingMin: Number(e.target.value) })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
        )}

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Standard Shipping Cost (৳)</label>
          <input
            type="number"
            value={settings.shippingCost}
            onChange={(e) => setSettings({ ...settings, shippingCost: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Order Processing Time</label>
          <select
            value={settings.processingTime}
            onChange={(e) => setSettings({ ...settings, processingTime: e.target.value })}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            <option value="1-2 days">1-2 Business Days</option>
            <option value="2-3 days">2-3 Business Days</option>
            <option value="3-5 days">3-5 Business Days</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Delivery Areas</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {['dhaka', 'chittagong', 'sylhet', 'khulna', 'rajshahi', 'barisal', 'rangpur', 'mymensingh'].map((area) => (
              <label key={area} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={settings.deliveryAreas.includes(area)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSettings({ ...settings, deliveryAreas: [...settings.deliveryAreas, area] });
                    } else {
                      setSettings({ ...settings, deliveryAreas: settings.deliveryAreas.filter(a => a !== area) });
                    }
                  }}
                  className="rounded border-slate-300 text-amber-600 focus:ring-amber-500"
                />
                <span className="text-sm text-slate-700 capitalize">{area}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Payment Settings Component
function PaymentSettings() {
  const [settings, setSettings] = useState({
    codEnabled: true,
    bkashEnabled: true,
    cardEnabled: false,
    nagadEnabled: true,
    bankTransferEnabled: false
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-slate-900">Payment Settings</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
          <div>
            <h3 className="font-medium text-slate-900">Cash on Delivery (COD)</h3>
            <p className="text-sm text-slate-600">Allow customers to pay when they receive the order</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.codEnabled}
              onChange={(e) => setSettings({ ...settings, codEnabled: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
          <div>
            <h3 className="font-medium text-slate-900">bKash</h3>
            <p className="text-sm text-slate-600">Enable bKash mobile payments</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.bkashEnabled}
              onChange={(e) => setSettings({ ...settings, bkashEnabled: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
          <div>
            <h3 className="font-medium text-slate-900">Nagad</h3>
            <p className="text-sm text-slate-600">Enable Nagad mobile payments</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.nagadEnabled}
              onChange={(e) => setSettings({ ...settings, nagadEnabled: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
          <div>
            <h3 className="font-medium text-slate-900">Credit/Debit Cards</h3>
            <p className="text-sm text-slate-600">Enable card payments (Visa, MasterCard)</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.cardEnabled}
              onChange={(e) => setSettings({ ...settings, cardEnabled: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
          </label>
        </div>
      </div>
    </motion.div>
  );
}

// Other settings components would follow similar patterns...
function NotificationSettings() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="text-center py-12"
    >
      <Mail className="h-16 w-16 text-slate-300 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-slate-900 mb-2">
        Notification Settings
      </h3>
      <p className="text-slate-600">
        Configure email and push notification preferences
      </p>
    </motion.div>
  );
}

function SecuritySettings() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="text-center py-12"
    >
      <Shield className="h-16 w-16 text-slate-300 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-slate-900 mb-2">
        Security Settings
      </h3>
      <p className="text-slate-600">
        Manage security preferences and access controls
      </p>
    </motion.div>
  );
}

function UserSettings() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="text-center py-12"
    >
      <Users className="h-16 w-16 text-slate-300 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-slate-900 mb-2">
        User Management
      </h3>
      <p className="text-slate-600">
        Manage admin users and permissions
      </p>
    </motion.div>
  );
}