import { Box, Heading } from "@chakra-ui/react";
import React from "react";

function ServicesWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Box padding="6" borderRadius="lg" boxShadow="lg" bg="white">
      <Heading size="lg" marginBottom={3}>
        Сервисы
      </Heading>
      {children}
    </Box>
  );
}

export default ServicesWrapper;
