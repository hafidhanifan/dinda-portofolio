import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
}

const TextReveal = ({ text, className = "" }: TextRevealProps) => {
  const targetRef = useRef<HTMLDivElement>(null);

  // Track scroll progress untuk section ini
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Split text menjadi array kata-kata
  const words = text.split(" ");

  return (
    <div
      ref={targetRef}
      className={`flex min-h-screen items-center justify-center px-4 ${className}`}
    >
      <p className="max-w-5xl text-center text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
        {words.map((word, wordIndex) => {
          // Hitung kapan kata ini mulai dan selesai reveal
          const start = wordIndex / words.length;
          const end = start + 1 / words.length;

          return (
            <Word
              key={wordIndex}
              progress={scrollYProgress}
              range={[start, end]}
            >
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
};

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
}

const Word = ({ children, progress, range }: WordProps) => {
  // Transform opacity dari abu-abu (0.2) ke hitam (1)
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative mx-1 incline-block  md:mx-2">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }} className="relative">
        {children}
      </motion.span>
    </span>
  );
};

export default TextReveal;
