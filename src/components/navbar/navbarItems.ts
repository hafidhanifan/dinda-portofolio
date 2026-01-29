import { Home, User, Briefcase, Mail } from "lucide-react";

// Kita definisikan tipe data untuk nav item
export interface NavItemType {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>; // Tipe untuk icon dari lucide-react
}

// Data menu navbar dengan icon
export const navItems: NavItemType[] = [
  { id: "hero", label: "Home", icon: Home },
  { id: "profile", label: "Profile", icon: User },
  { id: "portofolio", label: "Portofolio", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
];
