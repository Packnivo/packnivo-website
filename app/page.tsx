import Link from "next/link";

const solutions = [
  { name: "PackTrade", icon: "🔄", description: "Trading, buying, selling, importing and exporting packaging materials at the best prices." },
  { name: "PackServe", icon: "⚙️", description: "End-to-end packaging execution — from sourcing to final delivery at your doorstep." },
  { name: "PackAdvise", icon: "💡", description: "Expert consultancy on packaging design, cost reduction and sustainability strategies." },
  { name: "PackCommerce", icon: "🛒", description: "B2B, B2C and e-commerce packaging solutions tailored for your business model." },
  { name: "PackMake", icon: "🏭", description: "Manufacturing collaboration — we connect you with the right production partners." },
  { name: "PackBridge", icon: "🤝", description: "Agency, broker and partner network for cross-border and specialty packaging needs." },
];

const categories = [
  { name: "Corrugated Boxes", count: "12 Products", icon: "📦" },
  { name: "Flexible Packaging", count: "10 Products", icon: "🎁" },
  { name: "Rigid Packaging", count: "8 Products", icon: "🏺" },
  { name: "Industrial Packaging", count: "9 Products", icon: "🔧" },
  { name: "Eco-Friendly", count: "7 Products", icon: "🌿" },
  { name: "Custom Packaging", count: "14 Products", icon: "✨" },
];

const stats = [
  { value: "500+", label: "Products in Catalogue" },
  { value: "50+", label: "Vendor Partners" },
  { value: "10,000+", label: "Client Capacity" },
  { value: "₹0", label: "Gateway Fees on B2B" },
];

const whyUs = [
  { title: "Zero Gateway Fees", desc: "Direct bank transfers only. No 2.5% cuts on your payments." },
  { title: "5-Minute Response", desc: "Every enquiry answered within 5 minutes during business hours." },
  { title: "Verified Vendors", desc: "Every vendor risk-scored and quality-verified before onboarding." },
  { title: "GST Compliant", desc: "Auto-generated GST invoices with IRN and QR on every order." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#0C2448" }} className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #C08430 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8" style={{ backgroundColor: "rgba(192,132,48,0.15)", color: "#C08430" }}>
              <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
              India's Complete Packaging Partner
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Fraunces, serif" }}>
              Packaging That Moves Your{" "}
              <span style={{ color: "#C08430" }}>Business Forward</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
              Packnivo sits between you and your packaging vendors — sourcing, negotiating, executing and delivering so you can focus on your core business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/catalogue" className="px-8 py-4 rounded-xl font-semibold text-base text-center text-white transition-all hover:opacity-90" style={{ backgroundColor: "#C08430" }}>
                Browse Catalogue
              </Link>
              <Link href="/contact" className="px-8 py-4 rounded-xl font-semibold text-base text-center text-white border transition-all hover:bg-white/10" style={{ borderColor: "rgba(255,255,255,0.3)" }}>
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>Six Solutions. One Partner.</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Every packaging need your business has — we have built a dedicated solution for it.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <div key={solution.name} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl mb-4">{solution.icon}</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>{solution.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{solution.description}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium" style={{ color: "#C08430" }}>
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>Browse by Category</h2>
            <p className="text-gray-600">60+ packaging products across 10 categories</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link key={cat.name} href="/catalogue" className="flex flex-col items-center p-6 rounded-2xl border border-gray-100 hover:border-amber-300 hover:shadow-md transition-all duration-300 text-center">
                <span className="text-3xl mb-3">{cat.icon}</span>
                <h3 className="text-sm font-semibold mb-1" style={{ color: "#0C2448" }}>{cat.name}</h3>
                <span className="text-xs text-gray-400">{cat.count}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/catalogue" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-white transition-all hover:opacity-90" style={{ backgroundColor: "#0C2448" }}>
              View Full Catalogue
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section style={{ backgroundColor: "#0C2448" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Fraunces, serif" }}>
                You are probably overpaying for packaging by{" "}
                <span style={{ color: "#C08430" }}>20%</span>
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                Send us your last packaging invoice. We will find you a better price — or tell you honestly that you are getting a good deal.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: "#C08430" }}>
                Send Your Invoice
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {whyUs.map((item) => (
                <div key={item.title} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="font-semibold mb-2 text-sm" style={{ color: "#C08430" }}>{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>
            Ready to optimise your packaging costs?
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            Join businesses across India that trust Packnivo for their packaging needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 rounded-xl font-semibold text-base text-white transition-all hover:opacity-90" style={{ backgroundColor: "#0C2448" }}>
              Start a Conversation
            </Link>
            <a href="https://wa.me/918368559892" className="px-8 py-4 rounded-xl font-semibold text-base border transition-all hover:bg-gray-50" style={{ borderColor: "#0C2448", color: "#0C2448" }}>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Widget */}
      <a href="https://wa.me/918368559892" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110" style={{ backgroundColor: "#25D366" }}>
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}