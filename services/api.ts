import { Product, Category, User, Order, ApiResponse } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

class ApiService {
  private async fetch<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    const url = `${API_BASE_URL}${endpoint}`;
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'API request failed');
      }
      
      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Product Services
  async getProducts(params?: {
    category?: string;
    featured?: boolean;
    bestSeller?: boolean;
    page?: number;
    limit?: number;
  }): Promise<Product[]> {
    const queryParams = new URLSearchParams();
    if (params?.category) queryParams.append('category', params.category);
    if (params?.featured) queryParams.append('featured', 'true');
    if (params?.bestSeller) queryParams.append('bestSeller', 'true');
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());

    const response = await this.fetch<Product[]>(`/products?${queryParams}`);
    return response.data;
  }

  async getProduct(slug: string): Promise<Product> {
    const response = await this.fetch<Product>(`/products/${slug}`);
    return response.data;
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return this.getProducts({ featured: true, limit: 8 });
  }

  async getBestSellers(): Promise<Product[]> {
    return this.getProducts({ bestSeller: true, limit: 6 });
  }

  // Category Services
  async getCategories(): Promise<Category[]> {
    const response = await this.fetch<Category[]>('/categories');
    return response.data;
  }

  async getCategory(slug: string): Promise<Category> {
    const response = await this.fetch<Category>(`/categories/${slug}`);
    return response.data;
  }

  // Auth Services
  async login(email: string, password: string): Promise<{ user: User; token: string }> {
    const response = await this.fetch<{ user: User; token: string }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    return response.data;
  }

  async register(userData: {
    name: string;
    email: string;
    phone: string;
    password: string;
  }): Promise<{ user: User; token: string }> {
    const response = await this.fetch<{ user: User; token: string }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    return response.data;
  }

  // Order Services
  async createOrder(orderData: {
    items: { productId: string; quantity: number }[];
    shippingAddress: any;
    paymentMethod: string;
  }): Promise<Order> {
    const response = await this.fetch<Order>('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
    return response.data;
  }

  async getOrders(userId: string): Promise<Order[]> {
    const response = await this.fetch<Order[]>(`/orders/user/${userId}`);
    return response.data;
  }
}

export const apiService = new ApiService();