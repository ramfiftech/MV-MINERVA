"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#about" },
  { name: "The Vessel", href: "/#specifications" },
  { name: "Destinations", href: "/destinations" },
  { name: "Gallery", href: "/gallery" },
  { name: "Our Vision", href: "/#vision" },
  { name: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      {/* Background */}
      <div className="absolute inset-0 bg-[#071923]/70 backdrop-blur-md border-b border-white/5" />

      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-6 md:py-5">
        {/* Logo */}
        <Link
          href="/"
          className="relative z-10 text-base font-light tracking-[0.3em] text-white transition-colors duration-300 hover:text-[#b99a63] md:text-lg"
        >
          <span className="bg-gradient-to-r from-white to-[#b99a63]/80 bg-clip-text text-transparent">
            ARABIAN QUEEN
          </span>
        </Link>

        {/* Desktop links – only from lg and up */}
        <ul className="hidden items-center gap-8 lg:gap-10 lg:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="relative text-[10px] font-medium uppercase tracking-[0.22em] text-white/70 transition-colors duration-300 hover:text-[#b99a63]"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#b99a63] transition-all duration-300 group-hover:w-full hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Contact – only from lg and up */}
        <div className="hidden lg:block">
          <Link
            href="/#contact"
            className="inline-flex items-center border border-[#b99a63]/40 bg-[#b99a63]/10 px-5 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#b99a63] transition-all duration-300 hover:border-[#b99a63] hover:bg-[#b99a63]/20"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger – visible on mobile + tablet (up to lg) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span
            className={`h-px w-6 bg-white transition-all duration-300 ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-white transition-all duration-300 ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Full-screen menu – mobile + tablet */}
      <div
        className={`fixed inset-0 z-40 bg-[#071923]/70 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Close button */}
        <button
          onClick={closeMenu}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center text-white/80 transition-colors hover:text-[#b99a63] md:right-6 md:top-6"
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex h-full flex-col items-center justify-center gap-7 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-sm font-medium uppercase tracking-[0.3em] text-white/85 transition-colors duration-300 hover:text-[#b99a63]"
            >
              {link.name}
            </Link>
          ))}

          <div className="mt-6 h-px w-14 bg-[#b99a63]/30" />

          <Link
            href="/#contact"
            onClick={closeMenu}
            className="mt-2 border border-[#b99a63]/50 bg-[#b99a63]/10 px-9 py-3 text-xs font-medium uppercase tracking-[0.22em] text-[#b99a63] transition-all duration-300 hover:bg-[#b99a63]/20"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}