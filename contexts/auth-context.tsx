'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, CartItem, AuthContextType, RegisterData } from '@/types';
import { apiService } from '@/services/api';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = async () => {
    try {
      // Load user from localStorage
      const savedUser = localStorage.getItem('khati-bhuban-user');
      const savedCart = localStorage.getItem('khati-bhuban-cart');
      const savedWishlist = localStorage.getItem('khati-bhuban-wishlist');

      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
      if (savedWishlist) {
        setWishlist(JSON.parse(savedWishlist));
      }
    } catch (error) {
      console.error('Initialization error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { user: userData, token } = await apiService.login(email, password);
      setUser(userData);
      localStorage.setItem('khati-bhuban-user', JSON.stringify(userData));
      localStorage.setItem('khati-bhuban-token', token);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: RegisterData) => {
    setIsLoading(true);
    try {
      const { user: newUser, token } = await apiService.register({
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        password: userData.password,
      });
      setUser(newUser);
      localStorage.setItem('khati-bhuban-user', JSON.stringify(newUser));
      localStorage.setItem('khati-bhuban-token', token);
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setCart([]);
    setWishlist([]);
    localStorage.removeItem('khati-bhuban-user');
    localStorage.removeItem('khati-bhuban-token');
    localStorage.removeItem('khati-bhuban-cart');
    localStorage.removeItem('khati-bhuban-wishlist');
  };

  const addToCart = (product: any, quantity: number = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      let newCart;

      if (existingItem) {
        newCart = prevCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newCart = [...prevCart, { product, quantity }];
      }

      localStorage.setItem('khati-bhuban-cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => {
      const newCart = prevCart.filter(item => item.product.id !== productId);
      localStorage.setItem('khati-bhuban-cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart(prevCart => {
      const newCart = prevCart.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      );
      localStorage.setItem('khati-bhuban-cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const addToWishlist = (productId: string) => {
    setWishlist(prev => {
      const newWishlist = [...prev, productId];
      localStorage.setItem('khati-bhuban-wishlist', JSON.stringify(newWishlist));
      return newWishlist;
    });
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist(prev => {
      const newWishlist = prev.filter(id => id !== productId);
      localStorage.setItem('khati-bhuban-wishlist', JSON.stringify(newWishlist));
      return newWishlist;
    });
  };

  const value: AuthContextType = {
    user,
    cart,
    wishlist,
    login,
    register,
    logout,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    addToWishlist,
    removeFromWishlist,
    isLoading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};