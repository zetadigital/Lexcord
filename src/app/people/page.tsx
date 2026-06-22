import type { Metadata } from "next";
import { PeopleContent } from "./people-content";

export const metadata: Metadata = {
  title: "Our People",
  description:
    "Meet the Lexcord team — admitted solicitors advising on migration, property, commercial, estates, intellectual property, criminal, and notarial matters.",
  alternates: { canonical: "https://lexcord.com.au/people" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://lexcord.com.au/people",
    title: "Our People — Lexcord Lawyers",
    description: "Meet the Lexcord team — admitted solicitors advising on migration, property, commercial, estates, intellectual property, criminal, and notarial matters.",
    siteName: "Lexcord Lawyers",
    images: [{ url: "https://lexcord.com.au/images/office/office-1.jpg", width: 1200, height: 800, alt: "Lexcord Lawyers team" }],
  },
  twitter: { card: "summary_large_image", title: "Our People — Lexcord Lawyers" },
};

export default function PeoplePage() {
  return <PeopleContent />;
}
