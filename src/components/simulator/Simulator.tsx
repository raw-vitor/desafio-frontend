import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ToggleButton } from "../ToggleButton";
import { useIndicators } from "../../services/react-query/queries/useIndicators";
import { useMoney } from "../../hooks/useMoneyMask";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSimulations } from "../../services/react-query/queries/useSimulations";

export type SignInFormType = {
  yieldBtn: string;
  indexingType: string;
  inicialContribution: string;
  deadline: string;
  ipca: string;
  monthlContribution: string;
  profitability: string;
  cdi: string;
};

const signInFormSchema = yup.object().shape({
  yield: yup.number(),
  inicialContribution: yup.string().required("Aporte inicial é obrigatório"),
  deadline: yup.string().nullable(true).required("Prazo é obrigatório"),
  monthlContribution: yup.string().required("Aporte é obrigatório"),
  profitability: yup.string().required("Rentabilidade é obrigatório"),
});

export const Simulator = () => {
  const { indicators } = useIndicators();
  const { simulations, isLoading, isError, refetch } = useSimulations();
  const fontSize = "14px";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInFormSchema),
    defaultValues: {
      yieldBtn: "bruto",
      indexingType: "pre",
      inicialContribution: "",
      deadline: "",
      monthlContribution: "",
      profitability: "",
      ipca: "",
      cdi: "",
    },
  });

  const handleSignIn = () => {
    refetch();
  };

  return (
    <Flex direction="column">
      <Text fontWeight="bold" fontSize="18px">
        Simulador
      </Text>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <Flex>
          <Flex direction="column" mb="2">
            <FormControl>
              <Text fontSize={fontSize}>Rendimento</Text>
              <ToggleButton
                items={[
                  { name: "Bruto", label: "bruto" },
                  { name: "Líquido", label: "liquido" },
                ]}
                type="yield"
              />
            </FormControl>
            <FormControl isInvalid={!!errors.inicialContribution}>
              <Text
                fontSize={fontSize}
                color={!!errors.inicialContribution ? "red" : "black"}
              >
                Aporte inicial
              </Text>
              <Flex align="center" direction="column">
                <Input
                  type="string"
                  variant="flushed"
                  bg="transparent"
                  borderBottomColor="black"
                  {...register("inicialContribution")}
                  onChange={(e) =>
                    (e.currentTarget.value = useMoney(e.currentTarget.value))
                  }
                />
                <FormErrorMessage>
                  {errors.inicialContribution?.message}
                </FormErrorMessage>
              </Flex>
            </FormControl>
            <FormControl isInvalid={!!errors.deadline}>
              <Text fontSize={fontSize}>Prazo(em meses)</Text>
              <Input
                type="number"
                variant="flushed"
                bg="transparent"
                borderBottomColor="black"
                {...register("deadline")}
              />
              <FormErrorMessage>{errors.deadline?.message}</FormErrorMessage>
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
          <Flex direction="column" ml="9" mb="2">
            <FormControl>
              <Text fontSize={fontSize}>Tipo de indexação</Text>
              <ToggleButton
                items={[
                  { name: "PRÉ", label: "pre" },
                  { name: "POS", label: "pos" },
                  { name: "FIXADO", label: "fixado" },
                ]}
                type="indexingType"
              />
            </FormControl>
            <FormControl isInvalid={!!errors.monthlContribution}>
              <Text fontSize={fontSize}>Aporte Mensal</Text>
              <Input
                type="text"
                variant="flushed"
                bg="transparent"
                borderBottomColor="black"
                {...register("monthlContribution")}
                onChange={(e) =>
                  (e.currentTarget.value = useMoney(e.currentTarget.value))
                }
              />
              <FormErrorMessage>
                {errors.monthlContribution?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.profitability}>
              <Text fontSize={fontSize}>Rentabilidade</Text>
              <Input
                type="text"
                variant="flushed"
                bg="transparent"
                borderBottomColor="black"
                {...register("profitability")}
              />
              <FormErrorMessage>
                {errors.profitability?.message}
              </FormErrorMessage>
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
            onClick={() =>
              reset({
                yieldBtn: "Bruto",
                indexingType: "PRÉ",
                deadline: "",
                inicialContribution: "",
                monthlContribution: "",
                profitability: "",
              })
            }
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
            isLoading={isLoading}
          >
            Simular
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};
