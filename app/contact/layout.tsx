import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Packnivo Solutions Pvt Ltd",
  description: "Get in touch with Packnivo — call, email, or fill the enquiry form. We respond within 5 minutes during business hours. Based in New Delhi, serving pan India.",
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}