export default function ProductCategories() {
  const categories = [
    {
      title: "Wicker Baskets",
      description:
        "Handwoven baskets for storage, gift packaging, home decoration and retail display.",
      products: "Storage baskets · Gift baskets · Market baskets",
      image: "/images/categories/basket.png",
    },
    {
      title: "Rattan Furniture",
      description:
        "Natural rattan chairs, tables, stools and living room furniture for lifestyle brands.",
      products: "Chairs · Tables · Stools · Lounge furniture",
      image: "/images/categories/furniture.png",
    },
    {
      title: "Storage Baskets",
      description:
        "Functional woven storage solutions for home organization, laundry and shelves.",
      products: "Laundry baskets · Shelf baskets · Organizer baskets",
      image: "/images/categories/storage.png",
    },
    {
      title: "Pet Baskets",
      description:
        "Comfortable handmade pet beds and baskets for cats, dogs and pet lifestyle stores.",
      products: "Pet beds · Cat baskets · Dog baskets",
      image: "/images/categories/pet.png",
    },
    {
      title: "Home Decoration",
      description:
        "Natural woven decor products for modern homes, hotels, resorts and interior brands.",
      products: "Wall decor · Flower baskets · Decorative trays",
      image: "/images/categories/decor.png",
    },
    {
      title: "Custom OEM Products",
      description:
        "Custom sizes, shapes, materials, colors and packaging for wholesalers and brands.",
      products: "OEM · ODM · Private label packaging",
      image: "/images/categories/oem.png",
    },
  ];

  return (
    <section id="products" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">
            Product Categories
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Handmade Wicker Product Collections
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Explore our main product categories for wholesalers, retailers,
            importers and lifestyle brands worldwide.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-green-800">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>

                <p className="mt-4 leading-relaxed text-gray-600">
                  {category.description}
                </p>

                <p className="mt-6 border-t border-gray-100 pt-5 text-sm font-medium text-green-800">
                  {category.products}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}