import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About Lexcord | Melbourne Law Firm",
  description:
    "Lexcord is a Melbourne-based law firm advising individuals, families and businesses across property, commercial, migration, family law, disputes and personal legal matters.",
};

export default function AboutPage() {
  return <AboutContent />;
}
