import {
  Compass,
  Globe2,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

const values = [
  {
    icon: Globe2,
    title: "Global Perspective",
    text: "Work within a project connected to international tourism and destinations.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    text: "Bring new ideas to a changing and evolving hospitality experience.",
  },
  {
    icon: HeartHandshake,
    title: "Collaboration",
    text: "Work with people from different disciplines, cultures and backgrounds.",
  },
  {
    icon: Compass,
    title: "Purpose",
    text: "Contribute to building a distinctive future experience for cruise travellers.",
  },
];

export default function CareersValues() {
  return (
    <section className="bg-[#071923] px-6 py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#b99a63]">
            What We Value
          </p>

          <h2 className="text-5xl leading-tight md:text-6xl">
            People who want
            <br />
            to make an impact.
          </h2>
        </div>

        <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-2">
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-[#071923] p-8 transition duration-300 hover:bg-[#0b2633] md:p-10"
              >
                <Icon
                  size={30}
                  strokeWidth={1.2}
                  className="mb-8 text-[#b99a63]"
                />

                <h3 className="text-2xl">{item.title}</h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/60">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}