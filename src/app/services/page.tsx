import type { Metadata } from "next";
import { ServicesContent } from "./services-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "An overview of Lexcord's seven practice areas — property, commercial, wills and estates, intellectual property, criminal, notarial, and migration law.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
