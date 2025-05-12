import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import './App.css';
import './login.css';

function App() {
  const [username, setUsername] = useState('');

  const handleLoginSuccess = (name) => {
    setUsername(name.toUpperCase());
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={<Login onLogin={handleLoginSuccess} />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard username={username} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
