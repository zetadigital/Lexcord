import type { MetadataRoute } from "next";

const base = "https://lexcord.com.au";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // All bots — full access
      { userAgent: "*", allow: "/" },
      // Explicitly allow major AI bots (important for GEO/AI search citations)
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
