import React from "react";

interface NavbarItemProps {
  label: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  label,
  icon,
  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center text-xs transition 
        ${isActive ? "text-black font-semibold" : "text-gray-500"}`}
    >
      <span className="text-lg">{icon}</span>
      {label}
    </button>
  );
};

export default NavbarItem;
