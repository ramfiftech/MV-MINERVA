import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Vesselidentity from "@/components/home/VesselIdentity";
import ContactCTA from "@/components/home/ContactCTA";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import Accommodation from "@/components/home/Accommodation";
import RestautantsLounges from "@/components/home/RestaurantsLounges";
import Specifications from "@/components/home/Specifications";
import VesselHighlights from "@/components/home/VesselHighlights";
import JourneyNote from "@/components/home/JourneyNote";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
       <About />
        <Specifications />
      <Accommodation />
      <RestautantsLounges />
      <JourneyNote />
      <VesselHighlights />
      <ContactCTA />
      <Footer />
    
    </main>
  );
}