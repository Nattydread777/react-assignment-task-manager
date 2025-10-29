import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext"; // To apply global theme classes

const Layout = ({ children }) => {
  const { isDarkMode } = useTheme();

  // The theme logic is primarily handled in ThemeProvider,
  // but applying min-h-screen here ensures the layout wrapper is correct.
  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
