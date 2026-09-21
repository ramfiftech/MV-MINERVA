import CareersHero from "@/components/careers/CareersHero";
import CareersIntro from "@/components/careers/CareersIntro";
import CareersValues from "@/components/careers/CareersValues";
import OpenPositions from "@/components/careers/OpenPositions";
import CareersCTA from "@/components/careers/CareersCTA";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

export const metadata = {
  title: "Careers | Arabian Queen",
  description:
    "Explore career opportunities with Arabian Queen and Arabian White Rock Public Investment.",
};

export default function CareersPage() {
  return (
    <main>
      <Navbar />
      <CareersHero />
      <CareersIntro />
      <CareersValues />
      <OpenPositions />
      <CareersCTA />
      <Footer />
    </main>
  );
}