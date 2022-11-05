import React from "react";
import { Card } from "@nextui-org/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

export const options = {
  responsive: true,
  animations: {
    tension: {
      duration: 2000,
      easing: 'easeInOutQuad',
      from: 0.8,
      to: 0.3,
      loop: true
    }
  }
};

export const ProgressChart = ({ datapoints }) => {
  const labels = datapoints.map((i) => {
    return i.company;
  });

  const data = {
    labels,
    datasets: [
      {
        label: "CO2 produced",
        data: datapoints.map((i) => {
          return i.totalCarbon;
        }),
        borderColor: "rgb(28, 163, 35)",
        backgroundColor: "rgb(28, 163, 35, 0.5)",
      },
    ],
  };

  return (
    <Card css={{ mw: "500px" }}>
      <Card.Body>
        <Line options={options} data={data} />
      </Card.Body>
    </Card>
  );
};
