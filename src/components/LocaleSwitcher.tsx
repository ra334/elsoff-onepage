"use client";

import { LOCALE_STORAGE_KEY } from "@/lib/auto-locale";
import { content, type Locale, locales } from "@/lib/site";

export function LocaleSwitcher({ locale }: { locale: Locale }) {
  // Plain links, so switching works without JS; the handler only records the choice.
  const remember = (l: Locale) => {
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, l);
    } catch {}
  };

  return (
    <nav className="locale-switch" aria-label={content[locale].languageLabel}>
      {locales.map((l) => (
        <a
          key={l}
          href={content[l].path}
          lang={l}
          hrefLang={l}
          title={content[l].nativeName}
          aria-current={l === locale ? "page" : undefined}
          onClick={() => remember(l)}
        >
          {content[l].shortLabel}
        </a>
      ))}
    </nav>
  );
}
