import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../dashboard.css';

function Dashboard({ username }) {
  const navigate = useNavigate();

  return (
    <div className="dashboard-wrapper">
      <header className="dashboard-header">
        <div className="logo">
          Sky<span>Watch</span>
        </div>
        <nav>
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">History</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </header>
      <main className="dashboard-main">
        <section className="content-area">
          <h1>Welcome, {username || 'Guest'}!</h1>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
