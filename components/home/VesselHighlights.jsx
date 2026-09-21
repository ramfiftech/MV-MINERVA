import Image from "next/image";
import { ArrowUpRight, Compass, Sparkles, Waves } from "lucide-react";

const highlights = [
  {
    icon: Waves,
    number: "01",
    title: "Life at Sea",
    text: "A journey shaped by the sea, destinations and the rhythm of maritime travel.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "New Experience",
    text: "A new identity and vision focused on hospitality, tourism and memorable experiences.",
  },
  {
    icon: Compass,
    number: "03",
    title: "Explore Further",
    text: "A platform connecting travellers with destinations across regions and cultures.",
  },
];

export default function VesselHighlights() {
  return (
    <section className="relative overflow-hidden bg-[#071923] px-6 py-24 text-white md:py-32" >
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#b99a63]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/minerva-gallery1.jpg"
              alt="Arabian Queen vessel"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#b99a63]">
              The Arabian Queen
            </p>

            <h2 className="mt-6 text-5xl leading-tight md:text-6xl">
              More than
              <br />
              a vessel.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/60">
              Arabian Queen represents a broader vision for international
              cruise travel, hospitality and destination-based experiences.
            </p>

            <div className="mt-12 space-y-8">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.number}
                    className="group flex gap-5 border-b border-white/10 pb-8"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#b99a63]/50">
                      <Icon
                        size={18}
                        strokeWidth={1.2}
                        className="text-[#b99a63]"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl">
                          {item.title}
                        </h3>

                        <span className="text-xs text-white/25">
                          {item.number}
                        </span>
                      </div>

                      <p className="mt-2 max-w-lg text-sm leading-6 text-white/45">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="/destinations"
              className="mt-10 inline-flex items-center gap-3 border border-white/20 px-7 py-4 text-xs uppercase tracking-[0.2em] transition hover:border-white hover:bg-white hover:text-[#071923]"
            >
              Explore Destinations
              <ArrowUpRight size={16} strokeWidth={1.2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}