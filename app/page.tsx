import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Vesselidentity from "@/components/home/VesselIdentity";
import ContactCTA from "@/components/home/ContactCTA";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
       <About />
      <Vesselidentity />
      <ContactCTA />
      <Footer />
    
    </main>
  );
}