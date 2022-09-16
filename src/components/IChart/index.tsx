import React, { useEffect, useState } from "react";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataset,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";

Chartjs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type IChartDataType = {
  labels: string[];
  datasets: DataSets;
};
type DataSets = {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
};
export const IChart = () => {
  const [chartData, setChartData] = useState<ChartData>({
    datasets: [],
  });
  const [charOptions, setCharOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["eu", "ela", "e", "ela"],
      datasets: [
        {
          label: "My First Dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 1,
        },
      ],
    });
    setCharOptions({
      Responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Projeção de Valores",
        },
      },
    });
  }, []);

  return <Bar options={charOptions} data={chartData} />;
};
