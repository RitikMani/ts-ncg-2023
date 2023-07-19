import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

const CountrySelector = ({ setSelectedCountry }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('http://api.worldbank.org/v2/country')
      .then((response) => {
        const countriesData = response.data[1];
        const countryOptions = countriesData.map((country) => ({
          label: country.name,
          value: country.iso2Code,
        }));
        setCountries(countryOptions);
      })
      .catch((error) => console.error('Error fetching countries:', error));
  }, []);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  return (
    <Select
      options={countries}
      onChange={handleCountryChange}
      placeholder="Select a Country..."
    />
  );
};

export default CountrySelector;
