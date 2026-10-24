import type { ReactNode } from "react";
import { Onest } from "next/font/google";
import { content, type Locale, site, siteUrl } from "@/lib/site";
import "@/app/globals.css";

// Onest covers both Latin and Cyrillic, same as the main landing.
const sans = Onest({ subsets: ["latin", "cyrillic"], variable: "--font-sans", display: "swap" });

function jsonLd(locale: Locale) {
  const t = content[locale];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: site.name,
        url: siteUrl,
        logo: `${siteUrl}/brand/elsoff-wordmark.svg`,
        sameAs: site.socials,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: site.name,
        description: t.description,
        inLanguage: locale,
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };
}

// One root layout per locale so <html lang> matches the page.
export function Document({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={locale} className={sans.variable}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(locale)) }} />
      </body>
    </html>
  );
}
