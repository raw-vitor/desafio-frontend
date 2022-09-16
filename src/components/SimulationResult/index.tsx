import { Flex, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { ToggleBtnContext } from "../../context/ToggleContext";
import { useSimulations } from "../../services/react-query/queries/useSimulations";
import { CardItem } from "../CardItem";

export const SimulationResult = () => {
  const { indexing, yieldBtn, makeUrlToRequest } = useContext(ToggleBtnContext);
  const { simulations, isLoading, isError, refetch } = useSimulations(
    makeUrlToRequest()
  );
  const filteredSimulations = simulations?.filter(
    (item) =>
      item.tipoIndexacao === indexing && item.tipoRendimento === yieldBtn
  )[0];

  return (
    <Flex direction="column" align="center">
      <Text fontSize="23px" fontWeight="bold">
        Resultado da Simulação
      </Text>
      <Flex maxW="700px" flexWrap="wrap" justify="space-around" align="center">
        <CardItem
          title="Valor Final Bruto"
          value={filteredSimulations?.valorFinalBruto}
        />
        <CardItem
          title="Alíquota do IR"
          value={filteredSimulations?.aliquotaIR}
          percent
        />
        <CardItem
          title="Valor Pago em IR"
          value={filteredSimulations?.valorPagoIR}
        />
        <CardItem
          title="Valor Final Líquido"
          value={filteredSimulations?.valorFinalLiquido}
          green
        />
        <CardItem
          title="Valor Total Investido"
          value={filteredSimulations?.valorTotalInvestido}
        />
        <CardItem
          title="Ganho Líquido"
          value={filteredSimulations?.valorFinalLiquido}
          green
        />
      </Flex>
    </Flex>
  );
};
