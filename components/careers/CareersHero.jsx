import Image from "next/image";

export default function CareersHero() {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-[#071923]">
      <Image
        src="/images/Careers.jpg"
        alt="Arabian Queen cruise vessel"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-[#071923]/65" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 md:pb-28">
        <div className="max-w-3xl text-white">
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#b99a63]">
            Careers
          </p>

          <h1 className="text-6xl leading-[0.95] md:text-8xl">
            Be part of
            <br />
            something new.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-white/75 md:text-lg">
            Join the team behind the transformation of MV Minerva into
            Arabian Queen and help shape a new chapter in international
            cruise tourism.
          </p>
        </div>
      </div>
    </section>
  );
}