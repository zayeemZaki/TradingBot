import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState({});
  const [cash, setCash] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://127.0.0.1:5000/api/portfolio');
      setPortfolio(result.data.portfolio);
      setCash(result.data.cash);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Portfolio</h1>
      <p>Cash: ${cash}</p>
      <ul>
        {Object.keys(portfolio).map(symbol => (
          <li key={symbol}>{symbol}: {portfolio[symbol]}</li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
