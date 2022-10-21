import React from "react";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider as ReduxProvider } from "react-redux";
import { setupStore } from "@redux/store";

function AppContainer() {
  const store = setupStore();

  const theme = extendTheme({
    styles: {
      global: {
        "html, body, #root": {
          height: "100%",
        },
      },
    },
  });

  return (
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme}>
        {/* <React.StrictMode> */}
        <App />
        {/* </React.StrictMode> */}
      </ChakraProvider>
    </ReduxProvider>
  );
}

export default AppContainer;
