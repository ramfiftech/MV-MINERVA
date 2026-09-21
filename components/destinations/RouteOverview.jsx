"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Globe2,
  MapPinned,
  Ship,
} from "lucide-react";
import DestinationCard from "./DestinationCard";

const destinations = [
  {
    id: "kochi",
    from: "Jeddah",
    to: "Kochi",
    href: "/routes/jeddah-kochi",
    image: "/images/kochi.jpg",
    tags: ["Maritime heritage", "Culture", "South India"],
    description:
      "A connection between the Red Sea and the Malabar Coast, bringing together maritime heritage, culture and the character of South India.",
  },
  {
    id: "indonesia",
    from: "Jeddah",
    to: "Indonesia",
    href: "/routes/jeddah-indonesia",
    image: "/images/indonesia.jpg",
    tags: ["Islands", "Cultural landscapes"],
    description:
      "A journey towards the diverse islands and cultural landscapes of Indonesia, connecting travellers with one of Asia's remarkable destinations.",
  },
  {
    id: "malaysia",
    from: "Jeddah",
    to: "Malaysia",
    href: "/routes/jeddah-malaysia",
    image: "/images/Malaysia.jpg",
    tags: ["Vibrant cities", "Tropical landscapes", "Culture"],
    description:
      "A route vision connecting the Arabian Peninsula with Malaysia's vibrant cities, tropical landscapes and cultural experiences.",
  },
];

const highlights = [
  {
    icon: Ship,
    title: "Cruise Travel",
    text: "Connecting destinations through the sea.",
  },
  {
    icon: Globe2,
    title: "International Vision",
    text: "A network extending across regions and cultures.",
  },
  {
    icon: MapPinned,
    title: "New Experiences",
    text: "Discovering destinations from a different perspective.",
  },
];

/* Route line: draws itself and the ship sails along it every time a route is selected */
function RouteLine({ from, to }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xl font-light text-white md:text-2xl">
        <span>{from}</span>
        <span>{to}</span>
      </div>

      <div className="relative mt-5 h-6">
        <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 bg-[#b99a63]" />
        <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 border border-[#b99a63]" />

        <span className="absolute inset-x-2 top-1/2 border-t border-dashed border-white/40" />
        <span className="route-fill absolute left-2 top-1/2 h-px bg-[#b99a63]" />

        <span className="route-ship absolute top-1/2 -translate-y-full text-[#b99a63]">
          <Ship size={18} strokeWidth={1.4} />
        </span>
      </div>
    </div>
  );
}

export default function RouteOverview() {
  const [active, setActive] = useState(0);
  const touchX = useRef(null);
  const current = destinations[active];

  const go = useCallback(
    (dir) =>
      setActive(
        (i) => (i + dir + destinations.length) % destinations.length
      ),
    []
  );

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  return (
    <section className="bg-[#f4f0e8] px-6 py-24 md:py-32">
      <style>{`
        @keyframes route-fill { from { width: 0 } to { width: calc(100% - 1rem) } }
        @keyframes route-ship { from { left: 0 } to { left: calc(100% - 1.125rem) } }
        .route-fill { animation: route-fill 1.6s cubic-bezier(.65,0,.35,1) both; }
        .route-ship { animation: route-ship 1.6s cubic-bezier(.65,0,.35,1) both; }
        @keyframes chip-in { from { opacity: 0; transform: translateY(6px) } to { opacity: 1; transform: none } }
        .chip-in { animation: chip-in .5s ease-out both; }
        @media (prefers-reduced-motion: reduce) {
          .route-fill { animation: none; width: calc(100% - 1rem); }
          .route-ship { animation: none; left: calc(100% - 1.125rem); }
          .chip-in { animation: none; }
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#b99a63]" />
              <p className="text-xs uppercase tracking-[0.4em] text-[#b99a63]">
                Our Routes
              </p>
            </div>

            <h2 className="text-5xl font-light leading-tight text-[#071923] md:text-6xl">
              Journeys
              <br />
              beyond borders.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-base leading-8 text-[#071923]/65 md:text-lg">
              Arabian Queen is envisioned as a platform for international
              cruise travel, connecting guests with destinations across
              different cultures, coastlines and regions.
            </p>

            <p className="mt-6 flex items-center gap-3 text-sm text-[#071923]/50">
              <span className="h-1.5 w-1.5 bg-[#b99a63]" />
              Select a route to preview it. On a phone, swipe the image.
            </p>
          </div>
        </div>

        {/* Interactive showcase */}
        <div className="mt-16 grid gap-6 md:mt-20 lg:grid-cols-[1fr_1.25fr]">
          {/* Image panel (first on mobile, right on desktop) */}
          <div
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className="relative aspect-[4/5] touch-pan-y overflow-hidden bg-[#071923] sm:aspect-[16/11] lg:order-2 lg:aspect-auto lg:min-h-[240px]"
          >
            {destinations.map((d, i) => (
              <Image
                key={d.id}
                src={d.image}
                alt={i === active ? `${d.from} to ${d.to}` : ""}
                fill
                priority={i === 0}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className={`object-cover transition-all duration-[900ms] ease-out ${
                  i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
                }`}
              />
            ))}

            {/* Readability gradients */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#071923]/50 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#071923]/90 via-[#071923]/40 to-transparent" />

            {/* Segmented progress, each segment is tappable */}
            <div className="absolute inset-x-6 top-4 flex gap-2 md:inset-x-9 md:top-7">
              {destinations.map((d, i) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show ${d.from} to ${d.to}`}
                  aria-current={i === active}
                  className="group flex h-8 flex-1 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b99a63]"
                >
                  <span
                    className={`h-0.5 w-full transition-colors duration-500 ${
                      i === active
                        ? "bg-[#b99a63]"
                        : "bg-white/35 group-hover:bg-white/60"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Route line + tags + arrows */}
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-9">
              <RouteLine key={current.id} from={current.from} to={current.to} />

              <div className="mt-7 flex items-end justify-between gap-4">
                <div
                  key={current.id}
                  className="flex flex-wrap gap-2"
                >
                  {current.tags.map((tag, i) => (
                    <span
                      key={tag}
                      style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                      className="chip-in border border-white/35 bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous route"
                    className="flex h-11 w-11 items-center justify-center border border-white/40 bg-black/20 text-white backdrop-blur-sm transition hover:border-[#b99a63] hover:bg-[#b99a63] hover:text-[#071923] active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b99a63]"
                  >
                    <ChevronLeft size={20} strokeWidth={1.4} />
                  </button>

                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next route"
                    className="flex h-11 w-11 items-center justify-center border border-white/40 bg-black/20 text-white backdrop-blur-sm transition hover:border-[#b99a63] hover:bg-[#b99a63] hover:text-[#071923] active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b99a63]"
                  >
                    <ChevronRight size={20} strokeWidth={1.4} />
                  </button>
                </div>
              </div>
            </div>

            <p className="sr-only" aria-live="polite">
              Showing {current.from} to {current.to}
            </p>
          </div>

          {/* Route selector */}
          <div className="flex flex-col gap-3 lg:order-1">
            {destinations.map((destination, i) => (
              <DestinationCard
                key={destination.id}
                index={i}
                active={i === active}
                onSelect={() => setActive(i)}
                {...destination}
              />
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-20 grid gap-4 border-t border-[#071923]/10 pt-12 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              tabIndex={0}
              className="group flex gap-5 border border-transparent p-6 transition duration-300 hover:-translate-y-1 hover:border-[#b99a63]/50 hover:bg-white focus-visible:-translate-y-1 focus-visible:border-[#b99a63]/50 focus-visible:bg-white focus-visible:outline-none active:translate-y-0 active:bg-white"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#b99a63]/50 text-[#b99a63] transition duration-300 group-hover:border-[#071923] group-hover:bg-[#071923] group-focus-visible:border-[#071923] group-focus-visible:bg-[#071923] group-active:border-[#071923] group-active:bg-[#071923]">
                <Icon size={24} strokeWidth={1.2} />
              </span>

              <div>
                <h3 className="text-lg text-[#071923]">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-[#071923]/55">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}