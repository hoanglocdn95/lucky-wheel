import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const renderWheelItem = () => {
    return <div className="wheel__item"></div>;
  };
  return (
    <div className="layout">
      <div className="container">
        <div className="wheel">{renderWheelItem()}</div>
      </div>
    </div>
  );
}

export default App;
