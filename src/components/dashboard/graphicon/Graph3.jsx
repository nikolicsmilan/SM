import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
function f(x, m, b) {
  return m * x + b;
}

function Graph3({ m, b, start, end, step, min, max }) {
  const data = {
    labels: [],
    datasets: [
      {
        label: `f(x) = ${m}x + ${b}`,
        data: [],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        backgroundColor: "rgba(255, 99, 132, 0)",
        tension: 0,
        pointRadius: 0,
      },
    ],
  };

  for (let x = start; x <= end; x += step) {
    data.labels.push(x);
    data.datasets[0].data.push(f(x, m, b));
  }

  const options = {
    scales: {
      x: {
        ticks: {
          stepSize: 1,
          callback: function (value, index) {
            return Math.round(value);
          },
        },
        max: 20,
      },
      y: {
        ticks: {
          stepSize: 1,
        },
        min: min,
        max: max,
      },
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          const value = data.datasets[0].data[tooltipItem.index];
          return value.toLocaleString(undefined, { minimumFractionDigits: 20 });
        },
      },
    },
  };
  return <Line data={data} options={options} />;
}

export default Graph3;
