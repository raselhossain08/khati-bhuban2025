import { Metadata } from "next";
import { ProductsListingClient } from "@/components/products/products-listing-client";

export const metadata: Metadata = {
  title: "Honey Collection - Pure Natural Honey | Khati Bhuban",
  description:
    "Discover our premium collection of pure, natural honey from the forests of Bhuban. 100% authentic and unadulterated honey.",
};

export default function HoneyCategoryPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pure Honey Collection
            </h1>
            <h2 className="text-2xl font-bengali mb-4">খাঁটি মধুর সংগ্রহ</h2>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              Experience the finest honey sourced directly from the pristine
              forests of Bhuban
            </p>
          </div>
        </div>
      </div>

      {/* Products Listing */}
      <ProductsListingClient />
    </div>
  );
}
