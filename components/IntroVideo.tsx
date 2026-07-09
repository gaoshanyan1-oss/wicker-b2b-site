"use client";

export default function IntroVideo() {
  function enterWebsite() {
    const element = document.getElementById("site-home");

    if (!element) {
      return;
    }

    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-stone-950 text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/bobai-hero.mp4.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

      <div className="relative z-10 flex min-h-screen items-center px-6 py-12 sm:px-10 lg:px-20">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-amber-100 sm:text-sm">
            Bobai Wicker
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Handmade Wicker Crafts from Bobai, Guangxi
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-100 sm:text-xl">
            Natural woven baskets, rattan home décor, lighting, storage and
            custom wicker products crafted by skilled artisans in China.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={enterWebsite}
              className="rounded-full bg-amber-200 px-8 py-4 text-base font-bold text-stone-950 shadow-lg shadow-black/20 transition hover:bg-white"
            >
              Enter Website
            </button>

            <button
              type="button"
              onClick={enterWebsite}
              className="rounded-full border border-white/70 px-8 py-4 text-base font-bold text-white transition hover:bg-white hover:text-stone-950"
            >
              Scroll to Discover
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={enterWebsite}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 transition hover:text-white"
      >
        Scroll Down
      </button>
    </section>
  );
}
