import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/dashboard';
import Signup from './components/signup';
import './App.css';
import './login.css';

function App() {
  const [page, setPage] = useState('login');
  const [username, setUsername] = useState('');

  const handleLoginSuccess = (name) => {
    setUsername(name.toUpperCase());
    setPage('dashboard');
  };

  const handleSignupClick = () => setPage('signup');
  const handleBackToLogin = () => setPage('login');
  const handleLogout = () => setPage('login');

  return (
    <>
      {page === 'login' && <Login onLogin={handleLoginSuccess} onSignup={handleSignupClick} />}
      {page === 'signup' && <Signup onBack={handleBackToLogin} />}
      {page === 'dashboard' && <Dashboard username={username} onLogout={handleLogout} />}
    </>
  );
}

export default App;
