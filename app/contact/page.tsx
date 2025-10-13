import { Metadata } from 'next';
import { ContactClient } from '@/components/contact/contact-client';

export const metadata: Metadata = {
  title: 'Contact Us - Khati Bhuban | Get in Touch',
  description: 'Get in touch with Khati Bhuban. We\'re here to answer your questions about our pure natural honey and food products. Contact us for wholesale inquiries and support.',
};

export default function ContactPage() {
  return <ContactClient />;
}