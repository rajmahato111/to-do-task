import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
  const getPriorityColor = (priority) => {
    return `priority-badge ${priority}`;
  };

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDelete(task._id);
    }
  };

  return (
    <div className="task-item">
      <div className="task-content">
        <div className="task-header">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={(e) => onToggle(task._id, e.target.checked)}
          />
          <h3 className="task-title" style={{ 
            textDecoration: task.completed ? 'line-through' : 'none',
          }}>
            {task.title}
          </h3>
          <div className="task-actions">
            <span className={getPriorityColor(task.priority)}>
              {task.priority}
            </span>
            <button 
              onClick={handleDelete}
              className="delete-button"
              title="Delete task"
            >
              🗑️
            </button>
          </div>
        </div>
        {task.description && (
          <p className="task-description">{task.description}</p>
        )}
        <div className="task-meta">
          {task.dueDate && (
            <span className="due-date">
              📅 Due: {new Date(task.dueDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </span>
          )}
          {task.tags && task.tags.length > 0 && (
            <div className="tags">
              {task.tags.map((tag, index) => (
                <span key={index} className="tag">#{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
