import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalContent } from "./legal-content";

const META: Record<string, { title: string; description: string }> = {
  privacy: {
    title: "Privacy Policy | Lexcord Lawyers",
    description:
      "Read how Lexcord Lawyers collects, uses, stores, discloses and protects personal information.",
  },
  terms: {
    title: "Terms of Use | Lexcord Lawyers",
    description: "The terms governing your use of the Lexcord website.",
  },
  disclaimer: {
    title: "Website Disclaimer | Lexcord Lawyers",
    description:
      "Important information about the general nature and limitations of content published on the Lexcord Lawyers website.",
  },
  copyright: {
    title: "Copyright | Lexcord Lawyers",
    description:
      "Copyright, permitted-use and website-content information for the Lexcord Lawyers website.",
  },
};

export function generateStaticParams() {
  return Object.keys(META).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const meta = META[params.slug];
  if (!meta) return {};
  return { title: meta.title, description: meta.description };
}

export default function LegalPage({ params }: { params: { slug: string } }) {
  if (!META[params.slug]) notFound();
  return <LegalContent slug={params.slug} />;
}
