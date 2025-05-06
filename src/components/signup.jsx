import React from 'react';
import '../login.css';

function Signup({ onBack }) {
  const handleSignup = (e) => {
    e.preventDefault();
    alert('Account created! You can now log in.');
    onBack();
  };

  return (
    <div className="login-page">
      <div className="login-card fade-in">
        <h2 className="login-title">Create Account</h2>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-input" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-input" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-input" placeholder="Create a password" />
          </div>

          <button type="submit" className="login-button">Sign Up</button>
        </form>

        <div className="signup-link">
          Already have an account? <a href="#" onClick={onBack}>Log in</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
