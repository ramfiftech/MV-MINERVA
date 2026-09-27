import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
} from "lucide-react";

const footerGroups = [
  {
    title: "Explore",
    links: [
      { name: "The Vessel", href: "/#specifications" },
      { name: "Accommodation", href: "/#accommodation" },
      { name: "Restaurants & Lounges", href: "/#restaurants" },
      { name: "Destinations", href: "/destinations" },
      { name: "Gallery", href: "/gallery" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/#about" },
      { name: "Our Vision", href: "/#vision" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-white/[0.06] bg-[#071923]">
      {/* Background */}
      <div className="absolute inset-0 bg-[#071923]" />

      {/* Ambient glow */}
      <div className="absolute -bottom-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#b99a63]/[0.06] blur-[120px]" />

      {/* Top subtle line */}
      <div className="absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#b99a63]/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 md:py-20 lg:px-10">
        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          {/* ================= BRAND ================= */}
          <div className="lg:col-span-5">
            <Link href="/" className="group inline-flex flex-col">
              <span className="bg-gradient-to-r from-white via-white to-[#b99a63]/80 bg-clip-text text-[18px] font-light tracking-[0.34em] text-transparent transition-opacity duration-300 group-hover:opacity-80 sm:text-[20px]">
                ARABIAN QUEEN
              </span>

              <span className="mt-1.5 text-[7px] tracking-[0.45em] text-white/30">
                LUXURY CRUISE EXPERIENCE
              </span>
            </Link>

            <p className="mt-7 max-w-sm text-sm font-light leading-7 text-white/45">
              A new chapter in luxury maritime experiences, shaped by heritage,
              refined design and the timeless spirit of the sea.
            </p>

            <p className="mt-5 max-w-sm text-xs font-light leading-6 text-white/25">
              Arabian Queen, formerly MV Minerva, represents the next chapter in
              an iconic maritime journey.
            </p>

            {/* Gold divider */}
            <div className="mt-8 h-px w-16 bg-[#b99a63]/40" />

            {/* Tagline */}
            <p className="mt-5 text-[8px] uppercase tracking-[0.4em] text-[#b99a63]/60">
              Heritage • Luxury • The Sea
            </p>
          </div>

          {/* ================= NAVIGATION ================= */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-4">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <p className="mb-6 text-[9px] font-medium uppercase tracking-[0.35em] text-[#b99a63]">
                  {group.title}
                </p>

                <ul className="space-y-3.5">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-2 text-xs font-light tracking-wide text-white/50 transition-all duration-300 hover:text-white"
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#b99a63] transition-all duration-300 group-hover:w-full" />
                        </span>

                        <ArrowUpRight
                          size={11}
                          strokeWidth={1.4}
                          className="translate-y-0.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-70"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ================= CONNECT ================= */}
          <div className="lg:col-span-3">
            <p className="mb-6 text-[9px] font-medium uppercase tracking-[0.35em] text-[#b99a63]">
              Connect
            </p>

            <div className="space-y-5">
              <div>
                <p className="text-xs font-light uppercase tracking-[0.12em] text-white/70">
                  Arabian White Rock
                </p>
                <p className="mt-1 text-xs font-light text-white/35">
                  Public Investment
                </p>
              </div>

              {/* Contact */}
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-3 border border-[#b99a63]/40 bg-[#b99a63]/10 px-5 py-3 text-[9px] font-medium uppercase tracking-[0.2em] text-[#b99a63] transition-all duration-300 hover:border-[#b99a63] hover:bg-[#b99a63]/20"
              >
                Contact Us
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              {/* Email */}
              <Link
                href="mailto:info@arabianwhiterock.com"
                className="group flex items-center gap-3 text-xs font-light text-white/40 transition-colors hover:text-[#b99a63]"
              >
                <Mail size={14} strokeWidth={1.3} />
                <span>info@arabianwhiterock.com</span>
              </Link>

              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-2">
                {/* Instagram */}
                <Link
                  href="#"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center border border-white/10 text-white/40 transition-all duration-300 hover:border-[#b99a63]/50 hover:text-[#b99a63]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>

                {/* LinkedIn */}
                <Link
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center border border-white/10 text-white/40 transition-all duration-300 hover:border-[#b99a63]/50 hover:text-[#b99a63]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ================= DECORATIVE DIVIDER ================= */}
        <div className="my-14 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent md:my-16" />

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[10px] font-light tracking-wide text-white/25">
            © {new Date().getFullYear()} Arabian White Rock Public Investment.
            All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-[9px] uppercase tracking-[0.15em] text-white/25 transition-colors hover:text-[#b99a63]"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="text-[9px] uppercase tracking-[0.15em] text-white/25 transition-colors hover:text-[#b99a63]"
            >
              Terms
            </Link>

            <span className="h-3 w-px bg-white/10" />

            <span className="text-[8px] uppercase tracking-[0.25em] text-white/20">
              Arabian Queen
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}