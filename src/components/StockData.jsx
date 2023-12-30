import React, { useState, useEffect, useCallback } from 'react';
import { Line } from 'react-chartjs-2';

import '../public/StockData.css'

const StockData = () => {
  ///Done
  //**** */
  const [stockData, setStockData] = useState({});
  const [chartData, setChartData] = useState({});
  const [selectedStock, setSelectedStock] = useState(null);
  //Here is API token for access the stock data
  const API_KEY = 'pk_220a807b92ec4770b15078b499d449ab'; 

  useEffect(() => {
    console.log("Inside stock data logger")
    const fetchOptionsSymbols = async () => {
      try {
        const optionsResponse = await fetch(`https://cloud.iexapis.com/stable/ref-data/options/symbols?token=${API_KEY}`);
        if (optionsResponse.ok) {

          // __**
          const optionsData = await optionsResponse.json();
          const symbolsArray = Object.entries(optionsData).reduce((acc, [symbol, nums]) => {
            if (Array.isArray(nums)) {
              acc.push(symbol);
            }
            return acc;
          }, []);
          const symbols = symbolsArray.slice(0, 100);
          

          if (symbols.length > 0) {
            fetchStockData(symbols);
          } else {

            throw new Error('No symbols found');
          }

        } else {
          throw new Error('Failed to fetch options symbols');
        }
      } catch (error) {
        console.error('Error fetching options symbols:', error);
      }
    };

    const fetchStockData = async (symbols) => {
      try {
        const response = await fetch(`https://cloud.iexapis.com/stable/stock/market/batch?symbols=${symbols.join(',')}&types=quote&token=${API_KEY}`);
        if (response.ok) {
          const data = await response.json();
          setStockData(data);
        } else {
          throw new Error('Failed to fetch stock data');
        }
      } catch (error) {

        console.error('Error fetching stock data:', error);
      }
    };

    fetchOptionsSymbols();
  }, [API_KEY]);


  const prepareChartData = useCallback((symbol) => {
    if (stockData[symbol] && stockData[symbol].chartData) {
      const data = stockData[symbol].chartData.map((dataItem) => ({
        x: new Date(dataItem.date).toLocaleDateString(),
        y: dataItem.close,
      }));
      
      console.log('Transformed chart data:', data);
      setChartData({
        datasets: [
          {
            label: 'Stock Prices',
            data: data,
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.1,
          },
        ],
      });
    }
  }, [stockData]);
  

  const handleStockClick = (symbol) => {
    if (stockData[symbol].chartData) {
        console.log('Clicked stock symbol:', symbol);
      setSelectedStock(symbol);
      prepareChartData(symbol);
    }
  };

  useEffect(() => {
    // Data upserted
    if (selectedStock && stockData[selectedStock]) {


      prepareChartData(selectedStock);
    }
  }, [selectedStock, stockData, prepareChartData]);

  return (


    <div className="stock-data-container">
      <h2>Real-Time Stock Data</h2>
      <div className="company-blocks">
        {Object.keys(stockData).length > 0 ? (
          Object.keys(stockData).map((symbol) => (
            <div
              key={symbol}
              className={`company-block ${selectedStock === symbol ? 'selected' : ''}`}
              onClick={() => handleStockClick(symbol)}
            >
              <h3>{symbol}</h3>
              {stockData[symbol].quote && stockData[symbol].quote.companyName && (
                <p>Company Name: {stockData[symbol].quote.companyName}</p>
              )}
              {stockData[symbol].quote && stockData[symbol].quote.currency && (
                <p>Currency: {stockData[symbol].quote.currency}</p>
              )}
              {stockData[symbol].quote && stockData[symbol].quote.latestPrice && (
                <p>Latest Price: {stockData[symbol].quote.latestPrice}</p>
              )}
            </div>
          ))
        ) : (
          <p>No stock data available</p>
        )}
      </div>
      {selectedStock && (
        <div className="chart-container">
          <h2>Stock Chart for {selectedStock}</h2>
          {Object.keys(chartData).length > 0 && (
            <div className="chart">
              <Line data={chartData} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StockData;
