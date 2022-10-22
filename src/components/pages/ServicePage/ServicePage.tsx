import React from "react";
import { ServiceContainer } from "components/Service";
import { useParams } from "react-router-dom";

interface ServiceParams {
  serviceId: string;
}

function ServicePage() {
  const { serviceId } = useParams<keyof ServiceParams>() as ServiceParams;

  return <ServiceContainer serviceId={serviceId} />;
}

export default ServicePage;
