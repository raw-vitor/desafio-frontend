import { useState } from "react";
import { Button } from "@chakra-ui/react";

export const ToggleButton = () => {
  const [active, setActive] = useState(0);
  return (
    <>
      <Button
        _hover={{ bg: "orange.50" }}
        colorScheme="orange"
        border="1px solid"
        borderRightRadius="0"
        color={active == 0 ? "white" : "black"}
        bg={active == 0 ? "orange.50" : "transparent"}
        onClick={() => setActive(0)}
      >
        Bruto
      </Button>
      <Button
        _hover={{ bg: "orange.50" }}
        colorScheme="orange"
        border="1px solid"
        borderLeftRadius="0"
        color={active == 1 ? "white" : "black"}
        bg={active == 1 ? "orange.50" : "transparent"}
        onClick={() => setActive(1)}
      >
        Líquido
      </Button>
    </>
  );
};
