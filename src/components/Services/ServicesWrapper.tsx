import { Box } from "@chakra-ui/react";
import React from "react";

function ServicesWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Box padding="6" borderRadius="lg" boxShadow="lg" bg="white">
      {children}
    </Box>
  );
}

export default ServicesWrapper;
