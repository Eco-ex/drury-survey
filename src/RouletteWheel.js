// src/RouletteWheel.js
// import React, { useState } from 'react';
// import './RouletteWheel.css';

// const RouletteWheel = ({ onSpinEnd }) => { // Make sure the prop is correctly named here
//   const [spinning, setSpinning] = useState(false);

//   const spinWheel = () => {
//     setSpinning(true);
//     setTimeout(() => {
//       setSpinning(false);
//       const isWinner = Math.random() < .2; // 20% chance of winning
//       onSpinEnd(isWinner); // This should match the prop name
//     }, 3000);
//   };

//   return (
//     <div>
//       <div className={`wheel ${spinning ? 'spin' : ''}`}></div>
//       <button onClick={spinWheel} disabled={spinning}>Spin the Wheel</button>
//     </div>
//   );
// };

// export default RouletteWheel;

// src/RouletteWheel.js
import React, { useState } from 'react';
import { ReactComponent as RouletteWheelSvg } from './roulette-svgrepo-com.svg'; // Adjust the path as necessary
import './RouletteWheel.css';

const RouletteWheel = ({ onSpinEnd }) => {
  const [spinning, setSpinning] = useState(false);
  const [animateElement, setAnimateElement] = useState(false);

  const spinWheel = () => {
    setSpinning(true);
    setAnimateElement(true); // Start the animation for the specific element
    setTimeout(() => {
      setSpinning(false);
      setAnimateElement(false); // Stop the animation after it completes
      const isWinner = Math.random() < 0.2; // 20% chance of winning
      onSpinEnd(isWinner);
    }, 3000); // Ensure this matches the duration of your CSS animation
  };

  return (
    <div>
      <div className={`wheel ${spinning ? 'spin' : ''}`}>
        <RouletteWheelSvg />
      </div>
      {animateElement && <style>{`#spinningElement {animation: spinElement 3s linear;}`}</style>}
      <button onClick={spinWheel} disabled={spinning} className='spin-button'>Spin the Wheel</button>
    </div>
  );
};

export default RouletteWheel;


