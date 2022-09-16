import { Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { IChart } from "../components/IChart";
import { SimulationResult } from "../components/SimulationResult";
import { Simulator } from "../components/simulator/Simulator";
import { ToggleBtnProvider } from "../context/ToggleContext";

const Home: NextPage = () => {
  return (
    <Flex
      align="center"
      direction="column"
      minH="100vh"
      bg="gray.50"
      p={["2", "1"]}
    >
      <Text p="2" fontWeight="bold" fontSize="25px">
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
        <Flex justify="center" mt="2" direction="column">
          <SimulationResult />
          <Flex maxH="300px">
            <IChart />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
