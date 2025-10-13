import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductDetails } from '@/components/products/product-details';
import { ProductTabs } from '@/components/products/product-tabs';
import { RelatedProducts } from '@/components/products/related-products';
import { apiService } from '@/services/api';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  try {
    const product = await apiService.getProduct(params.slug);
    
    return {
      title: `${product.name} | ${product.nameBn} - Khati Bhuban`,
      description: product.description,
      keywords: product.tags.join(', '),
      openGraph: {
        title: product.name,
        description: product.description,
        images: product.images,
        type: 'product',
      },
    };
  } catch {
    return {
      title: 'Product Not Found - Khati Bhuban',
    };
  }
}

// Generate static paths for SSG
export async function generateStaticParams() {
  try {
    const products = await apiService.getProducts();
    return products.map((product) => ({
      slug: product.slug,
    }));
  } catch {
    return [];
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  let product;
  
  try {
    product = await apiService.getProduct(params.slug);
  } catch {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Product Details */}
      <ProductDetails product={product} />
      
      {/* Product Tabs */}
      <ProductTabs product={product} />
      
      {/* Related Products */}
      <RelatedProducts currentProduct={product} />
    </div>
  );
}