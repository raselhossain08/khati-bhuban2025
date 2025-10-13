import { Metadata } from 'next';
import { ProductsListingClient } from '@/components/products/products-listing-client';

export const metadata: Metadata = {
  title: 'Products - Khati Bhuban | Pure Natural Honey & Foods',
  description: 'Browse our complete collection of 100% pure natural honey, mustard oil, and organic food products. Quality guaranteed from Bhuban\'s forests.',
};

export default function ProductsPage() {
  return <ProductsListingClient />;
}