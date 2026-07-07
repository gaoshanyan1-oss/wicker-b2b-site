export default function WhyChooseUs() {
  const items = [
    {
      title: "Local Handmade Supply",
      description:
        "Based in Bobai, Guangxi, with access to local handmade wicker and rattan product resources.",
    },
    {
      title: "100% Handmade",
      description:
        "Products are woven by skilled artisans using traditional hand weaving techniques.",
    },
    {
      title: "OEM & ODM Support",
      description:
        "Custom sizes, shapes, materials, colors, labels and packaging can be discussed.",
    },
    {
      title: "Export Communication",
      description:
        "We support overseas buyers with clear product details, quotation, sampling and order follow-up.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Trusted Handmade Wicker Supply from Bobai
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            We help wholesalers, retailers, importers and brands source natural
            handmade wicker products from Bobai, Guangxi, China.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-relaxed text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}