import { call, put } from "redux-saga/effects";
import { getService } from "../../src/redux/modules/service/sagas";
import { serviceSlice } from "../../src/redux/modules/service/slice";
import api from "../../src/redux/modules/service/api";
import { createAxiosResponse } from "../helpers/api";
import { Service } from "../../src/types/service";

describe("Service saga test", () => {
  test("getService success", () => {
    const id = "service-id";
    const saga = getService(serviceSlice.actions.getService({ id }));

    expect(saga.next().value).toEqual(call(api.getService, id));

    const service: Service = {
      id: id,
      name: "service-name",
      price: 1000,
      content: "service description",
    };

    const response = createAxiosResponse({
      data: service,
    });

    expect(saga.next(response).value).toEqual(
      put(serviceSlice.actions.getServiceSuccess(service))
    );
    expect(saga.next().done).toBeTruthy();
  });

  test("getService failure", () => {
    const id = "service-id";
    const saga = getService(serviceSlice.actions.getService({ id }));

    expect(saga.next().value).toEqual(call(api.getService, id));

    const errorMessage = "Failed to get service data";
    expect(saga.throw(errorMessage).value).toEqual(
      put(serviceSlice.actions.getServiceFailure(errorMessage))
    );
    expect(saga.next().done).toBeTruthy();
  });
});
