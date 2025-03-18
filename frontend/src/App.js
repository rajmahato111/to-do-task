import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { TodoProvider } from './context/TodoContext';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TodoListPage from './pages/TodoListPage';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <TodoProvider>
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <TodoListPage />
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
        </Router>
      </TodoProvider>
    </AuthProvider>
  );
}

export default App;
