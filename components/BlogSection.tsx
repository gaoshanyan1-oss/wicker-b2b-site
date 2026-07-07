export default function BlogSection() {
  const posts = [
    {
      title: "How to Choose a Reliable Handmade Wicker Basket Supplier",
      category: "Sourcing Guide",
      description:
        "Learn what overseas buyers should check when sourcing handmade wicker baskets from China, including materials, quality, customization and communication.",
    },
    {
      title: "OEM Wicker Products: What Buyers Need to Prepare",
      category: "OEM / ODM",
      description:
        "Before starting custom wicker baskets or rattan furniture, buyers can prepare product photos, sizes, colors, packaging ideas and target order quantity.",
    },
    {
      title: "Why Bobai, Guangxi Is Known for Handmade Wicker Products",
      category: "Industry Insight",
      description:
        "Bobai has local weaving resources and handmade wicker craftsmanship, making it a practical sourcing area for natural woven home products.",
    },
  ];

  return (
    <section id="blog" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">
            Blog / Sourcing Guide
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Wicker Product Sourcing Knowledge
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Useful sourcing tips for importers, wholesalers, retailers and
            brands who are looking for handmade wicker and rattan products from
            China.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
                {post.category}
              </p>

              <h3 className="mt-4 text-xl font-bold leading-snug text-gray-900">
                {post.title}
              </h3>

              <p className="mt-4 leading-relaxed text-gray-600">
                {post.description}
              </p>

              <button
                type="button"
                className="mt-6 text-sm font-semibold text-green-800"
              >
                Coming Soon →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}