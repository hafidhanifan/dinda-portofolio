import React from "react";

interface NavbarItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  label,
  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center text-xs transition 
        ${isActive ? "text-black font-semibold" : "text-gray-500"}`}
    >
      {label}
    </button>
  );
};

export default NavbarItem;
