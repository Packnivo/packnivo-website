import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Amazon India Packaging Requirements 2026 â€” Complete Seller Guide | Packnivo",
  description: "Complete guide to Amazon India packaging requirements for sellers. Box strength, labelling, polybag rules, fragile item packaging and how to avoid penalties and returns.",
  keywords: "Amazon India packaging requirements, Amazon seller packaging India, Amazon FBA packaging India, ecommerce packaging requirements India, Amazon packaging guidelines",
  openGraph: {
    title: "Amazon India Packaging Requirements 2026 â€” Complete Seller Guide",
    description: "Complete guide to Amazon India packaging requirements for sellers.",
    url: "https://packnivo.com/blog/amazon-india-packaging-requirements",
    siteName: "Packnivo",
    type: "article",
  },
};

export default function AmazonPackagingBlog() {
  return (
    <>
      <section style={{ backgroundColor: "#0C2448" }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm mb-6">
            <Link href="/blog" className="text-white/60 hover:text-white transition-colors">Blog</Link>
            <span className="text-white/40">â†’</span>
            <span style={{ color: "#C08430" }}>E-Commerce</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Fraunces, serif" }}>
            Amazon India Packaging Requirements 2026 â€” Complete Seller Guide
          </h1>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <span>By Packnivo Team</span>
            <span>June 2026</span>
            <span>9 min read</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Packaging compliance is one of the most common reasons Amazon India sellers face returns, penalties and account suspensions. Amazon has strict packaging guidelines designed to protect products during transit and ensure a consistent customer experience. This guide covers everything you need to know to stay compliant and reduce damage rates.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
              <p className="font-semibold text-amber-800 mb-2">âš  Important Note</p>
              <p className="text-sm text-amber-700">Amazon India updates its packaging guidelines periodically. Always verify the latest requirements in your Seller Central account under Packaging and Prep Requirements. The information in this guide is current as of June 2026 but may change.</p>
            </div>

            <h2 className="text-2xl font-bold mb-6 mt-12" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>
              General Packaging Requirements for All Products
            </h2>
            <div className="space-y-4 mb-8">
              {[
                { req: "Box strength â€” 3 ply minimum", detail: "All corrugated boxes must be minimum 3 ply (single wall). For products above 5kg, 5 ply (double wall) is recommended. Box must pass a 6-inch drop test." },
                { req: "No loose items inside the box", detail: "Products must not move freely inside the box. Use bubble wrap, foam inserts, air pillows or paper fill to prevent movement during transit." },
                { req: "Single scannable barcode", detail: "Only one scannable barcode on the outermost packaging. Multiple barcodes cause scanning errors at Amazon fulfilment centres." },
                { req: "Expiry date clearly visible", detail: "For food, pharma and beauty products, expiry date must be printed on the outer packaging in DD-MM-YYYY format." },
                { req: "No excess packaging", detail: "Amazon penalises excessive packaging. Box dimensions must be appropriate for the product â€” no more than 2 inches of void fill on any side." },
              ].map((item, index) => (
                <div key={index} className="p-5 rounded-xl bg-gray-50 border-l-4" style={{ borderLeftColor: "#0C2448" }}>
                  <p className="font-semibold text-sm mb-2" style={{ color: "#0C2448" }}>{item.req}</p>
                  <p className="text-sm text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-6 mt-12" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>
              Category-Specific Packaging Requirements
            </h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr style={{ backgroundColor: "#0C2448" }}>
                    <th className="text-white text-left px-4 py-3 font-semibold">Product Category</th>
                    <th className="text-white text-left px-4 py-3 font-semibold">Key Requirement</th>
                    <th className="text-white text-left px-4 py-3 font-semibold">Recommended Packaging</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cat: "Electronics", req: "Anti-static packaging mandatory for circuit boards", pack: "Anti-static bags + foam inserts + corrugated box" },
                    { cat: "Fragile Items", req: "Must pass 3-foot drop test on all 6 sides", pack: "Double wall box + bubble wrap + foam corners" },
                    { cat: "Liquids", req: "Must be leak-proof. Secondary containment required", pack: "Sealed pouches + absorbent material + outer box" },
                    { cat: "Sharp Items", req: "Must be contained to prevent injury during handling", pack: "Rigid container or reinforced corrugated with inner foam" },
                    { cat: "Polybag Items", req: "Polybag must have suffocation warning if opening above 5 inches", pack: "Clear LDPE polybag with printed warning" },
                    { cat: "Food Products", req: "FDA approved materials, expiry date mandatory", pack: "Food-grade packaging with sealed closure" },
                    { cat: "Clothing and Apparel", req: "Must be in polybag to protect from moisture and dust", pack: "Sealed polybag inside corrugated mailer" },
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3 font-medium text-gray-700">{row.cat}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{row.req}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{row.pack}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-12" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>
              Labelling Requirements
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { label: "FNSKU Label", detail: "Every unit sold on Amazon must have an FNSKU label. This is generated in Seller Central and must be applied on the product or outer packaging." },
                { label: "Shipping Label", detail: "Amazon generates shipping labels for FBA shipments. Print on white A4 paper, apply flat without wrinkles. Laser print only â€” inkjet may smear." },
                { label: "Product Label", detail: "Must show product name, brand, MRP, net weight, country of origin and manufacturer details as per Legal Metrology Act." },
                { label: "Fragile / This Side Up", detail: "Use internationally recognised handling labels for fragile, liquid or orientation-sensitive products." },
              ].map((item) => (
                <div key={item.label} className="p-5 rounded-xl border border-gray-100">
                  <h3 className="font-semibold text-sm mb-2" style={{ color: "#C08430" }}>{item.label}</h3>
                  <p className="text-sm text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-12" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>
              Most Common Reasons for Amazon Returns Due to Packaging
            </h2>
            <div className="space-y-3 mb-8">
              {[
                { reason: "Product damaged in transit", pct: "Most common â€” usually due to insufficient cushioning or weak box" },
                { reason: "Box too large for product", pct: "Amazon may charge for excess dimensional weight" },
                { reason: "Multiple barcodes on packaging", pct: "Causes scanning failures at fulfilment centres" },
                { reason: "Packaging not sealed properly", pct: "Open or damaged packaging on arrival leads to immediate return" },
                { reason: "Wrong product barcode", pct: "Mismatched barcodes cause inventory errors and returns" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-red-50">
                  <span className="text-red-500 font-bold flex-shrink-0">âš </span>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">{item.reason}</p>
                    <p className="text-xs text-gray-500 mt-1">{item.pct}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl p-8 mt-12 text-center" style={{ backgroundColor: "#0C2448" }}>
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "Fraunces, serif" }}>
                Need Amazon-compliant packaging for your products?
              </h3>
              <p className="text-white/70 text-sm mb-6">
                Packnivo supplies Amazon-compliant corrugated boxes, polybags, bubble wrap and custom printed packaging to sellers across India. Tell us your product details and we will recommend the right packaging solution.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: "#C08430" }}>
                Get Amazon-Compliant Packaging
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
              { title: "Corrugated Box Sizes and Prices in India 2026", href: "/blog/corrugated-box-sizes-prices-india", category: "Product Guide" },
              { title: "How to Find Packaging Suppliers in Delhi", href: "/blog/packaging-suppliers-delhi", category: "Procurement" },
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