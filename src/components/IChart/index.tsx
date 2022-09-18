import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
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
  const { simulations } = useSimulations();
  const [chartData, setChartData] = useState<ChartData>({
    datasets: [],
  });
  const [cAporte, setCAporte] = useState<number[]>([]);
  const [sAporte, setSAporte] = useState<number[]>([]);
  const [charOptions, setCharOptions] = useState({});

  const getData = () => {
    if (simulations?.graficoValores) {
      const comAporte: number[] = Object.values(
        simulations && simulations.graficoValores.comAporte
      );
      const semAporte: number[] = Object.values(
        simulations && simulations.graficoValores.semAporte
      );
      setCAporte(comAporte);
      setSAporte(semAporte);
    } else {
      setCAporte([0]);
      setSAporte([0]);
    }
  };

  useEffect(() => {
    setCharOptions({
      type: "bar",
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
    setChartData({
      labels: [
        "1 mês",
        "2 meses",
        "3 meses",
        "4 meses",
        "5 meses",
        "6 meses",
        "7 meses",
        "8 meses",
        "9 meses",
        "10 meses",
      ],
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
    getData();
  }, [simulations]);

  return (
    <Flex w="100%" flex="1">
      <Bar options={charOptions} data={chartData} />
    </Flex>
  );
};
