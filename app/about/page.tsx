import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Packnivo Solutions Pvt Ltd",
  description: "Learn about Packnivo — India's trusted B2B packaging intermediary. Meet our mission, values, and the team connecting businesses with verified packaging suppliers pan India.",
}

import Link from "next/link";

const values = [
  { title: "Honest", desc: "If you are getting a good price from your current supplier, we will tell you. We only work with you if we can genuinely add value." },
  { title: "Transparent", desc: "No hidden charges. No surprise fees. Every cost is broken down clearly before you commit to any order." },
  { title: "Reliable", desc: "We reply within 5 minutes. We deliver on time. We do what we say we will do â€” every single time." },
  { title: "Expert", desc: "Packaging is all we do. That focus means we know more about packaging markets, prices and materials than generalist suppliers." },
];

const team = [
  { name: "Founder", role: "Packnivo Solutions Pvt Ltd", desc: "Built Packnivo from the ground up to solve a real problem â€” Indian businesses overpaying for packaging because they lack market information and vendor access." },
];

const milestones = [
  { year: "Before 2026", event: "Key members of our team built strong relationships across India's packaging ecosystem, connecting with manufacturers, converters, suppliers and service providers across multiple packaging categories." },
  { year: "Before 2026", event: "A reliable vendor network was established across corrugated, flexible, rigid and customized packaging solutions, creating the foundation for a trusted sourcing ecosystem." },
  { year: "May 2026", event: "Packnivo Solutions Pvt Ltd was incorporated in New Delhi with a vision to simplify packaging procurement and supply-chain management for businesses across India." },
  { year: "2026", event: "Six specialized solution verticals introduced â€” PackTrade, PackServe, PackAdvise, PackCommerce, PackMake and PackBridge." },
  { year: "2026", event: "Digital platform launched to streamline packaging sourcing, supplier discovery, consultation and business operations." },
  { year: "2026â€“2027", event: "Expanding our supplier network and customer base to serve businesses across India with reliable, transparent and cost-effective packaging solutions." },
  { year: "Our Goal", event: "Become India's most trusted packaging ecosystem, connecting brands, manufacturers and service providers through a single technology-driven platform." },
];

export default function About() {
  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: "#0C2448" }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Fraunces, serif" }}>
              About Packnivo
            </h1>
            <p className="text-white/70 text-lg">
              We built Packnivo because Indian businesses deserve better packaging partners â€” ones that are honest, expert and genuinely on their side.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>
                Why we started Packnivo
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most businesses in India have no idea if they are getting a fair price for their packaging. They have one or two suppliers, no benchmark data, and no time to go looking for better options.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Packnivo sits in the middle â€” between businesses and packaging manufacturers. We have the vendor relationships, the market data and the expertise to get our clients better packaging at better prices.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our model is simple. We save you money on packaging. In return, you give us your packaging business. Everyone wins.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
  { value: "Pan India", label: "Delivery coverage across all states" },
  { value: "5 min", label: "Maximum response time to enquiries" },
  { value: "50+", label: "Verified vendor partners" },
  { value: "6", label: "Purpose-built solution verticals" },
].map((stat) => (
                <div key={stat.label} className="p-6 rounded-2xl text-center" style={{ backgroundColor: "rgba(12,36,72,0.04)" }}>
                  <div className="text-2xl font-bold mb-2" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>
              How we work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-lg mb-3" style={{ color: "#C08430", fontFamily: "Fraunces, serif" }}>{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>
              Our journey
            </h2>
          </div>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="text-sm font-bold" style={{ color: "#C08430" }}>{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-px bg-gray-200 self-stretch relative">
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-white" style={{ backgroundColor: "#0C2448" }}></div>
                </div>
                <div className="pb-6">
                  <p className="text-gray-600 text-sm leading-relaxed">{milestone.event}</p>
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
            Ready to work with us?
          </h2>
          <p className="text-white/70 mb-8">
            Send us your packaging requirement and we will get back to you within 5 minutes.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: "#C08430" }}>
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}