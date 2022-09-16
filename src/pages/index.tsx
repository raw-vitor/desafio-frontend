import { Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { SimulationResult } from "../components/SimulationResult";
import { Simulator } from "../components/simulator/Simulator";
import { ToggleBtnProvider } from "../context/ToggleContext";

const Home: NextPage = () => {
  return (
    <Flex
      align="center"
      direction="column"
      h="calc(100vh - 32px)"
      m="4"
      bg="gray.50"
    >
      <Text p="6" fontWeight="bold" fontSize="24px">
        Simulador de Investimentos
      </Text>
      <Flex w="full" h="full" justify="space-around">
        <ToggleBtnProvider>
          <Simulator />
        </ToggleBtnProvider>
        <Flex>
          <SimulationResult />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
