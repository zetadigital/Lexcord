"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";

interface ThemeCtx {
  theme: Theme;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeCtx>({ theme: "light", toggle: () => {} });

const STORAGE_KEY = "lexcord-theme";

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Only restore an explicitly saved user preference; default is always light
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const initial = saved === "dark" ? "dark" : "light";
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

// Inline script string to prevent flash of wrong theme.
// Place this as a blocking <script> in <head>.
// Only apply dark if the user explicitly saved it; default is always light
export const ANTI_FLASH_SCRIPT = `(function(){try{if(localStorage.getItem('lexcord-theme')==='dark'){document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`;
