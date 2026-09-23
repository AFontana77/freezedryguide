import type { MetadataRoute } from "next";

// Host lowercased 2026-09-23: the sitemap emitted a mixed-case host while every
// page canonical is lowercase, so each sitemap URL disagreed with the canonical
// it pointed at. Hosts are case-insensitive, so nothing 404d and nothing looked
// broken; it just gave crawlers two spellings of every URL.
const BASE_URL = "https://www.freezedryguide.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split("T")[0];

  const staticPages = [
    { url: BASE_URL, priority: 1.0 },
    { url: `${BASE_URL}/best-home-freeze-dryer`, priority: 0.9 },
    { url: `${BASE_URL}/freeze-dryer-accessories`, priority: 0.9 },
    { url: `${BASE_URL}/freeze-dryer-vs-dehydrator`, priority: 0.9 },
    { url: `${BASE_URL}/harvest-right-freeze-dryer-review`, priority: 0.9 },
    { url: `${BASE_URL}/blog`, priority: 0.8 },
    { url: `${BASE_URL}/blog/freeze-dryer-what-i-wish-i-knew`, priority: 0.8 },
    { url: `${BASE_URL}/blog/is-a-freeze-dryer-worth-it`, priority: 0.8 },
    { url: `${BASE_URL}/blog/harvest-right-electricity-cost`, priority: 0.8 },
    { url: `${BASE_URL}/blog/best-foods-to-freeze-dry`, priority: 0.8 },
    { url: `${BASE_URL}/about`, priority: 0.5 },
    { url: `${BASE_URL}/privacy`, priority: 0.3 },
    { url: `${BASE_URL}/terms`, priority: 0.3 },
  ];

  return staticPages.map(({ url, priority }) => ({
    url,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
