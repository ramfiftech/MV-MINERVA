import { ArrowUpRight, Compass } from "lucide-react";

export default function JourneyNote() {
  return (
    <section className="bg-[#f4f0e8] px-6 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="group relative overflow-hidden bg-[#f4f0e8] px-7 py-10 md:px-12 md:py-12">
          <div className="absolute left-0 top-0 h-full w-1 bg-[#b99a63]" />

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#b99a63]/40">
                <Compass
                  size={21}
                  strokeWidth={1.2}
                  className="text-[#b99a63]"
                />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#b99a63]">
                  The Journey Ahead
                </p>

                <h3 className="mt-2 text-2xl text-[#071923] md:text-3xl">
                  A new chapter is taking shape.
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-[#071923]/55">
                  Arabian Queen is being developed with a vision for
                  international cruise travel, hospitality and new
                  destination experiences.
                </p>
              </div>
            </div>

            <a
              href="/destinations"
              className="inline-flex shrink-0 items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#071923] transition-colors hover:text-[#b99a63]"
            >
              Explore
              <ArrowUpRight
                size={17}
                strokeWidth={1.2}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}