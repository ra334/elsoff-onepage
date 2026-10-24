import type { Metadata } from "next";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://elsoff.com").replace(/\/$/, "");

export const locales = ["uk", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "uk";

export const site = {
  name: "elsoff",
  socials: [
    "https://www.instagram.com/elsoff",
    "https://t.me/elsoff",
    "https://www.facebook.com/elsoff",
    "https://www.youtube.com/@elsoff",
  ],
};

export const content: Record<
  Locale,
  {
    path: string;
    ogLocale: string;
    // ISO code "UK" reads as United Kingdom, so the switcher shows the country code instead
    shortLabel: string;
    nativeName: string;
    title: string;
    description: string;
    heading: [string, string];
    subtitle: string;
    imageAlt: string;
    languageLabel: string;
  }
> = {
  uk: {
    path: "/",
    ogLocale: "uk_UA",
    shortLabel: "UA",
    nativeName: "Українська",
    title: "elsoff — більше простору для важливого",
    description:
      "elsoff — фізичний таймер для зосередженої роботи. Один дотик, щоб почати сесію, без зайвих сповіщень. Готуємо до запуску.",
    heading: ["Більше простору", "для важливого."],
    subtitle: "Фізичний таймер для зосередженої роботи. Готуємо до запуску.",
    imageAlt: "Таймер elsoff на світлій кам’яній поверхні",
    languageLabel: "Мова сайту",
  },
  en: {
    path: "/en/",
    ogLocale: "en_US",
    shortLabel: "EN",
    nativeName: "English",
    title: "elsoff — more room for what matters",
    description:
      "elsoff is a physical timer for focused work. One tap to start a session, no needless notifications. Launching soon.",
    heading: ["More room", "for what matters."],
    subtitle: "A physical timer for focused work. Launching soon.",
    imageAlt: "The elsoff timer on a light stone surface",
    languageLabel: "Site language",
  },
};

export const languageAlternates = {
  ...Object.fromEntries(locales.map((l) => [l, content[l].path])),
  "x-default": content[defaultLocale].path,
};

export function buildMetadata(locale: Locale): Metadata {
  const t = content[locale];
  return {
    metadataBase: new URL(siteUrl),
    title: t.title,
    description: t.description,
    applicationName: site.name,
    alternates: { canonical: t.path, languages: languageAlternates },
    openGraph: {
      type: "website",
      url: t.path,
      siteName: site.name,
      title: t.title,
      description: t.description,
      locale: t.ogLocale,
      alternateLocale: locales.filter((l) => l !== locale).map((l) => content[l].ogLocale),
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: t.imageAlt }],
    },
    twitter: { card: "summary_large_image", title: t.title, description: t.description, images: ["/og.jpg"] },
    robots: { index: true, follow: true },
  };
}
