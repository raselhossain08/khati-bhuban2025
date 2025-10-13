import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const footerSections = {
  shop: {
    title: 'Shop',
    titleBn: 'কেনাকাটা',
    links: [
      { name: 'All Honey', nameBn: 'সমস্ত মধু', href: '/categories/honey' },
      { name: 'Mustard Oil', nameBn: 'সরিষার তেল', href: '/categories/mustard-oil' },
      { name: 'Natural Foods', nameBn: 'প্রাকৃতিক খাবার', href: '/categories/natural-foods' },
      { name: 'Best Sellers', nameBn: 'সর্বাধিক বিক্রিত', href: '/collections/best-sellers' },
      { name: 'New Arrivals', nameBn: 'নতুন আগমন', href: '/collections/new-arrivals' },
    ],
  },
  company: {
    title: 'Company',
    titleBn: 'কোম্পানি',
    links: [
      { name: 'About Us', nameBn: 'আমাদের সম্পর্কে', href: '/about' },
      { name: 'Contact', nameBn: 'যোগাযোগ', href: '/contact' },
      { name: 'Blog', nameBn: 'ব্লগ', href: '/blog' },
      { name: 'Careers', nameBn: 'ক্যারিয়ার', href: '/careers' },
    ],
  },
  support: {
    title: 'Support',
    titleBn: 'সহায়তা',
    links: [
      { name: 'Shipping Info', nameBn: 'ডেলিভারি তথ্য', href: '/shipping' },
      { name: 'Returns', nameBn: 'ফেরত', href: '/returns' },
      { name: 'Privacy Policy', nameBn: 'গোপনীয়তা নীতি', href: '/privacy' },
      { name: 'Terms of Service', nameBn: 'সেবার শর্তাবলী', href: '/terms' },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-amber-400">Khati Bhuban</h3>
                <span className="text-sm font-bengali text-amber-200">খাঁটি ভুবন</span>
              </div>
            </Link>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Experience the pure taste of nature. 100% raw, unadulterated honey straight from 
              the heart of Bhuban&apos;s forests. Guaranteed purity, guaranteed goodness.
            </p>
            <p className="text-slate-300 font-bengali mb-6 leading-relaxed">
              প্রকৃতির খাঁটি স্বাদের অভিজ্ঞতা নিন। ভুবনের অরণ্যের গভীর থেকে সরাসরি আপনার বাড়িতে। 
              গ্যারান্টিড খাঁটি। গ্যারান্টিড উপকারিতা।
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-amber-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-amber-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-amber-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-semibold text-amber-400 mb-4">
                {section.title} <span className="font-bengali text-sm block">{section.titleBn}</span>
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-slate-300 hover:text-amber-400 transition-colors text-sm"
                    >
                      {link.name} <span className="font-bengali block text-xs text-slate-400">{link.nameBn}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Bar */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-400" />
                <span>+880 1234-567890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-amber-400" />
                <span>info@khatibhuban.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-amber-400" />
                <span className="font-bengali">ভুবন, বাংলাদেশ</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-slate-400">
              <span>Accepted Payments:</span>
              <div className="flex space-x-2">
                <div className="bg-slate-800 px-2 py-1 rounded text-xs">bKash</div>
                <div className="bg-slate-800 px-2 py-1 rounded text-xs">Nagad</div>
                <div className="bg-slate-800 px-2 py-1 rounded text-xs">Card</div>
                <div className="bg-slate-800 px-2 py-1 rounded text-xs">COD</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © 2024 Khati Bhuban. All rights reserved.
            </p>
            <p className="text-slate-400 font-bengali text-sm">
              খাঁটি ভুবন - প্রকৃতির খাঁটি উপহার
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}