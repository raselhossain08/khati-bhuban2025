import { Metadata } from 'next';
import { ProductsClient } from '@/components/admin/products-client';

export const metadata: Metadata = {
  title: 'Products - Admin Panel',
};

export default function ProductsPage() {
  return <ProductsClient />;
}