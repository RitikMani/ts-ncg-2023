import React, { useState } from 'react';

const DateRangeForm = ({ setStartDate, setEndDate }) => {
  const [startDateInput, setStartDateInput] = useState('');
  const [endDateInput, setEndDateInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStartDate(startDateInput);
    setEndDate(endDateInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="start-date">Start Date:</label>
      <input
        type="text"
        id="start-date"
        value={startDateInput}
        onChange={(e) => setStartDateInput(e.target.value)}
        placeholder="YYYY-MM-DD"
        required
      />
      <label htmlFor="end-date">End Date:</label>
      <input
        type="text"
        id="end-date"
        value={endDateInput}
        onChange={(e) => setEndDateInput(e.target.value)}
        placeholder="YYYY-MM-DD"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default DateRangeForm;
