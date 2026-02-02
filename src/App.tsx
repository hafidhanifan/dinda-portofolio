import { useRef } from "react";
import ThemeToggle from "./components/theme/ThemeToggle";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";

// Navbar
import NavBar from "./components/navbar/NavBar";
import useScrollToSection from "./hooks/useScrollToSection";

function App() {
  const scrollTo = useScrollToSection();
  const heroRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);

  const sectionRefs = {
    hero: heroRef,
    about: aboutRef,
  };

  return (
    <>
      <NavBar sectionRefs={sectionRefs} scrollTo={scrollTo}></NavBar>

      <main className="space-y-32 bg-theme text-theme transition-colors duration-200">
        <section className="absolute right-0">
          <ThemeToggle />
        </section>
        <header ref={heroRef}>
          <HeroSection></HeroSection>
        </header>
        <section ref={aboutRef}>
          <AboutSection />
        </section>
      </main>
    </>
  );
}

export default App;
