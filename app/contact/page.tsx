"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "bd65dd1c-c5c9-4887-80e9-64136fbca27c",
          ...form,
        }),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4" style={{ color: "#0C2448", fontFamily: "Fraunces, serif" }}>
          Get in Touch
        </h1>
        <p className="text-gray-600 mb-10">We respond within 5 minutes during business hours.</p>

        {status === "success" ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
            <p className="text-green-700 font-semibold text-lg">Message sent! We'll be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-6">
            {[
              { key: "name", label: "Full Name", type: "text", required: true },
              { key: "email", label: "Email", type: "email", required: true },
              { key: "company", label: "Company Name", type: "text", required: false },
              { key: "phone", label: "Phone Number", type: "tel", required: false },
            ].map(({ key, label, type, required }) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 mb-2">{label}{required && " *"}</label>
                <input
                  type={type}
                  required={required}
                  value={form[key as keyof typeof form]}
                  onChange={e => setForm({ ...form, [key]: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-400 text-sm"
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-400 text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-4 rounded-xl font-semibold text-white transition-all hover:opacity-90 disabled:opacity-50"
              style={{ backgroundColor: "#0C2448" }}
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
            {status === "error" && <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>}
          </form>
        )}
      </div>
    </main>
  );
}