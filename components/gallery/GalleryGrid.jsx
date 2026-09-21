import Image from "next/image";

const images = [
  {
    src: "/images/minerva-gallery2.jpg",
    alt: "Arabian Queen vessel",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/minerva-gallery1.jpg",
    alt: "Cruise vessel exterior",
  },
  {
    src: "/images/minerva-gallery3.jpg",
    alt: "Vessel detail",
  },
  {
    src: "/images/minerva-gallery4.jpg",
    alt: "Arabian Queen at sea",
  },
  {
    src: "/images/minerva-gallery6.jpg",
    alt: "Cruise vessel detail",
    className: "md:col-span-2",
  },
  {
    src: "/images/minerva-gallery5.jpg",
    alt: "Maritime experience",
  },
   {
    src: "/images/minerva-gallery7.jpg",
    alt: "Maritime experience",
  },
  {
    src: "/images/minerva-gallery8.jpg",
    alt: "Maritime experience",
  },
  {
    src: "/images/minerva-gallery9.jpg",
    alt: "Maritime experience",
  },
];

export default function GalleryGrid() {
  return (
    <section className="bg-[#f4f0e8] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid auto-rows-[260px] gap-4 md:grid-cols-3 md:auto-rows-[320px]">
          {images.map((image, index) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden bg-[#071923]/10 ${
                image.className || ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

              <div className="absolute bottom-5 left-5 opacity-0 transition duration-500 group-hover:opacity-100">
                <span className="text-xs uppercase tracking-[0.25em] text-white">
                  0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}