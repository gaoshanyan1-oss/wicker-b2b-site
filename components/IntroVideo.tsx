"use client";

import { useEffect, useRef } from "react";

export default function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    video.play().catch(() => {});
  }, []);

  function enterWebsite() {
    const element = document.getElementById("site-home");

    if (!element) {
      return;
    }

    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-stone-950 text-white">
      {/* 电脑端：播放 MP4 视频 */}
      <video
        ref={videoRef}
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
        src="/bobai-wicker-intro.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* 手机端：播放 GIF 动图，保证手机打开也会动 */}
      <img
        src="/bobai-wicker-mobile-animated.gif"
        alt=""
        className="absolute inset-0 block h-full w-full object-cover md:hidden"
      />

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />

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
