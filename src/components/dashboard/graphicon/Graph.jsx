import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
function calculatePoints(m, b, start, end, step) {
  const points = [];
  for (let x = start; x <= end; x += step) {
    const y = m * x + b;
    points.push({ x, y });
  }
  return points;
}
function Graph({ m, b, start, end, step }) {
  const data = {
    datasets: [
      {
        label: `f(x) = ${m}x + ${b}`,
        data: calculatePoints(m, b, start, end, step),
        borderColor: "red",
        borderWidth: 1,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    scales: {
      xAxes: [
        {
          type: "linear",
          position: "bottom",
        },
      ],
      yAxes: [
        {
          type: "linear",
          position: "left",
        },
      ],
    },
  };

  return <Line data={data} options={options} />;
}

export default Graph;
