import React from "react";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "@redux";

function AppContainer() {
  const store = configureStore({
    devTools: process.env.NODE_ENV !== "production",
    reducer: rootReducer,
  });

  return (
    <ChakraProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChakraProvider>
  );
}

export default AppContainer;
