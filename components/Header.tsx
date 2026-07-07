"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function scrollToTop() {
    setMenuOpen(false);

    const startPosition = window.scrollY;
    const duration = 800;
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

      window.scrollTo(0, startPosition * (1 - ease));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }

  function scrollToSection(id: string) {
    setMenuOpen(false);

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
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-3 text-left"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-800 text-lg font-bold text-white">
            BW
          </div>

          <div>
            <div className="text-xl font-bold tracking-wide text-green-800 md:text-2xl">
              Bobai Wicker
            </div>

            <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 md:text-xs md:tracking-[0.25em]">
              Handmade Natural Living
            </div>
          </div>
        </button>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-gray-700">
            <li>
              <button
                type="button"
                onClick={scrollToTop}
                className="hover:text-green-800"
              >
                Home
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => scrollToSection("products")}
                className="hover:text-green-800"
              >
                Products
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => scrollToSection("about")}
                className="hover:text-green-800"
              >
                About
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => scrollToSection("oem")}
                className="hover:text-green-800"
              >
                OEM
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => scrollToSection("blog")}
                className="hover:text-green-800"
              >
                Blog
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => scrollToSection("inquiry")}
                className="hover:text-green-800"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        <div className="hidden md:block">
          <button
            type="button"
            onClick={() => scrollToSection("inquiry")}
            className="rounded-full bg-green-700 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            Get Quote
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 md:hidden"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium text-gray-700">
            <button type="button" onClick={scrollToTop} className="text-left">
              Home
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("products")}
              className="text-left"
            >
              Products
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className="text-left"
            >
              About
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("oem")}
              className="text-left"
            >
              OEM
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("blog")}
              className="text-left"
            >
              Blog
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("inquiry")}
              className="text-left"
            >
              Contact
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("inquiry")}
              className="mt-2 rounded-full bg-green-700 px-6 py-3 text-white"
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}