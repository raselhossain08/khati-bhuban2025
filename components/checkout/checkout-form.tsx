'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, User, Phone, Mail, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CheckoutFormProps {
  user?: any;
  onContinue: (shippingData: any) => void;
}

export function CheckoutForm({ user, onContinue }: CheckoutFormProps) {
  const [shippingData, setShippingData] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'Bangladesh',
    saveAddress: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContinue(shippingData);
  };

  const handleChange = (field: string, value: string | boolean) => {
    setShippingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6"
    >
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Shipping Information
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <User className="h-4 w-4" />
              Full Name *
            </label>
            <input
              type="text"
              required
              value={shippingData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <Mail className="h-4 w-4" />
              Email Address *
            </label>
            <input
              type="email"
              required
              value={shippingData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <Phone className="h-4 w-4" />
              Phone Number *
            </label>
            <input
              type="tel"
              required
              value={shippingData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="+880 1XXX-XXXXXX"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <MapPin className="h-4 w-4" />
              City *
            </label>
            <select
              required
              value={shippingData.city}
              onChange={(e) => handleChange('city', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="">Select City</option>
              <option value="dhaka">Dhaka</option>
              <option value="chittagong">Chittagong</option>
              <option value="sylhet">Sylhet</option>
              <option value="khulna">Khulna</option>
              <option value="rajshahi">Rajshahi</option>
              <option value="barisal">Barisal</option>
              <option value="rangpur">Rangpur</option>
              <option value="mymensingh">Mymensingh</option>
            </select>
          </div>
        </div>

        {/* Address */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <MapPin className="h-4 w-4" />
            Full Address *
          </label>
          <textarea
            required
            value={shippingData.address}
            onChange={(e) => handleChange('address', e.target.value)}
            rows={3}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
            placeholder="Enter your complete address with house number, road, area"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">
              State/Division *
            </label>
            <select
              required
              value={shippingData.state}
              onChange={(e) => handleChange('state', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="">Select Division</option>
              <option value="dhaka">Dhaka Division</option>
              <option value="chittagong">Chittagong Division</option>
              <option value="sylhet">Sylhet Division</option>
              <option value="khulna">Khulna Division</option>
              <option value="rajshahi">Rajshahi Division</option>
              <option value="barisal">Barisal Division</option>
              <option value="rangpur">Rangpur Division</option>
              <option value="mymensingh">Mymensingh Division</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">
              ZIP Code *
            </label>
            <input
              type="text"
              required
              value={shippingData.zipCode}
              onChange={(e) => handleChange('zipCode', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="Enter ZIP code"
            />
          </div>
        </div>

        {/* Save Address Checkbox */}
        {user && (
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="saveAddress"
              checked={shippingData.saveAddress}
              onChange={(e) => handleChange('saveAddress', e.target.checked)}
              className="w-4 h-4 text-amber-600 border-slate-300 rounded focus:ring-amber-500"
            />
            <label htmlFor="saveAddress" className="text-sm text-slate-700">
              Save this address for future orders
            </label>
          </div>
        )}

        {/* Continue Button */}
        <Button
          type="submit"
          className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg"
        >
          Continue to Payment
        </Button>
      </form>
    </motion.div>
  );
}