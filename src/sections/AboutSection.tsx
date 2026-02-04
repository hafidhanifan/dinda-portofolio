import { useRef } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import TextReveal from "../components/animations/TextReveal";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress dari section ini
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"], // Ubah ke "end end" agar progress lebih lambat
  });

  // Transform scroll progress menjadi 0-1 untuk text reveal
  // Gunakan easing agar reveal selesai di 80% scroll, sisanya buffer
  const textRevealProgress = useTransform(
    scrollYProgress,
    [0, 0.8], // Reveal selesai di 80% scroll section
    [0, 1],
  );

  // Debug - lihat progress di console (opsional, bisa dihapus)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Scroll progress:", latest);
  });

  useMotionValueEvent(textRevealProgress, "change", (latest) => {
    console.log("Text reveal progress:", latest);
  });

  return (
    <section ref={sectionRef} className="relative h-[400vh]">
      {/* Sticky container yang menahan TextReveal di viewport */}
      <div className="sticky top-0 h-screen w-full">
        <TextReveal
          text="Hello! My name is Dinda Farrass. I'm a content creator who enjoys sharing creative ideas through engaging visuals and meaningful storytelling."
          scrollProgress={textRevealProgress}
        />
      </div>
    </section>
  );
};

export default AboutSection;
