import React, { useEffect, useState } from "react";
import { getInitialTheme, setHtmlThemeClass } from "../utils/theme";
import { ThemeContext } from "./ThemeContext";
import type { Theme } from "../utils/theme";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setThemeState] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    setHtmlThemeClass(theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.error("Error saving theme to local storage:", error);
    }
  }, [theme]);

  const toggle = () => setThemeState((t) => (t === "dark" ? "light" : "dark"));
  const setTheme = (t: Theme) => setThemeState(t);

  return (
    <ThemeContext.Provider value={{ theme, toggle, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
