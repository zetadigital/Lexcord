import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { team, getMember } from "@/data/people";
import { PersonDetail } from "./person-detail";

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const member = getMember(params.slug);
  if (!member || member.placeholder) return { title: "Our People" };
  const title = `${member.name} — ${member.role}`;
  const description = member.bio[0];
  const url = `https://lexcord.com.au/people/${params.slug}`;
  const image = member.photo
    ? `https://lexcord.com.au${member.photo}`
    : "https://lexcord.com.au/images/office/office-1.jpg";
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "profile",
      locale: "en_AU",
      url,
      title: `${title} — Lexcord Lawyers`,
      description,
      siteName: "Lexcord Lawyers",
      images: [{ url: image, width: 800, height: 800, alt: member.name }],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function PersonPage({ params }: { params: { slug: string } }) {
  if (!getMember(params.slug)) notFound();
  return <PersonDetail slug={params.slug} />;
}
