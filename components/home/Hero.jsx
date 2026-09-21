
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Ship } from "lucide-react";

const routes = [
  {
    id: "kochi",
    to: "Kochi",
    description:
      "The Red Sea to the Malabar Coast, bringing together maritime heritage, culture and South India.",
  },
  {
    id: "indonesia",
    to: "Indonesia",
    description:
      "Diverse islands and cultural landscapes, connecting travellers with one of Asia's remarkable destinations.",
  },
  {
    id: "malaysia",
    to: "Malaysia",
    description:
      "The Arabian Peninsula linked with Malaysia's vibrant cities, tropical landscapes and cultural experiences.",
  },
];

const facts = [
  { value: "1990", label: "Built" },
  { value: "12,500", label: "Gross tonnage" },
  { value: "400+", label: "Guest capacity" },
];

/* The line draws itself and the ship sails along it each time a route is picked */
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
        <span className="hero-route-fill absolute left-2 top-1/2 h-px bg-[#b99a63]" />

        <span className="hero-route-ship absolute top-1/2 -translate-y-full text-[#b99a63]">
          <Ship size={18} strokeWidth={1.4} />
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const current = routes[active];

  const onTabKeyDown = (e) => {
    const dir =
      e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;

    if (!dir) return;

    e.preventDefault();

    const next = (active + dir + routes.length) % routes.length;

    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const rise = (delay) => ({ "--d": `${delay}s` });

  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-[#071923]"
    >
      <style>{`
        @keyframes hero-rise {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes hero-swap {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes hero-route-fill {
          from {
            width: 0;
          }
          to {
            width: calc(100% - 1rem);
          }
        }

        @keyframes hero-route-ship {
          from {
            left: 0;
          }
          to {
            left: calc(100% - 1.125rem);
          }
        }

        .hero-rise {
          opacity: 0;
          animation: hero-rise 0.9s cubic-bezier(.2,.7,.2,1) forwards;
          animation-delay: var(--d, 0s);
        }

        .hero-swap {
          animation: hero-swap 0.45s ease-out both;
        }

        .hero-route-fill {
          animation: hero-route-fill 1.6s cubic-bezier(.65,0,.35,1) both;
        }

        .hero-route-ship {
          animation: hero-route-ship 1.6s cubic-bezier(.65,0,.35,1) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-swap {
            animation: none;
          }

          .hero-rise {
            animation: none;
            opacity: 1;
          }

          .hero-route-fill {
            animation: none;
            width: calc(100% - 1rem);
          }

          .hero-route-ship {
            animation: none;
            left: calc(100% - 1.125rem);
          }
        }
      `}</style>

      {/* Background */}
      <Image
        src="/images/minerva-hero1.jpg"
        alt="Arabian Queen cruise vessel, formerly MV Minerva"
        fill
        priority
        sizes="100vw"
        className="
          object-cover
          object-[50%_50%]
          sm:object-[50%_50%]
          md:object-[50%_50%]
          lg:object-[50%_50%]
          xl:object-[50%_50%]
        "
      />

      {/* Brand-colour overlays */}
      <div className="absolute inset-0 bg-[#071923]/25" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#071923]/85 via-[#071923]/40 to-[#071923]/5" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#071923] via-[#071923]/30 to-[#071923]/55" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-10 pt-32 md:pb-14">
        <div className="grid items-end gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">

          {/* Left: message */}
          <div>
            <p
              style={rise(0.1)}
              className="hero-rise mb-6 flex items-center gap-3 text-sm text-[#b99a63]"
            >
              <span className="h-px w-10 bg-[#b99a63]/70" />
              Formerly M/V Minerva
            </p>

            <h1
              style={rise(0.25)}
              className="hero-rise text-5xl font-light leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl xl:text-8xl"
            >
              Welcome to
              <br />
              Arabian Queen
            </h1>

            <p
              style={rise(0.4)}
              className="hero-rise mt-6 max-w-xl text-base leading-8 text-white/80 md:text-lg"
            >
              A new chapter in international cruise tourism, hospitality and
              maritime investment.
            </p>

            <div
              style={rise(0.55)}
              className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <a
                href="#about"
                className="inline-flex h-13 min-h-[52px] items-center justify-center bg-[#b99a63] px-8 text-sm font-medium text-[#071923] transition duration-300 hover:bg-white active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b99a63]"
              >
                Discover Arabian Queen
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-[52px] items-center justify-center border border-white/40 bg-[#071923]/20 px-8 text-sm text-white backdrop-blur-sm transition duration-300 hover:border-[#b99a63] hover:text-[#b99a63] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b99a63]"
              >
                Get in touch
              </a>
            </div>

            <dl
              style={rise(0.7)}
              className="hero-rise mt-12 flex gap-8 border-t border-white/15 pt-6 sm:gap-14"
            >
              {facts.map((fact) => (
                <div key={fact.label} className="flex flex-col-reverse">
                  <dt className="mt-1 text-xs text-white/60">
                    {fact.label}
                  </dt>

                  <dd className="text-2xl font-light text-[#b99a63] sm:text-3xl">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: interactive route preview */}
          <div
            style={rise(0.85)}
            className="hero-rise border border-white/15 bg-[#071923]/55 p-6 backdrop-blur-md sm:p-8"
          >
            <p className="mb-5 text-sm text-white/70">
              Preview a route from Jeddah
            </p>

            <div
              role="tablist"
              aria-label="Choose a destination"
              className="relative grid grid-cols-3 border-b border-white/15"
            >
              {routes.map((route, i) => (
                <button
                  key={route.id}
                  ref={(el) => (tabRefs.current[i] = el)}
                  id={`hero-tab-${route.id}`}
                  role="tab"
                  type="button"
                  aria-selected={i === active}
                  aria-controls="hero-route-panel"
                  tabIndex={i === active ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={onTabKeyDown}
                  className={`min-h-[48px] px-2 py-3.5 text-sm transition-colors duration-300 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#b99a63] ${
                    i === active
                      ? "text-white"
                      : "text-white/50 hover:text-white/85"
                  }`}
                >
                  {route.to}
                </button>
              ))}

              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-0.5 w-1/3 bg-[#b99a63] transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(${active * 100}%)`,
                }}
              />
            </div>

            <div
              id="hero-route-panel"
              role="tabpanel"
              aria-labelledby={`hero-tab-${current.id}`}
              aria-live="polite"
              className="pt-7"
            >
              <RouteLine
                key={current.id}
                from="Jeddah"
                to={current.to}
              />

              <p
                key={`desc-${current.id}`}
                className="hero-swap mt-6 min-h-[5.25rem] text-sm leading-7 text-white/75"
              >
                {current.description}
              </p>

              <a
                href="#contact"
                className="group mt-5 flex min-h-[52px] items-center justify-between border border-[#b99a63]/60 px-5 text-sm text-white transition duration-300 hover:bg-[#b99a63] hover:text-[#071923] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b99a63]"
              >
                Enquire about {current.to}

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.4}
                  className="text-[#b99a63] transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#071923]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll button (desktop) */}
      <a
        href="#about"
        aria-label="Scroll to the next section"
        className="group absolute bottom-14 right-6 z-10 hidden h-12 w-12 items-center justify-center border border-white/30 text-white transition duration-300 hover:border-[#b99a63] hover:text-[#b99a63] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b99a63] xl:flex"
      >
        <ArrowDown
          size={18}
          strokeWidth={1.4}
          className="transition-transform duration-300 group-hover:translate-y-1"
        />
      </a>
    </section>
  );
}

