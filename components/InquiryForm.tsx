"use client";

import { useState, type ChangeEvent } from "react";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "Wicker Baskets",
    message: "",
  });

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function getInquiryText() {
    return `New inquiry from Bobai Wicker website

Name: ${formData.name}
Email: ${formData.email}
WhatsApp / Phone: ${formData.phone}
Product Interest: ${formData.product}

Message:
${formData.message}

Website: https://bobai-wicker-china.netlify.app/
Location: Bobai, Guangxi, China`;
  }

  function sendToWhatsApp() {
    const message = encodeURIComponent(getInquiryText());
    const whatsappUrl = `https://wa.me/8619813871687?text=${message}`;

    window.open(whatsappUrl, "_blank");
  }

  function sendToGmail() {
    const subject = encodeURIComponent("New Inquiry from Bobai Wicker Website");
    const body = encodeURIComponent(getInquiryText());

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=gaoshanyan1%40gmail.com&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank");
  }

  return (
    <section id="inquiry" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">
              Send Inquiry
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900">
              Tell Us About Your Wicker Product Requirements
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Looking for handmade wicker baskets, rattan furniture or custom
              OEM products? Send us your inquiry and we will help you with
              product options, quotation, packaging and export details.
            </p>

            <div className="mt-10 space-y-5 text-gray-700">
              <div>
                <p className="font-semibold text-gray-900">
                  What we can support:
                </p>
                <p className="mt-2">
                  OEM / ODM, custom size, custom color, private label packaging,
                  sample development and bulk export orders.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">Best for:</p>
                <p className="mt-2">
                  Wholesalers, retailers, importers, home decor brands,
                  furniture stores and lifestyle product companies.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="font-semibold text-gray-900">Direct Contact</p>

                <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-600">
                  <p>
                    <span className="font-semibold text-gray-800">
                      Contact:
                    </span>{" "}
                    Shanyan Gao
                  </p>

                  <p>
                    <span className="font-semibold text-gray-800">Email:</span>{" "}
                    <button
                      type="button"
                      onClick={sendToGmail}
                      className="text-left text-green-800 underline"
                    >
                      gaoshanyan1@gmail.com
                    </button>
                  </p>

                  <p>
                    <span className="font-semibold text-gray-800">
                      WhatsApp:
                    </span>{" "}
                    <a
                      href="https://wa.me/8619813871687"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-800 underline"
                    >
                      +86 198 1387 1687
                    </a>
                  </p>

                  <p>
                    <span className="font-semibold text-gray-800">WeChat:</span>{" "}
                    +86 198 1387 1687
                  </p>

                  <p>
                    <span className="font-semibold text-gray-800">
                      Location:
                    </span>{" "}
                    Bobai, Guangxi, China
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  WhatsApp / Phone
                </label>
                <input
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 000 000 0000"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Product Interest
                </label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
                >
                  <option>Wicker Baskets</option>
                  <option>Rattan Furniture</option>
                  <option>Storage Baskets</option>
                  <option>Pet Baskets</option>
                  <option>Home Decoration</option>
                  <option>Custom OEM Products</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please tell us your product requirements, quantity, size, material, target market or packaging needs."
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={sendToWhatsApp}
                  className="rounded-full bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800"
                >
                  Send via WhatsApp
                </button>

                <button
                  type="button"
 onClick={sendToGmail}
                  className="rounded-full border border-green-700 px-8 py-4 font-semibold text-green-800 transition hover:bg-green-50"
                >
                  Send via Gmail
                </button>
              </div>

              <p className="text-center text-sm text-gray-500">
                We usually reply within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
