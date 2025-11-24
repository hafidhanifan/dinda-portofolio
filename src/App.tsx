import { useRef } from "react";
import HeroSection from "./sections/HeroSection";

// Navbar
import NavBar from "./components/navbar/Navbar";
import useScrollToSection from "./hooks/useScrollToSection";

function App() {
  const scrollTo = useScrollToSection();

  const heroRef = useRef<HTMLElement>(null);

  const sectionRefs = {
    hero: heroRef,
  };

  return (
    <>
      <NavBar sectionRefs={sectionRefs} scrollTo={scrollTo}></NavBar>

      <main className="space-y-32">
        <section ref={heroRef}>
          <HeroSection></HeroSection>
        </section>
      </main>
    </>
  );
}

export default App;
