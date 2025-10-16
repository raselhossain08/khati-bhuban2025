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

const navigation = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    name: "Products",
    href: "/admin/products",
    icon: Package,
  },
  {
    name: "Customers",
    href: "/admin/customers",
    icon: Users,
  },
  {
    name: "Inventory",
    href: "/admin/inventory",
    icon: Package,
  },
  {
    name: "Marketing",
    href: "/admin/marketing",
    icon: Megaphone,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:pt-16 lg:pb-4 lg:bg-white lg:border-r lg:border-slate-200">
      <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <Link
            href="/"
            className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 transition-colors"
          >
            <Home className="h-5 w-5" />
            <span className="text-sm font-medium">Back to Store</span>
          </Link>
        </div>
        <nav className="mt-8 flex-1 px-2 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-amber-100 text-amber-900"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                <item.icon
                  className={cn(
                    "mr-3 flex-shrink-0 h-5 w-5",
                    isActive
                      ? "text-amber-600"
                      : "text-slate-400 group-hover:text-slate-500"
                  )}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
