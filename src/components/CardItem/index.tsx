import { Box, Flex, Text } from "@chakra-ui/react";
import { useMoney } from "../../hooks/useMoneyMask";

type CardType = {
  title: string;
  value: string | number | undefined;
  green?: boolean;
  percent?: boolean;
};

export const CardItem = ({ title, value, green, percent }: CardType) => {
  const percentFormat = percent ? value + "%" : "R$ " + value;

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
      <Text fontWeight="bold" fontSize="14px">
        {title}
      </Text>
      <Text fontSize="14px" color={green ? "green" : "black"}>
        {value && value > 0 ? useMoney(String(value)) : percentFormat}
      </Text>
    </Flex>
  );
};
