import React, { useState } from 'react';
import './App.css';
import RadioForm from './RadioForm';
import RouletteWheel from './RouletteWheel';
import './index.css';
import submitForm from './api/submitForm';

function App() {
  const [showForm, setShowForm] = useState(true);
  const [showWheel, setShowWheel] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
  const [winner, setWinner] = useState(false);
  
  // Define your options array here
  const options = ["Friends/Family", "Google Maps", "Instagram", "TikTok", "Local", "Web Search", "Trip Advisor"];

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setShowForm(false);
    setShowWheel(true); // Show the roulette wheel after form submission
    const formData = new FormData(event.target);
    const selectedOption = formData.get('option'); // Assuming 'option' is the name of your radio inputs

    const currentDate = new Date().toISOString();
    const res = await submitForm(selectedOption, currentDate);
    console.log(res);
  };

  const handleSpinEnd = (isWinner) => {
    setShowWheel(false); // Hide the wheel
    if(isWinner) {
      setResultMessage('Congratulations! You won! Please show this message to a member of staff.');
    } else {
      setResultMessage('You did not win this time! See you soon.');
    }
  };

  return (
    <div>
      {showForm && (
        <RadioForm onSubmit={handleFormSubmit} options={options}/>
      )}
      {showWheel && (
        <RouletteWheel onSpinEnd={handleSpinEnd} />
      )}
      {!showForm && !showWheel && resultMessage && (
        <div className='review-content'>
          <p>{resultMessage}</p>
          <p>Thank you so much for completing our survey. If you have time, please also leave us a review!</p>
          <a className='reviews' href="http://example.com/link1" rel="noopener noreferrer"><button className='review-button'>Trip Advisor</button></a>
          <a className='reviews' href="http://example.com/link2" rel="noopener noreferrer"><button className='review-button'>Google Review</button></a>
        </div>
      )}
    </div>
  );
}

export default App;
