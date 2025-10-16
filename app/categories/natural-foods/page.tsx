import { Metadata } from "next";
import { ProductsListingClient } from "@/components/products/products-listing-client";

export const metadata: Metadata = {
  title: "Natural Foods - Organic Products | Khati Bhuban",
  description:
    "Explore our collection of natural and organic food products. Pure, healthy, and chemical-free foods from Bangladesh.",
};

export default function NaturalFoodsCategoryPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Natural Foods Collection
            </h1>
            <h2 className="text-2xl font-bengali mb-4">
              প্রাকৃতিক খাবারের সংগ্রহ
            </h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Discover our range of pure, organic, and natural food products
            </p>
          </div>
        </div>
      </div>

      {/* Products Listing */}
      <ProductsListingClient />
    </div>
  );
}
