import { useState } from "react";
import { Button, Flex } from "@chakra-ui/react";

type ToggleButtonType = {
  labels: string[];
};

export const ToggleButton = (data: ToggleButtonType) => {
  const [active, setActive] = useState(0);
  return (
    <Flex>
      {data &&
        data.labels.map((item) => (
          <Button
            key={item}
            _hover={{ bg: "orange.50" }}
            colorScheme="orange"
            border="1px solid black"
            _first={{ borderRightRadius: "0" }}
            _last={{ borderLeftRadius: "0" }}
            _notFirst={{ borderLeftRadius: "0" }}
            _notLast={{ borderRightRadius: "0" }}
            bg={
              data.labels.indexOf(item) == active ? "orange.50" : "transparent"
            }
            color={data.labels.indexOf(item) == active ? "white" : "black"}
            value={active}
            onClick={() => setActive(data.labels.indexOf(item))}
          >
            {item}
          </Button>
        ))}
    </Flex>
  );
};
