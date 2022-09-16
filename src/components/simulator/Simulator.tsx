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
import { useContext } from "react";
import { ToggleBtnContext } from "../../context/ToggleContext";

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
  const { indicators, isError, isLoading: indicatirsLoading } = useIndicators();
  const { makeUrlToRequest } = useContext(ToggleBtnContext);
  const { isLoading, refetch } = useSimulations(makeUrlToRequest());
  const fontSize = "14px";
  const marginBottonInputs = "20px";
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

  const yieldButtons = [
    { name: "Bruto", label: "bruto" },
    { name: "Líquido", label: "liquido" },
  ];

  const indexingButtons = [
    { name: "PRÉ", label: "pre" },
    { name: "POS", label: "pos" },
    { name: "FIXADO", label: "fixado" },
  ];

  const cdiValue = indicators
    ? indicators[0].valor + "%"
    : "Erro ao buscar dados";
  const ipcaValue = indicators
    ? indicators[1].valor + "%"
    : "Erro ao buscar dados";

  return (
    <Flex direction="column" align="center" mt={[8, 8, 0]}>
      <Text mr="auto" fontWeight="bold" fontSize="23px">
        Simulador
      </Text>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <Flex>
          <Flex direction="column" mb="2">
            <FormControl mb={marginBottonInputs}>
              <Text fontSize={fontSize}>Rendimento</Text>
              <ToggleButton items={yieldButtons} type="yield" />
            </FormControl>
            <FormControl
              isInvalid={!!errors.inicialContribution}
              mb={marginBottonInputs}
            >
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
            <FormControl isInvalid={!!errors.deadline} mb={marginBottonInputs}>
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
            <FormControl mb={marginBottonInputs}>
              <Text fontSize={fontSize}>IPCA(ao ano)</Text>
              <Input
                type="text"
                variant="flushed"
                bg="transparent"
                borderBottomColor="black"
                {...register("ipca")}
                value={ipcaValue}
              />
            </FormControl>
          </Flex>
          <Flex direction="column" ml="9" mb="2">
            <FormControl mb={marginBottonInputs}>
              <Text fontSize={fontSize}>Tipo de indexação</Text>
              <ToggleButton items={indexingButtons} type="indexingType" />
            </FormControl>
            <FormControl
              isInvalid={!!errors.monthlContribution}
              mb={marginBottonInputs}
            >
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
            <FormControl
              isInvalid={!!errors.profitability}
              mb={marginBottonInputs}
            >
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
            <FormControl mb={marginBottonInputs}>
              <Text fontSize={fontSize}>CDI(ao ano)</Text>
              <Input
                type="text"
                variant="flushed"
                bg="transparent"
                borderBottomColor="black"
                {...register("cdi")}
                value={cdiValue}
              />
            </FormControl>
          </Flex>
        </Flex>
        <Flex justify="space-around" mt="6" maxW="500px">
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
