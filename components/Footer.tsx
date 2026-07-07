"use client";

export default function Footer() {
  function scrollToTop() {
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
    <footer className="bg-green-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-3 text-left"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg font-bold text-green-900">
                BW
              </div>

              <div>
                <div className="text-2xl font-bold">Bobai Wicker</div>

                <div className="text-xs uppercase tracking-[0.25em] text-green-100">
                  Handmade Natural Living
                </div>
              </div>
            </button>

            <p className="mt-6 leading-relaxed text-green-100">
              Handmade wicker baskets, rattan furniture and natural home decor
              manufacturer from Bobai, Guangxi, China.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Product Categories</h3>

            <ul className="mt-5 space-y-3 text-green-100">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("products")}
                  className="hover:text-white"
                >
                  Wicker Baskets
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("products")}
                  className="hover:text-white"
                >
                  Rattan Furniture
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("products")}
                  className="hover:text-white"
                >
                  Storage Baskets
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("products")}
                  className="hover:text-white"
                >
                  Pet Baskets
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("products")}
                  className="hover:text-white"
                >
                  Home Decoration
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("oem")}
                  className="hover:text-white"
                >
                  Custom OEM Products
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>

            <ul className="mt-5 space-y-3 text-green-100">
              <li>
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="hover:text-white"
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("products")}
                  className="hover:text-white"
                >
                  Products
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("about")}
                  className="hover:text-white"
                >
                  About Us
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("oem")}
                  className="hover:text-white"
                >
                  OEM & ODM
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("blog")}
                  className="hover:text-white"
                >
                  Blog
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("inquiry")}
                  className="hover:text-white"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>

            <ul className="mt-5 space-y-3 text-green-100">
              <li>Contact: Shanyan Gao</li>

              <li>
                Email:{" "}
                <a
                  href="mailto:gaoshanyan1@gmail.com"
                  className="underline hover:text-white"
                >
                  gaoshanyan1@gmail.com
                </a>
              </li>

              <li>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/8619813871687"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white"
                >
                  +86 198 1387 1687
                </a>
              </li>

              <li>WeChat: +86 198 1387 1687</li>

              <li>
                Location: No. 124 Xinxing Street, Bobai County, Yulin, Guangxi
                Zhuang Autonomous Region, China
              </li>

              <li>OEM / ODM Available</li>
            </ul>

            <button
              type="button"
              onClick={() => scrollToSection("inquiry")}
              className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-green-900 transition hover:bg-green-100"
            >
              Send Inquiry
            </button>
          </div>
        </div>

        <div className="mt-14 border-t border-white/20 pt-6 text-center text-sm text-green-100">
          © 2026 Bobai Wicker. All rights reserved.
        </div>
      </div>
    </footer>
  );
}