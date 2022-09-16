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

export const getSimulations = async (
  todo: string
): Promise<SimulationsReturnType[]> => {
  console.log("greeting: ", todo);
  const response = await api.get(`${todo}`);
  return response.data;
};

export const useSimulations = (todo: string) => {
  const {
    data: simulations,
    isLoading,
    isError,
    refetch,
    remove,
  } = useQuery(["simulations", todo], () => getSimulations(todo));
  return { simulations, isLoading, isError, refetch, remove };
};