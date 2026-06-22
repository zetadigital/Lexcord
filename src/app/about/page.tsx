import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About Lexcord | Melbourne Law Firm",
  description:
    "Lexcord is a Melbourne-based law firm advising individuals, families and businesses across property, commercial, migration, family law, disputes and personal legal matters.",
  alternates: { canonical: "https://lexcord.com.au/about" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://lexcord.com.au/about",
    title: "About Lexcord | Melbourne Law Firm",
    description: "Lexcord is a Melbourne-based law firm advising individuals, families and businesses across property, commercial, migration, family law, disputes and personal legal matters.",
    siteName: "Lexcord Lawyers",
    images: [{ url: "https://lexcord.com.au/images/office/office-1.jpg", width: 1200, height: 800, alt: "Lexcord Lawyers Melbourne office" }],
  },
  twitter: { card: "summary_large_image", title: "About Lexcord | Melbourne Law Firm" },
};

export default function AboutPage() {
  return <AboutContent />;
}
