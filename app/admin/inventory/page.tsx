import { Metadata } from 'next';
import { InventoryClient } from '@/components/admin/inventory-client';

export const metadata: Metadata = {
  title: 'Inventory Management - Admin Panel',
};

export default function InventoryPage() {
  return <InventoryClient />;
}