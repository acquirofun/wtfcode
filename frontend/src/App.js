// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [balance, setBalance] = useState(0);

  const handleTap = () => {
    setBalance(balance + 1);
    // In a real app, you would send this to the backend here
  };

  return (
    <div className="App" style={{ backgroundColor: '#000', color: '#fff', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1>ALPHADOGS</h1>
      <div style={{ fontSize: '40px', marginBottom: '20px' }}>🦴 {balance}</div>
      <button 
        onClick={handleTap} 
        style={{ width: '200px', height: '200px', borderRadius: '50%', border: 'none', background: 'orange', fontSize: '50px', cursor: 'pointer' }}
      >
        🐕
      </button>
      <p>Tap the Dog to earn ALDOGS!</p>
    </div>
  );
}

export default App;