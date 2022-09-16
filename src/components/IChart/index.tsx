import React, { useContext, useEffect, useState } from "react";
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
import { ToggleBtnContext } from "../../context/ToggleContext";
import { useSimulations } from "../../services/react-query/queries/useSimulations";

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
  const { makeUrlToRequest } = useContext(ToggleBtnContext);
  const { simulations } = useSimulations(makeUrlToRequest());
  const [chartData, setChartData] = useState<ChartData>({
    datasets: [],
  });
  const [charOptions, setCharOptions] = useState({});
  useEffect(() => {
    console.log(simulations && simulations[0].graficoValores);
  }, [simulations]);
  useEffect(() => {
    setChartData({
      labels: [1, 2],
      datasets: [
        {
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: ["rgb(237, 142, 83)"],
        },
      ],
    });
    setCharOptions({
      Responsive: true,
      plugins: {
        legend: {
          display: false,
          position: "top",
        },
      },
    });
  }, []);

  return <Bar options={charOptions} data={chartData} />;
};
