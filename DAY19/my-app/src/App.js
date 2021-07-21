import React from 'react';
import './style.css';
import Button2 from './Components/Button2';
import Button from './Components/Button';
import Button3 from './Components/Button3';
import Button4 from './Components/Button4';

export default function App() {
  return (
    <div className="container">
      <h2> Counter Components </h2>
      <div className="App">
        <Button />
        <Button2 />
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}