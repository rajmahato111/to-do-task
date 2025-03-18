import React, { useState } from 'react';
import config from '../config';

const TaskForm = ({ onTaskAdded }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    dueDate: new Date().toISOString().split('T')[0] // Set today as default date
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem(config.TOKEN_KEY);
      const response = await fetch(`${config.API_URL}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          dueDate: formData.dueDate || null
        }),
      });
      const data = await response.json();
      if (response.ok) {
        onTaskAdded(data);
        setFormData({
          title: '',
          description: '',
          priority: 'medium',
          dueDate: new Date().toISOString().split('T')[0]
        });
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Task title"
        required
      />
      <select 
        name="priority" 
        value={formData.priority} 
        onChange={handleChange}
        className={`priority-select ${formData.priority}`}
      >
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>
      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
        min={new Date().toISOString().split('T')[0]}
      />
      <button type="submit">Add Task</button>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Task description"
        className="task-description-input"
      />
    </form>
  );
};

export default TaskForm;
