import React from "react";
import Service from "./Service";

interface ServiceContainerProps {
  serviceId: string;
}

function ServiceContainer(props: ServiceContainerProps) {
  const { serviceId } = props;

  return <Service />;
}

export default ServiceContainer;
