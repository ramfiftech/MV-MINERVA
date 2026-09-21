import { ArrowUpRight } from "lucide-react";

const positions = [
  {
    title: "Future Opportunities",
    department: "Hospitality & Cruise Operations",
    location: "International",
  },
  {
    title: "Future Opportunities",
    department: "Guest Experience",
    location: "International",
  },
  {
    title: "Future Opportunities",
    department: "Marine & Technical Operations",
    location: "International",
  },
];

export default function OpenPositions() {
  return (
    <section className="bg-[#f4f0e8] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#b99a63]">
              Opportunities
            </p>

            <h2 className="mt-5 text-5xl text-[#071923] md:text-6xl">
              Open
              <br />
              Positions
            </h2>
          </div>

          <div>
            <p className="mb-10 max-w-2xl text-base leading-8 text-[#071923]/65">
              As Arabian Queen progresses through its development, career
              opportunities will be introduced across multiple areas of
              cruise operations, hospitality and tourism.
            </p>

            <div className="border-t border-[#071923]/15">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className="group flex flex-col gap-5 border-b border-[#071923]/15 py-7 transition hover:px-3 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <h3 className="text-xl text-[#071923]">
                      {position.title}
                    </h3>

                    <p className="mt-2 text-sm text-[#071923]/55">
                      {position.department} · {position.location}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={22}
                    strokeWidth={1.3}
                    className="text-[#b99a63] transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}