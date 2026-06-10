import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Packaging Solutions | Packnivo Solutions Pvt Ltd",
  description: "Explore Packnivo's end-to-end packaging solutions — sourcing, procurement, quality checks, and pan India delivery for businesses of all sizes.",
}

import Link from "next/link";

const solutions = [
  {
    name: "PackTrade",
    icon: "ðŸ”„",
    tagline: "Buy. Sell. Import. Export.",
    description: "We handle the full trading cycle for packaging materials â€” sourcing from verified manufacturers, negotiating prices, managing imports and exports, and ensuring you get the best deal every time.",
    features: ["Price negotiation with 50+ vendors", "Import and export documentation", "GST compliant invoicing", "Bulk order discounts", "Quality verification before dispatch"],
  },
  {
    name: "PackServe",
    icon: "âš™ï¸",
    tagline: "End-to-end execution.",
    description: "From the moment you place a requirement to the moment packaging arrives at your facility â€” we manage every step. You give us the spec, we handle everything else.",
    features: ["Requirement analysis", "Vendor selection and RFQ", "Production monitoring", "Quality check at factory", "Doorstep delivery with GRN"],
  },
  {
    name: "PackAdvise",
    icon: "ðŸ’¡",
    tagline: "Cut costs. Improve design. Go sustainable.",
    description: "Our packaging consultants analyse your current spend, identify inefficiencies, recommend better materials, and help you build a sustainable packaging strategy â€” all backed by data.",
    features: ["Packaging cost audit", "Material optimisation", "Sustainability assessment", "Design improvement recommendations", "Supplier benchmarking"],
  },
  {
    name: "PackCommerce",
    icon: "ðŸ›’",
    tagline: "Packaging built for commerce.",
    description: "Whether you sell B2B, D2C or on e-commerce platforms â€” we build packaging solutions that protect your product, reduce returns, meet platform requirements and strengthen your brand.",
    features: ["Amazon and Flipkart compliant packaging", "D2C unboxing experience design", "Damage rate reduction", "Return packaging solutions", "Custom branded inserts"],
  },
  {
    name: "PackMake",
    icon: "ðŸ­",
    tagline: "Your manufacturing partner.",
    description: "For businesses that want to manufacture their own packaging â€” we connect you with the right production partners, manage tooling, sampling and production runs from start to finish.",
    features: ["Factory identification and vetting", "Tooling and die management", "Sample approval workflow", "Production run management", "Quality control at source"],
  },
  {
    name: "PackBridge",
    icon: "ðŸ¤",
    tagline: "Your packaging network.",
    description: "For agencies, brokers and partners who want to offer packaging solutions to their clients without building the capability in-house â€” we are your backend partner.",
    features: ["White-label packaging solutions", "Revenue share model", "Dedicated account manager", "Co-branded proposals", "Partner portal access"],
  },
];

export default function Solutions() {
  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: "#0C2448" }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Fraunces, serif" }}>
              Our Solutions
            </h1>
            <p className="text-white/70 text-lg">
              Six purpose-built solutions covering every packaging need your business has â€” from trading to manufacturing to sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <div key={solution.name} className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="text-4xl mb-4">{solution.icon}</div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>
                      {solution.name}
                    </h2>
                    <p className="font-semibold mb-4" style={{ color: "#C08430" }}>{solution.tagline}</p>
                    <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90"
                      style={{ backgroundColor: "#0C2448" }}
                    >
                      Enquire About {solution.name}
                    </Link>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: "#0C2448" }}>
                      What is included
                    </h3>
                    <ul className="space-y-3">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                          <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: "#C08430" }}>âœ“</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#0C2448" }} className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "Fraunces, serif" }}>
            Not sure which solution fits you?
          </h2>
          <p className="text-white/70 mb-8">
            Tell us about your business and packaging needs. We will recommend the right solution.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#C08430" }}
          >
            Talk to Us
          </Link>
        </div>
      </section>
    </>
  );
}