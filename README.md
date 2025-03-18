# Modern Todo Application

A full-stack todo application built with the MERN stack featuring a modern UI and real-time task management.

## ✨ Features

- 🔐 User Authentication (Register/Login)
- ✅ Create, Read, Update, Delete tasks
- 🎯 Priority levels (High, Medium, Low)
- 📅 Due date tracking
- 🏷️ Task descriptions
- ✨ Modern UI with animations
- 🔒 Protected routes
- 🌐 Responsive design

## 🚀 Tech Stack

### Frontend
- React.js 18
- React Router v6
- Context API for state management
- Modern CSS with Flexbox/Grid
- Responsive design

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- RESTful API

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### Setup Steps

1. Clone the repository
```bash
git clone <repository-url>
cd todo-app
```

2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
echo "PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/todo-app
JWT_SECRET=your_secure_secret_key" > .env

# Start the server
npm run dev
```

3. Frontend Setup
```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install

# Start the application
npm start
```
