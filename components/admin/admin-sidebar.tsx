"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Megaphone,
  Settings,
  Home,
} from "lucide-react";

// Mock data
const stats = [
  {
    name: "Total Products",
    nameBn: "মোট পণ্য",
    value: "156",
    change: "+12%",
    trend: "up",
    icon: Package,
    color: "blue",
  },
  {
    name: "Total Orders",
    nameBn: "মোট অর্ডার",
    value: "1,234",
    change: "+8%",
    trend: "up",
    icon: ShoppingCart,
    color: "green",
  },
  {
    name: "Total Customers",
    nameBn: "মোট গ্রাহক",
    value: "892",
    change: "+15%",
    trend: "up",
    icon: Users,
    color: "amber",
  },
  {
    name: "Total Revenue",
    nameBn: "মোট আয়",
    value: "৳ 4,56,789",
    change: "+23%",
    trend: "up",
    icon: DollarSign,
    color: "emerald",
  },
];

const quickActions = [
  {
    name: "Add Product",
    nameBn: "পণ্য যোগ করুন",
    href: "/admin/products/new",
    icon: Package,
  },
  {
    name: "View Orders",
    nameBn: "অর্ডার দেখুন",
    href: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    name: "Manage Inventory",
    nameBn: "ইনভেন্টরি ম্যানেজ করুন",
    href: "/admin/inventory",
    icon: Package,
  },
  {
    name: "View Analytics",
    nameBn: "এনালিটিক্স দেখুন",
    href: "/admin/analytics",
    icon: TrendingUp,
  },
];

export function DashboardClient() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-600 mt-2">
            Welcome back! Here's what's happening with your store today.
          </p>
          <p className="text-slate-600 font-bengali text-sm">
            আবারও স্বাগতম! আজ আপনার দোকানের অবস্থা এখানে দেখুন।
          </p>
        </div>
        <div className="flex gap-3 mt-4 lg:mt-0">
          <Button variant="outline">View Reports</Button>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white">
            Add Product
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown;

          return (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">
                    {stat.name}
                  </p>
                  <p className="text-xs text-slate-500 font-bengali">
                    {stat.nameBn}
                  </p>
                  <p className="text-2xl font-bold text-slate-900 mt-2">
                    {stat.value}
                  </p>
                </div>
                <div
                  className={`p-3 rounded-lg ${
                    stat.color === "blue"
                      ? "bg-blue-50"
                      : stat.color === "green"
                      ? "bg-green-50"
                      : stat.color === "amber"
                      ? "bg-amber-50"
                      : "bg-emerald-50"
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 ${
                      stat.color === "blue"
                        ? "text-blue-600"
                        : stat.color === "green"
                        ? "text-green-600"
                        : stat.color === "amber"
                        ? "text-amber-600"
                        : "text-emerald-600"
                    }`}
                  />
                </div>
              </div>
              <div
                className={`flex items-center gap-1 mt-4 text-sm ${
                  stat.trend === "up" ? "text-green-600" : "text-rose-600"
                }`}
              >
                <TrendIcon className="h-4 w-4" />
                <span>{stat.change}</span>
                <span className="text-slate-500">from last month</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Chart */}
        <div className="lg:col-span-2">
          <SalesChart />
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <motion.button
                    key={action.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="w-full flex items-center gap-3 p-3 text-left rounded-lg border border-slate-200 hover:border-amber-200 hover:bg-amber-50 transition-colors"
                  >
                    <Icon className="h-5 w-5 text-amber-600" />
                    <div>
                      <div className="font-medium text-slate-900">
                        {action.name}
                      </div>
                      <div className="text-sm text-slate-500 font-bengali">
                        {action.nameBn}
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Store Performance */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Store Performance
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-slate-400" />
                  <span className="text-sm text-slate-600">Store Visits</span>
                </div>
                <span className="font-semibold text-slate-900">1,234</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4 text-slate-400" />
                  <span className="text-sm text-slate-600">
                    Conversion Rate
                  </span>
                </div>
                <span className="font-semibold text-green-600">4.2%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-slate-400" />
                  <span className="text-sm text-slate-600">Avg. Rating</span>
                </div>
                <span className="font-semibold text-amber-600">4.8/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders and Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentOrders />
        </div>
        <div>
          <TopProducts />
        </div>
      </div>
    </div>
  );
}
