"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";

interface ThemeCtx {
  theme: Theme;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeCtx>({ theme: "light", toggle: () => {} });

const STORAGE_KEY = "lexcord-theme";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Read saved preference, or fall back to current data-theme (set by the anti-flash script)
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const initial =
      saved === "light" || saved === "dark"
        ? saved
        : (document.documentElement.getAttribute("data-theme") as Theme | null) ??
          getSystemTheme();
    setTheme(initial);
    applyTheme(initial);

    // Track system preference when no manual override
    if (!saved) {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = (e: MediaQueryListEvent) => {
        const next: Theme = e.matches ? "dark" : "light";
        setTheme(next);
        applyTheme(next);
      };
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
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
export const ANTI_FLASH_SCRIPT = `(function(){try{var s=localStorage.getItem('lexcord-theme');if(s==='dark'||s==='light'){document.documentElement.setAttribute('data-theme',s);}else{var mq=window.matchMedia('(prefers-color-scheme: dark)');document.documentElement.setAttribute('data-theme',mq.matches?'dark':'light');}}catch(e){}})();`;
