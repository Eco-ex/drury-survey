import React, { useState } from 'react';
import './App.css';
import RadioForm from './RadioForm';
import RouletteWheel from './RouletteWheel';
import './index.css';

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

    const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ option: selectedOption, date: currentDate }),
  };

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzSWPOnD-prKupYKE9ST1epCvo_0NejI4TZAVvCdvlooNo9rvip5LfoomzHS-5WFhdDcg/exec', requestOptions);
      const data = await response.json();
      console.log(data); // Process success response
      // Here you might set some state to indicate the form was submitted successfully or to display a message to the user
    } catch (error) {
      console.error('Error:', error);
      // Handle the error case
    }
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
          <a className='reviews' href="http://example.com/link1" target="_blank" rel="noopener noreferrer"><button className='review-button'>Trip Advisor</button></a>
          <a className='reviews' href="http://example.com/link2" target="_blank" rel="noopener noreferrer"><button className='review-button'>Google Review</button></a>
        </div>
      )}
    </div>
  );
}

export default App;
