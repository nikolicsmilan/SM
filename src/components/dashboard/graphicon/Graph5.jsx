import React from "react";
import { Line } from "react-chartjs-2";

function f(x) {
  return Math.sin(x);
}

function Graph5({ m, b, xstart, xend, step, miny, maxy }) {
  const data = {
    labels: [],
    datasets: [
      {
        label: "f(x) = sin(x)",
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

  for (let x = xstart; x <= xend; x += step) {
    data.labels.push(x);
    data.datasets[0].data.push(f(x));
  }

  const options = {
    scales: {
      x: {
        ticks: {
          stepSize: 1,
          callback: function (value, index) {
            if (value === 0) {
              return "0";
            } else if (value === Math.PI) {
              return "π";
            } else if (value === 2 * Math.PI) {
              return "2π";
            } else {
              return `${(180 / Math.PI) * value}°`;
            }
          },
        },
        max: 20,
      },
      y: {
        ticks: {
          stepSize: 1,
        },
        min: miny,
        max: maxy,
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

export default Graph5;