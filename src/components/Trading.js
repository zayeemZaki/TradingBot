import React from 'react';
import axios from 'axios';

const Trading = () => {
  const startTrading = async () => {
    await axios.post('http://127.0.0.1:5000/api/start_trading');
  };

  return (
    <div>
      <h1>Trading</h1>
      <button onClick={startTrading}>Start Trading</button>
    </div>
  );
};

export default Trading;
