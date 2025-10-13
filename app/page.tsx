import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero-section';
import { FeaturedCategories } from '@/components/sections/featured-categories';
import { TrustBar } from '@/components/sections/trust-bar';
import { FeaturedProducts } from '@/components/sections/featured-products';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { Testimonials } from '@/components/sections/testimonials';
import { Newsletter } from '@/components/sections/newsletter';

export const metadata: Metadata = {
  title: 'Pure Natural Honey & Foods | Khati Bhuban - খাঁটি ভুবন',
  description: 'Experience the pure taste of nature. 100% raw, unadulterated honey straight from Bhuban\'s forests. Premium mustard oil and natural foods.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <FeaturedCategories />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </>
  );
}