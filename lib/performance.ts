// Performance monitoring and optimization utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();

  private constructor() {}

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  startMeasurement(label: string) {
    this.metrics.set(label, performance.now());
  }

  endMeasurement(label: string): number {
    const startTime = this.metrics.get(label);
    if (startTime) {
      const endTime = performance.now();
      const duration = endTime - startTime;
      this.metrics.delete(label);
      
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`⏱️ ${label}: ${duration.toFixed(2)}ms`);
      }
      
      return duration;
    }
    return 0;
  }

  // Web Vitals monitoring
  trackWebVitals() {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('Web Vital:', entry.name, entry.value);
        }
      });

      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint', 'first-input'] });
    }
  }
}

// Image optimization utility
export const optimizeImage = (src: string, width: number, quality: number = 80): string => {
  // In a real implementation, this would integrate with your image CDN
  // For Next.js, you can use the built-in Image component with loader
  return `${src}?width=${width}&quality=${quality}`;
};

// Lazy loading utility
export const lazyLoad = (callback: () => void, threshold: number = 0.1) => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    return observer;
  }
  return null;
};

// Debounce utility for search and filters
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Cache management
export class CacheManager {
  private static cache = new Map();

  static set(key: string, value: any, ttl: number = 300000) { // 5 minutes default
    this.cache.set(key, {
      value,
      expiry: Date.now() + ttl
    });
  }

  static get(key: string): any {
    const item = this.cache.get(key);
    if (!item) return null;

    if (Date.now() > item.expiry) {
      this.cache.delete(key);
      return null;
    }

    return item.value;
  }

  static clear() {
    this.cache.clear();
  }
}