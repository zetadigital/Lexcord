import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { practiceAreas, getPractice, practiceSummaries } from "@/data/practices";
import { getPracticeZh, getPracticeZhTw } from "@/data/practices/zh";
import { PracticeSections } from "@/components/practice-sections";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const area = getPractice(params.slug);
  if (!area) return {};
  const title = area.seoTitle ?? area.navLabel;
  const description = area.seoDescription ?? practiceSummaries[area.slug];
  const url = `https://lexcord.com.au/expertise/${params.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_AU",
      url,
      title: `${title} — Lexcord Lawyers`,
      description,
      siteName: "Lexcord Lawyers",
      images: [{ url: "https://lexcord.com.au/images/office/office-1.jpg", width: 1200, height: 800, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function ExpertisePage({ params }: PageProps) {
  const area = getPractice(params.slug);
  const areaZh = getPracticeZh(params.slug);
  const areaZhTw = getPracticeZhTw(params.slug);
  if (!area || !areaZh) notFound();
  return <PracticeSections area={area} areaZh={areaZh} areaZhTw={areaZhTw} />;
}
