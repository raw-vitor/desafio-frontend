import { Flex, Text } from "@chakra-ui/react";
import { useSimulations } from "../../services/react-query/queries/useSimulations";
import { CardItem } from "../CardItem";

export const SimulationResult = () => {
  const { simulations } = useSimulations();

  const cards = [
    { title: "Valor Final Bruto", value: simulations?.valorFinalBruto },
    { title: "Alíquota do IR", value: simulations?.aliquotaIR, percent: true },
    { title: "Valor Pago em IR", value: simulations?.valorPagoIR, green: true },
    { title: "Valor Final Líquido", value: simulations?.valorFinalLiquido },
    { title: "Valor Total Investido", value: simulations?.valorTotalInvestido },
    {
      title: "Ganho Líquido",
      value: simulations?.valorFinalLiquido,
      green: true,
    },
  ];

  return (
    <Flex direction="column" align="center">
      <Text fontSize="23px" fontWeight="bold">
        Resultado da Simulação
      </Text>
      <Flex maxW="700px" flexWrap="wrap" justify="space-around" align="center">
        {cards.map((item) => (
          <CardItem
            key={item.title}
            title={item.title}
            value={item.value}
            green={item.green}
            percent={item.percent}
          />
        ))}
      </Flex>
    </Flex>
  );
};
