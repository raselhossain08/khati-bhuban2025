import { Metadata } from 'next';
import { AboutClient } from '@/components/about/about-client';

export const metadata: Metadata = {
  title: 'About Us - Khati Bhuban | Our Story & Mission',
  description: 'Discover the story behind Khati Bhuban - your trusted source for 100% pure natural honey and foods from the heart of Bhuban\'s forests.',
};

export default function AboutPage() {
  return <AboutClient />;
}