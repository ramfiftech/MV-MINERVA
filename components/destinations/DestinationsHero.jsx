import Image from "next/image";

export default function DestinationsHero() {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-[#071923]">
      <Image
        src="/images/minerva-gallery2.jpg"
        alt="Arabian Queen destination journey"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#071923]/60" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 md:pb-28">
        <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#b99a63]">
          Destinations
        </p>

        <h1 className="max-w-4xl text-6xl leading-[0.95] text-white md:text-8xl">
          Discover new
          <br />
          horizons.
        </h1>

        <p className="mt-8 max-w-xl text-base leading-8 text-white/75 md:text-lg">
          A vision for connecting travellers with remarkable destinations
          across the Indian Ocean and beyond.
        </p>
      </div>
    </section>
  );
}