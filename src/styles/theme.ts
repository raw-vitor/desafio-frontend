import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#333",
        color: "gray.50",
      },
    },
  },
  colors: {
    gray: {
      "50": "#EFEFEF",
      "500": "#969696",
    },
    orange: {
      "50": "#ED8E53",
    },
  },
});
