'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ProductTabsProps {
  product: any;
}

const tabs = [
  { id: 'description', label: 'Description', labelBn: 'বিবরণ' },
  { id: 'nutrition', label: 'Nutritional Info', labelBn: 'পুষ্টি তথ্য' },
  { id: 'usage', label: 'How to Use', labelBn: 'ব্যবহার পদ্ধতি' },
  { id: 'reviews', label: 'Reviews', labelBn: 'রিভিউ' },
];

export function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState('description');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div className="prose prose-slate max-w-none">
            <h3>Product Description</h3>
            <p>{product.description}</p>
            <p className="font-bengali">{product.descriptionBn}</p>
            
            <h4>Key Features</h4>
            <ul>
              <li>100% pure and natural</li>
              <li>No additives or preservatives</li>
              <li>Direct from Bhuban forests</li>
              <li>Lab tested for purity</li>
              <li>Rich in natural enzymes</li>
            </ul>
          </div>
        );
      
      case 'nutrition':
        return (
          <div className="prose prose-slate max-w-none">
            <h3>Nutritional Information</h3>
            <p>Per 100g of product:</p>
            <table className="w-full">
              <tbody>
                <tr>
                  <td>Energy</td>
                  <td>304 kcal</td>
                </tr>
                <tr>
                  <td>Carbohydrates</td>
                  <td>82.4g</td>
                </tr>
                <tr>
                  <td>Sugars</td>
                  <td>82.1g</td>
                </tr>
                <tr>
                  <td>Protein</td>
                  <td>0.3g</td>
                </tr>
                <tr>
                  <td>Fat</td>
                  <td>0g</td>
                </tr>
                <tr>
                  <td>Fiber</td>
                  <td>0.2g</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      
      case 'usage':
        return (
          <div className="prose prose-slate max-w-none">
            <h3>How to Use</h3>
            <h4>For Honey:</h4>
            <ul>
              <li>Consume 1-2 teaspoons daily</li>
              <li>Can be added to warm water, tea, or milk</li>
              <li>Use as a natural sweetener in recipes</li>
              <li>Store in a cool, dry place away from direct sunlight</li>
            </ul>
            
            <h4>Storage Instructions</h4>
            <ul>
              <li>Store at room temperature</li>
              <li>Keep container tightly closed</li>
              <li>Avoid moisture and direct sunlight</li>
              <li>Crystallization is natural - warm gently to liquefy</li>
            </ul>
          </div>
        );
      
      case 'reviews':
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-slate-900">{product.rating}</div>
                <div className="text-sm text-slate-500">out of 5</div>
              </div>
              <div>
                <div className="text-sm text-slate-600">
                  Based on {product.reviewCount} reviews
                </div>
                <div className="text-sm font-bengali text-slate-500">
                  {product.reviewCount}টি রিভিউ এর ভিত্তিতে
                </div>
              </div>
            </div>
            
            {/* Sample Reviews */}
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-amber-600">R</span>
                  </div>
                  <div>
                    <div className="font-semibold">Riya Ahmed</div>
                    <div className="text-sm text-slate-500">2 days ago</div>
                  </div>
                </div>
                <p className="text-slate-600">
                  Excellent quality honey! The taste is pure and natural. 
                  Much better than market honey.
                </p>
              </div>
              
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-amber-600">J</span>
                  </div>
                  <div>
                    <div className="font-semibold">John Rahman</div>
                    <div className="text-sm text-slate-500">1 week ago</div>
                  </div>
                </div>
                <p className="text-slate-600">
                  Authentic product with great packaging. Fast delivery too. 
                  Will order again!
                </p>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Tab Headers */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium text-sm transition-colors relative ${
                activeTab === tab.id
                  ? 'text-amber-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
              <span className="block text-xs font-bengali text-slate-500">
                {tab.labelBn}
              </span>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600"
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl"
        >
          {renderTabContent()}
        </motion.div>
      </div>
    </section>
  );
}