import Image from "next/image";
import { content, type Locale, locales } from "@/lib/site";

export function Page({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <main className="page">
      <Image className="scene" src="/images/hero.webp" alt="" fill priority sizes="100vw" />
      <Image className="scene-mobile" src="/images/hero-mobile.webp" alt="" fill priority sizes="(max-width: 760px) 100vw, 1px" />
      <div className="wash" aria-hidden />

      <header className="shell site-header">
        <Image src="/brand/elsoff-wordmark.svg" alt="elsoff" width={1203} height={324} priority className="brand-logo" />
        <nav className="locale-switch" aria-label={t.languageLabel}>
          {locales.map((l) => (
            <a
              key={l}
              href={content[l].path}
              lang={l}
              hrefLang={l}
              title={content[l].nativeName}
              aria-current={l === locale ? "page" : undefined}
            >
              {content[l].shortLabel}
            </a>
          ))}
        </nav>
      </header>

      <section className="shell hero">
        <h1>
          {t.heading[0]}
          <br />
          {t.heading[1]}
        </h1>
        <p>{t.subtitle}</p>
      </section>

      <footer className="shell site-footer">© {new Date().getFullYear()} elsoff</footer>
    </main>
  );
}
