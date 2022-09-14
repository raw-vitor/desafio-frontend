import { useForm } from "react-hook-form";
import {
  Button,
  Flex,
  FormControl,
  Input,
  Text,
  useBoolean,
} from "@chakra-ui/react";

export const Simulator = () => {
  const [btnActive, setBtnActive] = useBoolean();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Flex direction="column">
      <Text>Simulador</Text>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <FormControl>
          <Text>Rendimento</Text>
          <Button
            _hover={{ bg: "orange.50" }}
            colorScheme="orange"
            border="1px solid"
            borderRightRadius="0"
            color={btnActive ? "white" : "black"}
            bg={btnActive ? "orange.50" : "transparent"}
            onClick={setBtnActive.toggle}
          >
            Bruto
          </Button>
          <Button
            _hover={{ bg: "orange.50" }}
            colorScheme="orange"
            border="1px solid"
            borderLeftRadius="0"
            color={!btnActive ? "white" : "black"}
            bg={!btnActive ? "orange.50" : "transparent"}
            onClick={setBtnActive.toggle}
          >
            Líquido
          </Button>
        </FormControl>
        <FormControl>
          <Text>Aporte inicial</Text>
          <Input
            type="text"
            variant="flushed"
            borderBottomColor="black"
            {...register("inicialContribution")}
          />
        </FormControl>
        <FormControl>
          <Text>Prazo(em meses)</Text>
          <Input
            type="number"
            variant="flushed"
            borderBottomColor="black"
            {...register("deadline")}
          />
        </FormControl>
        <FormControl>
          <Text>IPCA(ao ano)</Text>
          <Input
            type="text"
            variant="flushed"
            bg="transparent"
            borderBottomColor="black"
            {...register("ipca")}
          />
        </FormControl>
        <FormControl>
          <Text>Aporte Mensal</Text>
          <Input
            type="text"
            variant="flushed"
            borderBottomColor="black"
            {...register("monthlContribution")}
          />
        </FormControl>
        <FormControl>
          <Text>Rentabilidade</Text>
          <Input
            type="text"
            variant="flushed"
            borderBottomColor="black"
            {...register("profitability")}
          />
        </FormControl>
        <FormControl>
          <Text>CDI(ao ano)</Text>
          <Input
            type="text"
            variant="flushed"
            borderBottomColor="black"
            {...register("cdi")}
          />
        </FormControl>
        <Button type="submit">Simular</Button>
      </form>
    </Flex>
  );
};
