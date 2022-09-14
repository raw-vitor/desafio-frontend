import { Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Simulator } from "../components/simulator/Simulator";

const Home: NextPage = () => {
  return (
    <Flex
      align="center"
      direction="column"
      h="calc(100vh - 32px)"
      m="4"
      bg="gray.50"
    >
      <Text p="6">Simulador de Investimentos</Text>
      <Flex w="full" h="full" justify="space-around">
        <Simulator />
        <Flex>
          <Text>Resultado da Simulação</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
