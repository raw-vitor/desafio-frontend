import { useContext } from "react";
import { Button, Flex } from "@chakra-ui/react";
import { ToggleBtnContext } from "../../context/ToggleContext";

export type ToggleButtonsType = {
  items: ToggleButtonType[];
  type: "yield" | "indexingType";
};

type ToggleButtonType = {
  name: string;
  label: string;
};

export const ToggleButton = ({ items, type }: ToggleButtonsType) => {
  const { indexing, setIndexing, setYieldBtn, yieldBtn } =
    useContext(ToggleBtnContext);
  const myValue = type === "yield" ? yieldBtn : indexing;

  const setActiveBtn = (data: string) => {
    type === "yield" && setYieldBtn(data);
    type === "indexingType" && setIndexing(data);
  };

  return (
    <Flex justify="center" w="full">
      {items &&
        items.map((item) => (
          <Button
            key={item.label}
            w="full"
            _hover={{ bg: "orange.50" }}
            colorScheme="orange"
            border="1px solid black"
            _first={{ borderRightRadius: "0" }}
            _last={{ borderLeftRadius: "0" }}
            _notFirst={{ borderLeftRadius: "0" }}
            _notLast={{ borderRightRadius: "0" }}
            bg={item.label == myValue ? "orange.50" : "transparent"}
            color={item.label == myValue ? "white" : "black"}
            onClick={() => setActiveBtn(item.label)}
          >
            {item.name}
          </Button>
        ))}
    </Flex>
  );
};
