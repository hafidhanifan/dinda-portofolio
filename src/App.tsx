import { useRef } from "react";
import HeroSection from "./sections/HeroSection";
import ThemeToggle from "./components/theme/ThemeToggle";

// Navbar
import NavBar from "./components/navbar/NavBar";
import useScrollToSection from "./hooks/useScrollToSection";

function App() {
  const scrollTo = useScrollToSection();
  const heroRef = useRef<HTMLElement | null>(null);

  const sectionRefs = {
    hero: heroRef,
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
      </main>
    </>
  );
}

export default App;
