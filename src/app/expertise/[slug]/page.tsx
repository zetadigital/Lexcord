import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { practiceAreas, getPractice, practiceSummaries } from "@/data/practices";
import { getPracticeZh } from "@/data/practices/zh";
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
  return {
    title: area.navLabel,
    description: practiceSummaries[area.slug],
  };
}

export default function ExpertisePage({ params }: PageProps) {
  const area = getPractice(params.slug);
  const areaZh = getPracticeZh(params.slug);
  if (!area || !areaZh) notFound();
  return <PracticeSections area={area} areaZh={areaZh} />;
}
