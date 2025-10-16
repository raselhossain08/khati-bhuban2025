"use client";

import { useLanguage } from "@/contexts/language-context";
import { useCallback } from "react";

/**
 * Enhanced language hook with additional utilities for better language management
 */
export function useLanguageUtils() {
  const { language, setLanguage, toggleLanguage } = useLanguage();

  const isEnglish = language === "en";
  const isBangla = language === "bn";

  const switchToEnglish = useCallback(() => {
    setLanguage("en");
  }, [setLanguage]);

  const switchToBangla = useCallback(() => {
    setLanguage("bn");
  }, [setLanguage]);

  /**
   * Get text based on current language
   */
  const getText = useCallback((englishText: string, banglaText: string) => {
    return language === "en" ? englishText : banglaText;
  }, [language]);

  /**
   * Get CSS class for Bengali font when needed
   */
  const getBanglaFontClass = useCallback(() => {
    return language === "bn" ? "font-bengali" : "";
  }, [language]);

  return {
    language,
    isEnglish,
    isBangla,
    setLanguage,
    toggleLanguage,
    switchToEnglish,
    switchToBangla,
    getText,
    getBanglaFontClass
  };
}