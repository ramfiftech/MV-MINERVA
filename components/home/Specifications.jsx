import Image from "next/image";
import {
  Ship,
  Ruler,
  Waves,
  Gauge,
  CalendarDays,
  Factory,
  Zap,
  LifeBuoy,
  UsersRound,
  Anchor,
  ShipWheel,
} from "lucide-react";

const specificationsData = {
  eyebrow: "Vessel Specifications",

  title: "The vessel.",

  description:
    "A distinctive ocean-going vessel with a length of 135.10 metres, designed with spacious accommodation, multiple dining and lounge areas, and a comprehensive range of safety and tender craft.",

  specifications: [
    {
      icon: Ruler,
      label: "Length Overall",
      value: "135.10 m",
    },
    {
      icon: Ruler,
      label: "Beam",
      value: "20 m",
    },
    {
      icon: Waves,
      label: "Draft",
      value: "6.11 m",
    },
    {
      icon: Gauge,
      label: "Cruising Speed",
      value: "14 Knots",
    },
    {
      icon: Factory,
      label: "Builder",
      value: "Okean Nikolaev – Mariotti Genova",
    },
    {
      icon: CalendarDays,
      label: "Year Built",
      value: "1996",
    },
    {
      icon: Zap,
      label: "Engines",
      value: "2",
    },
    {
      icon: ShipWheel,
      label: "Total Power",
      value: "6,920 kW",
    },
  ],

  safetyCraft: [
    {
      icon: LifeBuoy,
      title: "Tenders / Life Boats",
      quantity: "2",
      type: "Motor lifeboat / Partially enclosed",
      details: [
        "117 persons each as tender",
        "150 persons each as lifeboat",
      ],
    },
    {
      icon: LifeBuoy,
      title: "Life Boat",
      quantity: "1",
      type: "Motor lifeboat / Partially enclosed",
      details: ["Capacity: 150 persons"],
    },
    {
      icon: LifeBuoy,
      title: "Rescue Boats",
      quantity: "2",
      type: "Motor lifeboat / Open",
      details: ["Capacity: 6 persons each"],
    },
  ],

  tenders: [
    {
      title: "Zodiac",
      type: "Inflatable boat",
      capacity: "15 persons including driver",
      engine: "YAMAHA Outboard motor — 50 HP",
    },
    {
      title: "VIPER",
      type: "Tender boat",
      capacity: "10 persons including driver",
      engine: "2 × YAMAHA Outboard motor — 200 HP",
    },
    {
      title: "STORM 498",
      type: "Tender boat",
      capacity: "6 persons including driver",
      engine: "YAMAHA Outboard motor — 50 HP",
    },
  ],
};

export default function Specifications() {
  return (
    <section
      id="specifications"
      className="relative w-full overflow-hidden bg-[#071923] py-24 md:py-32"
    >
      {/* Background Image */}
      <Image
        src="/images/minerva-hero.jpg"
        alt="MV Minerva vessel"
        fill
        sizes="100vw"
        className="object-cover opacity-30"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#071923]/60" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#071923]/30 via-[#071923]/80 to-[#071923]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-3xl opacity-0 animate-fade-up [animation-delay:0.1s]">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-[#b99a63]/60" />

            <div className="flex items-center gap-2">
              <Ship
                size={14}
                strokeWidth={1.5}
                className="text-[#b99a63]"
              />

              <p className="text-xs font-medium uppercase tracking-[0.45em] text-[#b99a63]">
                {specificationsData.eyebrow}
              </p>
            </div>
          </div>

          <h2 className="text-5xl font-light tracking-tight text-white md:text-7xl">
            <span className="bg-gradient-to-r from-white via-white to-[#b99a63]/80 bg-clip-text text-transparent">
              {specificationsData.title}
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            {specificationsData.description}
          </p>
        </div>

        {/* Divider */}
        <div className="my-14 h-px w-24 bg-[#b99a63]/30" />

        {/* ============================= */}
        {/* Main Specifications */}
        {/* ============================= */}

        <div className="mb-10 flex items-center gap-4">
          <span className="h-px w-8 bg-[#b99a63]" />

          <p className="text-xs uppercase tracking-[0.4em] text-[#b99a63]">
            Technical Specifications
          </p>
        </div>

        <div className="grid w-full grid-cols-1 border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {specificationsData.specifications.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group border-b border-r border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#b99a63]/40 hover:bg-[#b99a63]/10 md:p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center border border-white/10 text-white/60 transition-all duration-300 group-hover:border-[#b99a63]/50 group-hover:text-[#b99a63]">
                  <Icon size={20} strokeWidth={1.3} />
                </div>

                <p className="mt-7 text-[10px] uppercase tracking-[0.3em] text-[#b99a63]">
                  {item.label}
                </p>

                <p className="mt-2 text-xl font-semibold leading-8 tracking-wide text-white md:text-2xl">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* ============================= */}
        {/* Life Boats */}
        {/* ============================= */}

        <div className="mt-28">
          <div className="mb-10">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-8 bg-[#b99a63]" />

              <p className="text-xs uppercase tracking-[0.4em] text-[#b99a63]">
                Life Boats & Rescue Craft
              </p>
            </div>

            <h3 className="text-4xl font-light text-white md:text-5xl">
              Safety at sea.
            </h3>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50">
              The vessel is equipped with dedicated lifeboats, tenders and
              rescue boats to support operations and safety at sea.
            </p>
          </div>

          <div className="grid gap-px bg-white/10 lg:grid-cols-3">
            {specificationsData.safetyCraft.map((craft) => {
              const Icon = craft.icon;

              return (
                <div
                  key={craft.title}
                  className="bg-[#071923] p-8 transition duration-300 hover:bg-white/[0.03] md:p-10"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex h-11 w-11 items-center justify-center border border-white/10 text-[#b99a63]">
                      <Icon size={20} strokeWidth={1.3} />
                    </div>

                    <span className="text-3xl font-light text-white">
                      {craft.quantity}
                    </span>
                  </div>

                  <h4 className="mt-7 text-xl text-white">
                    {craft.title}
                  </h4>

                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#b99a63]">
                    {craft.type}
                  </p>

                  <div className="mt-6 space-y-2">
                    {craft.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-start gap-3 text-sm leading-6 text-white/50"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#b99a63]" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================= */}
        {/* Tenders */}
        {/* ============================= */}

        <div className="mt-28">
          <div className="mb-10">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-8 bg-[#b99a63]" />

              <p className="text-xs uppercase tracking-[0.4em] text-[#b99a63]">
                Tenders
              </p>
            </div>

            <h3 className="text-4xl font-light text-white md:text-5xl">
              Beyond the vessel.
            </h3>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50">
              A selection of dedicated tender and inflatable boats supports
              guest transfers and operations beyond the main vessel.
            </p>
          </div>

          <div className="grid gap-px bg-white/10 md:grid-cols-3">
            {specificationsData.tenders.map((tender) => (
              <div
                key={tender.title}
                className="bg-[#071923] p-8 transition duration-300 hover:bg-white/[0.03] md:p-10"
              >
                <Anchor
                  size={26}
                  strokeWidth={1.2}
                  className="text-[#b99a63]"
                />

                <h4 className="mt-6 text-2xl font-light text-white">
                  {tender.title}
                </h4>

                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#b99a63]">
                  {tender.type}
                </p>

                <div className="mt-7 space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                      Capacity
                    </p>

                    <p className="mt-1 text-sm leading-6 text-white/60">
                      {tender.capacity}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                      Engine
                    </p>

                    <p className="mt-1 text-sm leading-6 text-white/60">
                      {tender.engine}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================= */}
        {/* Key Figures */}
        {/* ============================= */}

      

        {/* Note */}
        <p className="mt-8 max-w-3xl text-xs leading-6 text-white/35">
          Vessel specifications and equipment details are presented based on
          the available technical information for MV Minerva. Specifications
          may be subject to technical assessment and future development.
        </p>
      </div>
    </section>
  );
}