import Image from "next/image";
import { BedDouble, Waves, Wifi, Tv } from "lucide-react";

const accommodationData = {
  eyebrow: "Accommodation",
  title: "A place to slow down.",
  description:
    "Thoughtfully designed accommodation combining comfort, privacy and the character of life at sea.",
  image: "/images/accommodation.JPG",

  features: [
    {
      icon: BedDouble,
      title: "Comfortable Rooms",
      description:
        "Relaxing spaces designed for comfort throughout your journey.",
    },
    {
      icon: Waves,
      title: "Ocean Experience",
      description:
        "Wake up surrounded by the atmosphere and rhythm of the sea.",
    },
    {
      icon: Wifi,
      title: "Modern Connectivity",
      description:
        "Essential connectivity and amenities for a comfortable stay.",
    },
    {
      icon: Tv,
      title: "In-Room Amenities",
      description:
        "Thoughtfully selected amenities designed around your comfort.",
    },
  ],
};

export default function Accommodation() {
  return (
    <section
      id="accommodation"
      className="bg-[#f4f0e8] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative aspect-[6/5] overflow-hidden">
            <Image
              src={accommodationData.image}
              alt={accommodationData.title}
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
              {accommodationData.features.map((feature) => {
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
      </div>
    </section>
  );
}