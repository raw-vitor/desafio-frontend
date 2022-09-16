import { Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { SimulationResult } from "../components/SimulationResult";
import { Simulator } from "../components/simulator/Simulator";
import { ToggleBtnProvider } from "../context/ToggleContext";

const Home: NextPage = () => {
  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      h="100vh"
      bg="gray.50"
      p={["2", "8"]}
    >
      <Text p="6" fontWeight="bold" fontSize="25px">
        Simulador de Investimentos
      </Text>
      <Flex
        w="full"
        h="full"
        justify={["center", "center", "space-around"]}
        direction={["column", "column", "column", "row"]}
      >
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
