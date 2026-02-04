import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  scrollProgress?: any; // Terima scroll progress dari parent
}

const TextReveal = ({
  text,
  className = "",
  scrollProgress,
}: TextRevealProps) => {
  const targetRef = useRef<HTMLDivElement>(null);

  // Gunakan scrollProgress dari parent jika ada, kalau tidak pakai internal
  const { scrollYProgress: internalProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const activeProgress = scrollProgress || internalProgress;

  // Split text menjadi array kata-kata
  const words = text.split(" ");

  return (
    <div
      ref={targetRef}
      className={`flex min-h-screen items-center justify-center px-4 ${className}`}
    >
      <p className="max-w-2xl text-center text-2xl font-bold leading-tight sm:text-2xl sm:max-w-xl md:text-3xl lg:max-w-6xl lg:text-5xl">
        {words.map((word, wordIndex) => {
          // Hitung kapan kata ini mulai dan selesai reveal
          const start = wordIndex / words.length;
          const end = start + 1 / words.length;

          return (
            <Word
              key={wordIndex}
              progress={activeProgress}
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
    <span className="relative mx-1 inline-block md:mx-2">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }} className="relative">
        {children}
      </motion.span>
    </span>
  );
};

export default TextReveal;
