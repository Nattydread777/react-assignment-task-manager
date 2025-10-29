import React from "react";
import TaskManager from "../components/TaskManager";

const TaskManagerPage = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
        📝 Task Management Hub
      </h1>
      <TaskManager />
    </div>
  );
};

export default TaskManagerPage;
