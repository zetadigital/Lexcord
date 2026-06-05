import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About Lexcord",
  description:
    "Lexcord is an Australian law firm offering clear, considered counsel across property, commercial, estates, intellectual property, criminal, notarial, and migration law.",
};

export default function AboutPage() {
  return <AboutContent />;
}
