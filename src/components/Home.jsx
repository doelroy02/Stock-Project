import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StockData from './StockData';
import '../public/Home.css';

const Home = () => {
  const [selectedStock, setSelectedStock] = useState(null);

  const handleStockClick = (symbol) => {
    setSelectedStock(symbol);
  };

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
        <StockData handleStockClick={handleStockClick} />
      </div>
    </div>
  );
};

export default Home;
