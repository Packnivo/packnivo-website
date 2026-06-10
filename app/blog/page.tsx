import Link from "next/link";

const posts = [
  {
    title: "GST on Packaging Materials in India Ã¢ÂÂ Complete Guide 2026",
    category: "GST & Compliance",
    date: "June 2026",
    read: "8 min read",
    excerpt: "Complete guide to GST rates, HSN codes and ITC eligibility on corrugated boxes, flexible packaging, rigid containers and all packaging materials in India.",
    href: "/blog/gst-on-packaging-materials-india",
  },
  {
    title: "Corrugated Box Sizes and Prices in India Ã¢ÂÂ Complete Guide 2026",
    category: "Product Guide",
    date: "June 2026",
    read: "7 min read",
    excerpt: "Standard corrugated box sizes, price benchmarks, GSM grades and 5 proven ways to reduce your corrugated packaging costs in India.",
    href: "/blog/corrugated-box-sizes-prices-india",
  },
  {
    title: "How to Find Reliable Packaging Suppliers in Delhi Ã¢ÂÂ Complete Guide 2026",
    category: "Procurement",
    date: "June 2026",
    read: "6 min read",
    excerpt: "Where packaging manufacturers are concentrated in Delhi NCR, how to verify suppliers and red flags to watch out for when sourcing packaging in India.",
    href: "/blog/packaging-suppliers-delhi",
  },
  {
    title: "Amazon India Packaging Requirements 2026 Ã¢ÂÂ Complete Seller Guide",
    category: "E-Commerce",
    date: "June 2026",
    read: "9 min read",
    excerpt: "Everything Amazon India sellers need to know about packaging compliance Ã¢ÂÂ box strength, labelling, polybag rules and how to avoid returns and penalties.",
    href: "/blog/amazon-india-packaging-requirements",
  },
];

const categories = ["All", "GST & Compliance", "Product Guide", "Procurement", "E-Commerce"];

export default function Blog() {
  return (
    <>
      <section style={{ backgroundColor: "#0C2448" }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Fraunces, serif" }}>
              Packaging Insights
            </h1>
            <p className="text-white/70 text-lg">
              Practical guides on packaging costs, GST, procurement and sustainability for Indian businesses.
            </p>
          </div>
        </div>
      </section>

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

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post, index) => (
              <Link key={index} href={post.href} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(12,36,72,0.08)", color: "#0C2448" }}>
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.read}</span>
                </div>
                <h2 className="text-lg font-bold mb-3 flex-1 group-hover:opacity-80 transition-opacity" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <span className="text-sm font-medium flex items-center gap-1" style={{ color: "#C08430" }}>
                    Read article
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>
            Want packaging advice specific to your business?
          </h2>
          <p className="text-gray-600 mb-8">
            Our PackAdvise team does free packaging audits for new clients. Send us your current invoices and we will analyse your spend.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: "#0C2448" }}>
            Request Free Audit
          </Link>
        </div>
      </section>
    </>
  );
}