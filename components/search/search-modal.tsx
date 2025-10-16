"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  X,
  Clock,
  ArrowRight,
  Package,
  FileText,
  Folder,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/language-context";
import { useSearch, SearchResult } from "@/contexts/search-context";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const { language } = useLanguage();
  const {
    searchQuery,
    setSearchQuery,
    searchResults,
    isSearching,
    clearSearch,
  } = useSearch();
  const [localQuery, setLocalQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const router = useRouter();

  // Load recent searches from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("khati-bhuban-recent-searches");
      if (saved) {
        setRecentSearches(JSON.parse(saved));
      }
    }
  }, []);

  // Save recent searches to localStorage
  const saveRecentSearch = (query: string) => {
    if (!query.trim()) return;

    const updated = [query, ...recentSearches.filter((q) => q !== query)].slice(
      0,
      5
    );
    setRecentSearches(updated);

    if (typeof window !== "undefined") {
      localStorage.setItem(
        "khati-bhuban-recent-searches",
        JSON.stringify(updated)
      );
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      saveRecentSearch(query.trim());
    }
  };

  const handleResultClick = (result: SearchResult) => {
    saveRecentSearch(localQuery);
    router.push(result.url);
    onClose();
  };

  const handleRecentClick = (query: string) => {
    setLocalQuery(query);
    handleSearch(query);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem("khati-bhuban-recent-searches");
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "product":
        return <Package className="h-4 w-4" />;
      case "category":
        return <Folder className="h-4 w-4" />;
      case "page":
        return <FileText className="h-4 w-4" />;
      case "blog":
        return <BookOpen className="h-4 w-4" />;
      default:
        return <Search className="h-4 w-4" />;
    }
  };

  const getTypeBadge = (type: string) => {
    const badges = {
      product: { en: "Product", bn: "পণ্য" },
      category: { en: "Category", bn: "বিভাগ" },
      page: { en: "Page", bn: "পৃষ্ঠা" },
      blog: { en: "Blog", bn: "ব্লগ" },
    };

    return language === "en"
      ? badges[type as keyof typeof badges]?.en
      : badges[type as keyof typeof badges]?.bn;
  };

  useEffect(() => {
    handleSearch(localQuery);
  }, [localQuery]);

  useEffect(() => {
    if (!isOpen) {
      setLocalQuery("");
      clearSearch();
    }
  }, [isOpen, clearSearch]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 search-modal max-h-[80vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">
              {language === "en" ? "Search" : "অনুসন্ধান"}
            </h3>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              placeholder={
                language === "en"
                  ? "Search for products, categories, pages..."
                  : "পণ্য, বিভাগ, পৃষ্ঠা খুঁজুন..."
              }
              className="w-full px-4 py-3 pr-12 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              autoFocus
            />
            <Search className="absolute right-3 top-3.5 h-5 w-5 text-slate-400" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {!localQuery && recentSearches.length > 0 && (
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-medium text-slate-600 flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {language === "en"
                    ? "Recent Searches"
                    : "সাম্প্রতিক অনুসন্ধান"}
                </h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearRecentSearches}
                  className="text-xs"
                >
                  {language === "en" ? "Clear" : "মুছুন"}
                </Button>
              </div>
              <div className="space-y-1">
                {recentSearches.map((query, index) => (
                  <button
                    key={index}
                    onClick={() => handleRecentClick(query)}
                    className="flex items-center gap-2 w-full p-2 text-left hover:bg-slate-50 rounded text-sm text-slate-600"
                  >
                    <Clock className="h-3 w-3" />
                    {query}
                  </button>
                ))}
              </div>
            </div>
          )}

          {localQuery && (
            <div className="p-4">
              {isSearching && (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-amber-500 border-t-transparent"></div>
                  <span className="ml-2 text-slate-600">
                    {language === "en" ? "Searching..." : "খোঁজা হচ্ছে..."}
                  </span>
                </div>
              )}

              {!isSearching && searchResults.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-slate-600 mb-3">
                    {language === "en"
                      ? `${searchResults.length} results found`
                      : `${searchResults.length}টি ফলাফল পাওয়া গেছে`}
                  </h4>
                  <div className="space-y-2">
                    {searchResults.map((result) => (
                      <button
                        key={result.id}
                        onClick={() => handleResultClick(result)}
                        className="w-full p-3 text-left hover:bg-slate-50 rounded-lg border border-slate-100 group transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1 text-slate-400">
                            {getTypeIcon(result.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h5 className="font-medium text-slate-900 group-hover:text-amber-600 transition-colors">
                                {language === "en"
                                  ? result.title
                                  : result.titleBn}
                              </h5>
                              <Badge variant="secondary" className="text-xs">
                                {getTypeBadge(result.type)}
                              </Badge>
                            </div>
                            {(result.description || result.descriptionBn) && (
                              <p className="text-sm text-slate-600 line-clamp-2">
                                {language === "en"
                                  ? result.description
                                  : result.descriptionBn}
                              </p>
                            )}
                            {result.price && (
                              <p className="text-sm font-medium text-amber-600 mt-1">
                                ৳{result.price}
                              </p>
                            )}
                          </div>
                          <div className="flex-shrink-0 text-slate-400 group-hover:text-slate-600 transition-colors">
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {searchResults.length > 5 && (
                    <div className="mt-4 pt-3 border-t">
                      <Link
                        href={`/search?q=${encodeURIComponent(localQuery)}`}
                        onClick={onClose}
                        className="flex items-center justify-center gap-2 w-full p-2 text-amber-600 hover:text-amber-700 font-medium text-sm"
                      >
                        {language === "en"
                          ? "View all results"
                          : "সব ফলাফল দেখুন"}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {!isSearching && searchResults.length === 0 && localQuery && (
                <div className="text-center py-8">
                  <Search className="h-12 w-12 text-slate-300 mx-auto mb-3" />
                  <p className="text-slate-600 mb-2">
                    {language === "en"
                      ? "No results found"
                      : "কোনো ফলাফল পাওয়া যায়নি"}
                  </p>
                  <p className="text-sm text-slate-500">
                    {language === "en"
                      ? "Try different keywords or check spelling"
                      : "বিভিন্ন কীওয়ার্ড চেষ্টা করুন বা বানান পরীক্ষা করুন"}
                  </p>
                </div>
              )}
            </div>
          )}

          {!localQuery && recentSearches.length === 0 && (
            <div className="p-4 text-center py-8">
              <Search className="h-12 w-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-600 mb-2">
                {language === "en"
                  ? "Start typing to search"
                  : "অনুসন্ধান করতে টাইপ করুন"}
              </p>
              <p className="text-sm text-slate-500">
                {language === "en"
                  ? "Search for products, categories, pages, and more"
                  : "পণ্য, বিভাগ, পৃষ্ঠা এবং আরও অনেক কিছু খুঁজুন"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
