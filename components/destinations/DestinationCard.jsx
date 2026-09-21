"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";

export default function DestinationCard({
  index,
  from,
  to,
  description,
  href,
  active,
  onSelect,
}) {
  return (
    <article
      className={`relative overflow-hidden border transition-all duration-500 ${
        active
          ? "border-transparent bg-white shadow-[0_24px_50px_-28px_rgba(7,25,35,0.4)]"
          : "border-[#071923]/10 hover:border-[#b99a63]/60 hover:bg-white/60"
      }`}
    >
      {/* Gold selection bar */}
      <span
        aria-hidden="true"
        className={`absolute left-0 top-0 h-full w-[3px] origin-top bg-[#b99a63] transition-transform duration-500 ${
          active ? "scale-y-100" : "scale-y-0"
        }`}
      />

      {/* Whole row is the tap target */}
      <button
        type="button"
        onClick={onSelect}
        aria-expanded={active}
        aria-controls={`route-desc-${index}`}
        className="group flex min-h-[88px] w-full items-center justify-between gap-6 p-6 text-left transition active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[#b99a63] md:p-8"
      >
        <span>
          <span className="block text-xs text-[#b99a63]">{from} to</span>

          <span
            className={`mt-1 block text-2xl font-light transition-colors duration-300 md:text-3xl ${
              active
                ? "text-[#071923]"
                : "text-[#071923]/50 group-hover:text-[#071923]"
            }`}
          >
            {to}
          </span>
        </span>

        <span
          aria-hidden="true"
          className={`flex h-10 w-10 shrink-0 items-center justify-center border transition-all duration-500 ${
            active
              ? "rotate-90 border-[#071923] bg-[#071923] text-[#b99a63]"
              : "border-[#071923]/15 text-[#071923]/50 group-hover:border-[#b99a63] group-hover:text-[#b99a63]"
          }`}
        >
          <ChevronRight size={18} strokeWidth={1.4} />
        </span>
      </button>

      {/* Smooth expand / collapse */}
      <div
        id={`route-desc-${index}`}
        aria-hidden={!active}
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${
          active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-7 md:px-8 md:pb-9">
            <p className="max-w-md text-sm leading-7 text-[#071923]/60">
              {description}
            </p>

            <Link
              href={href}
              tabIndex={active ? 0 : -1}
              className="group/cta mt-6 inline-flex items-center gap-2 border-b border-[#b99a63] pb-1 text-sm text-[#071923] transition-colors hover:text-[#b99a63] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b99a63]"
            >
              Explore {to} journey
              <ArrowUpRight
                size={16}
                strokeWidth={1.3}
                className="text-[#b99a63] transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}