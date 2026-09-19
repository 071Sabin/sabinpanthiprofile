"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8 rounded-full bg-transparent" />; // Placeholder to avoid layout shift
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-slate-200 dark:bg-stone-800 text-slate-800 dark:text-stone-200 hover:bg-slate-300 dark:hover:bg-stone-700 transition-colors"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <i className="bi bi-sun-fill text-sm leading-none"></i>
      ) : (
        <i className="bi bi-moon-stars-fill text-sm leading-none"></i>
      )}
    </button>
  );
}
