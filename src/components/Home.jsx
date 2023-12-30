import React, { useState } from 'react';
import StockData from './StockData';
import { Link } from 'react-router-dom';
import '../public/Home.css';

const Home = () => {
//
  //
  const [selectedStock, setSelectedStock] = useState(null);

  const handleStockClick = (symbol) => {
    setSelectedStock(symbol);
    //
  };

  return (
    
    <div className="dashboard">
      <header className="header">
        
        <h1 className="title">Stock Analyzer</h1>
        <nav className="nav">
        <Link to="/register" className="nav-link">
            Register
          </Link>
          <Link to="/login" className="nav-link">
            Sign In
          </Link>

        </nav>

      </header>

      <div className="content">
        <h2>Welcome To Dashboard</h2>
        <p>Explore Market data</p>
        <StockData handleStockClick={handleStockClick} />
      </div>
    </div>
  );
};

export default Home;
