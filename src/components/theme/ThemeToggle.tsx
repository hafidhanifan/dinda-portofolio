import { useTheme } from "../../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      title={theme === "dark" ? "Light mode" : "Dark mode"}
      className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
    >
      {theme === "dark" ? (
        <span>🌞</span> // ganti ikon sesuai selera (lucide/react atau heroicons)
      ) : (
        <span>🌙</span>
      )}
    </button>
  );
}
