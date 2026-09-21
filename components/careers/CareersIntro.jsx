import { Ship, UsersRound } from "lucide-react";

export default function CareersIntro() {
  return (
    <section className="bg-[#f4f0e8] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#b99a63]" />

              <p className="text-xs uppercase tracking-[0.4em] text-[#b99a63]">
                Join Arabian Queen
              </p>
            </div>

            <h2 className="text-5xl leading-tight text-[#071923] md:text-6xl">
              Build the future
              <br />
              of cruise travel.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-[#071923]/70 md:text-lg">
            <p>
              Arabian Queen represents a new chapter for a distinguished
              cruise vessel and a broader vision for international tourism,
              hospitality and maritime investment.
            </p>

            <p>
              As the project develops, we are bringing together people with
              diverse expertise, creativity and a shared commitment to
              creating meaningful experiences for future guests.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <div className="border border-[#071923]/10 p-8 md:p-10">
            <Ship
              size={32}
              strokeWidth={1.2}
              className="mb-8 text-[#b99a63]"
            />

            <h3 className="text-2xl text-[#071923]">
              A new maritime chapter
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#071923]/65">
              Be part of the journey as Arabian Queen moves through its
              transformation and development.
            </p>
          </div>

          <div className="border border-[#071923]/10 p-8 md:p-10">
            <UsersRound
              size={32}
              strokeWidth={1.2}
              className="mb-8 text-[#b99a63]"
            />

            <h3 className="text-2xl text-[#071923]">
              People at the centre
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#071923]/65">
              We value collaboration, professionalism, curiosity and a
              commitment to creating exceptional experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}