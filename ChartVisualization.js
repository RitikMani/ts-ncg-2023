import React, { useState, useEffect } from 'react';
import { ColumnChart } from 'react-chartkick';
import 'chart.js';
import axios from 'axios';

const ChartVisualization = ({ selectedCountry, selectedIndicator, startDate, endDate }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const apiUrl = `https://api.worldbank.org/v2/country/${selectedCountry.value}/indicator/${selectedIndicator.value}?date=${startDate}:${endDate}&format=json`;
    axios
      .get(apiUrl)
      .then((response) => {
        const indicatorData = response.data[1];
        const chartData = indicatorData.reduce((data, item) => {
          if (item.value !== null) {
            data[item.date] = item.value;
          }
          return data;
        }, {});
        setChartData(chartData);
      })
      .catch((error) => console.error('Error fetching indicator data:', error));
  }, [selectedCountry, selectedIndicator, startDate, endDate]);

  return <ColumnChart data={chartData} />;
};

export default ChartVisualization;
