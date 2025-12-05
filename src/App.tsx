import { useRef } from "react";
import HeroSection from "./sections/HeroSection";
import ThemeToggle from "./components/theme/ThemeToggle";
import { useTheme } from "./hooks/useTheme";

// Navbar
import NavBar from "./components/navbar/NavBar";
import useScrollToSection from "./hooks/useScrollToSection";

function App() {
  const scrollTo = useScrollToSection();
  const heroRef = useRef<HTMLElement | null>(null);
  const { theme } = useTheme();

  const sectionRefs = {
    hero: heroRef,
  };

  return (
    <>
      <NavBar sectionRefs={sectionRefs} scrollTo={scrollTo}></NavBar>

      <main className="space-y-32 bg-theme text-theme transition-colors duration-200">
        <header className="p-4 flex justify-end">
          <ThemeToggle />
        </header>

        <section ref={heroRef}>
          <HeroSection></HeroSection>
        </section>

        <h1 className="text-2xl font-bold mb-4">Current theme: {theme}</h1>
        <button className="btn-primary">Primary button</button>
        <p className="mt-4">
          Contoh teks. Coba toggle theme dan lihat perubahan warna.
        </p>
      </main>
    </>
  );
}

export default App;
