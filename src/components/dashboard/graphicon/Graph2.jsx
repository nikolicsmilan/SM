import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from "chart.js/auto";
function f(x, m, b) {
  return m * x + b;
}

function Graph2() {
  const m = 2;
  const b = 5;
  const data = {
    labels: [],
    datasets: [
      {
        label: `f(x) = ${m}x + ${b}`,
        data: [],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  for (let x = -10; x <= 10; x += 0.1) {
    data.labels.push(x);
    data.datasets[0].data.push(f(x, m, b));
  }

  const options = {
    scales: {
      x: {
        ticks: {
          stepSize: 1,
        },
      },
      y: {
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default Graph2;