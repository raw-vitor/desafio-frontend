import { useForm } from "react-hook-form";
import { Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import { ToggleButton } from "../ToggleButton";
import { useIndicators } from "../../services/react-query/queries/useIndicators";

export const Simulator = () => {
  const { indicators } = useIndicators();
  const fontSize = "14px";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <Flex direction="column">
      <Text fontWeight="bold" fontSize="18px">
        Simulador
      </Text>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Flex>
          <Flex direction="column">
            <FormControl>
              <Text fontSize={fontSize}>Rendimento</Text>
              <ToggleButton labels={["Bruto", "Líquido"]} />
            </FormControl>
            <FormControl>
              <Text fontSize={fontSize}>Aporte inicial</Text>
              <Input
                type="text"
                variant="flushed"
                bg="transparent"
                borderBottomColor="black"
                {...register("inicialContribution")}
              />
            </FormControl>
            <FormControl>
              <Text fontSize={fontSize}>Prazo(em meses)</Text>
              <Input
                type="number"
                variant="flushed"
                bg="transparent"
                borderBottomColor="black"
                {...register("deadline")}
              />
            </FormControl>
            <FormControl>
              <Text fontSize={fontSize}>IPCA(ao ano)</Text>
              <Input
                type="text"
                variant="flushed"
                bg="transparent"
                borderBottomColor="black"
                {...register("ipca")}
                value={`${indicators && indicators[1].valor}%`}
              />
            </FormControl>
          </Flex>
          <Flex direction="column" ml="9">
            <FormControl>
              <Text fontSize={fontSize}>Tipo de indexação</Text>
              <ToggleButton labels={["PRÉ", "POS", "FIXADO"]} />
            </FormControl>
            <FormControl>
              <Text fontSize={fontSize}>Aporte Mensal</Text>
              <Input
                type="text"
                variant="flushed"
                bg="transparent"
                borderBottomColor="black"
                {...register("monthlContribution")}
              />
            </FormControl>
            <FormControl>
              <Text fontSize={fontSize}>Rentabilidade</Text>
              <Input
                type="text"
                variant="flushed"
                bg="transparent"
                borderBottomColor="black"
                {...register("profitability")}
              />
            </FormControl>
            <FormControl>
              <Text fontSize={fontSize}>CDI(ao ano)</Text>
              <Input
                type="text"
                variant="flushed"
                bg="transparent"
                borderBottomColor="black"
                {...register("cdi")}
                value={`${indicators && indicators[0].valor}%`}
              />
            </FormControl>
          </Flex>
        </Flex>
        <Flex justify="space-around" mt="6">
          <Button
            size="lg"
            border="1px solid"
            w="full"
            mx="2"
            onClick={() => reset()}
          >
            Limpar campos
          </Button>
          <Button
            size="lg"
            p="5"
            bg="orange.50"
            w="full"
            mx="2"
            _disabled={{
              bg: "gray.500",
              cursor: "not-allowed",
              pointerEvents: "none",
            }}
            _hover={{ bg: "orange.500" }}
            type="submit"
          >
            Simular
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};
