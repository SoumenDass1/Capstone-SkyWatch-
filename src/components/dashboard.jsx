import React from 'react';
import '../dashboard.css';

function Dashboard({ username, onLogout }) {
  return (
    <div className="dashboard-wrapper">
      <header className="dashboard-header">
        <div className="logo">SkyWatch</div>
            <nav>
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Sesrch</a></li>
                  <li><a href="#">History</a></li>
                  <li><a href="#">About</a></li>
              </ul>
            </nav>
        <div className="user-controls">
          <button className="logout-button" onClick={onLogout}>Logout</button>
          <div className="welcome-text">Welcome, <strong>{username}</strong></div>
        </div>
      </header>

      <main className="dashboard-main">

        <section className="content-area">
          <h1>Dashboard Overview</h1>
          
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
