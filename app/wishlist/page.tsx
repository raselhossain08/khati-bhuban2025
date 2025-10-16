import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wishlist - Khati Bhuban",
  description: "Your saved favorite products",
};

export default function WishlistPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Your Wishlist
          </h1>
          <p className="text-xl text-slate-600">
            Save your favorite products for later
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500">
            Your wishlist is empty. Start adding products you love!
          </p>
        </div>
      </div>
    </div>
  );
}
