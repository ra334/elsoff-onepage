import Image from "next/image";

export default function Home() {
  return (
    <main className="page">
      <Image className="scene" src="/images/hero.webp" alt="" fill priority sizes="100vw" />
      <Image className="scene-mobile" src="/images/hero-mobile.webp" alt="" fill priority sizes="(max-width: 760px) 100vw, 1px" />
      <div className="wash" aria-hidden />

      <header className="shell site-header">
        <Image src="/brand/elsoff-wordmark.svg" alt="elsoff" width={1203} height={324} priority className="brand-logo" />
      </header>

      <section className="shell hero">
        <h1>
          Більше простору
          <br />
          для важливого.
        </h1>
        <p>Фізичний таймер для зосередженої роботи. Готуємо до запуску.</p>
      </section>

      <footer className="shell site-footer">© {new Date().getFullYear()} elsoff</footer>
    </main>
  );
}
