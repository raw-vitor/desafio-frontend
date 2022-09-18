import { Flex, Spinner, Text } from "@chakra-ui/react";
import { useMoney } from "../../hooks/useMoneyMask";
import { useSimulations } from "../../services/react-query/queries/useSimulations";

type CardType = {
  title: string;
  value: string | number | undefined;
  green?: boolean;
  percent?: boolean;
};

export const CardItem = ({ title, value, green, percent }: CardType) => {
  const { isLoading } = useSimulations();
  const percentFormat = percent ? value + "%" : "R$ " + value;

  const hidden = isLoading || (!value && value != 0);

  return (
    <Flex
      w="200px"
      h="80px"
      m="3"
      direction="column"
      align="center"
      justify="space-around"
      bg="white"
      rounded="md"
      boxShadow="lg"
    >
      <Text fontWeight="bold" fontSize="14px" hidden={hidden}>
        {title}
      </Text>
      <Text fontSize="14px" color={green ? "green" : "black"} hidden={hidden}>
        {value && value > 0 ? useMoney(String(value)) : percentFormat}
      </Text>
      <Spinner hidden={!isLoading} />
      <Text fontSize="13px" color="red" hidden={!hidden}>
        Erro ao buscar dados
      </Text>
    </Flex>
  );
};
