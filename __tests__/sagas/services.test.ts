import { call, put } from "redux-saga/effects";
import { getServices } from "../../src/redux/modules/services/sagas";
import { servicesSlice } from "../../src/redux/modules/services/slice";
import api from "../../src/redux/modules/services/api";
import { createAxiosResponse } from "../helpers/api";
import { Service } from "../../src/types/service";

describe("Services saga test", () => {
  test("getServices success", () => {
    const saga = getServices();

    expect(saga.next().value).toEqual(call(api.getServices));

    const services: Service[] = [
      {
        id: "asdh-1234",
        name: "service-name",
        price: 1000,
        content: "service description",
      },
    ];

    const response = createAxiosResponse({
      data: services,
    });

    expect(saga.next(response).value).toEqual(
      put(servicesSlice.actions.getServicesSuccess(services))
    );
    expect(saga.next().done).toBeTruthy();
  });

  test("getServices failure", () => {
    const saga = getServices();

    expect(saga.next().value).toEqual(call(api.getServices));

    const errorMessage = "Failed to get service data";
    expect(saga.throw(errorMessage).value).toEqual(
      put(servicesSlice.actions.getServicesFailure(errorMessage))
    );
    expect(saga.next().done).toBeTruthy();
  });
});
