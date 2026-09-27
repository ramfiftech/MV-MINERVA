import Image from "next/image";
import {
  UtensilsCrossed,
  Wine,
  Coffee,
  Music,
  BookOpen,
  Users,
  Globe2,
} from "lucide-react";

const restaurantsData = {
  eyebrow: "Restaurants & Lounges",

  title: "Spaces to gather, dine and unwind.",

  description:
    "Minerva offers a collection of spacious restaurants, lounges and social areas designed around every mood — from quiet moments with a book and afternoon tea to lively evenings with friends, music and freshly prepared cuisine.",

  image: "/images/minerva-gallery9.jpg",

  restaurants: [
    {
      icon: UtensilsCrossed,
      title: "Verandah Buffet Restaurant",
      deck: "Bridge Deck 7",
      capacity: "Approximately 180 guests",
      description:
        "A spacious buffet restaurant extending across interior and exterior areas, offering a relaxed setting for meals throughout the journey.",
    },
    {
      icon: UtensilsCrossed,
      title: "Swan Restaurant",
      deck: "Main Deck 6",
      capacity: "Approximately 210 guests",
      description:
        "A welcoming dining venue where freshly prepared meals are served by a team of renowned chefs.",
    },
  ],

  lounges: [
    {
      icon: Users,
      title: "Orpheus Lounge",
      deck: "Promenade Deck 9",
      capacity: "Up to 145 guests",
      description:
        "A spacious lounge with panoramic views, leading directly onto an open deck for an unforgettable experience at sea.",
    },
    {
      icon: Globe2,
      title: "Internet Lounge",
      deck: "Bridge Deck 7",
      description:
        "A dedicated space for staying connected while travelling.",
    },
    {
      icon: Coffee,
      title: "Livingstone Lounge",
      deck: "Bridge Deck 7",
      description:
        "A comfortable social space for meeting friends, relaxing and enjoying the atmosphere on board.",
    },
    {
      icon: BookOpen,
      title: "Library / Card Room",
      deck: "Bridge Deck 7",
      description:
        "A quieter retreat for reading, puzzles, board games and relaxed moments away from the main social areas.",
    },
    {
      icon: Wine,
      title: "Wheeler Bar",
      deck: "Bridge Deck 7",
      description:
        "A refined setting for drinks, conversation and relaxed evenings.",
    },
    {
      icon: Wine,
      title: "Shackleton Bar",
      deck: "Main Deck 6",
      description:
        "A welcoming bar space designed for socialising and unwinding during the voyage.",
    },
    {
      icon: Music,
      title: "Darwin Lounge",
      deck: "Main Deck 6",
      description:
        "A relaxed lounge where guests can meet, listen to music and enjoy time together.",
    },
  ],
};

export default function RestaurantsLounges() {
  return (
    <section
      id="restaurants"
      className="bg-[#071923] px-6 py-24 text-white md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Intro */}
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div className="lg:order-1">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#b99a63]" />

              <p className="text-xs uppercase tracking-[0.4em] text-[#b99a63]">
                {restaurantsData.eyebrow}
              </p>
            </div>

            <h2 className="text-5xl leading-tight md:text-6xl">
              {restaurantsData.title}
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/60">
              {restaurantsData.description}
            </p>

            {/* Dining highlights */}
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {restaurantsData.restaurants.map((restaurant) => {
                const Icon = restaurant.icon;

                return (
                  <div
                    key={restaurant.title}
                    className="border-t border-white/10 pt-6"
                  >
                    <Icon
                      size={26}
                      strokeWidth={1.2}
                      className="mb-5 text-[#b99a63]"
                    />

                    <h3 className="text-xl">{restaurant.title}</h3>

                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[10px] uppercase tracking-[0.18em] text-[#b99a63]">
                      <span>{restaurant.deck}</span>

                      {restaurant.capacity && (
                        <span>{restaurant.capacity}</span>
                      )}
                    </div>

                    <p className="mt-4 text-sm leading-6 text-white/45">
                      {restaurant.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden lg:order-2">
            <Image
              src={restaurantsData.image}
              alt="Restaurants and lounges aboard Minerva"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Lounges & Social Spaces */}
        <div className="mt-32">
          <div className="mb-12">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-[#b99a63]" />

              <p className="text-xs uppercase tracking-[0.4em] text-[#b99a63]">
                Lounges & Social Spaces
              </p>
            </div>

            <h2 className="max-w-3xl text-4xl leading-tight md:text-5xl">
              Find your own way to spend the day.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/50">
              From panoramic lounges and bars to quiet corners for reading,
              playing games or simply listening to music, Minerva offers
              spaces to suit every mood.
            </p>
          </div>

          <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {restaurantsData.lounges.map((space) => {
              const Icon = space.icon;

              return (
                <div
                  key={space.title}
                  className="bg-[#071923] p-8 transition duration-300 hover:bg-white/[0.03] md:p-10"
                >
                  <Icon
                    size={26}
                    strokeWidth={1.2}
                    className="mb-6 text-[#b99a63]"
                  />

                  <h3 className="text-xl">{space.title}</h3>

                  <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#b99a63]">
                    {space.deck}
                  </p>

                  {space.capacity && (
                    <p className="mt-1 text-xs text-white/35">
                      {space.capacity}
                    </p>
                  )}

                  <p className="mt-5 text-sm leading-6 text-white/45">
                    {space.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dining Statement */}
        <div className="mt-24 border-y border-[#b99a63]/30 py-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-3xl text-white">2</p>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[#b99a63]">
                Restaurants
              </p>
            </div>

            <div>
              <p className="text-3xl text-white">7</p>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[#b99a63]">
                Lounges & Social Spaces
              </p>
            </div>

            <div>
              <p className="text-3xl text-white">145</p>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[#b99a63]">
                Orpheus Lounge Capacity
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}