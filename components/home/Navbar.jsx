
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
     {name:"Home", href:"/"},
  {
    name: "The Vessel",
    href: "/#specifications",
    children: [
       
      { name: "Overview", href: "/#about" },
      { name: "Specifications", href: "/#specifications" },
      { name: "Accommodation", href: "/#accommodation" },
      { name: "Restaurants & Lounges", href: "/#restaurants" },
    ],
  },
  {
    name: "Destinations",
    href: "/destinations",
  },
  {
    name: "Explore",
    href: "/gallery",
    children: [
      { name: "Gallery", href: "/gallery" },
      { name: "Destinations", href: "/destinations" },
    ],
  },
     { name: "Careers", href: "/careers" },
  {
    name: "Company",
    href: "/#about",
    children: [
      { name: "About Us", href: "/#about" },
      { name: "Our Vision", href: "/#vision" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      {/* Background */}
      <div className="absolute inset-0 border-b border-white/[0.06] bg-[#071923]/80 backdrop-blur-xl" />

      <nav className="relative mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* LOGO */}
        <Link
          href="/"
          onClick={closeMobile}
          className="group relative z-50 flex flex-col"
        >
          <span className="text-[15px] font-light tracking-[0.32em] text-white transition-colors duration-300 group-hover:text-[#b99a63] sm:text-[17px]">
            ARABIAN QUEEN
          </span>

          <span className="mt-1 text-[7px] tracking-[0.42em] text-white/40">
            LUXURY CRUISE EXPERIENCE
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center lg:flex">

          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.children && setActiveDropdown(item.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="group flex items-center gap-1.5 px-4 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/65 transition-colors duration-300 hover:text-white"
                >
                  {item.name}

                  {item.children && (
                    <ChevronDown
                      size={12}
                      strokeWidth={1.5}
                      className={`transition-transform duration-300 ${
                        activeDropdown === item.name
                          ? "rotate-180 text-[#b99a63]"
                          : ""
                      }`}
                    />
                  )}

                  <span className="absolute bottom-1 left-4 h-px w-0 bg-[#b99a63] transition-all duration-300 group-hover:w-[calc(100%-32px)]" />
                </Link>

                {/* DROPDOWN */}
                {item.children && activeDropdown === item.name && (
                  <div className="absolute left-1/2 top-full w-[250px] -translate-x-1/2 pt-3">
                    <div className="overflow-hidden border border-white/[0.08] bg-[#071923]/95 shadow-2xl backdrop-blur-2xl">

                      {/* Small gold line */}
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#b99a63] to-transparent" />

                      <div className="p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="group flex items-center justify-between px-4 py-3.5 text-[10px] uppercase tracking-[0.16em] text-white/60 transition-all duration-300 hover:bg-white/[0.04] hover:text-[#b99a63]"
                          >
                            <span>{child.name}</span>

                            <ArrowUpRight
                              size={13}
                              strokeWidth={1.5}
                              className="translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0 group-hover:opacity-100"
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* CONTACT */}
          <Link
            href="/#contact"
            className="ml-5 inline-flex items-center gap-2 border border-[#b99a63]/50 bg-[#b99a63]/10 px-5 py-2.5 text-[9px] font-medium uppercase tracking-[0.2em] text-[#b99a63] transition-all duration-300 hover:border-[#b99a63] hover:bg-[#b99a63]/20"
          >
            Contact
            <ArrowUpRight size={13} strokeWidth={1.5} />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center text-white lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X size={25} strokeWidth={1.2} />
          ) : (
            <Menu size={25} strokeWidth={1.2} />
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 bg-[#071923]/98 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 pb-10 pt-28">

          {/* Mobile Navigation */}
          <div className="mx-auto w-full max-w-md">

            {navItems.map((item, index) => {
              const hasChildren = item.children?.length > 0;
              const isExpanded = mobileExpanded === item.name;

              return (
                <div
                  key={item.name}
                  className="border-b border-white/[0.08]"
                >
                  <div className="flex items-center justify-between">

                    <Link
                      href={item.href}
                      onClick={hasChildren ? undefined : closeMobile}
                      className="flex-1 py-5 text-[12px] font-medium uppercase tracking-[0.24em] text-white/80 transition-colors hover:text-[#b99a63]"
                    >
                      <span className="mr-4 text-[9px] text-[#b99a63]/50">
                        0{index + 1}
                      </span>

                      {item.name}
                    </Link>

                    {hasChildren && (
                      <button
                        onClick={() =>
                          setMobileExpanded(
                            isExpanded ? null : item.name
                          )
                        }
                        className="flex h-12 w-12 items-center justify-center text-white/50"
                        aria-label={`Expand ${item.name}`}
                      >
                        <ChevronDown
                          size={17}
                          strokeWidth={1.2}
                          className={`transition-transform duration-300 ${
                            isExpanded ? "rotate-180 text-[#b99a63]" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* SUBMENU */}
                  <div
                    className={`grid transition-all duration-300 ${
                      isExpanded
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="mb-4 ml-8 border-l border-[#b99a63]/20 pl-5">
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={closeMobile}
                            className="block py-3 text-[10px] uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-[#b99a63]"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* MOBILE CONTACT */}
            <Link
              href="/#contact"
              onClick={closeMobile}
              className="mt-10 flex items-center justify-center gap-3 border border-[#b99a63]/50 bg-[#b99a63]/10 px-6 py-4 text-[10px] font-medium uppercase tracking-[0.22em] text-[#b99a63] transition-all hover:bg-[#b99a63]/20"
            >
              Contact Arabian Queen
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </Link>

            {/* FOOTER TEXT */}
            <div className="mt-14 text-center">
              <div className="mx-auto mb-4 h-px w-12 bg-[#b99a63]/30" />

              <p className="text-[8px] uppercase tracking-[0.35em] text-white/25">
                Luxury • Heritage • The Sea
              </p>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}

