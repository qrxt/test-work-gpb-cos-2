import React, { useEffect } from "react";
import Services from "./Services";
import { useDispatch, useSelector } from "@redux/hooks";
import { selectServices } from "@redux/modules/services/selectors";
import { servicesSlice } from "@redux/modules/services/slice";

function ServicesContainer() {
  const dispatch = useDispatch();
  const services = useSelector(selectServices);

  useEffect(() => {
    dispatch(servicesSlice.actions.getServices());
  });

  console.log("$$services", services);

  return <Services />;
}

export default ServicesContainer;
