"use client";

export default function Hero() {
  function scrollToSection(id: string) {
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    const targetPosition =
      element.getBoundingClientRect().top + window.scrollY - 100;

    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000;

    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (startTime === null) {
        startTime = currentTime;
      }

      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }

  return (
    <section className="relative min-h-[760px] overflow-hidden">
      <div
        className="hero-bg absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero/hero.png')" }}
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-6">
        <div className="max-w-3xl text-white">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-green-100">
            Bobai, Guangxi · Handmade Wicker Manufacturer
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Handcrafted Wicker & Rattan Products
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-gray-100">
            We manufacture handmade wicker baskets, rattan furniture and
            natural home decor for wholesalers, retailers and lifestyle brands
            worldwide.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("inquiry")}
              className="rounded-lg bg-green-700 px-8 py-4 text-white transition hover:bg-green-800"
            >
              Get a Free Quote
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("products")}
              className="rounded-lg border border-white px-8 py-4 text-white transition hover:bg-white hover:text-gray-900"
            >
              Explore Products
            </button>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/30 pt-6 text-sm text-gray-100">
            <div>
              <p className="text-2xl font-bold">20+</p>
              <p className="mt-1">Years Experience</p>
            </div>

            <div>
              <p className="text-2xl font-bold">OEM</p>
              <p className="mt-1">Custom Service</p>
            </div>

            <div>
              <p className="text-2xl font-bold">Global</p>
              <p className="mt-1">Export Supply</p>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .hero-bg {
            animation: heroZoom 18s ease-in-out infinite alternate;
          }

          @keyframes heroZoom {
            from {
              transform: scale(1) translateX(0);
            }

            to {
              transform: scale(1.12) translateX(-30px);
            }
          }
        `}
      </style>
    </section>
  );
}