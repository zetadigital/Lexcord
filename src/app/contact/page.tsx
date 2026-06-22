import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact & Book a Consultation",
  description:
    "Book a confidential consultation with Lexcord Lawyers. We will assess your matter honestly and explain your options with no obligation to proceed.",
  alternates: { canonical: "https://lexcord.com.au/contact" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://lexcord.com.au/contact",
    title: "Contact & Book a Consultation — Lexcord Lawyers",
    description: "Book a confidential consultation with Lexcord Lawyers. We will assess your matter honestly and explain your options with no obligation to proceed.",
    siteName: "Lexcord Lawyers",
    images: [{ url: "https://lexcord.com.au/images/office/office-1.jpg", width: 1200, height: 800, alt: "Lexcord Lawyers Melbourne" }],
  },
  twitter: { card: "summary_large_image", title: "Contact & Book a Consultation — Lexcord Lawyers" },
};

export default function ContactPage() {
  return <ContactContent />;
}
