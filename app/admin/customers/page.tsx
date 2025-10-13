import { Metadata } from 'next';
import { CustomersClient } from '@/components/admin/customers-client';

export const metadata: Metadata = {
  title: 'Customers - Admin Panel',
};

export default function CustomersPage() {
  return <CustomersClient />;
}