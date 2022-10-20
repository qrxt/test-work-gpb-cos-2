import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Service } from "types/service";

interface ServicesState {
  list: Service[];
  isLoading: boolean;
  isFailed: boolean;
  errorMessage: string;
}

const initialState: ServicesState = {
  list: [],
  isLoading: false,
  isFailed: false,
  errorMessage: "",
};

export const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    getServices(state) {
      state.isLoading = true;
      state.isFailed = false;
      state.errorMessage = "";
    },
    getServicesSuccess(state, action: PayloadAction<Service[]>) {
      state.list = action.payload;
      state.isLoading = false;
    },
    getServicesFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.list = [];
      state.isFailed = true;
      state.errorMessage = action.payload;
    },
  },
});
