'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ShoppingCart, 
  User, 
  Search, 
  Phone, 
  Menu, 
  X,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/auth-context';
import { MobileNav } from './mobile-nav';

const navigation = [
  { name: 'Home', nameBn: 'হোম', href: '/' },
  { name: 'Honey Collection', nameBn: 'মধুর সংগ্রহ', href: '/categories/honey' },
  { name: 'Mustard Oil', nameBn: 'সরিষার তেল', href: '/categories/mustard-oil' },
  { name: 'Natural Foods', nameBn: 'প্রাকৃতিক খাবার', href: '/categories/natural-foods' },
  { name: 'About Us', nameBn: 'আমাদের সম্পর্কে', href: '/about' },
  { name: 'Contact', nameBn: 'যোগাযোগ', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user, cart, wishlist } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = wishlist.length;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-amber-700 text-white text-sm">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="font-bengali">হটলাইন: <a href="tel:+8801234567890">+৮৮০ ১২৩৪-৫৬৭৮৯০</a></span>
              </div>
              <div className="hidden lg:block">
                <span className="font-bengali">বিনামূল্যে ডেলিভারি ৫০০৳+ অর্ডারে</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-bengali">বাংলা</span>
              <div className="w-px h-4 bg-amber-600"></div>
              <span>English</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={cn(
        "sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 border-b",
        isScrolled ? "border-slate-200 shadow-sm" : "border-transparent"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-amber-700">Khati Bhuban</h1>
                <span className="text-xs font-bengali text-slate-600 -mt-1">খাঁটি ভুবন</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex flex-col items-center text-sm font-medium transition-colors hover:text-amber-700",
                    pathname === item.href ? "text-amber-700" : "text-slate-700"
                  )}
                >
                  <span>{item.name}</span>
                  <span className="font-bengali text-xs mt-0.5">{item.nameBn}</span>
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Search className="h-5 w-5" />
              </Button>

              {/* Wishlist */}
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Button>

              {/* Cart */}
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </Button>

              {/* User Account */}
              {user ? (
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              ) : (
                <div className="hidden sm:flex items-center space-x-2">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="/register">Register</Link>
                  </Button>
                </div>
              )}

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        navigation={navigation}
        pathname={pathname}
      />
    </>
  );
}