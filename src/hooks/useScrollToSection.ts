import type { RefObject } from "react";

const useScrollToSection = () => {
  const scrollTo = (ref: RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return scrollTo;
};

export default useScrollToSection;
