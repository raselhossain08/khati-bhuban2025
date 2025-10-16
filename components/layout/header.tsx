"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShoppingCart,
  User,
  Search,
  Phone,
  Menu,
  X,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/auth-context";
import { useCart } from "@/contexts/cart-context";
import { useLanguage } from "@/contexts/language-context";
import { useLanguageUtils } from "@/lib/useLanguageUtils";
import { MobileNav } from "./mobile-nav";
import { SearchModal } from "@/components/search/search-modal";

const navigation = [
  { name: "Home", nameBn: "হোম", href: "/" },
  {
    name: "Honey Collection",
    nameBn: "মধুর সংগ্রহ",
    href: "/categories/honey",
  },
  {
    name: "Mustard Oil",
    nameBn: "সরিষার তেল",
    href: "/categories/mustard-oil",
  },
  {
    name: "Natural Foods",
    nameBn: "প্রাকৃতিক খাবার",
    href: "/categories/natural-foods",
  },
  { name: "About Us", nameBn: "আমাদের সম্পর্কে", href: "/about" },
  { name: "Contact", nameBn: "যোগাযোগ", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { getText, getBanglaFontClass, switchToEnglish, switchToBangla } =
    useLanguageUtils();
  const pathname = usePathname();
  const { user, wishlist } = useAuth();
  const { state: cartState } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isCartOpen && !target.closest(".cart-dropdown")) {
        setIsCartOpen(false);
      }
      if (isSearchOpen && !target.closest(".search-modal")) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isCartOpen, isSearchOpen]);

  const cartItemsCount = cartState.itemCount;
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
                <span className={getBanglaFontClass()}>
                  {getText(
                    "Hotline: +880 1234-567890",
                    "হটলাইন: +৮৮০ ১২৩৪-৫৬৭৮৯০"
                  )}
                </span>
              </div>
              <div className="hidden lg:block">
                <span className={getBanglaFontClass()}>
                  {getText(
                    "Free delivery on orders 500৳+",
                    "বিনামূল্যে ডেলিভারি ৫০০৳+ অর্ডারে"
                  )}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={switchToBangla}
                className={`px-3 py-1 rounded-md font-bengali transition-all duration-200 ${
                  language === "bn"
                    ? "bg-amber-600 text-white font-semibold shadow-sm"
                    : "hover:bg-amber-600/20 hover:text-amber-100"
                }`}
                aria-label="Switch to Bengali"
              >
                বাংলা
              </button>
              <div className="w-px h-4 bg-amber-600/50"></div>
              <button
                onClick={switchToEnglish}
                className={`px-3 py-1 rounded-md transition-all duration-200 ${
                  language === "en"
                    ? "bg-amber-600 text-white font-semibold shadow-sm"
                    : "hover:bg-amber-600/20 hover:text-amber-100"
                }`}
                aria-label="Switch to English"
              >
                English
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 border-b",
          isScrolled ? "border-slate-200 shadow-sm" : "border-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-amber-700">
                  Khati Bhuban
                </h1>
                <span className="text-xs font-bengali text-slate-600 -mt-1">
                  খাঁটি ভুবন
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-amber-700",
                    pathname === item.href ? "text-amber-700" : "text-slate-700"
                  )}
                >
                  <span className={getBanglaFontClass()}>
                    {getText(item.name, item.nameBn)}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:flex"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* Wishlist */}
              <Button variant="ghost" size="icon" className="relative" asChild>
                <Link href="/wishlist">
                  <Heart className="h-5 w-5" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </Link>
              </Button>

              {/* Cart */}
              <div className="relative cart-dropdown">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative"
                  onClick={() => setIsCartOpen(!isCartOpen)}
                >
                  <ShoppingCart className="h-5 w-5" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItemsCount}
                    </span>
                  )}
                </Button>

                {/* Quick Cart Dropdown */}
                {isCartOpen && (
                  <div className="absolute right-0 top-12 w-80 bg-white rounded-lg shadow-xl border border-slate-200 z-50">
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3
                          className={`font-semibold text-slate-900 ${getBanglaFontClass()}`}
                        >
                          {getText("Shopping Cart", "শপিং কার্ট")}
                        </h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setIsCartOpen(false)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      {cartState.items.length === 0 ? (
                        <div className="text-center py-8">
                          <ShoppingCart className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                          <p
                            className={`text-slate-500 ${getBanglaFontClass()}`}
                          >
                            {getText("Your cart is empty", "আপনার কার্ট খালি")}
                          </p>
                        </div>
                      ) : (
                        <>
                          <div className="space-y-3 max-h-60 overflow-y-auto">
                            {cartState.items.slice(0, 3).map((item, index) => (
                              <div
                                key={item.product.id || index}
                                className="flex items-center space-x-3 p-2 hover:bg-slate-50 rounded"
                              >
                                <div className="w-12 h-12 bg-amber-100 rounded-lg flex-shrink-0"></div>
                                <div className="flex-1 min-w-0">
                                  <p
                                    className={`text-sm font-medium text-slate-900 truncate ${getBanglaFontClass()}`}
                                  >
                                    {getText(
                                      item.product.name,
                                      item.product.nameBn
                                    )}
                                  </p>
                                  <p className="text-sm text-slate-500">
                                    {item.quantity} × ৳{item.product.price}
                                  </p>
                                </div>
                                <div className="text-sm font-medium text-amber-600">
                                  ৳{item.quantity * item.product.price}
                                </div>
                              </div>
                            ))}
                            {cartState.items.length > 3 && (
                              <p
                                className={`text-xs text-slate-500 text-center py-2 ${getBanglaFontClass()}`}
                              >
                                {getText(
                                  `+${cartState.items.length - 3} more items`,
                                  `আরো +${cartState.items.length - 3}টি পণ্য`
                                )}
                              </p>
                            )}
                          </div>

                          <div className="border-t pt-4 mt-4">
                            <div className="flex justify-between items-center mb-4">
                              <span
                                className={`font-medium text-slate-900 ${getBanglaFontClass()}`}
                              >
                                {getText("Total:", "মোট:")}
                              </span>
                              <span className="font-bold text-amber-600">
                                ৳{cartState.total}
                              </span>
                            </div>

                            <div className="space-y-2">
                              <Button
                                asChild
                                className="w-full bg-amber-600 hover:bg-amber-700"
                                onClick={() => setIsCartOpen(false)}
                              >
                                <Link
                                  href="/checkout"
                                  className={getBanglaFontClass()}
                                >
                                  {getText("Checkout", "চেকআউট")}
                                </Link>
                              </Button>
                              <Button
                                variant="outline"
                                asChild
                                className="w-full"
                                onClick={() => setIsCartOpen(false)}
                              >
                                <Link
                                  href="/cart"
                                  className={getBanglaFontClass()}
                                >
                                  {getText("View Cart", "কার্ট দেখুন")}
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* User Account */}
              {user ? (
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              ) : (
                <div className="hidden sm:flex items-center space-x-2">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/login" className={getBanglaFontClass()}>
                      {getText("Login", "লগইন")}
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="/register" className={getBanglaFontClass()}>
                      {getText("Register", "রেজিস্টার")}
                    </Link>
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
        language={language}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
