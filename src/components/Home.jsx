// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../public/Home.css';

const Home = () => {
    return (
      <div className="dashboard">
        <header className="header">
          <h1 className="title">Stock Rocket</h1>
          <nav className="nav">
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </nav>
        </header>
  
        <div className="content">
          <h2>Welcome to Your Dashboard</h2>
          <p>Explore stock market data and trends.</p>
        </div>
      </div>
    );
  };

export default Home;
