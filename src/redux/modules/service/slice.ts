import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Service } from "types/service";

interface ServiceState {
  service: Service | null;
  isLoading: boolean;
  isFailed: boolean;
  errorMessage: string;
}

const initialState: ServiceState = {
  service: null,
  isLoading: false,
  isFailed: false,
  errorMessage: "",
};

export interface GetServicePayload {
  id: string;
}

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    getService(state, action: PayloadAction<GetServicePayload>) {
      state.isLoading = true;
      state.isFailed = false;
      state.errorMessage = "";
    },
    getServiceSuccess(state, action: PayloadAction<Service>) {
      state.service = action.payload;
      state.isLoading = false;
    },
    getServiceFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.service = null;
      state.isFailed = true;
      state.errorMessage = action.payload;
    },
  },
});
