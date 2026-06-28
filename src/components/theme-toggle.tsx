"use client";

import { useEffect } from "react";
import { useTheme } from "@/lib/theme";
import styles from "./theme-toggle.module.css";

function SunIcon() {
  return (
    <svg viewBox="0 0 20 20" width="15" height="15" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 20 20" width="15" height="15" fill="none" aria-hidden="true">
      <path
        d="M17 11.5A7 7 0 1 1 8.5 3a5.5 5.5 0 0 0 8.5 8.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface ThemeToggleProps {
  light?: boolean;
}

export function ThemeToggle({ light = false }: ThemeToggleProps) {
  const { theme, toggle } = useTheme();

  // Add .theme-ready class to enable smooth transitions after first mount
  useEffect(() => {
    const t = setTimeout(() => {
      document.documentElement.classList.add("theme-ready");
    }, 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <button
      onClick={toggle}
      className={`${styles.btn} ${light ? styles.light : ""}`}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
