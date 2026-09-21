import Image from "next/image";

export default function GalleryHero() {
  return (
    <section className="relative flex min-h-[65vh] items-end overflow-hidden bg-[#071923]">
      <Image
        src="/images/minerva-gallery1.jpg"
        alt="Arabian Queen"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 md:pb-28">
        <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#b99a63]">
          Gallery
        </p>

        <h1 className="max-w-4xl text-6xl leading-[0.95] text-white md:text-8xl">
          A glimpse of
          <br />
          Arabian Queen.
        </h1>

        <p className="mt-7 max-w-xl text-base leading-8 text-white/75">
          Discover the vessel, its character and the vision behind its
          transformation.
        </p>
      </div>
    </section>
  );
}