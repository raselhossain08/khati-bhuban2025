"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronRight,
  Home,
  Package,
  Phone,
  User,
  ShoppingCart,
  LogIn,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguageUtils } from "@/lib/useLanguageUtils";

interface NavigationItem {
  name: string;
  nameBn: string;
  href: string;
  icon?: any;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: NavigationItem[];
  pathname: string;
  language: string;
}

export function MobileNav({
  isOpen,
  onClose,
  navigation,
  pathname,
  language,
}: MobileNavProps) {
  const { getText, getBanglaFontClass } = useLanguageUtils();
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/50 lg:hidden"
            onClick={onClose}
          />

          {/* Mobile Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-white shadow-xl lg:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 p-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">KB</span>
                </div>
                <span className="font-bold text-slate-900">Khati Bhuban</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-slate-500 hover:text-slate-900"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Navigation */}
            <div className="flex flex-col p-4">
              <nav className="space-y-2">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? "bg-amber-50 text-amber-600"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        {item.icon && <item.icon className="h-5 w-5" />}
                        <span className={getBanglaFontClass()}>
                          {getText(item.name, item.nameBn)}
                        </span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-slate-400" />
                    </Link>
                  );
                })}
              </nav>

              {/* Divider */}
              <div className="my-6 border-t border-slate-200" />

              {/* Auth Buttons */}
              <div className="space-y-3">
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start"
                >
                  <Link href="/login" onClick={onClose}>
                    <LogIn className="mr-2 h-4 w-4" />
                    <span className={getBanglaFontClass()}>
                      {getText("Login", "লগইন")}
                    </span>
                  </Link>
                </Button>
                <Button
                  asChild
                  className="w-full justify-start bg-amber-600 hover:bg-amber-700"
                >
                  <Link href="/register" onClick={onClose}>
                    <User className="mr-2 h-4 w-4" />
                    <span className={getBanglaFontClass()}>
                      {getText("Register", "রেজিস্টার")}
                    </span>
                  </Link>
                </Button>
              </div>

              {/* Contact Info */}
              <div className="mt-8 space-y-2 text-sm text-slate-500">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+880 1234-567890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📧</span>
                  <span>info@khatibhuban.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
