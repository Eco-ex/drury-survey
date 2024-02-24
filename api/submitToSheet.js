// api/submitToSheet.js
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { option, date } = req.body;
  
  const response = await fetch('https://script.google.com/macros/s/AKfycbzHwoUL4q4Dz0ljLBVilzKSq4r9flGqX6X6j1OlBVmimCnLwi-Fh8IuL5vwfqrBm_LuoQ/exec', {
    method: 'POST',
    body: JSON.stringify({ option, date }),
    headers: { 'Content-Type': 'application/json' },
  });
  
  const data = await response.json();
  
  res.status(200).json(data);
};
