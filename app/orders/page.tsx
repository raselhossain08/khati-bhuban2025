import { Metadata } from 'next';
import { OrdersClient } from '@/components/orders/orders-client';
import { auth } from '@/lib/auth';

export const metadata: Metadata = {
  title: 'Order History - Khati Bhuban',
  description: 'View your order history and track your purchases',
};

export default async function OrdersPage() {
  const session = await auth();
  
  return <OrdersClient user={session?.user} />;
}