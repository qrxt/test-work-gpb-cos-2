import { useDispatch, useSelector } from "@redux/hooks";
import {
  selectService,
  selectIsLoading,
  selectError,
} from "@redux/modules/service/selectors";
import { serviceSlice } from "@redux/modules/service/slice";
import ServicesWrapper from "components/Services/ServicesWrapper";
import React, { useEffect } from "react";
import Service from "./Service";
import ServiceError from "./ServiceError";
import ServiceLoading from "./ServiceLoading";

interface ServiceContainerProps {
  serviceId: string;
}

function ServiceContainer(props: ServiceContainerProps) {
  const dispatch = useDispatch();
  const { serviceId } = props;

  const service = useSelector(selectService);
  const isLoading = useSelector(selectIsLoading) || !service;
  const { isFailed } = useSelector(selectError);

  useEffect(() => {
    dispatch(serviceSlice.actions.getService({ id: serviceId }));
  }, [dispatch, serviceId]);

  if (isFailed) {
    return <ServiceError serviceId={serviceId} />;
  }

  const heading = isLoading ? "Услуга ..." : `Услуга "${service.name}"`;

  return (
    <ServicesWrapper heading={heading}>
      {isLoading ? <ServiceLoading /> : <Service service={service} />}
    </ServicesWrapper>
  );
}

export default ServiceContainer;
