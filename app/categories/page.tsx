import { Metadata } from "next";
import Link from "next/link";
import { Heart, Droplets, ShoppingBasket } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Product Categories - Khati Bhuban",
  description:
    "Browse our product categories: Pure Honey, Mustard Oil, and Natural Foods. All products are 100% natural and authentic.",
};

const categories = [
  {
    name: "Pure Honey",
    nameBn: "খাঁটি মধু",
    description: "100% raw, unadulterated honey from Bhuban forests",
    descriptionBn: "ভুবন অরণ্যের ১০০% কাঁচা, ভেজালমুক্ত মধু",
    href: "/categories/honey",
    icon: Heart,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    productCount: 12,
  },
  {
    name: "Mustard Oil",
    nameBn: "সরিষার তেল",
    description: "Cold-pressed pure mustard oil for healthy cooking",
    descriptionBn: "স্বাস্থ্যকর রান্নার জন্য কোল্ড-প্রেসড খাঁটি সরিষার তেল",
    href: "/categories/mustard-oil",
    icon: Droplets,
    color: "from-yellow-500 to-lime-500",
    bgColor: "bg-lime-50",
    productCount: 8,
  },
  {
    name: "Natural Foods",
    nameBn: "প্রাকৃতিক খাবার",
    description: "Organic and natural food products",
    descriptionBn: "জৈব ও প্রাকৃতিক খাদ্য পণ্য",
    href: "/categories/natural-foods",
    icon: ShoppingBasket,
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-50",
    productCount: 15,
  },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Product Categories
            </h1>
            <h2 className="text-2xl font-bengali mb-4">পণ্যের ক্যাটেগরি</h2>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              Explore our range of pure, natural, and authentic products
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div
                key={category.name}
                className={`${category.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-amber-200`}
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6`}
                >
                  <category.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {category.name}
                </h3>
                <h4 className="font-bengali text-slate-700 mb-3 text-lg">
                  {category.nameBn}
                </h4>

                <p className="text-slate-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                <p className="font-bengali text-slate-500 mb-6 text-sm">
                  {category.descriptionBn}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-slate-500">
                    {category.productCount} Products
                  </span>
                  <span className="font-bengali text-sm text-slate-500">
                    {category.productCount}টি পণ্য
                  </span>
                </div>

                <Button asChild className="w-full">
                  <Link href={category.href}>Browse Products</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
