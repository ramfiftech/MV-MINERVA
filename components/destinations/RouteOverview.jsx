import { Globe2, MapPinned, Ship } from "lucide-react";
import DestinationCard from "./DestinationCard";

const destinations = [
  {
    number: "01",
    from: "Jeddah",
    to: "Kochi",
    image: "/images/jeddha1.png",
    description:
      "A connection between the Red Sea and the Malabar Coast, bringing together maritime heritage, culture and the character of South India.",
  },
  {
    number: "02",
    from: "Jeddah",
    to: "Indonesia",
    image: "/images/jeddha2.jpg",
    description:
      "A journey towards the diverse islands and cultural landscapes of Indonesia, connecting travellers with one of Asia's remarkable destinations.",
  },
  {
    number: "03",
    from: "Jeddah",
    to: "Malaysia",
    image: "/images/jeddha3.png",
    description:
      "A route vision connecting the Arabian Peninsula with Malaysia's vibrant cities, tropical landscapes and cultural experiences.",
  },
];

export default function RouteOverview() {
  return (
    <section className="bg-[#f4f0e8] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#b99a63]" />

              <p className="text-xs uppercase tracking-[0.4em] text-[#b99a63]">
                Our Routes
              </p>
            </div>

            <h2 className="text-5xl leading-tight text-[#071923] md:text-6xl">
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
          </div>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.number}
              {...destination}
            />
          ))}
        </div>

        <div className="mt-20 grid gap-6 border-t border-[#071923]/10 pt-12 md:grid-cols-3">
          <div className="flex gap-4">
            <Ship
              size={25}
              strokeWidth={1.2}
              className="shrink-0 text-[#b99a63]"
            />

            <div>
              <h3 className="text-lg text-[#071923]">
                Cruise Travel
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#071923]/55">
                Connecting destinations through the sea.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Globe2
              size={25}
              strokeWidth={1.2}
              className="shrink-0 text-[#b99a63]"
            />

            <div>
              <h3 className="text-lg text-[#071923]">
                International Vision
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#071923]/55">
                A network extending across regions and cultures.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <MapPinned
              size={25}
              strokeWidth={1.2}
              className="shrink-0 text-[#b99a63]"
            />

            <div>
              <h3 className="text-lg text-[#071923]">
                New Experiences
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#071923]/55">
                Discovering destinations from a different perspective.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}