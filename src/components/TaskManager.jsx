import React, { useState } from "react";
import useLocalStorageTasks from "../hooks/useLocalStorageTasks"; // <-- Import the custom hook
import Button from "./Button";

/**
 * TaskManager component for managing tasks.
 * It uses useLocalStorageTasks for state logic and persistence.
 */
const TaskManager = () => {
  // Use the custom hook to manage tasks state and logic
  const { tasks, addTask, toggleTask, deleteTask } = useLocalStorageTasks();
  const [newTaskText, setNewTaskText] = useState("");
  const [filter, setFilter] = useState("all");

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true; // 'all' filter
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTaskText);
    setNewTaskText("");
  };

  // Calculate remaining tasks for the stats display
  const tasksRemaining = tasks.filter((task) => !task.completed).length;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-6 border-t-4 border-blue-500 dark:border-blue-400">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Task Manager
      </h2>

      {/* Task input form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 placeholder-gray-400"
          />
          <Button
            type="submit"
            variant="primary"
            disabled={!newTaskText.trim()}
          >
            Add Task
          </Button>
        </div>
      </form>

      {/* Filter buttons */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
        <Button
          variant={filter === "all" ? "primary" : "secondary"}
          size="sm"
          onClick={() => setFilter("all")}
        >
          All ({tasks.length})
        </Button>
        <Button
          variant={filter === "active" ? "primary" : "secondary"}
          size="sm"
          onClick={() => setFilter("active")}
        >
          Active ({tasksRemaining})
        </Button>
        <Button
          variant={filter === "completed" ? "primary" : "secondary"}
          size="sm"
          onClick={() => setFilter("completed")}
        >
          Completed ({tasks.length - tasksRemaining})
        </Button>
      </div>

      {/* Task list */}
      <ul className="space-y-3">
        {filteredTasks.length === 0 ? (
          <li className="text-gray-500 dark:text-gray-400 text-center py-4 italic">
            No tasks found for the current filter.
          </li>
        ) : (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-700 hover:shadow-md transition-shadow duration-200 animate-fadeIn"
            >
              <div className="flex items-center gap-3 min-w-0">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 cursor-pointer"
                />
                <span
                  className={`truncate ${
                    task.completed
                      ? "line-through text-gray-500 dark:text-gray-400"
                      : "text-gray-800 dark:text-gray-100"
                  }`}
                  title={task.text}
                >
                  {task.text}
                </span>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => deleteTask(task.id)}
                aria-label="Delete task"
                className="flex-shrink-0 ml-4"
              >
                🗑️
              </Button>
            </li>
          ))
        )}
      </ul>

      {/* Task stats */}
      <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 border-t pt-4 dark:border-gray-700">
        <p className="font-medium">
          <strong>{tasksRemaining}</strong> tasks remaining out of{" "}
          <strong>{tasks.length}</strong> total tasks.
        </p>
      </div>
    </div>
  );
};

export default TaskManager;
