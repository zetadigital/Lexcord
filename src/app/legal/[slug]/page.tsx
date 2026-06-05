import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalContent } from "./legal-content";

const META: Record<string, { title: string; description: string }> = {
  privacy: {
    title: "Privacy Policy",
    description:
      "How Lexcord collects, uses, stores, and protects your personal information under the Privacy Act 1988 (Cth).",
  },
  terms: {
    title: "Terms of Use",
    description: "The terms governing your use of the Lexcord website.",
  },
  disclaimer: {
    title: "Disclaimer",
    description:
      "Important information about the general nature of the content on this website and the absence of a lawyer–client relationship.",
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
