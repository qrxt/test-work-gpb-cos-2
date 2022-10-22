import React, { useEffect } from "react";
import Services from "./Services";
import { useDispatch, useSelector } from "@redux/hooks";
import {
  selectError,
  selectIsLoading,
  selectServices,
} from "@redux/modules/services/selectors";
import { servicesSlice } from "@redux/modules/services/slice";
import ServicesLoading from "./ServicesLoading";
import ServicesWrapper from "./ServicesWrapper";
import ServicesError from "./ServicesError";

function ServicesContainer() {
  const dispatch = useDispatch();
  const services = useSelector(selectServices);
  const isLoading = useSelector(selectIsLoading);
  const { isFailed } = useSelector(selectError);

  useEffect(() => {
    dispatch(servicesSlice.actions.getServices());
  }, [dispatch]);

  if (isFailed) {
    return <ServicesError />;
  }

  return (
    <ServicesWrapper heading="Услуги">
      {isLoading ? <ServicesLoading /> : <Services services={services} />}
    </ServicesWrapper>
  );
}

export default ServicesContainer;
