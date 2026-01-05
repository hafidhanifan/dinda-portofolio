import { useState } from "react";
import { motion } from "motion";
import NavbarItem from "./NavbarItem";
import { navItems } from "./navbarItems";

interface Props {
  sectionRefs: Record<string, React.RefObject<HTMLElement | null>>;
  scrollTo: (ref: React.RefObject<HTMLElement | null>) => void;
}

export default function NavBar({ sectionRefs, scrollTo }: Props) {
  // state untuk item yang aktif (diklik)
  const [active, setActive] = useState("hero");

  // state untuk item yang sedang di-hover
  const [hoverId, setHoverId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setActive(id);
    scrollTo(sectionRefs[id]);
  };

  return (
    <motion.nav
      className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md shadow-lg rounded-full px-6 py-3 flex gap-6 z-50 border border-gray-200"
      // animasi saat navbar pertama kali muncul
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {navItems.map((item) => (
        <NavbarItem
          key={item.id}
          label={item.label}
          isActive={active === item.id}
          onClick={() => handleClick(item.id)}
        />
      ))}
    </motion.nav>
  );
}
