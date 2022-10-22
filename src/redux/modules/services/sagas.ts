import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { Service } from "types/service";
import api from "./api";
import { servicesSlice } from "./slice";

export function* getServices() {
  try {
    const response: AxiosResponse<Service[]> = yield call(api.getServices);
    const servicesData = response.data;

    yield put(servicesSlice.actions.getServicesSuccess(servicesData));
  } catch (error) {
    const errorMessage = String(error) || "An unknown error occurred";
    console.error("failed to get services list: ", errorMessage);

    yield put(servicesSlice.actions.getServicesFailure(errorMessage));
  }
}

export const getServicesSaga = takeLatest(
  servicesSlice.actions.getServices,
  getServices
);
