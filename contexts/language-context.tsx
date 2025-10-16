"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState("en"); // 'en' for English, 'bn' for Bangla
  const [isInitialized, setIsInitialized] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("khati-bhuban-language");
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "bn")) {
      setLanguage(savedLanguage);
    }
    setIsInitialized(true);
  }, []);

  // Save language to localStorage whenever it changes
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("khati-bhuban-language", language);
      // Update document lang attribute for accessibility
      document.documentElement.lang = language === "bn" ? "bn" : "en";
    }
  }, [language, isInitialized]);

  const handleSetLanguage = (lang: string) => {
    if (lang === "en" || lang === "bn") {
      setLanguage(lang);
    }
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "bn" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
