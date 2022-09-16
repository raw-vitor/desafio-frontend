import { useMutation, useQuery } from "react-query";
import { api } from "../../api/api";

type useSimulationsType = {
  yieldBtn: string;
  indexingType: string;
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
};

export const getSimulations = async (): Promise<SimulationsReturnType[]> => {
  const response = await api.get("/simulacoes");
  return response.data;
};

export const useSimulations = () => {
  const {
    data: simulations,
    isLoading,
    isError,
    refetch,
  } = useQuery(["simulations"], getSimulations);
  return { simulations, isLoading, isError, refetch };
};
