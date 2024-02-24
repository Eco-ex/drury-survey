import React from 'react';
import './App.css';

const RadioForm = ({ onSubmit, options}) => (
  <form onSubmit={onSubmit} className='form-wrapper'>
    {options.map((option, index) => (
      <div key={index} className='radio-options'>
        <input type="radio" id={option} name="option" value={option} />
        <label htmlFor={option}>{option}</label>
      </div>
    ))}
    <button type="submit" className='submit-button'>Submit</button>
  </form>
);

export default RadioForm;
