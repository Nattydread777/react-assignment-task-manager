import React, { createContext, useContext, useState, useEffect } from "react";

// 1. Create the Context
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// 2. Create the Provider Component
export const ThemeProvider = ({ children }) => {
  // Determine initial state: system preference, localStorage, or default
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme !== null) {
      return storedTheme === "dark";
    }
    // Check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // 3. useEffect to apply the theme and persist in localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Toggle function
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const contextValue = {
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
