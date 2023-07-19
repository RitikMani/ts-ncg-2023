import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

const IndicatorSelector = ({ setSelectedIndicator }) => {
  const [indicators, setIndicators] = useState([]);

  useEffect(() => {
    axios
      .get('http://api.worldbank.org/v2/indicator')
      .then((response) => {
        const indicatorsData = response.data[1];
        const indicatorOptions = indicatorsData.map((indicator) => ({
          label: indicator.name,
          value: indicator.id,
        }));
        setIndicators(indicatorOptions);
      })
      .catch((error) => console.error('Error fetching indicators:', error));
  }, []);

  const handleIndicatorChange = (selectedOption) => {
    setSelectedIndicator(selectedOption);
  };

  return (
    <Select
      options={indicators}
      onChange={handleIndicatorChange}
      placeholder="Select an Indicator..."
    />
  );
};

export default IndicatorSelector;
