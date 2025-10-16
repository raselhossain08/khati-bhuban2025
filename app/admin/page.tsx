import { Metadata } from "next";
import { AnalyticsClient } from "@/components/admin/analytics-client";
import { CustomersClient } from "@/components/admin/customers-client";
import { InventoryClient } from "@/components/admin/inventory-client";
import { MarketingClient } from "@/components/admin/marketing-client";
import { ProductsClient } from "@/components/admin/products-client";
import { SettingsClient } from "@/components/admin/settings-client";
import { RecentOrders } from "@/components/admin/recent-orders";
import { SalesChart } from "@/components/admin/sales-chart";
import { TopProducts } from "@/components/admin/top-products";

export const metadata: Metadata = {
  title: "Admin Dashboard - Khati Bhuban",
  description: "Overview of your e-commerce store",
};

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">
        Admin Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <SalesChart />
        <TopProducts />
        <RecentOrders />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
        <AnalyticsClient />
        <CustomersClient />
        <InventoryClient />
        <MarketingClient />
        <ProductsClient />
        <SettingsClient />
      </div>
    </div>
  );
}
