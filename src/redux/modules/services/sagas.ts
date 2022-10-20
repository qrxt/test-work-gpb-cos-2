import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { Service } from "types/service";
import api from "./api";
import { servicesSlice } from "./slice";

export function* getServices() {
  console.log("from saga");

  try {
    const res: AxiosResponse<Service[]> = yield call(api.getServices);

    yield put(servicesSlice.actions.getServices());
  } catch (error) {
    const errorMessage = String(error) || "An unknown error occurred";
    console.error("failed to get services list: ", errorMessage);

    yield put(servicesSlice.actions.getServicesFailure(errorMessage));
  }
}

export const getOsListSaga = takeLatest(
  servicesSlice.actions.getServices,
  getServices
);
