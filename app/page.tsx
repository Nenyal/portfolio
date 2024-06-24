import SpecialitiesGridSection from "@/components/SpecialitiesGrid";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <main>
        <Banner />
        <SpecialitiesGridSection />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
