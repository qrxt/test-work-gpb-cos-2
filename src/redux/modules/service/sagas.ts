import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { Service } from "types/service";
import { PayloadAction } from "@reduxjs/toolkit";
import api from "./api";
import { GetServicePayload, serviceSlice } from "./slice";

export function* getService({
  payload: { id },
}: PayloadAction<GetServicePayload>) {
  try {
    const response: AxiosResponse<Service> = yield call(api.getService, id);
    const serviceData = response.data;

    yield put(serviceSlice.actions.getServiceSuccess(serviceData));
  } catch (error) {
    const errorMessage = String(error) || "An unknown error occurred";
    console.error("failed to get services list: ", errorMessage);

    yield put(serviceSlice.actions.getServiceFailure(errorMessage));
  }
}

export const getServiceSaga = takeLatest(
  serviceSlice.actions.getService,
  getService
);
