import React, { useContext, useEffect, useState } from "react";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
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

export const IChart = () => {
  const { makeUrlToRequest } = useContext(ToggleBtnContext);
  const { simulations } = useSimulations(makeUrlToRequest());
  const [chartData, setChartData] = useState<ChartData>({
    datasets: [],
  });
  const [cAporte, setCAporte] = useState<number[]>([]);
  const [sAporte, setSAporte] = useState<number[]>([]);
  const [charOptions, setCharOptions] = useState({});
  useEffect(() => {
    if (simulations) {
      const comAporte: number[] = Object.values(
        simulations && simulations[0].graficoValores.comAporte
      );
      const semAporte: number[] = Object.values(
        simulations && simulations[0].graficoValores.semAporte
      );
      setCAporte(comAporte);
      setSAporte(semAporte);
    }
  }, [simulations]);
  useEffect(() => {
    setChartData({
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      datasets: [
        {
          label: "Sem Aporte",
          data: sAporte,
          backgroundColor: ["rgb(0,0,0)"],
        },
        {
          label: "Com Aporte",
          data: cAporte,
          backgroundColor: ["rgb(237, 142, 83)"],
        },
      ],
    });
    setCharOptions({
      Responsive: true,
      manteinAspectRatio: false,
      scales: {
        x: { stacked: true, grid: { display: false } },
        y: { stacked: true, grid: { display: false }, display: false },
      },

      plugins: {
        title: {
          display: true,
          text: "Valor(R$)",
          position: "left",
        },
        subtitle: {
          display: true,
          align: "center",
          text: "Tempo(meses)",
          postition: "bottom",
        },
        legend: {
          reverse: true,
          display: true,
          position: "bottom",
          align: "center",
          usePointStyle: true,
          rotation: 30,
          labels: {
            usePointStyle: true,
            rotation: 30,
          },
        },
      },
    });
  }, [simulations]);

  return <Bar options={charOptions} data={chartData} />;
};
