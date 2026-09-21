import { Mail } from "lucide-react";

export default function CareersCTA() {
  return (
    <section className="bg-[#b99a63] px-6 py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <Mail size={30} strokeWidth={1.2} className="mb-6 text-white" />

        <h2 className="text-4xl text-white md:text-5xl">
          Interested in joining us?
        </h2>

        <p className="mt-5 max-w-xl text-sm leading-7 text-white/80">
          Stay connected for future career opportunities with Arabian
          Queen.
        </p>

        <a
          href="mailto:info@arabianwhiterock.com"
          className="mt-8 border border-white px-8 py-4 text-xs uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-[#071923]"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}