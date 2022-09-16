import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ToggleBtnContext } from "../../context/ToggleContext";
import { useMoney } from "../../hooks/useMoneyMask";
import { useSimulations } from "../../services/react-query/queries/useSimulations";

type CardType = {
  title: string;
  value: string | number | undefined;
  green?: boolean;
  percent?: boolean;
};

export const CardItem = ({ title, value, green, percent }: CardType) => {
  const percentFormat = percent ? value + "%" : "R$ " + value;
  const { makeUrlToRequest } = useContext(ToggleBtnContext);
  const { isLoading, isError } = useSimulations(makeUrlToRequest());

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
      <Text fontWeight="bold" fontSize="14px" hidden={isLoading || isError}>
        {title}
      </Text>
      <Text
        fontSize="14px"
        color={green ? "green" : "black"}
        hidden={isLoading || isError}
      >
        {value && value > 0 ? useMoney(String(value)) : percentFormat}
      </Text>
      <Spinner hidden={!isLoading || isError} />
      <Text fontSize="13px" color="red" hidden={!isError}>
        Erro ao buscar dados
      </Text>
    </Flex>
  );
};
