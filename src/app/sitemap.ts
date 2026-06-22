import type { MetadataRoute } from "next";
import { practiceAreas } from "@/data/practices";
import { team } from "@/data/people";

const base = "https://lexcord.com.au";
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base,                          lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/about`,               lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/expertise`,           lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/people`,              lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`,             lastModified: now, changeFrequency: "yearly",  priority: 0.8 },
    { url: `${base}/resources`,           lastModified: now, changeFrequency: "weekly",  priority: 0.5 },
    { url: `${base}/legal/privacy`,       lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/legal/disclaimer`,    lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/legal/copyright`,     lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];

  const practiceRoutes: MetadataRoute.Sitemap = practiceAreas.map((area) => ({
    url: `${base}/expertise/${area.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const peopleRoutes: MetadataRoute.Sitemap = team
    .filter((m) => !m.placeholder)
    .map((m) => ({
      url: `${base}/people/${m.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...staticRoutes, ...practiceRoutes, ...peopleRoutes];
}
