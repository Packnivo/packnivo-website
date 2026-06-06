"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/catalogue", label: "Catalogue" },
    { href: "/solutions", label: "Solutions" },
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav style={{ backgroundColor: "#0C2448" }} className="sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-white rounded-lg p-2">
              <Image
                src="/logo.png"
                alt="Packnivo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white font-medium text-sm transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg font-semibold text-sm text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#C08430" }}
            >
              Get a Quote
            </Link>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-white/80 hover:text-white font-medium text-sm"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-3 px-5 py-2.5 rounded-lg font-semibold text-sm text-center text-white"
              style={{ backgroundColor: "#C08430" }}
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}