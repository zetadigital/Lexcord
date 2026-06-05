import type { Metadata } from "next";
import { ResourcesContent } from "./resources-content";

export const metadata: Metadata = {
  title: "Resources & Insights",
  description:
    "Plain-language guides and commentary on Australian property, commercial, estates, IP, criminal, notarial, and migration law from Lexcord Lawyers.",
};

export default function ResourcesPage() {
  return <ResourcesContent />;
}
