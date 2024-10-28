import React from 'react';
import { Line } from 'react-chartjs-2';
import TrendsChart from './TrendsChart';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Historicdata() {
  // Historical trends data for multiple charts
  const historicalTrends1 = [
    { year: '2020', demand: 30 },
    { year: '2021', demand: 45 },
    { year: '2022', demand: 50 },
    { year: '2023', demand: 65 },
    { year: '2024', demand: 80 },
  ];

  const historicalTrends2 = [
    { year: '2020', demand: 40 },
    { year: '2021', demand: 55 },
    { year: '2022', demand: 60 },
    { year: '2023', demand: 70 },
    { year: '2024', demand: 90 },
  ];

  const historicalTrends3 = [
    { year: '2020', demand: 25 },
    { year: '2021', demand: 35 },
    { year: '2022', demand: 45 },
    { year: '2023', demand: 60 },
    { year: '2024', demand: 75 },
  ];

  // Helper function to generate chart data
  const generateChartData = (trends, label) => ({
    labels: trends.map(trend => trend.year),
    datasets: [
      {
        label: label,
        data: trends.map(trend => trend.demand),
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(0, 123, 255, 1)',
        tension: 0.1,
      },
    ],
  });

  // Chart options
  // Chart options
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      labels: {
        color: 'black', // Change legend label color to black
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: 'black', // Change x-axis label color to black
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: 'black', // Change y-axis label color to black
      },
    },
  },
};


  return (
    <div className='chartsdiv2'>
      <h2>Historical Data & Trends</h2>

      <div className='chartdiv'>
      <div className='chartdiv1'>
      
      <Line style={{color:"white"}} data={generateChartData(historicalTrends1, 'Software engineering')} options={options} />
      <hr className='laini'/>
</div>
<div className='chartdiv1'>
  
      <Line data={generateChartData(historicalTrends2, 'blockchain')} options={options} />
      <hr className='laini'/>
      </div>
      <div className='chartdiv1'>
      
      <Line data={generateChartData(historicalTrends3, 'AI')} options={options} />  <hr className='laini'/> </div></div>
      <TrendsChart/>
    </div>
  );
}

export default Historicdata;
