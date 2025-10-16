import { Metadata } from "next";
import { ProductsListingClient } from "@/components/products/products-listing-client";

export const metadata: Metadata = {
  title: "Mustard Oil - Cold Pressed Pure Oil | Khati Bhuban",
  description:
    "Premium cold-pressed mustard oil for healthy cooking. Pure, natural, and chemical-free mustard oil from Bangladesh.",
};

export default function MustardOilCategoryPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-600 to-lime-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Premium Mustard Oil
            </h1>
            <h2 className="text-2xl font-bengali mb-4">খাঁটি সরিষার তেল</h2>
            <p className="text-xl text-yellow-100 max-w-2xl mx-auto">
              Cold-pressed mustard oil for authentic taste and healthy cooking
            </p>
          </div>
        </div>
      </div>

      {/* Products Listing */}
      <ProductsListingClient />
    </div>
  );
}
