"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "bd65dd1c-c5c9-4887-80e9-64136fbca27c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
    setLoading(false);
  }

  return (
    <>
      <section style={{ backgroundColor: "#0C2448" }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Fraunces, serif" }}>Get in Touch</h1>
            <p className="text-white/70 text-lg">Send us your packaging requirement and we will respond within 5 minutes during business hours.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h2 className="text-xl font-bold mb-6" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>Send us a message</h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "#0C2448" }}>Message Sent Successfully</h3>
                  <p className="text-gray-600 text-sm">We will get back to you within 5 minutes during business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="subject" value="New Enquiry from packnivo.com" />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input type="text" name="name" required placeholder="Full name" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input type="text" name="company" placeholder="Your company" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" name="phone" required placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" name="email" required placeholder="you@company.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Packaging Requirement</label>
                    <textarea rows={4} name="message" required placeholder="Tell us what packaging you need — product type, quantity, budget, timeline..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 resize-none"></textarea>
                  </div>
                  <button type="submit" disabled={loading} className="w-full py-3 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90" style={{ backgroundColor: "#C08430" }}>
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                  <p className="text-xs text-gray-400 text-center">We respond within 5 minutes during business hours (Mon–Sat, 9AM–8PM IST)</p>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold mb-4" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>Contact Details</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-3"><span className="text-lg">📧</span><span>info@packnivo.com</span></div>
                  <div className="flex items-center gap-3"><span className="text-lg">📱</span><span>+91 83685 59892</span></div>
                  <div className="flex items-center gap-3"><span className="text-lg">📍</span><span>Third Floor, WZ-57, Village Budhela Vikaspuri, New Delhi — 110018</span></div>
                  <div className="flex items-center gap-3"><span className="text-lg">🕐</span><span>Mon–Sat, 9AM–8PM IST</span></div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold mb-4" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>WhatsApp Us</h3>
                <p className="text-sm text-gray-600 mb-4">Fastest way to reach us. Send your requirement directly on WhatsApp and get a response within minutes.</p>
                <a href="https://wa.me/918368559892" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90" style={{ backgroundColor: "#25D366" }}>Chat on WhatsApp</a>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold mb-4" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>IndiaMART</h3>
                <p className="text-sm text-gray-600 mb-4">Find us on IndiaMART for verified business enquiries and bulk orders.</p>
                <a href="https://indiamart.com" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90 border" style={{ borderColor: "#0C2448", color: "#0C2448" }}>View on IndiaMART</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}