import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryCTA from "@/components/gallery/GalleryCTA";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

export const metadata = {
  title: "Gallery | Arabian Queen",
  description:
    "Explore the vessel, its heritage and the vision behind Arabian Queen.",
};

export default function GalleryPage() {
  return (
    <main>
        <Navbar />
      <GalleryHero />
      <GalleryGrid />
      <GalleryCTA />
        <Footer />
    </main>
  );
}