import React from "react";
import { motion } from "motion";

interface NavbarItemProps {
  label: string;
  icon: React.ComponentType<{ size?: number }>; // tipe untuk ion
  isActive: boolean;
  isHovered: boolean; // untuk tau apakah item ini sedang di-hover
  onClick: () => void;
  onHoverStart: () => void; //fungsi saat mulai hover
  onHoverEnd: () => void; // fungsi saat selesai hover
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  label,
  icon: Icon, // menggunakan huruf besar supaya bisa dipake sebagai component
  isActive,
  isHovered,
  onClick,
  onHoverStart,
  onHoverEnd,
}) => {
  return (
    <motion.div
      className="relative flex flex-col items-center"
      // event hover - panggil fungsi dari parent
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      // aniamsi jarak menjauh ketika di-hover
      animate={{
        scale: isHovered ? 1.05 : 1, // digunakan untuk memperbesar saat hover
      }}
      transition={{
        duration: 0.3, // durasi animasi 0.3 detik
        ease: "easeInOut", // jenis easing (percepatan animasi)
      }}
    >
      {/* Background hover - muncul saat item di-hover */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-gray-200/60 rounded-2xl -z-10"
          // layoutId untuk membuat animasi smooth saat berpidah item
          layoutId="navar-hover-bg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        />
      )}
      <motion.button
        onClick={onClick}
        className={`relative z-10 flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-colors
        ${isActive ? "text-black font-semibold" : "text-gray-500"}`}
        // animasi saat button di-klik
        whileTap={{ scale: 0.95 }}
      >
        {/* Icon */}
        <Icon size={20} />

        {/* Label text */}
        <span className="text-xs">{label}</span>
      </motion.button>

      {/* Tooltip - label yang muncul di atas saat hover */}
      <motion.div
        className="absolute -top-12 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 10,
        }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: "none" }} //supaya tooltip tidak menghalangi mouse
      >
        {label}
        {/* segitiga kecil di bawah tooltip */}
        <span className="absolute -bottom-1 left-1/2 -translte-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></span>
      </motion.div>
    </motion.div>
  );
};

export default NavbarItem;
