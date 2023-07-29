import React, { useState } from 'react';
import './style.css';

import Provinces from './Provinces.json';

const ProvinceComponent = () => {
  const [data, setData] = useState(Provinces);
  const [winners, setWinners] = useState([]);
  const [lengthData, setLengthData] = useState([]);
  const [result, setResult] = useState(0);

  const handleClick = () => {
    const filteredData = data.filter(item => item.code % 2 === 0 && item.code % 3 === 0);
    setData(filteredData);
  };
  const handleRandomize = () => {
    const filteredProvinces = data.filter(item => item.code % 2 === 0 && item.code % 3 === 0);
    const randomWinners = [];
    const prizes = [1, 2, 3];
  
  
    for (let i = 0; i < 3; i++) {
      if (filteredProvinces.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredProvinces.length);
        const randomProvince = filteredProvinces.splice(randomIndex, 1)[0];
    console.log(randomIndex)
        randomWinners.push({
          ...randomProvince,
          prize: prizes[i],
        });
      }
    }
  
    setWinners(randomWinners);
  };
  

  const handleReset = () => {
    setData(Provinces);
    setWinners([]);
  };

  const handleRemove = () => {
    const excludedCodes = [10, 14, 16, 25, 46];
    setData(data.filter(item => !excludedCodes.includes(item.code)));
  };


  const handleTotal = () => {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data[i].code;
    }
    setResult(total);
  };
  
  const handleLength = () => {
    const sortedData = [...data].sort((a, b) => b.name.length - a.name.length);
    const topThree = sortedData.slice(0, 3);
    setLengthData(topThree);
  };
console.log(data)
  return (
    <div>
      <button onClick={handleClick}>Filter</button>
      <button onClick={handleRandomize}>Random</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleRemove}>Remove item</button>
      <button onClick={handleTotal}>Total</button>
      <button onClick={handleLength}>Prize length</button>

      <ul >
        {data.map((item, index) => (
          <li key={index}>
            Name: {item.name} - Code: {item.code}
          </li>
        ))}
      </ul>

      <h2>Winners</h2>
      {winners.map((winner, index) => (
        <div key={index}>
          <p>
            {winner.name} - Code: {winner.code} - Prize: {winner.prize} 
          </p>
        </div>
      ))}

      <h3>Total code: {result}</h3>

      <h4>Prize length:</h4>
      <ul>
        {lengthData.map((item, index) => (
          <li
            key={index}
            className={index === 0 ? 'first' : index === 1 ? 'second' : 'third'}>
            {item.name} - {item.code}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProvinceComponent;
