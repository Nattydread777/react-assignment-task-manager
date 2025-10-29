import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";

const Navbar = () => {
  const navItems = [
    { name: "Tasks", path: "/" },
    { name: "API Data", path: "/api-data" },
    // You could add a 'Home' page if necessary
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-600 dark:text-blue-400"
            >
              PLP Dev 🚀
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
