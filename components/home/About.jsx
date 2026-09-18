import {
  Ship,
  Globe2,
  Hotel,
  UtensilsCrossed,
  UsersRound,
  Landmark,
  MapPinned,
  Handshake,
  ArrowUpRight,
} from "lucide-react";

export default function About() {
  const visionItems = [
    {
      title: "International Cruise Travel",
      icon: Globe2,
    },
    {
      title: "Premium Hospitality",
      icon: Hotel,
    },
    {
      title: "Dining & Entertainment",
      icon: UtensilsCrossed,
    },
    {
      title: "Family & Leisure Experiences",
      icon: UsersRound,
    },
    {
      title: "Cultural Tourism",
      icon: Landmark,
    },
    {
      title: "Destination-Based Travel",
      icon: MapPinned,
    },
    {
      title: "International Tourism Partnerships",
      icon: Handshake,
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#f4f0e8] px-6 py-24 md:py-32"
    >
      {/* Section Label */}
      <div className="mb-8 flex items-center justify-center gap-4 opacity-0 animate-fade-up [animation-delay:0.1s]">
        <span className="h-px w-10 bg-[#b99a63]/60" />

        <p className="text-xs font-medium uppercase tracking-[0.45em] text-[#b99a63]">
          About
        </p>

        <span className="h-px w-10 bg-[#b99a63]/60" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Heading + Introduction */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left */}
          <div>
            <div className="mb-6 flex h-12 w-12 items-center justify-center border border-[#b99a63]/40 text-[#b99a63]">
              <Ship size={22} strokeWidth={1.3} />
            </div>

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#b99a63]">
              A New Chapter
            </p>

            <h2 className="text-5xl leading-tight text-[#071923] md:text-6xl lg:text-7xl">
              From Minerva
              <br />
              to Arabian Queen.
            </h2>
          </div>

          {/* Right */}
          <div className="flex items-center">
            <p className="max-w-xl text-base leading-8 text-[#071923]/70 md:text-lg">
              Arabian White Rock Public Investment is pleased to announce
              the acquisition of the cruise vessel MV Minerva, marking an
              important milestone in our expansion into international
              cruise and maritime tourism.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-[#071923]/15" />

        {/* Investment Content */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Cruise Investment */}
          <div>
            <div className="mb-6 flex h-12 w-12 items-center justify-center border border-[#b99a63]/40 text-[#b99a63]">
              <Ship size={21} strokeWidth={1.3} />
            </div>

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#b99a63]">
              Our Cruise Investment
            </p>

            <h3 className="mb-6 text-3xl leading-tight text-[#071923] md:text-4xl">
              Building a distinctive
              <br />
              cruise experience.
            </h3>

            <p className="max-w-xl text-base leading-8 text-[#071923]/70">
              The acquisition reflects Arabian White Rock Public Investment's
              commitment to developing international tourism, hospitality,
              and maritime investment opportunities.
            </p>

            {/* Small highlight */}
            <div className="mt-8 inline-flex items-center gap-3 border-b border-[#b99a63]/50 pb-2 text-sm uppercase tracking-[0.2em] text-[#071923]">
              <span>Arabian Queen</span>
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="text-[#b99a63]"
              />
            </div>
          </div>

          {/* Vision */}
          <div id="vision">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-[#b99a63]">
              Our Vision
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {visionItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex items-center gap-4 border-b border-[#071923]/15 py-4 transition-all duration-300 hover:border-[#b99a63]"
                  >
                    {/* Icon */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#071923]/15 text-[#b99a63] transition-all duration-300 group-hover:border-[#b99a63] group-hover:bg-[#b99a63] group-hover:text-white">
                      <Icon size={17} strokeWidth={1.4} />
                    </div>

                    {/* Text */}
                    <p className="text-sm text-[#071923]/75 transition-colors duration-300 group-hover:text-[#071923]">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mx-auto mt-20 max-w-4xl text-center md:mt-28">
          <p className="font-serif text-3xl leading-relaxed text-[#071923] md:text-4xl lg:text-5xl">
            A new phase for the vessel, its future cruise operations,
            and a new journey in international tourism.
          </p>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-[#071923]/60 md:text-base">
            Arabian White Rock Public Investment is committed to developing
            Arabian Queen as part of its broader investment vision in
            international tourism and hospitality.
          </p>
        </div>
      </div>
    </section>
  );
}