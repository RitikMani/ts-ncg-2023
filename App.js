import React, { useState } from 'react';
import './App.css';
import CountrySelector from './components/CountrySelector';
import IndicatorSelector from './components/IndicatorSelector';
import DateRangeForm from './components/DateRangeForm';
import ChartVisualization from './components/ChartVisualization';

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedIndicator, setSelectedIndicator] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <div className="App">
      <h1>World Bank Data Visualization</h1>
      <CountrySelector setSelectedCountry={setSelectedCountry} />
      <IndicatorSelector setSelectedIndicator={setSelectedIndicator} />
      <DateRangeForm setStartDate={setStartDate} setEndDate={setEndDate} />
      {selectedCountry && selectedIndicator && startDate && endDate ? (
        <ChartVisualization
          selectedCountry={selectedCountry}
          selectedIndicator={selectedIndicator}
          startDate={startDate}
          endDate={endDate}
        />
      ) : (
        <p>Select a country, indicator, and date range to see the chart.</p>
      )}
    </div>
  );
}

export default App;
