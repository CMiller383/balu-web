import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["500", "600", "700"],
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Balu — Your daily video check-in",
    template: "%s | Balu",
  },
  description:
    "Balu helps you reflect, reset, and stay intentional with a short private daily video check-in. Build a private timeline of your growth.",
  keywords: [
    "daily check-in",
    "video journal",
    "self reflection app",
    "mental wellness",
    "daily journaling",
    "personal growth",
    "mindfulness app",
    "private journal",
    "habit tracker",
  ],
  authors: [{ name: "Balu" }],
  creator: "Balu",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Balu",
    title: "Balu — Your daily video check-in",
    description:
      "Build a private timeline of your thoughts, growth, and life with one short daily check-in. No audience. No pressure. Just you.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Balu — Your daily video check-in",
    description:
      "Build a private timeline of your thoughts, growth, and life with one short daily check-in.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
