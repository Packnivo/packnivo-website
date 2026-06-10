import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GST on Packaging Materials in India 2026 - Complete Guide | Packnivo",
  description: "Complete guide to GST rates on packaging materials in India. HSN codes, tax rates and ITC eligibility for corrugated boxes, flexible packaging, rigid containers and more.",
  keywords: "GST on packaging materials India, HSN code packaging, packaging GST rate, corrugated box GST, flexible packaging GST",
  openGraph: {
    title: "GST on Packaging Materials in India 2026 - Complete Guide",
    description: "Complete guide to GST rates on packaging materials in India. HSN codes, tax rates and ITC eligibility.",
    url: "https://packnivo.com/blog/gst-on-packaging-materials-india",
    siteName: "Packnivo",
    type: "article",
  },
};

export default function GSTPackagingBlog() {
  return (
    <>
      <section style={{ backgroundColor: "#0C2448" }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm mb-6">
            <Link href="/blog" className="text-white/60 hover:text-white transition-colors">Blog</Link>
            <span className="text-white/40">/</span>
            <span style={{ color: "#C08430" }}>GST and Compliance</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Fraunces, serif" }}>
            GST on Packaging Materials in India - Complete Guide 2026
          </h1>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <span>By Packnivo Team</span>
            <span>June 2026</span>
            <span>8 min read</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Understanding GST on packaging materials is essential for every Indian business. Whether you are buying corrugated boxes, flexible pouches, rigid containers or industrial packaging, the GST rate and HSN code directly affects your input tax credit (ITC) and overall packaging cost. This guide covers everything you need to know.
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-12" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>
              GST Rates on Packaging Materials - Quick Reference
            </h2>
            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr style={{ backgroundColor: "#0C2448" }}>
                    <th className="text-white text-left px-4 py-3 font-semibold">Packaging Material</th>
                    <th className="text-white text-left px-4 py-3 font-semibold">HSN Code</th>
                    <th className="text-white text-left px-4 py-3 font-semibold">GST Rate</th>
                    <th className="text-white text-left px-4 py-3 font-semibold">ITC Eligible</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { material: "Corrugated Boxes and Cartons", hsn: "4819", gst: "18%", itc: "Yes" },
                    { material: "Paper Bags and Kraft Bags", hsn: "4819", gst: "18%", itc: "Yes" },
                    { material: "Flexible Packaging - BOPP, LDPE", hsn: "3923", gst: "18%", itc: "Yes" },
                    { material: "Laminated Pouches", hsn: "3923", gst: "18%", itc: "Yes" },
                    { material: "PET Jars and Bottles", hsn: "3923", gst: "18%", itc: "Yes" },
                    { material: "HDPE Drums and Containers", hsn: "3923", gst: "18%", itc: "Yes" },
                    { material: "Glass Bottles", hsn: "7010", gst: "18%", itc: "Yes" },
                    { material: "Bubble Wrap", hsn: "3926", gst: "18%", itc: "Yes" },
                    { material: "Stretch Wrap Film", hsn: "3920", gst: "18%", itc: "Yes" },
                    { material: "Jute Bags", hsn: "6305", gst: "5%", itc: "Yes" },
                    { material: "Printed Packaging with Branding", hsn: "4819", gst: "18%", itc: "Yes" },
                    { material: "Foam Sheets and Padding", hsn: "3926", gst: "18%", itc: "Yes" },
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3 text-gray-700">{row.material}</td>
                      <td className="px-4 py-3 font-mono text-gray-600">{row.hsn}</td>
                      <td className="px-4 py-3 font-semibold" style={{ color: "#C08430" }}>{row.gst}</td>
                      <td className="px-4 py-3 text-green-600 font-medium">{row.itc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-12" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>
              CGST + SGST vs IGST - Which Applies to You?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The type of GST you pay depends on whether your packaging supplier is in the same state as your business.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-2xl border-2" style={{ borderColor: "#0C2448" }}>
                <h3 className="font-bold mb-3" style={{ color: "#0C2448" }}>Same State Purchase</h3>
                <p className="text-sm text-gray-600 mb-3">CGST + SGST applies. Both are split equally.</p>
                <p className="text-sm text-gray-600">Example: Delhi buyer purchases from Delhi supplier at 18% GST gives 9% CGST + 9% SGST</p>
              </div>
              <div className="p-6 rounded-2xl border-2" style={{ borderColor: "#C08430" }}>
                <h3 className="font-bold mb-3" style={{ color: "#C08430" }}>Interstate Purchase</h3>
                <p className="text-sm text-gray-600 mb-3">IGST applies at the full rate.</p>
                <p className="text-sm text-gray-600">Example: Delhi buyer purchases from Mumbai supplier at 18% GST gives 18% IGST</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-12" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>
              Input Tax Credit on Packaging Materials
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Most businesses can claim Input Tax Credit (ITC) on packaging materials purchased for business use. This means the GST you pay on packaging can be offset against your GST liability on sales.
            </p>
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h3 className="font-semibold mb-3" style={{ color: "#0C2448" }}>Conditions for ITC claim:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span style={{ color: "#C08430" }}>+</span> You must be a registered GST taxpayer</li>
                <li className="flex items-start gap-2"><span style={{ color: "#C08430" }}>+</span> The packaging must be used for business purposes</li>
                <li className="flex items-start gap-2"><span style={{ color: "#C08430" }}>+</span> You must have a valid GST invoice from the supplier</li>
                <li className="flex items-start gap-2"><span style={{ color: "#C08430" }}>+</span> The supplier must have filed their GST returns</li>
                <li className="flex items-start gap-2"><span style={{ color: "#C08430" }}>+</span> ITC must be claimed within the prescribed time limit</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-12" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>
              Common GST Mistakes on Packaging Purchases
            </h2>
            <div className="space-y-4 mb-8">
              {[
                { mistake: "Wrong HSN code on invoice", fix: "Always verify the HSN code with your supplier before invoicing. Wrong HSN codes can lead to ITC rejection." },
                { mistake: "Buying from unregistered suppliers", fix: "Always buy from GST registered suppliers. Purchases from unregistered suppliers do not qualify for ITC." },
                { mistake: "Not maintaining purchase records", fix: "Keep all packaging invoices organised month-wise for GST filing and CA review." },
                { mistake: "Missing the ITC claim deadline", fix: "ITC must be claimed by the due date for the September return of the next financial year." },
              ].map((item, index) => (
                <div key={index} className="p-5 rounded-xl bg-red-50 border border-red-100">
                  <p className="font-semibold text-red-700 text-sm mb-1">Avoid: {item.mistake}</p>
                  <p className="text-sm text-gray-600">Fix: {item.fix}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl p-8 mt-12 text-center" style={{ backgroundColor: "#0C2448" }}>
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "Fraunces, serif" }}>
                Need GST compliant packaging invoices?
              </h3>
              <p className="text-white/70 text-sm mb-6">
                Every order from Packnivo comes with a proper GST invoice with correct HSN codes, IRN and QR code. Send us your packaging requirement today.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: "#C08430" }}>
                Get a Quote
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
              { title: "Corrugated Box Sizes and Prices in India 2026", href: "/blog/corrugated-box-sizes-prices-india", category: "Product Guide" },
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