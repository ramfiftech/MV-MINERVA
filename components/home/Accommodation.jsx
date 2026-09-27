import Image from "next/image";
import {
  BedDouble,
  Waves,
  DoorOpen,
  Bath,
  Ruler,
  Accessibility,
} from "lucide-react";

const accommodationData = {
  eyebrow: "Accommodation",
  title: "A place to slow down.",
  description:
    "The vessel offers 190 suites and cabins across four accommodation decks, combining spacious balcony suites, ocean-view cabins and comfortable interior accommodation designed for life at sea.",
  image: "/images/Accommodation.jpg",

  highlights: [
    {
      icon: BedDouble,
      title: "190 Suites & Cabins",
      description:
        "A total of 190 suites and cabins distributed across four accommodation decks.",
    },
    {
      icon: Waves,
      title: "Balcony Suites",
      description:
        "44 suites between the Sun Deck and Bridge Deck, ranging from 28 to 34 sq.m., with private balconies.",
    },
    {
      icon: DoorOpen,
      title: "Ocean-View Cabins",
      description:
        "56 Aegean Deck cabins with windows and 44 Baltic Deck cabins with two portholes.",
    },
    {
      icon: Bath,
      title: "Comfort & Amenities",
      description:
        "Cabins feature shower rooms, while suites include thoughtfully equipped bathrooms and in-room amenities.",
    },
  ],

  decks: [
    {
      deck: "Deck 8",
      name: "Sun Deck",
      category: "Category A",
      rooms: [
        "11 Double Balcony Suites",
        "1 Double Balcony Suite equipped for disabled use",
        "20 Balcony Suites",
      ],
    },
    {
      deck: "Deck 7",
      name: "Bridge Deck",
      category: "Category A",
      rooms: [
        "2 Owner’s Suites",
        "9 Balcony Suites",
        "1 Balcony Suite equipped for disabled use",
      ],
    },
    {
      deck: "Deck 5",
      name: "Aegean Deck",
      category: "Category B & D",
      rooms: [
        "56 Outside Cabins with windows",
        "24 Inside Cabins",
        "2 Inside Cabins equipped for disabled use",
      ],
    },
    {
      deck: "Deck 4",
      name: "Baltic Deck",
      category: "Category C & D",
      rooms: [
        "44 Outside Cabins with 2 portholes",
        "20 Inside Cabins",
      ],
    },
  ],

  amenities: [
    "Twin beds convertible to a double bed",
    "Mirrored vanities and chairs in suites",
    "Drawer and hanging storage",
    "In-room safes",
    "Mini-fridges",
    "Televisions and telephones",
    "Bathrobes and hair dryers in suites",
    "220V British-style electrical sockets",
    "Adaptors available",
    "Shower rooms in all cabins",
    "Glass-enclosed bathtubs in port-side suites",
    "Glass-enclosed showers in starboard-side suites",
  ],
};

export default function Accommodation() {
  return (
    <section
      id="accommodation"
      className="bg-[#f4f0e8] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Main Introduction */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative aspect-[6/5] overflow-hidden">
            <Image
              src={accommodationData.image}
              alt="Accommodation aboard the vessel"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#b99a63]" />

              <p className="text-xs uppercase tracking-[0.4em] text-[#b99a63]">
                {accommodationData.eyebrow}
              </p>
            </div>

            <h2 className="text-5xl leading-tight text-[#071923] md:text-6xl">
              {accommodationData.title}
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#071923]/65">
              {accommodationData.description}
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {accommodationData.highlights.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.title}>
                    <div className="mb-4 flex h-10 w-10 items-center justify-center border border-[#b99a63]/50 text-[#b99a63]">
                      <Icon size={19} strokeWidth={1.3} />
                    </div>

                    <h3 className="text-lg text-[#071923]">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#071923]/55">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Deck Accommodation */}
        <div className="mt-32">
          <div className="mb-12">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-[#b99a63]" />

              <p className="text-xs uppercase tracking-[0.4em] text-[#b99a63]">
                Accommodation by Deck
              </p>
            </div>

            <h2 className="max-w-3xl text-4xl leading-tight text-[#071923] md:text-5xl">
              Four decks. Different ways to experience life at sea.
            </h2>
          </div>

          <div className="grid gap-px bg-[#b99a63]/20 md:grid-cols-2">
            {accommodationData.decks.map((deck) => (
              <div
                key={deck.deck}
                className="bg-[#f4f0e8] p-8 md:p-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#b99a63]">
                      {deck.deck}
                    </p>

                    <h3 className="mt-2 text-2xl text-[#071923]">
                      {deck.name}
                    </h3>
                  </div>

                  <span className="border border-[#b99a63]/40 px-3 py-1 text-[7px] uppercase tracking-[0.2em] text-[#b99a63]">
                    {deck.category}
                  </span>
                </div>

                <div className="mt-7 space-y-3">
                  {deck.rooms.map((room) => (
                    <div
                      key={room}
                      className="flex items-start gap-3 text-sm leading-6 text-[#071923]/65"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#b99a63]" />
                      <span>{room}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suite Details */}
        <div className="mt-32 grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-[#b99a63]" />

              <p className="text-xs uppercase tracking-[0.4em] text-[#b99a63]">
                Suite & Cabin Details
              </p>
            </div>

            <h2 className="text-4xl leading-tight text-[#071923] md:text-5xl">
              Designed around your comfort.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-[#071923]/60">
              From spacious balcony suites to thoughtfully arranged interior
              cabins, every accommodation is designed to provide a comfortable
              experience throughout your journey.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {accommodationData.amenities.map((amenity) => (
              <div
                key={amenity}
                className="flex items-start gap-4 border-b border-[#071923]/10 pb-5"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b99a63]" />

                <p className="text-sm leading-6 text-[#071923]/70">
                  {amenity}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Specification */}
        <div className="mt-24 border-y border-[#b99a63]/30 py-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-3xl text-[#071923]">190</p>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[#b99a63]">
                Suites & Cabins
              </p>
            </div>

            <div>
              <p className="text-3xl text-[#071923]">4</p>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[#b99a63]">
                Accommodation Decks
              </p>
            </div>

            <div>
              <p className="text-3xl text-[#071923]">28–34 m²</p>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[#b99a63]">
                Balcony Suite Size
              </p>
            </div>

            <div>
              <p className="text-3xl text-[#071923]">220V</p>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[#b99a63]">
                Electrical Supply
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}