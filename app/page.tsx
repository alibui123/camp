import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import GlobalScripts from "@/components/GlobalScripts";

export default function Home() {
  return (
    <>
      <GlobalScripts />
      <Navbar />
      <Hero />
      <Clients />
      <About />
      <Services />
      <Work />
      <Process />
      <Team />
      <FAQ />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}
