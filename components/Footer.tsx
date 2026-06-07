import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0C2448" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="bg-white rounded-lg p-3 inline-block mb-6">
              <Image src="/logo.png" alt="Packnivo" width={140} height={45} className="h-10 w-auto" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              India's trusted B2B packaging intermediary. We connect businesses with the right packaging solutions — from trading to manufacturing collaboration.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://wa.me/918368559892" className="text-white/60 hover:text-white transition-colors text-sm font-medium">WhatsApp</a>
              <a href="https://www.linkedin.com/company/packnivo-solution-private-limited/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm font-medium">LinkedIn</a>
              <a href="https://www.facebook.com/profile.php?id=61590573095006" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm font-medium">Facebook</a>
              <a href="https://share.google/PJKhcWJPCFXNj6QhM" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm font-medium">Google</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Catalogue", "Solutions", "About Us", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(" ", "-")}`} className="text-white/60 hover:text-white text-sm transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>info@packnivo.com</li>
              <li>+91 83685 59892</li>
              <li>New Delhi, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">© 2025 Packnivo Solutions Pvt Ltd. All rights reserved.</p>
          <p className="text-white/40 text-sm">New Delhi, India</p>
        </div>
      </div>
    </footer>
  );
}