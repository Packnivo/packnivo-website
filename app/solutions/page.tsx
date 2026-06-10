import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Packaging Solutions | Packnivo Solutions Pvt Ltd",
  description: "Explore Packnivo end-to-end packaging solutions - sourcing, procurement, quality checks, and pan India delivery for businesses of all sizes.",
}

import Link from "next/link";

const solutions = [
  {
    name: "PackTrade",
    icon: "PT",
    tagline: "Buy. Sell. Import. Export.",
    description: "We handle the full trading cycle for packaging materials - sourcing from verified manufacturers, negotiating prices, managing imports and exports, and ensuring you get the best deal every time.",
    features: ["Price negotiation with 50+ vendors", "Import and export documentation", "GST compliant invoicing", "Bulk order discounts", "Quality verification before dispatch"],
  },
  {
    name: "PackServe",
    icon: "PS",
    tagline: "End-to-end execution.",
    description: "From the moment you place a requirement to the moment packaging arrives at your facility - we manage every step. You give us the spec, we handle everything else.",
    features: ["Requirement analysis", "Vendor selection and RFQ", "Production monitoring", "Quality check at factory", "Doorstep delivery with GRN"],
  },
  {
    name: "PackAdvise",
    icon: "PA",
    tagline: "Cut costs. Improve design. Go sustainable.",
    description: "Our packaging consultants analyse your current spend, identify inefficiencies, recommend better materials, and help you build a sustainable packaging strategy - all backed by data.",
    features: ["Packaging cost audit", "Material optimisation", "Sustainability assessment", "Design improvement recommendations", "Supplier benchmarking"],
  },
  {
    name: "PackCommerce",
    icon: "PC",
    tagline: "Packaging built for commerce.",
    description: "Whether you sell B2B, D2C or on e-commerce platforms - we build packaging solutions that protect your product, reduce returns, meet platform requirements and strengthen your brand.",
    features: ["Amazon and Flipkart compliant packaging", "D2C unboxing experience design", "Damage rate reduction", "Return packaging solutions", "Custom branded inserts"],
  },
  {
    name: "PackMake",
    icon: "PM",
    tagline: "Your manufacturing partner.",
    description: "For businesses that want to manufacture their own packaging - we connect you with the right production partners, manage tooling, sampling and production runs from start to finish.",
    features: ["Factory identification and vetting", "Tooling and die management", "Sample approval workflow", "Production run management", "Quality control at source"],
  },
  {
    name: "PackBridge",
    icon: "PB",
    tagline: "Your packaging network.",
    description: "For agencies, brokers and partners who want to offer packaging solutions to their clients without building the capability in-house - we are your backend partner.",
    features: ["White-label packaging supply", "Revenue sharing model", "Dedicated account manager", "Priority fulfilment", "Co-branded documentation"],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section style={{ backgroundColor: "#0C2448" }} className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Fraunces, serif" }}>
            Our Solutions
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Six specialised services covering every packaging need - from sourcing and trading to consulting and commerce.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <div key={s.name} className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-sm font-bold text-white" style={{ backgroundColor: "#0C2448" }}>
                {s.icon}
              </div>
              <h2 className="text-xl font-bold mb-1" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>{s.name}</h2>
              <p className="text-sm font-medium mb-3" style={{ color: "#C08430" }}>{s.tagline}</p>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{s.description}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {s.features.map((f) => (
                  <li key={f} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="mt-0.5 text-green-500">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-auto text-center py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: "#0C2448" }}>
                Enquire About {s.name}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}