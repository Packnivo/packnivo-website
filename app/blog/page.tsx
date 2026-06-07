import Link from "next/link";

const posts = [
  {
    title: "How to reduce your packaging costs by 20% without changing your product",
    category: "Cost Reduction",
    date: "December 2024",
    read: "5 min read",
    excerpt: "Most businesses overpay for packaging simply because they do not have benchmark data. Here is a practical framework to audit your current packaging spend and identify savings.",
  },
  {
    title: "GST on packaging materials — complete guide for Indian businesses",
    category: "GST & Compliance",
    date: "December 2024",
    read: "8 min read",
    excerpt: "A complete breakdown of GST rates on corrugated boxes, flexible packaging, rigid containers and industrial packaging — with HSN codes for every category.",
  },
  {
    title: "Corrugated boxes vs rigid packaging — which is right for your product",
    category: "Product Guide",
    date: "November 2024",
    read: "6 min read",
    excerpt: "The choice between corrugated and rigid packaging affects your costs, damage rates and customer experience. Here is how to make the right decision for your product.",
  },
  {
    title: "E-commerce packaging requirements for Amazon India and Flipkart",
    category: "E-Commerce",
    date: "November 2024",
    read: "7 min read",
    excerpt: "Both Amazon India and Flipkart have specific packaging requirements. Non-compliance leads to returns, penalties and poor seller ratings. Here is what you need to know.",
  },
  {
    title: "Sustainable packaging options for Indian businesses in 2025",
    category: "Sustainability",
    date: "October 2024",
    read: "6 min read",
    excerpt: "Eco-friendly packaging is no longer just a trend — it is becoming a business requirement. Here are the most practical sustainable options available in India today.",
  },
  {
    title: "What is MOQ and how to negotiate minimum order quantities with packaging vendors",
    category: "Procurement",
    date: "October 2024",
    read: "5 min read",
    excerpt: "Minimum order quantities can make or break your packaging procurement strategy. Here is how to understand MOQ, negotiate it down and manage inventory effectively.",
  },
];

const categories = ["All", "Cost Reduction", "GST & Compliance", "Product Guide", "E-Commerce", "Sustainability", "Procurement"];

export default function Blog() {
  return (
    <>
      {/* Header */}
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

      {/* Categories */}
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

      {/* Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(12,36,72,0.08)", color: "#0C2448" }}>
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.read}</span>
                </div>
                <h3 className="text-base font-bold mb-3 flex-1" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <Link
                    href="/contact"
                    className="text-sm font-medium flex items-center gap-1 transition-colors"
                    style={{ color: "#C08430" }}
                  >
                    Read more
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>
            Want packaging advice specific to your business?
          </h2>
          <p className="text-gray-600 mb-8">
            Our PackAdvise team does free packaging audits for new clients. Send us your current invoices and we will analyse your spend.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#0C2448" }}
          >
            Request Free Audit
          </Link>
        </div>
      </section>
    </>
  );
}