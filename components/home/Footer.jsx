import Link from "next/link";

const navLinks = [
      { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "The Vessel", href: "#vessel" },
  { name: "Our Vision", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-black border-t border-white/5">
      {/* Subtle background accents */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-black/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#b99a63]/8 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-4">
            <Link
              href="/"
              className="inline-block text-xl font-light tracking-[0.3em] text-white transition-colors duration-300 hover:text-[#b99a63]"
            >
              <span className="bg-gradient-to-r from-white to-[#b99a63]/80 bg-clip-text text-transparent">
                ARABIAN QUEEN
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm font-light leading-relaxed text-white/50">
              A new chapter in luxury maritime investment.
              <br />
              Owned by Arabian White Rock Public Investment.
            </p>

            {/* Gold divider */}
            <div className="mt-8 h-px w-16 bg-[#b99a63]/40" />
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-4 md:col-start-6">
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.35em] text-[#b99a63]">
              Explore
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-light tracking-wide text-white/60 transition-colors duration-300 hover:text-[#b99a63]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4 md:col-start-10">
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.35em] text-[#b99a63]">
              Connect
            </p>
            <div className="space-y-4">
              <p className="text-sm font-light text-white/60">
                Arabian White Rock
                <br />
                Public Investment
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center border border-[#b99a63]/40 bg-[#b99a63]/10 px-6 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-[#b99a63] transition-all duration-300 hover:border-[#b99a63] hover:bg-[#b99a63]/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs font-light tracking-wide text-white/40">
            © {new Date().getFullYear()} Arabian White Rock Public Investment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}