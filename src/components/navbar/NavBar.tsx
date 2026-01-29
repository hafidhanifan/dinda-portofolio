import { useState } from "react";
import { motion } from "framer-motion";
import NavbarItem from "./NavbarItem";
import { navItems } from "./navbarItems";

interface Props {
  sectionRefs: Record<string, React.RefObject<HTMLElement | null>>;
  scrollTo: (ref: React.RefObject<HTMLElement | null>) => void;
}

export default function NavBar({ sectionRefs, scrollTo }: Props) {
  const [active, setActive] = useState("hero");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setActive(id);
    scrollTo(sectionRefs[id]);
  };

  return (
    <motion.nav
      className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-gray-800/40 backdrop-blur-md shadow-2xl rounded-full px-6 py-4 z-50 border border-white/10"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center gap-2">
        {navItems.map((item, index) => (
          <motion.div
            key={item.id}
            animate={{
              marginLeft:
                hoveredId === item.id
                  ? "12px"
                  : index > 0 && hoveredId === navItems[index - 1].id
                    ? "12px"
                    : "0px",
              marginRight:
                hoveredId === item.id
                  ? "12px"
                  : index < navItems.length - 1 &&
                      hoveredId === navItems[index + 1].id
                    ? "12px"
                    : "0px",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <NavbarItem
              label={item.label}
              icon={item.icon}
              isActive={active === item.id}
              isHovered={hoveredId === item.id}
              onClick={() => handleClick(item.id)}
              onHoverStart={() => setHoveredId(item.id)}
              onHoverEnd={() => setHoveredId(null)}
            />
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
}
