# React.js and Tailwind CSS Assignment

This assignment focuses on building a responsive React application using JSX and Tailwind CSS, implementing component architecture, state management, hooks, and API integration.

## ✨ Live Demo

[Your Deployed URL will be added here]

## 📸 Screenshots

_A screenshot of the Task Manager page, showing the ability to add, delete, and filter tasks._
![Task Manager Screenshot](./screenshots/task-manager-page.png)

_A screenshot of the API Data page, showing fetched posts, search, and pagination._
![API Data Screenshot](./screenshots/api-data-page.png)

## ✍️ Author

- **NATHANIEL EMMU USIKPEDO**

## 🌟 Features

This project implements a variety of modern front-end features as per the assignment requirements, demonstrating a comprehensive understanding of React and its ecosystem.

- **Component-Based Architecture**: Built with reusable and customizable components like `Button`, `Card`, and a consistent `Layout` that includes a `Navbar` and `Footer`.
- **Advanced State Management with Hooks**:
  - **Task Manager**: A full-featured task management system allowing users to add, delete, toggle completion, and filter tasks (All, Active, Completed).
  - **Persistent State**: Utilizes a custom hook (`useLocalStorageTasks`) to save tasks to the browser's local storage, so tasks are saved between sessions.
- **API Integration**:
  - Fetches post data from the public `JSONPlaceholder` API.
  - Handles **loading** and **error** states gracefully to provide a smooth user experience.
  - Includes a **search** feature to filter posts by title or body.
  - Implements client-side **pagination** to efficiently display a large set of data.
- **Styling with Tailwind CSS**:
  - A fully **responsive design** that works on mobile, tablet, and desktop screens.
  - A **theme switcher** for toggling between light and dark modes, using Tailwind's dark mode variant.
- **Routing**:
  - Uses **React Router** for client-side routing to navigate between the Task Manager and the API Data pages.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)

### Installation

1.  **Clone the repository**
    ```sh
    git clone https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-Nattydread777.git
    ```
2.  **Navigate to the project directory**
    ```sh
    cd react-js-jsx-and-css-mastering-front-end-development-Nattydread777
    ```
3.  **Install NPM packages**
    ```sh
    npm install
    ```
4.  **Start the development server**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## 📂 Project Structure

The project is organized into several directories to separate concerns and maintain clean code.

```
react-frontend-assignment/
├── public/               # Static assets
├── src/
│   ├── api/              # API integration hooks (e.g., usePosts.js)
│   ├── components/       # Reusable UI components (Button, Card, Layout, etc.)
│   ├── context/          # React Context for state management (e.g., ThemeContext)
│   ├── hooks/            # Custom React hooks (e.g., useLocalStorage, useDebounce)
│   ├── pages/            # Page components that correspond to routes
│   ├── App.jsx           # Main application component with routing
│   ├── index.css         # Main CSS file with Tailwind directives
│   └── main.jsx          # Application entry point
├── .eslintrc.cjs         # ESLint configuration
├── index.html            # Main HTML entry point for Vite
├── package.json          # Project dependencies and scripts
├── postcss.config.js     # PostCSS configuration for Tailwind
└── tailwind.config.js    # Tailwind CSS configuration
```

## Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Router Documentation](https://reactrouter.com/)
