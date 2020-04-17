import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

const Chart = ({ confirmed, death, recovered, active }) => {
  const [chartData, setChartData] = useState({
    data: {
      datasets: [
        {
          data: [],
          backgroundColor: [],
          hoverBackgroundColor: [],
        },
      ],
    },
    labels: ['Confirmed', 'Deaths', 'Recovered', 'Active'],
  });

  useEffect(() => {
    setChartData({
      ...chartData,
      ...chartData.data,
      datasets: confirmed &&
        death &&
        recovered &&
        active && [
          {
            data: [confirmed, death, recovered, active],
            backgroundColor: [
              'rgba(30, 72, 120, 0.7)',
              'rgba(176, 19, 16, 0.7)',
              'rgba(13, 89, 48, 0.7)',
              'rgba(33, 191, 56, 0.7)',
            ],
            hoverBackgroundColor: [
              'rgba(30, 72, 120)',
              'rgba(176, 19, 16)',
              'rgba(13, 89, 48)',
              'rgba(33, 191, 56)',
            ],
          },
        ],
    });
    console.log(confirmed, death, recovered, active);
  }, [confirmed, death, recovered, active]);

  return (
    <Doughnut
      data={chartData}
      options={{
        responsive: true,
        maintainAspectRatio: true,
      }}
    />
  );
};

export default Chart;
