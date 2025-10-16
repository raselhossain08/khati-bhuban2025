import type { Metadata } from "next";
import { Inter, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/auth-context";
import { LanguageProvider } from "@/contexts/language-context";
import { SearchProvider } from "@/contexts/search-context";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartProvider } from "@/contexts/cart-context";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  variable: "--font-bengali",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Khati Bhuban - খাঁটি ভুবন | Pure Natural Honey & Foods",
    template: "%s | Khati Bhuban",
  },
  description:
    "Experience the pure taste of nature. 100% raw, unadulterated honey straight from the heart of Bhuban's forests. প্রকৃতির খাঁটি স্বাদের অভিজ্ঞতা নিন।",
  keywords:
    "pure honey, natural food, Bangladesh honey, খাঁটি মধু, ভুবনের মধু, mustard oil, সরিষার তেল, natural foods",
  authors: [{ name: "Khati Bhuban" }],
  creator: "Khati Bhuban",
  publisher: "Khati Bhuban",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://khatibhuban.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "bn-BD": "/bn-BD",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_BD",
    url: "https://khatibhuban.com",
    title: "Khati Bhuban - খাঁটি ভুবন | Pure Natural Honey & Foods",
    description:
      "Experience the pure taste of nature. 100% raw, unadulterated honey from Bhuban's forests.",
    siteName: "Khati Bhuban",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Khati Bhuban - Pure Natural Honey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khati Bhuban - খাঁটি ভুবन",
    description: "Pure natural honey and foods from Bangladesh",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansBengali.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <SearchProvider>
            <AuthProvider>
              <CartProvider>
                <div className="min-h-screen bg-white flex flex-col">
                  <Header />
                  <main className="flex-1">{children}</main>
                  <Footer />
                </div>
              </CartProvider>
            </AuthProvider>
          </SearchProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
