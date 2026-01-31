import React from "react";
import { motion } from "framer-motion";

interface NavbarItemProps {
  label: string;
  icon: React.ComponentType<{ size?: number }>;
  isActive: boolean;
  isHovered: boolean;
  onClick: () => void;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  label,
  icon: Icon,
  isActive,
  isHovered,
  onClick,
  onHoverStart,
  onHoverEnd,
}) => {
  return (
    <motion.div
      className="relative flex flex-col items-center"
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      {/* Background hover - warna abu-abu halus */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-white/10 rounded-2xl"
          layoutId="navbar-hover-bg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        />
      )}

      {/* Button dengan HANYA icon */}
      <motion.button
        onClick={onClick}
        className={`relative z-10 px-4 py-2 rounded-2xl transition-colors
          ${isActive ? "text-white" : "text-gray-400"}`}
        whileTap={{ scale: 0.95 }}
      >
        <Icon size={24} />
      </motion.button>

      {/* Tooltip - HANYA muncul di atas saat hover */}
      <motion.span
        className="absolute -top-12 text-white text-sm font-medium bg-gray-800/90 px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 10,
        }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: "none" }}
      >
        {label}
        {/* Segitiga kecil */}
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800/90 rotate-45" />
      </motion.span>
    </motion.div>
  );
};

export default NavbarItem;
