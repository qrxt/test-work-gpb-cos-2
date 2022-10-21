import React from "react";
import { ServiceContainer } from "components/Service";
import Layout from "components/Layout";
import { useParams } from "react-router-dom";

interface ServiceParams {
  serviceId: string;
}

function ServicePage() {
  const { serviceId } = useParams<keyof ServiceParams>() as ServiceParams;

  return (
    <Layout>
      <ServiceContainer serviceId={serviceId} />
    </Layout>
  );
}

export default ServicePage;
