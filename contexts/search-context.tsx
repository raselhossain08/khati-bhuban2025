"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Define searchable content types
export interface SearchResult {
  id: string;
  type: "product" | "category" | "page" | "blog";
  title: string;
  titleBn: string;
  description?: string;
  descriptionBn?: string;
  url: string;
  image?: string;
  price?: number;
  category?: string;
}

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: SearchResult[];
  isSearching: boolean;
  performSearch: (query: string) => void;
  clearSearch: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

// Mock data for all searchable content across the site
const allSearchableContent: SearchResult[] = [
  // Products
  {
    id: "honey-wild-forest",
    type: "product",
    title: "Wild Forest Honey",
    titleBn: "বন্য বনের মধু",
    description: "100% pure wild forest honey from Bhuban hills",
    descriptionBn: "ভুবন পাহাড়ের ১০০% খাঁটি বন্য বনের মধু",
    url: "/products/honey-wild-forest",
    image: "/images/honey-wild.jpg",
    price: 450,
    category: "honey",
  },
  {
    id: "honey-litchi",
    type: "product",
    title: "Litchi Honey",
    titleBn: "লিচু মধু",
    description: "Pure litchi flower honey with natural sweetness",
    descriptionBn: "প্রাকৃতিক মিষ্টতা সহ খাঁটি লিচু ফুলের মধু",
    url: "/products/honey-litchi",
    image: "/images/honey-litchi.jpg",
    price: 380,
    category: "honey",
  },
  {
    id: "mustard-oil-cold-pressed",
    type: "product",
    title: "Cold Pressed Mustard Oil",
    titleBn: "ঠাণ্ডা চাপা সরিষার তেল",
    description: "Traditional cold pressed mustard oil",
    descriptionBn: "ঐতিহ্যবাহী ঠাণ্ডা চাপা সরিষার তেল",
    url: "/products/mustard-oil-cold-pressed",
    image: "/images/mustard-oil.jpg",
    price: 320,
    category: "mustard-oil",
  },
  {
    id: "ghee-pure-cow",
    type: "product",
    title: "Pure Cow Ghee",
    titleBn: "খাঁটি গরুর ঘি",
    description: "Homemade pure cow ghee from local farms",
    descriptionBn: "স্থানীয় খামার থেকে ঘরে তৈরি খাঁটি গরুর ঘি",
    url: "/products/ghee-pure-cow",
    image: "/images/ghee.jpg",
    price: 650,
    category: "natural-foods",
  },
  // Categories
  {
    id: "category-honey",
    type: "category",
    title: "Honey Products",
    titleBn: "মধুর পণ্য",
    description: "Pure natural honey varieties",
    descriptionBn: "খাঁটি প্রাকৃতিক মধুর জাত",
    url: "/categories/honey",
  },
  {
    id: "category-mustard-oil",
    type: "category",
    title: "Mustard Oil",
    titleBn: "সরিষার তেল",
    description: "Cold pressed mustard oils",
    descriptionBn: "ঠাণ্ডা চাপা সরিষার তেল",
    url: "/categories/mustard-oil",
  },
  {
    id: "category-natural-foods",
    type: "category",
    title: "Natural Foods",
    titleBn: "প্রাকৃতিক খাবার",
    description: "Organic and natural food products",
    descriptionBn: "জৈব ও প্রাকৃতিক খাদ্য পণ্য",
    url: "/categories/natural-foods",
  },
  // Pages
  {
    id: "page-about",
    type: "page",
    title: "About Us",
    titleBn: "আমাদের সম্পর্কে",
    description: "Learn about Khati Bhuban and our mission",
    descriptionBn: "খাঁটি ভুবন এবং আমাদের লক্ষ্য সম্পর্কে জানুন",
    url: "/about",
  },
  {
    id: "page-contact",
    type: "page",
    title: "Contact Us",
    titleBn: "যোগাযোগ করুন",
    description: "Get in touch with us",
    descriptionBn: "আমাদের সাথে যোগাযোগ করুন",
    url: "/contact",
  },
  {
    id: "page-shipping",
    type: "page",
    title: "Shipping Info",
    titleBn: "শিপিং তথ্য",
    description: "Shipping and delivery information",
    descriptionBn: "শিপিং এবং ডেলিভারি তথ্য",
    url: "/shipping",
  },
  // Blog posts
  {
    id: "blog-honey-benefits",
    type: "blog",
    title: "Health Benefits of Pure Honey",
    titleBn: "খাঁটি মধুর স্বাস্থ্য উপকারিতা",
    description: "Discover the amazing health benefits of consuming pure honey",
    descriptionBn:
      "খাঁটি মধু সেবনের আশ্চর্যজনক স্বাস্থ্য উপকারিতা আবিষ্কার করুন",
    url: "/blog/honey-benefits",
  },
  {
    id: "blog-mustard-oil-cooking",
    type: "blog",
    title: "Cooking with Mustard Oil",
    titleBn: "সরিষার তেল দিয়ে রান্na",
    description: "Traditional Bengali cooking with pure mustard oil",
    descriptionBn: "খাঁটি সরিষার তেল দিয়ে ঐতিহ্যবাহী বাঙালি রান্na",
    url: "/blog/mustard-oil-cooking",
  },
];

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();

  const performSearch = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);

    // Simulate search delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    const lowerQuery = query.toLowerCase();
    const results = allSearchableContent.filter((item) => {
      // Search in English title and description
      const matchesEnglish =
        item.title.toLowerCase().includes(lowerQuery) ||
        (item.description &&
          item.description.toLowerCase().includes(lowerQuery)) ||
        (item.category && item.category.toLowerCase().includes(lowerQuery));

      // Search in Bengali title and description
      const matchesBengali =
        item.titleBn.includes(query) ||
        (item.descriptionBn && item.descriptionBn.includes(query));

      return matchesEnglish || matchesBengali;
    });

    // Sort results by relevance (exact title matches first)
    results.sort((a, b) => {
      const aExactTitle =
        a.title.toLowerCase() === lowerQuery || a.titleBn === query;
      const bExactTitle =
        b.title.toLowerCase() === lowerQuery || b.titleBn === query;

      if (aExactTitle && !bExactTitle) return -1;
      if (!aExactTitle && bExactTitle) return 1;

      // Prioritize products, then categories, then pages, then blog
      const typeOrder = { product: 1, category: 2, page: 3, blog: 4 };
      return typeOrder[a.type] - typeOrder[b.type];
    });

    setSearchResults(results);
    setIsSearching(false);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  // Debounced search
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery) {
        performSearch(searchQuery);
      } else {
        setSearchResults([]);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchResults,
        isSearching,
        performSearch,
        clearSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}
