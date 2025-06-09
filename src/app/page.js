import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { Gallery } from "@/components/sections/Gallery";
import HeroSection from "@/components/sections/HeroSection";
import { NavBar } from "@/components/sections/Nav";
import { Projects } from "@/components/sections/Project";
import { Resume } from "@/components/sections/Resume";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
        <HeroSection />
        <About />
        <Resume />
        <Projects />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
    </>
  );
}
