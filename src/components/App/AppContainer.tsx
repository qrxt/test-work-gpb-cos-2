import React from "react";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as ReduxProvider } from "react-redux";
import { setupStore } from "@redux/store";

function AppContainer() {
  const store = setupStore();

  return (
    <ReduxProvider store={store}>
      <ChakraProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ChakraProvider>
    </ReduxProvider>
  );
}

export default AppContainer;
