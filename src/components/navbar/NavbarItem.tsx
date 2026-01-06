import React from "react";
import { motion, scale } from "motion";

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
    ></motion.div>
  );
};

export default NavbarItem;
