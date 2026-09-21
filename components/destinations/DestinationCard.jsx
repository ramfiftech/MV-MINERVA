import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function DestinationCard({
  number,
  from,
  to,
  description,
  image,
}) {
  return (
    <article className="group overflow-hidden bg-white">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={`${from} to ${to}`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center border border-white/50 bg-black/20 text-xs text-white backdrop-blur-sm">
          {number}
        </div>
      </div>

      <div className="p-7 md:p-9">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#b99a63]">
              From
            </p>

            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#071923]">
              {from}
            </p>
          </div>

          <div className="h-px w-10 bg-[#b99a63]" />

          <div className="text-right">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#b99a63]">
              To
            </p>

            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#071923]">
              {to}
            </p>
          </div>
        </div>

        <p className="mt-7 text-sm leading-7 text-[#071923]/60">
          {description}
        </p>

        <div className="mt-7 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#071923]">
          Explore journey

          <ArrowUpRight
            size={16}
            strokeWidth={1.3}
            className="text-[#b99a63] transition group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
      </div>
    </article>
  );
}