import React from "react";
import { ServicesContainer } from "components/Services";
import { Box } from "@chakra-ui/react";

function ServicesPage() {
  return (
    <Box data-testid="services-page">
      <ServicesContainer />
    </Box>
  );
}

export default ServicesPage;
