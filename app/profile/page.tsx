import { Metadata } from 'next';
import { ProfileClient } from '@/components/profile/profile-client';
import { auth } from '@/lib/auth';

export const metadata: Metadata = {
  title: 'My Profile - Khati Bhuban',
  description: 'Manage your profile and account settings',
};

export default async function ProfilePage() {
  const session = await auth();
  
  return <ProfileClient user={session?.user} />;
}