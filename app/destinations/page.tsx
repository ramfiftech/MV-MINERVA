import DestinationsHero from "@/components/destinations/DestinationsHero";
import RouteOverview from "@/components/destinations/RouteOverview";
import DestinationsCTA from "@/components/destinations/DestinationsCTA";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

export const metadata = {
  title: "Destinations | Arabian Queen",
  description:
    "Explore the destinations envisioned for Arabian Queen.",
};

export default function DestinationsPage() {
  return (
    <main>
        <Navbar />
      <DestinationsHero />
      <RouteOverview />
      <DestinationsCTA />
        <Footer />
    </main>
  );
}