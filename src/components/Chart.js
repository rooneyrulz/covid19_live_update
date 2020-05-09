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
      datasets: [
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
  }, [confirmed, death, recovered, active]);

  return (
    <Doughnut
      data={chartData}
      options={{
        responsive: true,
        maintainAspectRatio: true,
        legend: {
          labels: {
            fontColor: '#fff',
          },
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              var dataset = data.datasets[tooltipItem.datasetIndex];
              var meta = dataset._meta[Object.keys(dataset._meta)[0]];
              var total = meta.total;
              var currentValue = dataset.data[tooltipItem.index];
              var percentage = parseFloat(
                ((currentValue / total) * 100).toFixed(1)
              );
              return currentValue + ' (' + percentage + '%)';
            },
            title: function (tooltipItem, data) {
              return data.labels[tooltipItem[0].index];
            },
          },
        },
      }}
    />
  );
};

export default Chart;
