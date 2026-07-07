"use client";

export default function CTA() {
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
    <section className="bg-green-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-100">
          Start Your Project
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
          Looking for a Reliable Handmade Wicker Manufacturer?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-green-100">
          Tell us your product ideas, target market and order requirements.
          We can support custom designs, OEM production, packaging and export
          supply for your business.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() => scrollToSection("inquiry")}
            className="rounded-full bg-white px-8 py-4 font-semibold text-green-900 transition hover:bg-green-100"
          >
            Request a Quote
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("products")}
            className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-green-900"
          >
            View Product Categories
          </button>
        </div>
      </div>
    </section>
  );
}