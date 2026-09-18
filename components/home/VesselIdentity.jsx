import Image from "next/image";
import {
  Ship,
  ArrowDown,
  BadgeCheck,
  Building2,
} from "lucide-react";

export default function VesselIdentity() {
  return (
    <section
      id="vessel"
      className="relative min-h-[80vh] w-full overflow-hidden bg-black py-24 md:py-32"
    >
      {/* Background Image */}
      <Image
        src="/images/minerva-hero.jpg"
        alt="Arabian Queen cruise vessel, formerly MV Minerva"
        fill
        sizes="100vw"
        className="object-cover opacity-50"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/80" />
      <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center text-white">

        {/* Eyebrow */}
        <div className="mb-8 flex items-center gap-4 opacity-0 animate-fade-up [animation-delay:0.1s]">
          <span className="h-px w-10 bg-[#b99a63]/60" />

          <div className="flex items-center gap-2">
            <Ship
              size={14}
              strokeWidth={1.5}
              className="text-[#b99a63]"
            />

            <p className="text-xs font-medium uppercase tracking-[0.45em] text-[#b99a63]">
              Vessel Identity
            </p>
          </div>

          <span className="h-px w-10 bg-[#b99a63]/60" />
        </div>

        {/* Name Transformation */}
        <div className="opacity-0 animate-fade-up [animation-delay:0.25s]">
          <p className="text-sm uppercase tracking-[0.35em] text-white/50">
            MV Minerva
          </p>

          <div className="my-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#b99a63]/40" />

            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#b99a63]/40 bg-[#b99a63]/10">
              <ArrowDown
                size={14}
                strokeWidth={1.5}
                className="text-[#b99a63]"
              />
            </div>

            <span className="h-px w-8 bg-[#b99a63]/40" />
          </div>

          <h2 className="text-5xl font-light tracking-tight md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-white via-white to-[#b99a63]/80 bg-clip-text text-transparent">
              Arabian Queen
            </span>
          </h2>
        </div>

        {/* Divider */}
        <div className="my-14 h-px w-24 bg-[#b99a63]/30 opacity-0 animate-fade-up [animation-delay:0.4s]" />

        {/* Info Cards */}
        <div className="grid w-full max-w-4xl grid-cols-1 gap-8 opacity-0 animate-fade-up [animation-delay:0.55s] sm:grid-cols-3">

          {/* Former Name */}
          <div className="group border border-white/10 bg-white/5 px-6 py-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b99a63]/40">
            <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center border border-white/10 text-white/60 transition-all duration-300 group-hover:border-[#b99a63]/50 group-hover:text-[#b99a63]">
              <Ship size={18} strokeWidth={1.4} />
            </div>

            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#b99a63]">
              Former Name
            </p>

            <p className="text-xl font-light tracking-wide md:text-2xl">
              MV Minerva
            </p>
          </div>

          {/* New Identity */}
          <div className="group border border-[#b99a63]/30 bg-[#b99a63]/10 px-6 py-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b99a63]/60">
            <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center border border-[#b99a63]/30 text-[#b99a63] transition-all duration-300 group-hover:bg-[#b99a63] group-hover:text-white">
              <BadgeCheck size={18} strokeWidth={1.4} />
            </div>

            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#b99a63]">
              New Identity
            </p>

            <p className="text-xl font-light tracking-wide text-[#b99a63] md:text-2xl">
              Arabian Queen
            </p>
          </div>

          {/* Owner */}
          <div className="group border border-white/10 bg-white/5 px-6 py-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b99a63]/40">
            <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center border border-white/10 text-white/60 transition-all duration-300 group-hover:border-[#b99a63]/50 group-hover:text-[#b99a63]">
              <Building2 size={18} strokeWidth={1.4} />
            </div>

            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#b99a63]">
              Owner
            </p>

            <p className="text-xl font-light tracking-wide md:text-2xl">
              Arabian White Rock
            </p>

            <p className="mt-1 text-sm text-white/60">
              Public Investment
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}