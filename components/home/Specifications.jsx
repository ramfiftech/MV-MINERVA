import Image from "next/image";
import {
  Ship,
  Ruler,
  UsersRound,
  CalendarDays,
  Gauge,
  Anchor,
} from "lucide-react";

const specificationsData = {
  eyebrow: "Specifications",

  title: "The vessel.",

  description:
    "A distinctive maritime platform being developed under the new identity of Arabian Queen.",

  specifications: [
    {
      icon: Ship,
      label: "Vessel",
      value: "Arabian Queen",
    },
    {
      icon: Anchor,
      label: "Former Name",
      value: "MV Minerva",
    },
    {
      icon: CalendarDays,
      label: "Year",
      value: "2002",
    },
    {
      icon: Ruler,
      label: "Length",
      value: "180 m",
    },
    {
      icon: UsersRound,
      label: "Guest Capacity",
      value: "2000",
    },
    {
      icon: Gauge,
      label: "Cruising Speed",
      value: "20 knots",
    },
  ],
};

export default function Specifications() {
  return (
    <section
      id="specifications"
      className="relative min-h-screen w-full overflow-hidden bg-[#071923] py-24 md:py-32"
    >
      {/* Background Image */}
      <Image
        src="/images/minerva-hero.jpg"
        alt="Arabian Queen cruise vessel, formerly MV Minerva"
        fill
        sizes="100vw"
        className="object-cover opacity-40"
      />

      {/* Dark Overlays */}
      <div className="absolute inset-0 bg-[#071923]/40" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-3xl opacity-0 animate-fade-up [animation-delay:0.1s]">
          {/* Eyebrow */}
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

          {/* Title */}
          <h2 className="text-5xl font-light tracking-tight text-white md:text-7xl">
            <span className="bg-gradient-to-r from-white via-white to-[#b99a63]/80 bg-clip-text text-transparent">
              {specificationsData.title}
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            {specificationsData.description}
          </p>
        </div>

        {/* Divider */}
        <div className="my-14 h-px w-24 bg-[#b99a63]/30 opacity-0 animate-fade-up [animation-delay:0.25s]" />

        {/* Specifications Grid */}
        <div className="grid w-full grid-cols-1 border-l border-t border-white/10 opacity-0 animate-fade-up [animation-delay:0.4s] sm:grid-cols-2 lg:grid-cols-3">
          {specificationsData.specifications.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group border-b border-r border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-[#b99a63]/10 hover:border-[#b99a63]/40 md:p-9"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center border border-white/10 text-white/60 transition-all duration-300 group-hover:border-[#b99a63]/50 group-hover:text-[#b99a63]">
                  <Icon size={20} strokeWidth={1.3} />
                </div>

                {/* Label */}
                <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-[#b99a63]">
                  {item.label}
                </p>

                {/* Value */}
                <p className="mt-2 text-2xl font-light tracking-wide text-white md:text-3xl">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <p className="mt-8 max-w-2xl text-xs leading-6 text-white/40 opacity-0 animate-fade-up [animation-delay:0.55s]">
          Vessel specifications will be updated as the Arabian Queen
          development and technical assessment progresses.
        </p>
      </div>
    </section>
  );
}