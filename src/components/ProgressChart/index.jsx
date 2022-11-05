import React from "react";
import { Card } from "@nextui-org/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  annotationPlugin
);

export const options = {
  responsive: true,
  animations: {
    tension: {
      duration: 2000,
      easing: "easeInOutQuad",
      from: 0.8,
      to: 0.3,
      loop: true,
    },
  },
  plugins: {
    title: {
      display: true,
      text: "CO2 produced per purchase",
    },
    annotation: {
      annotations: {
        line1: {
          type: "line",
          yMin: 0.35,
          yMax: 0.35,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 2,
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
};

export const ProgressChart = ({ datapoints: dataPoints }) => {
  if (!dataPoints) return null;

  const labels = dataPoints.map((i) => {
    //return i.company;
    return "";
  });

  const data = {
    labels,
    datasets: [
      {
        label: "CO2 produced",
        data: dataPoints.map((i) => {
          return i.averageCarbon;
        }),
        borderColor: "rgb(28, 163, 35)",
        backgroundColor: "rgba(28, 163, 35, 0.5)",
        fill: {
          target: { value: 0.35 },
          below: "rgba(28, 163, 35, 0.5)",
          above: "rgba(255, 99, 132, 0.5)",
        },
      },
    ],
  };

  return (
    <Card css={{ mw: "100%", padding: "10px", margin: "20px 0" }}>
      <Card.Body>
        <Line options={options} data={data} />
      </Card.Body>
    </Card>
  );
};
