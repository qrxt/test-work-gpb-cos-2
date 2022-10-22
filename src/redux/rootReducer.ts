import { combineReducers } from "redux";
import { servicesSlice } from "./modules/services/slice";
import { serviceSlice } from "./modules/service/slice";

export const rootReducer = combineReducers({
  services: servicesSlice.reducer,
  service: serviceSlice.reducer,
});
