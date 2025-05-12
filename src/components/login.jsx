import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../login.css';

function Login({ onLogin }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!fullName) {
      alert('Please enter your full name.');
      return;
    }
    onLogin(fullName);
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <div className="login-card fade-in">
        <h2 className="login-title">Welcome Back To<br />SkyWatch</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-links">
            <a href="#" className="forgot-link">Forgot password?</a>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>

        <div className="signup-link">
          Don’t have an account? <a href="#" onClick={() => navigate('/signup')}>Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
