import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

// Components and Pages
import Layout from "./components/Layout";
import TaskManagerPage from "./pages/TaskManagerPage";
import ApiDataPage from "./pages/ApiDataPage";

function App() {
  return (
    // 1. Wrap the application with the ThemeProvider for light/dark mode
    <ThemeProvider>
      {/* 2. Setup React Router for navigation */}
      <Router>
        {/* 3. Layout component wraps all routes to provide consistent Navbar/Footer */}
        <Layout>
          <Routes>
            {/* TaskManagerPage is the default/home route */}
            <Route path="/" element={<TaskManagerPage />} />
            {/* ApiDataPage for the API integration task */}
            <Route path="/api-data" element={<ApiDataPage />} />
            {/* Optional: Add a 404/NotFound route */}
            <Route
              path="*"
              element={
                <h2 className="text-center text-xl pt-20">
                  404 - Page Not Found
                </h2>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
