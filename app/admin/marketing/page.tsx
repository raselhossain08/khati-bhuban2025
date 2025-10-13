import { Metadata } from 'next';
import { MarketingClient } from '@/components/admin/marketing-client';

export const metadata: Metadata = {
  title: 'Marketing - Admin Panel',
};

export default function MarketingPage() {
  return <MarketingClient />;
}