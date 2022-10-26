import React from "react";
import { ServiceContainer } from "components/Service";
import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";

interface ServiceParams {
  serviceId: string;
}

function ServicePage() {
  const { serviceId } = useParams<keyof ServiceParams>() as ServiceParams;

  return (
    <Box data-testid="service-page">
      <ServiceContainer serviceId={serviceId} />
    </Box>
  );
}

export default ServicePage;
