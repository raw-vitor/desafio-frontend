import { useContext } from "react";
import { useQuery } from "react-query";
import { ToggleBtnContext } from "../../../context/ToggleContext";
import { api } from "../../api/api";

type useSimulationsType = {
  yieldBtn: string;
  indexing: string;
};

type SimulationsReturnType = {
  tipoIndexacao: string;
  tipoRendimento: string;
  aliquotaIR: number;
  ganhoLiquido: number;
  valorPagoIR: number;
  valorTotalInvestido: number;
  valorFinalBruto: string;
  valorFinalLiquido: string;
  graficoValores: ChartValues;
};

type ChartValues = {
  comAporte: number[];
  semAporte: number[];
};

export const getSimulations = async ({
  yieldBtn,
  indexing,
}: useSimulationsType): Promise<SimulationsReturnType> => {
  const response = await api.get(
    `simulacoes/?tipoIndexacao=${indexing}&tipoRendimento=${yieldBtn}`
  );
  return response.data[0];
};

export const useSimulations = () => {
  const { indexing, yieldBtn } = useContext(ToggleBtnContext);
  const {
    data: simulations,
    isLoading,
    isError,
    isSuccess,
    refetch,
    remove,
  } = useQuery(["simulations", { indexing, yieldBtn }], () =>
    getSimulations({ indexing, yieldBtn })
  );

  return { simulations, isLoading, isError, refetch, remove, isSuccess };
};
