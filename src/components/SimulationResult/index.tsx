import { Flex, Text } from "@chakra-ui/react";
import { useSimulations } from "../../services/react-query/queries/useSimulations";
import { CardItem } from "../CardItem";

export const SimulationResult = () => {
  const { simulations, isLoading, isError, refetch } = useSimulations();

  return (
    <Flex direction="column" align="center">
      <Text fontSize="23px" fontWeight="bold">
        Resultado da Simulação
      </Text>
      <Flex maxW="700px" flexWrap="wrap" justify="space-around" align="center">
        <CardItem
          title="Valor Final Bruto"
          value={simulations?.valorFinalBruto}
        />
        <CardItem
          title="Alíquota do IR"
          value={simulations?.aliquotaIR}
          percent
        />
        <CardItem title="Valor Pago em IR" value={simulations?.valorPagoIR} />
        <CardItem
          title="Valor Final Líquido"
          value={simulations?.valorFinalLiquido}
          green
        />
        <CardItem
          title="Valor Total Investido"
          value={simulations?.valorTotalInvestido}
        />
        <CardItem
          title="Ganho Líquido"
          value={simulations?.valorFinalLiquido}
          green
        />
      </Flex>
    </Flex>
  );
};
