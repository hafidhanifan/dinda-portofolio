import { useState } from "react";
import NavbarItem from "./NavbarItem";
import { navItems } from "./navbarItems";

interface Props {
  sectionRefs: Record<string, React.RefObject<HTMLElement | null>>;
  scrollTo: (ref: React.RefObject<HTMLElement | null>) => void;
}

export default function NavBar({ sectionRefs, scrollTo }: Props) {
  const [active, setActive] = useState("hero");

  const handleClick = (id: string) => {
    setActive(id);
    scrollTo(sectionRefs[id]);
  };

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md shadow-lg rounded-full px-6 py-3 flex gap-6 z-50 border border-gray-200">
      {navItems.map((item) => (
        <NavbarItem
          key={item.id}
          label={item.label}
          isActive={active === item.id}
          onClick={() => handleClick(item.id)}
        />
      ))}
    </nav>
  );
}
