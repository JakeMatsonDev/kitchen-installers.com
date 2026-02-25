// Item #19: Fix sitemap lastModified timestamps (no more new Date())
import type { MetadataRoute } from "next";
import { newYorkCities } from "@/lib/cities/new-york";
import { newJerseyCities } from "@/lib/cities/new-jersey";
import { servicesData } from "@/lib/services-data";
import { blogPosts } from "@/lib/blog-data";

const BASE_URL = "https://www.kitchen-installers.com";

// Use a fixed build date instead of new Date() for stable timestamps
const SITE_LAUNCH = "2026-01-15T00:00:00.000Z";
const CONTENT_UPDATE = "2026-02-20T00:00:00.000Z";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(CONTENT_UPDATE),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(SITE_LAUNCH),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/areas`,
      lastModified: new Date(SITE_LAUNCH),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/areas/new-york`,
      lastModified: new Date(SITE_LAUNCH),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/areas/new-jersey`,
      lastModified: new Date(SITE_LAUNCH),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(SITE_LAUNCH),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(SITE_LAUNCH),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(CONTENT_UPDATE),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // New pages
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date(CONTENT_UPDATE),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/cost-calculator`,
      lastModified: new Date(CONTENT_UPDATE),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: new Date(CONTENT_UPDATE),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(SITE_LAUNCH),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(SITE_LAUNCH),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = servicesData.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: new Date(SITE_LAUNCH),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const nyCityPages: MetadataRoute.Sitemap = newYorkCities.map((c) => ({
    url: `${BASE_URL}/areas/new-york/${c.slug}`,
    lastModified: new Date(SITE_LAUNCH),
    changeFrequency: "monthly" as const,
    priority: c.tier === "major" ? 0.8 : 0.7,
  }));

  const njCityPages: MetadataRoute.Sitemap = newJerseyCities.map((c) => ({
    url: `${BASE_URL}/areas/new-jersey/${c.slug}`,
    lastModified: new Date(SITE_LAUNCH),
    changeFrequency: "monthly" as const,
    priority: c.tier === "major" ? 0.8 : 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...nyCityPages,
    ...njCityPages,
    ...blogPages,
  ];
}
