import React from "react";
import { useTheme } from "../context/ThemeContext";
import Button from "./Button";
// Icons for visual appeal (assuming you have a way to include icons, like react-icons)
// For simplicity, we'll use text or basic symbols.

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Button
      variant="secondary"
      onClick={toggleTheme}
      className="p-2 sm:p-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600"
    >
      {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </Button>
  );
};

export default ThemeToggle;
