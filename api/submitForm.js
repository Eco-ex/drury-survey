async function fetchData(option, date) {
    console.log('fetchData', option, date);
    const requestOptions = {
        method: 'POST',
        mode: "no-cors", // no-cors, *cors, same-origin
        headers: { 'Content-Type': 'application/json' },
        // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: JSON.stringify({ option: option, date: date }),
    };

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbzHwoUL4q4Dz0ljLBVilzKSq4r9flGqX6X6j1OlBVmimCnLwi-Fh8IuL5vwfqrBm_LuoQ/exec', requestOptions);
  
        const data = await response.json();
        console.log(data); // Log to see the actual response
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

module.exports = fetchData;


