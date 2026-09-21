export default function GalleryCTA() {
  return (
    <section className="bg-[#071923] px-6 py-24 text-center md:py-32">
      <p className="text-xs uppercase tracking-[0.4em] text-[#b99a63]">
        Arabian Queen
      </p>

      <h2 className="mx-auto mt-6 max-w-3xl text-5xl leading-tight text-white md:text-7xl">
        From heritage
        <br />
        to a new horizon.
      </h2>

      <a
        href="/destinations"
        className="mt-10 inline-flex border border-white/40 px-8 py-4 text-xs uppercase tracking-[0.25em] text-white transition hover:border-white hover:bg-white hover:text-[#071923]"
      >
        Explore Destinations
      </a>
    </section>
  );
}