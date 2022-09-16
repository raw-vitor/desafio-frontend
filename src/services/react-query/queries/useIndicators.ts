import { useQuery } from "react-query";
import { api } from "../../api/api";

type IndicatorsType = {
  nome: string;
  valor: number;
};

const getIndicators = async (): Promise<IndicatorsType[]> => {
  const response = await api.get("/indicadores");
  return response.data;
};

export const useIndicators = () => {
  const {
    data: indicators,
    isLoading,
    isError,
  } = useQuery(["ipca"], () => getIndicators());
  return { indicators, isLoading, isError };
};
