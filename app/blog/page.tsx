import { Metadata } from 'next';
import { BlogClient } from '@/components/blog/blog-client';

export const metadata: Metadata = {
  title: 'Blog - Khati Bhuban | Health Tips & Honey Guides',
  description: 'Discover articles about honey benefits, natural food tips, healthy recipes, and beekeeping insights from Khati Bhuban experts.',
};

export default function BlogPage() {
  return <BlogClient />;
}