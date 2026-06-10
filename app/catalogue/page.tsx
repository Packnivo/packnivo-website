import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Product Catalogue | Packnivo Solutions Pvt Ltd",
  description: "Browse Packnivo's packaging catalogue — boxes, tapes, bubble wrap, stretch film, and 60+ products sourced from verified Indian manufacturers.",
}

import Link from "next/link";

const products = [
  { category: "Corrugated Boxes", name: "Standard Corrugated Box", gsm: "150-300 GSM", moq: "500 units", use: "E-commerce, retail shipping" },
  { category: "Corrugated Boxes", name: "Heavy Duty Corrugated Box", gsm: "300-450 GSM", moq: "250 units", use: "Industrial, machinery parts" },
  { category: "Corrugated Boxes", name: "Die Cut Corrugated Box", gsm: "150-250 GSM", moq: "1000 units", use: "Custom shaped products" },
  { category: "Corrugated Boxes", name: "Telescopic Corrugated Box", gsm: "200-350 GSM", moq: "500 units", use: "Long or irregular items" },
  { category: "Flexible Packaging", name: "BOPP Bags", gsm: "40-80 GSM", moq: "5000 units", use: "Food grains, flour, sugar" },
  { category: "Flexible Packaging", name: "Laminated Pouches", gsm: "60-120 GSM", moq: "2000 units", use: "Snacks, spices, dry foods" },
  { category: "Flexible Packaging", name: "Vacuum Pouches", gsm: "80-150 GSM", moq: "1000 units", use: "Meat, cheese, processed foods" },
  { category: "Flexible Packaging", name: "Stand-up Pouches", gsm: "100-180 GSM", moq: "1000 units", use: "Beverages, sauces, liquids" },
  { category: "Rigid Packaging", name: "PET Jars", gsm: "N/A", moq: "1000 units", use: "Cosmetics, food, pharma" },
  { category: "Rigid Packaging", name: "HDPE Containers", gsm: "N/A", moq: "500 units", use: "Chemicals, lubricants" },
  { category: "Rigid Packaging", name: "Glass Bottles", gsm: "N/A", moq: "500 units", use: "Beverages, oils, sauces" },
  { category: "Industrial Packaging", name: "Stretch Wrap Film", gsm: "N/A", moq: "100 rolls", use: "Pallet wrapping, bulk goods" },
  { category: "Industrial Packaging", name: "Bubble Wrap", gsm: "N/A", moq: "50 rolls", use: "Fragile item protection" },
  { category: "Industrial Packaging", name: "PP Strapping Band", gsm: "N/A", moq: "200 rolls", use: "Carton and pallet strapping" },
  { category: "Industrial Packaging", name: "Foam Sheets", gsm: "N/A", moq: "500 sheets", use: "Surface protection, cushioning" },
  { category: "Eco-Friendly", name: "Kraft Paper Bags", gsm: "80-120 GSM", moq: "2000 units", use: "Retail, gifting, food delivery" },
  { category: "Eco-Friendly", name: "Biodegradable Mailers", gsm: "60-100 GSM", moq: "1000 units", use: "E-commerce shipping" },
  { category: "Eco-Friendly", name: "Recycled Corrugated Boxes", gsm: "150-250 GSM", moq: "500 units", use: "Sustainable shipping" },
  { category: "Custom Packaging", name: "Custom Printed Boxes", gsm: "300-450 GSM", moq: "500 units", use: "Brand packaging, gifting" },
  { category: "Custom Packaging", name: "Custom Labels and Stickers", gsm: "80-150 GSM", moq: "1000 units", use: "Product labelling, branding" },
];

const categories = ["All", "Corrugated Boxes", "Flexible Packaging", "Rigid Packaging", "Industrial Packaging", "Eco-Friendly", "Custom Packaging"];

export default function Catalogue() {
  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: "#0C2448" }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Fraunces, serif" }}>
              Product Catalogue
            </h1>
            <p className="text-white/70 text-lg">
              60+ packaging products across 10 categories. All products available with custom specifications, branding and GST invoicing.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="bg-white border-b border-gray-100 py-4 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all"
                style={cat === "All" ? { backgroundColor: "#0C2448", color: "white" } : { backgroundColor: "#f3f4f6", color: "#374151" }}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(12,36,72,0.08)", color: "#0C2448" }}>
                    {product.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>
                  {product.name}
                </h3>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">GSM / Weight</span>
                    <span className="font-medium" style={{ color: "#0C2448" }}>{product.gsm}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Min. Order</span>
                    <span className="font-medium" style={{ color: "#0C2448" }}>{product.moq}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Best For</span>
                    <span className="font-medium text-right max-w-32" style={{ color: "#0C2448" }}>{product.use}</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="block w-full text-center py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                  style={{ backgroundColor: "#C08430", color: "white" }}
                >
                  Request Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>
            Need something not listed here?
          </h2>
          <p className="text-gray-600 mb-8">
            We source custom packaging for any requirement. Tell us what you need and we will find it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#0C2448" }}
          >
            Send Custom Requirement
          </Link>
        </div>
      </section>
    </>
  );
}