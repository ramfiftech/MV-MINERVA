import { ArrowUpRight } from "lucide-react";

export default function DestinationsCTA() {
  return (
    <section className="bg-[#071923] px-6 py-24 text-white md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-[#b99a63]">
          The Journey Ahead
        </p>

        <h2 className="mt-6 text-5xl leading-tight md:text-7xl">
          The world is waiting.
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/60 md:text-base">
          Arabian Queen represents a new vision for international cruise
          travel, hospitality and destination-based experiences.
        </p>

        <a
          href="/#contact"
          className="mt-10 inline-flex items-center gap-3 border border-white/30 px-8 py-4 text-xs uppercase tracking-[0.25em] transition hover:border-white hover:bg-white hover:text-[#071923]"
        >
          Get in Touch
          <ArrowUpRight size={16} strokeWidth={1.3} />
        </a>
      </div>
    </section>
  );
}