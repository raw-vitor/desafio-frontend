import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../services/react-query";
import { ToggleBtnProvider } from "../context/ToggleContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ToggleBtnProvider>
          <Component {...pageProps} />
        </ToggleBtnProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
