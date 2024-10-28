// src/components/TrendsChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement // Add BarElement for bar charts
} from 'chart.js';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement // Don't forget to register BarElement
);

function TrendsChart({ trendsData }) {
  const defaultData = {
    labels: ['Cloud', 'Devops', 'AI'],
    values: [10, 20, 30],
  };

  const datas = trendsData || defaultData;
  const data = {
    labels: datas.labels, // e.g., ['AI', 'Cloud', 'DevOps']
    datasets: [
      {
        label: 'Demand for Skills',
        data: datas.values, // e.g., [30, 20, 15]
        backgroundColor: 'rgba(0, 123, 255, 0.6)',
      },
    ],
  };
  const options = {
    scales: {
      x: {
        ticks: {
          color: 'black', // Change the color of x-axis labels here
        },
      },
      y: {
        ticks: {
          color: 'black', // Change the color of y-axis labels here
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'black', // Change the color of legend labels here
        },
      },
    },
  };

  return (
    <div className='mrk'>
      <h3>Job Market Trends</h3>
      <Bar data={data} options={options}/>
    </div>
  );
};

export default TrendsChart;
