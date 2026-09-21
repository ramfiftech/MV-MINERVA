import Image from "next/image";
import {
  UtensilsCrossed,
  Wine,
  Coffee,
  Music,
} from "lucide-react";

const restaurantsData = {
  eyebrow: "Restaurants & Lounges",

  title: "Taste the journey.",

  description:
    "A collection of dining and social spaces envisioned to bring together exceptional food, conversation and memorable moments at sea.",

  image: "/images/minerva-gallery9.jpg",

  spaces: [
    {
      icon: UtensilsCrossed,
      title: "Restaurant",
      description:
        "A refined dining environment designed for relaxed meals and memorable evenings.",
    },
    {
      icon: Wine,
      title: "Lounge",
      description:
        "An elegant space to unwind, meet and enjoy the journey.",
    },
    {
      icon: Coffee,
      title: "Café",
      description:
        "A relaxed setting for coffee, refreshments and casual moments.",
    },
    {
      icon: Music,
      title: "Entertainment",
      description:
        "Spaces designed for social experiences, entertainment and evening gatherings.",
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

            <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {restaurantsData.spaces.map((space) => {
                const Icon = space.icon;

                return (
                  <div key={space.title}>
                    <Icon
                      size={28}
                      strokeWidth={1.2}
                      className="mb-5 text-[#b99a63]"
                    />

                    <h3 className="text-xl">
                      {space.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/45">
                      {space.description}
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
              alt="Restaurants and lounges"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}