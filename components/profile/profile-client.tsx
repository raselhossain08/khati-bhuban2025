'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Edit2, 
  Save,
  X,
  Shield,
  Bell,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProfileClientProps {
  user?: any;
}

export function ProfileClient({ user }: ProfileClientProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    addresses: [
      {
        id: '1',
        name: 'Home',
        street: '123 Main Street',
        city: 'Dhaka',
        state: 'Dhaka Division',
        zipCode: '1200',
        country: 'Bangladesh',
        isDefault: true,
        phone: '+8801234567890'
      }
    ]
  });

  const tabs = [
    { id: 'profile', label: 'Profile', labelBn: 'প্রোফাইল', icon: User },
    { id: 'addresses', label: 'Addresses', labelBn: 'ঠিকানা', icon: MapPin },
    { id: 'security', label: 'Security', labelBn: 'সুরক্ষা', icon: Shield },
    { id: 'notifications', label: 'Notifications', labelBn: 'নোটিফিকেশন', icon: Bell },
    { id: 'wishlist', label: 'Wishlist', labelBn: 'উইশলিস্ট', icon: Heart }
  ];

  const handleSave = () => {
    // Save profile data
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset form data
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                My Account
              </h1>
              <p className="text-slate-600">
                Manage your profile and preferences
              </p>
              <p className="text-slate-600 font-bengali text-sm">
                আপনার প্রোফাইল এবং পছন্দসমূহ ম্যানেজ করুন
              </p>
            </div>
            
            {!isEditing && (
              <Button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white"
              >
                <Edit2 className="h-4 w-4" />
                Edit Profile
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <nav className="space-y-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                          activeTab === tab.id
                            ? 'bg-amber-50 text-amber-700 border border-amber-200'
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <div>
                          <div className="font-medium">{tab.label}</div>
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

            {/* Main Content */}
            <div className="lg:col-span-3">
              {activeTab === 'profile' && (
                <ProfileTab 
                  data={profileData}
                  isEditing={isEditing}
                  onSave={handleSave}
                  onCancel={handleCancel}
                  onChange={setProfileData}
                />
              )}
              
              {activeTab === 'addresses' && (
                <AddressesTab addresses={profileData.addresses} />
              )}
              
              {activeTab === 'security' && (
                <SecurityTab />
              )}
              
              {activeTab === 'notifications' && (
                <NotificationsTab />
              )}
              
              {activeTab === 'wishlist' && (
                <WishlistTab />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Profile Tab Component
function ProfileTab({ data, isEditing, onSave, onCancel, onChange }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6"
    >
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Personal Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <User className="h-4 w-4" />
            Full Name
          </label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => onChange({ ...data, name: e.target.value })}
            disabled={!isEditing}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent disabled:bg-slate-50 disabled:text-slate-500"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <Mail className="h-4 w-4" />
            Email Address
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => onChange({ ...data, email: e.target.value })}
            disabled={!isEditing}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent disabled:bg-slate-50 disabled:text-slate-500"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <Phone className="h-4 w-4" />
            Phone Number
          </label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => onChange({ ...data, phone: e.target.value })}
            disabled={!isEditing}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent disabled:bg-slate-50 disabled:text-slate-500"
          />
        </div>
      </div>

      {isEditing && (
        <div className="flex gap-4 mt-6 pt-6 border-t border-slate-200">
          <Button
            onClick={onSave}
            className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white"
          >
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
          <Button
            variant="outline"
            onClick={onCancel}
            className="flex items-center gap-2"
          >
            <X className="h-4 w-4" />
            Cancel
          </Button>
        </div>
      )}
    </motion.div>
  );
}

// Addresses Tab Component
function AddressesTab({ addresses }: any) {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Saved Addresses
        </h2>
        <Button
          onClick={() => setIsAdding(true)}
          className="bg-amber-600 hover:bg-amber-700 text-white"
        >
          Add New Address
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map((address: any) => (
          <div
            key={address.id}
            className={`border-2 rounded-xl p-4 ${
              address.isDefault
                ? 'border-amber-500 bg-amber-50'
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-slate-900">{address.name}</h3>
                {address.isDefault && (
                  <span className="inline-block bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full font-medium">
                    Default
                  </span>
                )}
              </div>
              <Button variant="ghost" size="sm">
                Edit
              </Button>
            </div>
            
            <div className="space-y-1 text-sm text-slate-600">
              <p>{address.street}</p>
              <p>{address.city}, {address.state} {address.zipCode}</p>
              <p>{address.country}</p>
              <p className="flex items-center gap-2 mt-2">
                <Phone className="h-4 w-4" />
                {address.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// Security Tab Component
function SecurityTab() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6"
    >
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Security Settings
      </h2>

      <div className="space-y-6">
        <div className="p-4 border border-slate-200 rounded-lg">
          <h3 className="font-semibold text-slate-900 mb-2">Change Password</h3>
          <p className="text-slate-600 text-sm mb-4">
            Update your password to keep your account secure
          </p>
          <Button variant="outline">Change Password</Button>
        </div>

        <div className="p-4 border border-slate-200 rounded-lg">
          <h3 className="font-semibold text-slate-900 mb-2">Two-Factor Authentication</h3>
          <p className="text-slate-600 text-sm mb-4">
            Add an extra layer of security to your account
          </p>
          <Button variant="outline">Enable 2FA</Button>
        </div>

        <div className="p-4 border border-slate-200 rounded-lg">
          <h3 className="font-semibold text-slate-900 mb-2">Login Activity</h3>
          <p className="text-slate-600 text-sm">
            Last login: Today at 14:30 from Dhaka, Bangladesh
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// Notifications Tab Component
function NotificationsTab() {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    promotions: true,
    orderUpdates: true,
    priceDrops: true,
    newProducts: false
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6"
    >
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Notification Preferences
      </h2>

      <div className="space-y-4">
        {Object.entries(notifications).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
            <div>
              <h3 className="font-medium text-slate-900 capitalize">
                {key.replace(/([A-Z])/g, ' $1')}
              </h3>
              <p className="text-slate-600 text-sm">
                Receive notifications about {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={value}
                onChange={(e) => setNotifications(prev => ({
                  ...prev,
                  [key]: e.target.checked
                }))}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
            </label>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// Wishlist Tab Component
function WishlistTab() {
  const { wishlist } = useAuth();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6"
    >
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        My Wishlist
      </h2>

      {wishlist.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="h-16 w-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            Your wishlist is empty
          </h3>
          <p className="text-slate-600 mb-6">
            Save your favorite items here for later
          </p>
          <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
            <a href="/products">
              Start Shopping
            </a>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Wishlist items would be rendered here */}
          <div className="text-center py-8">
            <p className="text-slate-600">
              {wishlist.length} items in wishlist
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
}