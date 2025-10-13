import { Metadata } from 'next';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
}

export const generateSEO = (config: SEOConfig): Metadata => {
  const {
    title,
    description,
    keywords = 'pure honey, natural food, Bangladesh honey, খাঁটি মধু, ভুবনের মধু',
    image = '/og-image.jpg',
    url = 'https://khatibhuban.com',
    type = 'website'
  } = config;

  return {
    title: `${title} | Khati Bhuban - খাঁটি ভুবন`,
    description,
    keywords,
    authors: [{ name: 'Khati Bhuban' }],
    creator: 'Khati Bhuban',
    publisher: 'Khati Bhuban',
    metadataBase: new URL('https://khatibhuban.com'),
    
    openGraph: {
      type,
      title,
      description,
      url,
      siteName: 'Khati Bhuban',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_BD',
    },
    
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
    
    alternates: {
      canonical: url,
      languages: {
        'en-US': '/en-US',
        'bn-BD': '/bn-BD',
      },
    },
  };
};

// Structured data for products
export const generateProductStructuredData = (product: any) => {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images[0],
    sku: product.sku,
    brand: {
      '@type': 'Brand',
      name: 'Khati Bhuban'
    },
    offers: {
      '@type': 'Offer',
      url: `https://khatibhuban.com/products/${product.slug}`,
      priceCurrency: 'BDT',
      price: product.price,
      availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'Khati Bhuban'
      }
    },
    aggregateRating: product.rating ? {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount
    } : undefined
  };
};

// Structured data for organization
export const generateOrganizationStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Khati Bhuban',
    alternateName: 'খাঁটি ভুবন',
    url: 'https://khatibhuban.com',
    logo: 'https://khatibhuban.com/logo.png',
    description: 'Pure natural honey and foods from Bangladesh. 100% raw, unadulterated honey straight from Bhuban\'s forests.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bhuban',
      addressCountry: 'BD'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+880-1234-567890',
      contactType: 'customer service',
      areaServed: 'BD',
      availableLanguage: ['en', 'bn']
    },
    sameAs: [
      'https://facebook.com/khatibhuban',
      'https://instagram.com/khatibhuban'
    ]
  };
};