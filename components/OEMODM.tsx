export default function OEMODM() {
  const services = [
    {
      title: "Custom Size & Shape",
      description:
        "We can customize wicker baskets, rattan furniture and woven products according to your required size, shape and function.",
    },
    {
      title: "Material & Color Options",
      description:
        "Different natural materials, weaving styles and color finishes can be discussed based on your product positioning.",
    },
    {
      title: "Private Label Packaging",
      description:
        "We support hang tags, labels, carton marks and packaging solutions for brands, retailers and importers.",
    },
    {
      title: "Sample Development",
      description:
        "You can send product photos, drawings or ideas. We will help discuss sample details before bulk production.",
    },
  ];

  const steps = [
    "Send product idea or reference photo",
    "Confirm size, material, color and quantity",
    "Develop sample or quotation",
    "Confirm packaging and order details",
    "Arrange production and export follow-up",
  ];

  return (
    <section id="oem" className="bg-green-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">
            OEM / ODM Service
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Custom Handmade Wicker Products for Your Brand
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            We support custom wicker baskets, rattan furniture, storage baskets,
            pet baskets and home decoration products for wholesalers, importers,
            retailers and lifestyle brands.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-4 leading-relaxed text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 rounded-3xl bg-white p-8 shadow-xl lg:grid-cols-2 lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">
              Custom Process
            </p>

            <h3 className="mt-4 text-3xl font-bold text-gray-900">
              How We Work With Buyers
            </h3>

            <p className="mt-5 leading-relaxed text-gray-600">
              From product idea to bulk order, we help buyers communicate clearly
              about product requirements, sample details, packaging needs and
              export order follow-up.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-4 rounded-2xl bg-gray-50 p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-700 font-bold text-white">
                  {index + 1}
                </div>

                <p className="font-medium text-gray-800">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}