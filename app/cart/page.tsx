import { Metadata } from "next";
import { CartClient } from "@/components/cart/cart-client";

export const metadata: Metadata = {
  title: "Shopping Cart - Khati Bhuban",
  description: "Review your cart items and proceed to checkout",
};

export default function CartPage() {
  return <CartClient />;
}
