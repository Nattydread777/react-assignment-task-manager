import { useState, useEffect } from 'react';

/**
 * Custom hook for managing tasks with localStorage persistence.
 * @returns {{tasks: Array, addTask: Function, toggleTask: Function, deleteTask: Function}}
 */
const useLocalStorageTasks = () => {
  // Initialize state from localStorage or with an empty array
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    try {
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      console.error("Could not parse tasks from localStorage", error);
      return [];
    }
  });

  // useEffect for side effects: Update localStorage when tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (text) => {
    if (text.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text,
          completed: false,
        },
      ]);
    }
  };

  // Toggle task completion status
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return { tasks, addTask, toggleTask, deleteTask };
};

export default useLocalStorageTasks;