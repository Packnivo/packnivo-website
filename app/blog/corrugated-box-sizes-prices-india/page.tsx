import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Corrugated Box Sizes and Prices in India 2026 | Packnivo",
  description: "Complete guide to corrugated box sizes, dimensions, prices and MOQ in India 2026. Standard sizes, custom options, GSM grades and bulk pricing for B2B buyers.",
  keywords: "corrugated box sizes India, corrugated box price India, corrugated carton dimensions, packaging box MOQ India, bulk corrugated boxes Delhi",
  openGraph: {
    title: "Corrugated Box Sizes and Prices in India 2026",
    description: "Complete guide to corrugated box sizes, dimensions, prices and MOQ in India 2026.",
    url: "https://packnivo.com/blog/corrugated-box-sizes-prices-india",
    siteName: "Packnivo",
    type: "article",
  },
};

export default function CorrugatedBoxBlog() {
  return (
    <>
      <section style={{ backgroundColor: "#0C2448" }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm mb-6">
            <Link href="/blog" className="text-white/60 hover:text-white transition-colors">Blog</Link>
            <span className="text-white/40">/</span>
            <span style={{ color: "#C08430" }}>Product Guide</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Fraunces, serif" }}>
            Corrugated Box Sizes and Prices in India - Complete Guide 2026
          </h1>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <span>By Packnivo Team</span>
            <span>June 2026</span>
            <span>7 min read</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Corrugated boxes are the most widely used packaging material in India. From e-commerce shipments to industrial goods, choosing the right size, grade and supplier can save your business significant costs. This guide covers standard sizes, pricing benchmarks and what to look for when buying corrugated boxes in India.
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-12" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>
              Standard Corrugated Box Sizes in India
            </h2>
            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr style={{ backgroundColor: "#0C2448" }}>
                    <th className="text-white text-left px-4 py-3 font-semibold">Size Name</th>
                    <th className="text-white text-left px-4 py-3 font-semibold">Dimensions (L x W x H cm)</th>
                    <th className="text-white text-left px-4 py-3 font-semibold">Common Use</th>
                    <th className="text-white text-left px-4 py-3 font-semibold">MOQ</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: "Small", dims: "20 x 15 x 10", use: "Books, small electronics, cosmetics", moq: "500 pcs" },
                    { size: "Medium", dims: "30 x 20 x 15", use: "Apparel, shoes, FMCG", moq: "500 pcs" },
                    { size: "Large", dims: "45 x 30 x 25", use: "Home appliances, bulk FMCG", moq: "250 pcs" },
                    { size: "Extra Large", dims: "60 x 40 x 40", use: "Heavy machinery parts, furniture", moq: "200 pcs" },
                    { size: "E-commerce Standard", dims: "25 x 20 x 12", use: "Amazon, Flipkart shipments", moq: "500 pcs" },
                    { size: "Pizza Box Style", dims: "30 x 30 x 5", use: "Food delivery, flat items", moq: "1000 pcs" },
                    { size: "Custom", dims: "As required", use: "Any specific product", moq: "500 pcs" },
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3 font-medium text-gray-700">{row.size}</td>
                      <td className="px-4 py-3 font-mono text-gray-600">{row.dims}</td>
                      <td className="px-4 py-3 text-gray-600">{row.use}</td>
                      <td className="px-4 py-3 font-semibold" style={{ color: "#C08430" }}>{row.moq}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mb-6 mt-12" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>
              Corrugated Box Prices in India 2026
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Prices vary based on GSM grade, size, quantity and supplier location. Below are benchmark prices for bulk orders from verified manufacturers in India.
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr style={{ backgroundColor: "#0C2448" }}>
                    <th className="text-white text-left px-4 py-3 font-semibold">Box Type</th>
                    <th className="text-white text-left px-4 py-3 font-semibold">GSM Grade</th>
                    <th className="text-white text-left px-4 py-3 font-semibold">Price Range (per piece)</th>
                    <th className="text-white text-left px-4 py-3 font-semibold">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "Standard Single Wall", gsm: "150-180 GSM", price: "Rs. 8 to Rs. 15", qty: "500+ pcs" },
                    { type: "Medium Single Wall", gsm: "180-220 GSM", price: "Rs. 12 to Rs. 22", qty: "500+ pcs" },
                    { type: "Heavy Duty Single Wall", gsm: "220-300 GSM", price: "Rs. 18 to Rs. 35", qty: "250+ pcs" },
                    { type: "Double Wall", gsm: "300-450 GSM", price: "Rs. 35 to Rs. 65", qty: "250+ pcs" },
                    { type: "Custom Printed Single Wall", gsm: "180-220 GSM", price: "Rs. 18 to Rs. 40", qty: "500+ pcs" },
                    { type: "Custom Printed Double Wall", gsm: "300+ GSM", price: "Rs. 45 to Rs. 90", qty: "250+ pcs" },
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3 text-gray-700">{row.type}</td>
                      <td className="px-4 py-3 text-gray-600">{row.gsm}</td>
                      <td className="px-4 py-3 font-semibold" style={{ color: "#C08430" }}>{row.price}</td>
                      <td className="px-4 py-3 text-gray-600">{row.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mb-8">Note: Prices are indicative benchmarks for bulk B2B orders. Actual prices depend on specifications, location and market conditions. Contact Packnivo for accurate quotes.</p>

            <h2 className="text-2xl font-bold mb-4 mt-12" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>
              How to Choose the Right GSM Grade
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { grade: "150-180 GSM", title: "Light Duty", use: "Books, documents, light clothing, small gifts. Not suitable for heavy or fragile items.", color: "#e8f5e9" },
                { grade: "180-250 GSM", title: "Standard Duty", use: "Most e-commerce shipments, FMCG, apparel, shoes. Best value for money for most businesses.", color: "#e3f2fd" },
                { grade: "250-450 GSM", title: "Heavy Duty", use: "Electronics, machinery parts, glass items, heavy industrial goods. Maximum protection.", color: "#fff3e0" },
              ].map((item) => (
                <div key={item.grade} className="p-5 rounded-xl" style={{ backgroundColor: item.color }}>
                  <p className="font-bold text-sm mb-1" style={{ color: "#0C2448" }}>{item.grade}</p>
                  <p className="font-semibold text-sm mb-2" style={{ color: "#0C2448" }}>{item.title}</p>
                  <p className="text-xs text-gray-600">{item.use}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-12" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>
              5 Ways to Reduce Your Corrugated Box Costs
            </h2>
            <div className="space-y-4 mb-8">
              {[
                { tip: "Order in larger quantities", detail: "Price per box drops significantly at 1000+ units. Plan your inventory to place larger, less frequent orders." },
                { tip: "Standardise your box sizes", detail: "Using 2 to 3 standard sizes instead of custom sizes for every product reduces setup costs and lead times." },
                { tip: "Use the minimum GSM needed", detail: "Do not over-specify. Using 300 GSM boxes for light products wastes money. Match GSM to product weight." },
                { tip: "Buy from local manufacturers", detail: "Sourcing from Delhi NCR manufacturers saves on freight costs and reduces lead times significantly." },
                { tip: "Get competing quotes", detail: "Always get at least 3 quotes before placing an order. Packnivo gets you quotes from 10+ verified vendors simultaneously." },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-5 rounded-xl bg-gray-50">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: "#C08430" }}>{index + 1}</span>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: "#0C2448" }}>{item.tip}</p>
                    <p className="text-sm text-gray-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl p-8 mt-12 text-center" style={{ backgroundColor: "#0C2448" }}>
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "Fraunces, serif" }}>
                Get the best corrugated box prices in India
              </h3>
              <p className="text-white/70 text-sm mb-6">
                Send us your box specifications including size, GSM, quantity and delivery location. We will get you competitive quotes from verified manufacturers within 24 hours.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: "#C08430" }}>
                Get Quotes Now
              </Link>
            </div>

          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold mb-6" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "GST on Packaging Materials in India 2026", href: "/blog/gst-on-packaging-materials-india", category: "GST & Compliance" },
              { title: "How to Find Packaging Suppliers in Delhi", href: "/blog/packaging-suppliers-delhi", category: "Procurement" },
              { title: "Amazon India Packaging Requirements", href: "/blog/amazon-india-packaging-requirements", category: "E-Commerce" },
            ].map((post) => (
              <Link key={post.href} href={post.href} className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
                <span className="text-xs font-medium px-2 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: "rgba(12,36,72,0.08)", color: "#0C2448" }}>{post.category}</span>
                <h3 className="text-sm font-semibold" style={{ color: "#0C2448" }}>{post.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}