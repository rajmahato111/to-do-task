import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';
import config from '../config';

const TodoListPage = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem(config.TOKEN_KEY);
      const response = await fetch(`${config.API_URL}/tasks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setTasks(data);
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleTaskToggle = async (taskId, completed) => {
    try {
      const token = localStorage.getItem(config.TOKEN_KEY);
      const response = await fetch(`${config.API_URL}/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ completed }),
      });
      if (response.ok) {
        fetchTasks();
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      const token = localStorage.getItem(config.TOKEN_KEY);
      const response = await fetch(`${config.API_URL}/tasks/${taskId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        fetchTasks(); // Refresh the task list
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="todo-container">
      <div className="form-section">
        <h1 className="page-title">Add Task</h1>
        <TaskForm onTaskAdded={() => fetchTasks()} />
      </div>
      <div>
        <h1 className="page-title">My Tasks</h1>
        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="no-tasks">No tasks yet. Add your first task!</p>
          ) : (
            tasks.map((task) => (
              <TaskItem
                key={task._id}
                task={task}
                onToggle={handleTaskToggle}
                onDelete={handleDeleteTask}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoListPage;
