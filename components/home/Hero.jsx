import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative h-screen min-h-[700px] pt-5 w-full overflow-hidden bg-black"
      id="home"
    >
      {/* Background Image */}
      <Image
        src="/images/minerva-hero1.jpg"
        alt="Arabian Queen cruise vessel, formerly MV Minerva"
        fill
        priority
        sizes="100vw"
        className="object-cover scale-105 animate-hero-zoom"
      />

      {/* Layered gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />

      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_180px_60px_rgba(0,0,0,0.55)]" />

      {/* Content – extra bottom padding on larger screens to clear the scroll indicator */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 pt-20 pb-28 text-center text-white sm:px-6 md:pt-24 md:pb-32 lg:pb-36">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center justify-center gap-3 opacity-0 animate-fade-up [animation-delay:0.1s] sm:mb-6 sm:gap-4">
            <span className="h-px w-8 bg-[#b99a63]/60 sm:w-10" />
            <p className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-[#b99a63] sm:text-xs sm:tracking-[0.45em]">
              Formerly M/V&nbsp;Minerva
            </p>
            <span className="h-px w-8 bg-[#b99a63]/60 sm:w-10" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-light leading-[1.08] tracking-tight opacity-0 animate-fade-up [animation-delay:0.25s] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Welcome to
            <br />
            <span className="bg-gradient-to-r from-white via-white to-[#b99a63]/80 bg-clip-text font-normal text-transparent">
              Arabian Queen
            </span>
          </h1>

          {/* Subtext */}
          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/80 opacity-0 animate-fade-up [animation-delay:0.4s] sm:mt-7 sm:max-w-2xl sm:text-base sm:leading-7 md:text-lg">
            A new chapter in international cruise tourism, hospitality,
            and maritime investment.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 opacity-0 animate-fade-up [animation-delay:0.55s] sm:mt-11 sm:flex-row sm:gap-4">
            <a
              href="#about"
              className="group inline-flex items-center gap-2.5 border border-[#b99a63] bg-[#b99a63] px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] text-black transition-all duration-300 hover:bg-transparent hover:text-[#b99a63] sm:px-8 sm:py-4 sm:text-xs sm:tracking-[0.2em]"
            >
              Discover Arabian Queen
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 border border-[#b99a63]/50 px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-[#b99a63] hover:bg-[#b99a63]/10 hover:text-[#b99a63] sm:px-8 sm:py-4 sm:text-xs sm:tracking-[0.2em]"
            >
              Get in Touch
            </a>
          </div>

          {/* Stats strip */}
          <div className="mx-auto mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-[#b99a63]/25 pt-6 opacity-0 animate-fade-up [animation-delay:0.7s] sm:mt-16 sm:max-w-2xl sm:gap-8 sm:pt-8">
            {[
              { value: "1990", label: "Built" },
              { value: "12,500", label: "Gross Tonnage" },
              { value: "400+", label: "Guest Capacity" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-lg font-light tracking-wide text-[#b99a63] sm:text-xl md:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[9px] uppercase tracking-[0.2em] text-white/60 sm:mt-1 sm:text-[10px] sm:tracking-[0.25em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator – kept clear of the stats */}
      <div className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-white sm:bottom-6 md:bottom-8">
        <div className="flex flex-col items-center gap-2.5 sm:gap-3">
          <span className="text-[9px] uppercase tracking-[0.28em] text-[#b99a63]/80 sm:text-[10px] sm:tracking-[0.3em]">
            Scroll
          </span>
          <div className="relative h-10 w-px overflow-hidden bg-white/25 sm:h-12">
            <div className="absolute inset-x-0 top-0 h-1/2 w-full animate-scroll-line bg-[#b99a63]" />
          </div>
        </div>
      </div>
    </section>
  );
}