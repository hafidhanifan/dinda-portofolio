import { useState } from "react";
import { motion } from "framer-motion";
import NavbarItem from "./NavbarItem";
import { navItems, Sun, Moon } from "./navbarItems";
import { useTheme } from "../../hooks/useTheme";

interface Props {
  sectionRefs: Record<string, React.RefObject<HTMLElement | null>>;
  scrollTo: (ref: React.RefObject<HTMLElement | null>) => void;
}

export default function NavBar({ sectionRefs, scrollTo }: Props) {
  const [active, setActive] = useState("hero");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { theme, toggle } = useTheme();

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

        {/* Divider untuk memisahkan dengan nav items */}
        <div className="w-px h-6 bg-white/20 mx-2"></div>
        <motion.div
          onHoverStart={() => setHoveredId("theme")}
          onHoverEnd={() => setHoveredId(null)}
          className="relative flex flex-col items-center"
        >
          {/* Background hover */}
          {hoveredId === "theme" && (
            <motion.div
              className="absolute inset-0 bg-white/10 rounded-2xl"
              layoutId="navbar-hover-bg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            />
          )}

          {/* Theme toggle button */}
          <motion.button
            onClick={toggle}
            className="relative z-10 px-4 py-2 rounded-2xl text-gray-400 hover:text-white transition-colors"
            whileTap={{ scale: 0.95 }}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          </motion.button>

          {/* Tooltip */}
          <motion.span
            className="absolute -top-12 text-white text-sm font-medium bg-gray-800/90 px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: hoveredId === "theme" ? 1 : 0,
              y: hoveredId === "theme" ? 0 : 10,
            }}
            transition={{ duration: 0.2 }}
            style={{ pointerEvents: "none" }}
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800/90 rotate-45"></span>
          </motion.span>
        </motion.div>
      </div>
    </motion.nav>
  );
}
