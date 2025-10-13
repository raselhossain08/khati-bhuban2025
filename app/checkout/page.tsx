import { Metadata } from 'next';
import { CheckoutClient } from '@/components/checkout/checkout-client';
import { auth } from '@/lib/auth';

export const metadata: Metadata = {
  title: 'Checkout - Khati Bhuban',
  description: 'Complete your purchase securely',
};

export default async function CheckoutPage() {
  const session = await auth();
  
  return <CheckoutClient user={session?.user} />;
}