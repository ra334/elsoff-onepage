import type { MetadataRoute } from "next";
import { content, defaultLocale, languageAlternates, locales, siteUrl } from "@/lib/site";

export const dynamic = "force-static";

const languages = Object.fromEntries(Object.entries(languageAlternates).map(([l, path]) => [l, `${siteUrl}${path}`]));

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${siteUrl}${content[locale].path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === defaultLocale ? 1 : 0.9,
    alternates: { languages },
  }));
}
