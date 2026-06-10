import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Packnivo | Packnivo Solutions Pvt Ltd",
  description: "India's trusted B2B packaging intermediary. Trade, source, and deliver packaging solutions across all industries.",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Packnivo Solutions Pvt Ltd",
  "alternateName": "Packnivo",
  "url": "https://packnivo.com",
  "logo": "https://packnivo.com/logo.png",
  "description": "India's trusted B2B packaging intermediary connecting businesses with verified packaging manufacturers and suppliers.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Third Floor, WZ-57, Village Budhela Vikaspuri",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110018",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-8368559892",
    "contactType": "sales",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/packnivo-solution-private-limited/",
    "https://www.facebook.com/profile.php?id=61590573095006",
    "https://share.google/PJKhcWJPCFXNj6QhM"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plusJakarta.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}