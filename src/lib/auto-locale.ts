import { content, type Locale } from "./site";

export const LOCALE_STORAGE_KEY = "elsoff-lang";

// Inline <head> script: there is no server on a static export, so the browser
// picks the language before first paint. A choice made in the switcher wins;
// otherwise uk/ru browsers stay on the Ukrainian page and everyone else goes to /en/.
// Crawlers are skipped so Google indexes "/" as the Ukrainian page it links to in hreflang.
export function autoLocaleScript(locale: Locale) {
  const other: Locale = locale === "uk" ? "en" : "uk";
  const otherPath = content[other].path;
  const detect =
    locale === "uk"
      ? `if(!/bot|crawl|spider|slurp|facebookexternalhit|preview/i.test(navigator.userAgent)){var l=navigator.languages||[navigator.language||""];if(!l.some(function(x){return /^(uk|ru)\\b/i.test(x)}))location.replace(${JSON.stringify(otherPath)})}`
      : "";
  return `try{var s=localStorage.getItem(${JSON.stringify(LOCALE_STORAGE_KEY)});if(s===${JSON.stringify(other)})location.replace(${JSON.stringify(otherPath)});else if(!s){${detect}}}catch(e){}`;
}
