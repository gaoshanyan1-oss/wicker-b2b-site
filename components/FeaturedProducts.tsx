"use client";

export default function FeaturedProducts() {
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

  const products = [
    {
      name: "Wicker Chair",
      category: "Rattan Furniture",
      description:
        "Handmade rattan chair for living rooms, hotels and lifestyle brands.",
      image: "images/products/chair.png",
    },
    {
      name: "Rattan Coffee Table",
      category: "Rattan Furniture",
      description:
        "Natural woven coffee table for modern home and resort interiors.",
      image: "images/products/table.png",
    },
    {
      name: "Wicker Stool",
      category: "Home Furniture",
      description:
        "Compact handmade wicker stool for home decoration and retail stores.",
      image: "images/products/stool.png",
    },
    {
      name: "Storage Basket",
      category: "Storage Baskets",
      description:
        "Functional woven basket for home organization, shelves and laundry.",
      image: "images/products/storage-basket.png",
    },
    {
      name: "Pet Bed",
      category: "Pet Baskets",
      description:
        "Comfortable handmade pet bed for cats, dogs and pet lifestyle brands.",
      image: "images/products/pet-bed.png",
    },
    {
      name: "Wicker Lamp Shade",
      category: "Home Decoration",
      description:
        "Natural rattan lamp shade for warm home, hotel and restaurant lighting.",
      image: "images/products/lamp.png",
    },
    {
      name: "Laundry Basket",
      category: "Storage Baskets",
      description:
        "Durable woven laundry basket with natural handmade texture.",
      image: "images/products/laundry-basket.png",
    },
    {
      name: "Flower Basket",
      category: "Home Decoration",
      description:
        "Decorative flower basket for home decor, gifts and retail display.",
      image: "images/products/flower-basket.png",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">
            Featured Products
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Popular Handmade Wicker Products
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Explore our popular handmade wicker and rattan products for
            wholesalers, retailers, importers and home decor brands.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
                  {product.category}
                </p>

                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  {product.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {product.description}
                </p>

                <button
                  type="button"
                  onClick={() => scrollToSection("inquiry")}
                  className="mt-5 text-sm font-semibold text-green-800 transition hover:text-green-600"
                >
                  Request Quote →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
