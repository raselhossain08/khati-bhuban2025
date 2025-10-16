"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Search,
  Filter,
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
import Link from "next/link";

export default function SearchPage() {
  const { language } = useLanguage();
  const {
    searchQuery,
    setSearchQuery,
    searchResults,
    isSearching,
    performSearch,
  } = useSearch();
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [localQuery, setLocalQuery] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get initial query from URL params
  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      setLocalQuery(query);
      setSearchQuery(query);
    }
  }, [searchParams, setSearchQuery]);

  // Update URL when search query changes
  const handleSearch = (query: string) => {
    setLocalQuery(query);
    setSearchQuery(query);

    // Update URL
    const params = new URLSearchParams();
    if (query) {
      params.set("q", query);
    }
    const newUrl = `/search${params.toString() ? `?${params.toString()}` : ""}`;
    router.push(newUrl, { scroll: false });
  };

  const filters = [
    { key: "all", en: "All Results", bn: "সব ফলাফল" },
    { key: "product", en: "Products", bn: "পণ্য" },
    { key: "category", en: "Categories", bn: "বিভাগ" },
    { key: "page", en: "Pages", bn: "পৃষ্ঠা" },
    { key: "blog", en: "Blog", bn: "ব্লগ" },
  ];

  const filteredResults =
    selectedFilter === "all"
      ? searchResults
      : searchResults.filter((result) => result.type === selectedFilter);

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

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-slate-900 mb-6">
              {language === "en" ? "Search" : "অনুসন্ধান"}
            </h1>

            {/* Search Input */}
            <div className="relative mb-6">
              <input
                type="text"
                value={localQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder={
                  language === "en"
                    ? "Search for products, categories, pages..."
                    : "পণ্য, বিভাগ, পৃষ্ঠা খুঁজুন..."
                }
                className="w-full px-4 py-4 pr-12 text-lg border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <Search className="absolute right-4 top-4 h-6 w-6 text-slate-400" />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter.key}
                  variant={
                    selectedFilter === filter.key ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedFilter(filter.key)}
                  className="text-sm"
                >
                  <Filter className="h-3 w-3 mr-1" />
                  {language === "en" ? filter.en : filter.bn}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {isSearching && (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-amber-500 border-t-transparent"></div>
              <span className="ml-3 text-slate-600">
                {language === "en" ? "Searching..." : "খোঁজা হচ্ছে..."}
              </span>
            </div>
          )}

          {!isSearching && localQuery && (
            <div className="mb-6">
              <p className="text-slate-600">
                {language === "en"
                  ? `${filteredResults.length} results found for "${localQuery}"`
                  : `"${localQuery}" এর জন্য ${filteredResults.length}টি ফলাফল পাওয়া গেছে`}
              </p>
            </div>
          )}

          {!isSearching && filteredResults.length > 0 && (
            <div className="space-y-4">
              {filteredResults.map((result) => (
                <Link
                  key={result.id}
                  href={result.url}
                  className="block bg-white rounded-lg border border-slate-200 p-6 hover:border-amber-300 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1 text-slate-400">
                      {getTypeIcon(result.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">
                          {language === "en" ? result.title : result.titleBn}
                        </h3>
                        <Badge variant="secondary">
                          {getTypeBadge(result.type)}
                        </Badge>
                      </div>
                      {(result.description || result.descriptionBn) && (
                        <p className="text-slate-600 mb-3 leading-relaxed">
                          {language === "en"
                            ? result.description
                            : result.descriptionBn}
                        </p>
                      )}
                      {result.price && (
                        <p className="text-lg font-semibold text-amber-600 mb-2">
                          ৳{result.price}
                        </p>
                      )}
                      <div className="flex items-center text-sm text-slate-500">
                        <span className="truncate">{result.url}</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0 text-slate-400 group-hover:text-amber-600 transition-colors">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {!isSearching && filteredResults.length === 0 && localQuery && (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-600 mb-2">
                {language === "en"
                  ? "No results found"
                  : "কোনো ফলাফল পাওয়া যায়নি"}
              </h3>
              <p className="text-slate-500 mb-6">
                {language === "en"
                  ? `We couldn't find anything matching "${localQuery}". Try different keywords or check spelling.`
                  : `"${localQuery}" এর সাথে মিল রেখে কিছু পাওয়া যায়নি। বিভিন্ন কীওয়ার্ড চেষ্টা করুন বা বানান পরীক্ষা করুন।`}
              </p>
              <div className="space-y-2 text-sm text-slate-600">
                <p className="font-medium">
                  {language === "en"
                    ? "Search suggestions:"
                    : "অনুসন্ধানের পরামর্শ:"}
                </p>
                <ul className="space-y-1">
                  <li>
                    {language === "en"
                      ? "• Try more general keywords"
                      : "• আরও সাধারণ কীওয়ার্ড চেষ্টা করুন"}
                  </li>
                  <li>
                    {language === "en"
                      ? "• Check your spelling"
                      : "• আপনার বানান পরীক্ষা করুন"}
                  </li>
                  <li>
                    {language === "en"
                      ? "• Try searching in Bengali or English"
                      : "• বাংলা বা ইংরেজিতে খোঁজার চেষ্টা করুন"}
                  </li>
                </ul>
              </div>
            </div>
          )}

          {!localQuery && (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-600 mb-2">
                {language === "en"
                  ? "Start your search"
                  : "আপনার অনুসন্ধান শুরু করুন"}
              </h3>
              <p className="text-slate-500">
                {language === "en"
                  ? "Enter keywords to find products, categories, pages, and blog posts."
                  : "পণ্য, বিভাগ, পৃষ্ঠা এবং ব্লগ পোস্ট খুঁজতে কীওয়ার্ড লিখুন।"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
