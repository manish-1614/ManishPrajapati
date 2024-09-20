import React, { useState } from 'react'

const DateUtility = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [difference, setDifference] = useState('');
  
    const calculateDifference = () => {
      if (startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
  
        let years = end.getFullYear() - start.getFullYear();
        let months = end.getMonth() - start.getMonth();
        let days = end.getDate() - start.getDate();
  
        if (days < 0) {
          months -= 1;
          days += new Date(end.getFullYear(), end.getMonth(), 0).getDate(); // Adjust days
        }
  
        if (months < 0) {
          years -= 1;
          months += 12;
        }
  
        setDifference(`${years} years, ${months} months, and ${days} days`);
      } else {
        setDifference('Please select both dates');
      }
    };
  
    return (
      <div className='flex flex-col items-center gap-4 justify-center mt-12'>
        <h2 className='text-2xl font-roboto'>Date Difference Calculator</h2>
        <div className='my-border p-2'>
          <label>Start Date: </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className='my-border p-2'>
          <label>End Date: </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button onClick={calculateDifference} className='my-border bg-pink-200 text-white'>Calculate Difference</button>
        {difference && <p>Difference: {difference}</p>}
      </div>
    );
}

export default DateUtility