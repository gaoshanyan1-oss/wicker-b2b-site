export default function Factory() {
  const stats = [
    {
      value: "Bobai",
      label: "Local Handmade Supply",
    },
    {
      value: "OEM",
      label: "Custom Production",
    },
    {
      value: "Export",
      label: "Buyer Communication",
    },
  ];

  const gallery = [
    {
      image: "/images/factory/craft.png",
      alt: "Handmade wicker craftsmanship",
    },
    {
      image: "/images/factory/workshop.png",
      alt: "Wicker production workshop",
    },
    {
      image: "/images/factory/warehouse.png",
      alt: "Wicker product warehouse",
    },
    {
      image: "/images/factory/showroom.png",
      alt: "Wicker product showroom",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">
              Our Factory
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900">
              Handmade Wicker Manufacturing from Bobai, Guangxi
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Located in Bobai, Guangxi, China, we focus on handmade wicker
              baskets, rattan furniture and natural home decoration products.
              Local artisans use traditional weaving techniques to create
              practical and decorative products for overseas buyers.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              We support wholesalers, retailers, importers and lifestyle brands
              with OEM and ODM services, including custom size, shape, material,
              color, label and packaging.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-green-50 p-6 text-center"
                >
                  <div className="text-3xl font-bold text-green-800">
                    {item.value}
                  </div>

                  <div className="mt-2 text-sm font-medium text-gray-600">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/images/factory/factory.png"
                alt="Bobai wicker factory workshop"
                className="h-80 w-full object-cover"
              />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-5">
              {gallery.map((item) => (
                <div
                  key={item.alt}
                  className="overflow-hidden rounded-2xl shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-36 w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}