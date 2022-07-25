import { useState } from 'react';
import './App.css';

function App() {
  const [isRotating, setRotating] = useState(false);
  const items = [
    {
      content: 'Yes',
      color: 'red',
    },
    {
      content: 'No',
      color: 'blue',
    },
    {
      content: 'Not Given',
      color: 'green',
    },
    {
      content: 'Given',
      color: 'yellow',
    },
  ];
  const calculateDeg = () => Math.floor(Math.random() * 360 + 720);

  const renderWheelItem = () => {
    return items.map((item, index) => {
      return (
        <div
          key={index}
          className="wheel__item"
          style={{
            transform: `rotate(${(360 / items.length) * index}deg)`,
            borderTopColor: item.color,
            borderWidth: `175px ${350 / (items.length / 2)}px 0`,
          }}
        >
          <p>{item.content}</p>
        </div>
      );
    });
  };
  return (
    <div className="layout">
      <div className="container">
        <div className="rotate" onClick={() => setRotating(!isRotating)}>
          ROTATE
        </div>
        <div className="indicator"></div>
        <div
          className="wheel"
          style={
            isRotating
              ? {
                  transform: `rotate(${calculateDeg()}deg)`,
                }
              : {}
          }
        >
          {renderWheelItem()}
        </div>
      </div>
    </div>
  );
}

export default App;
