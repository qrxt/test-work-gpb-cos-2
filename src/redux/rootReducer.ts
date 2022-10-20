import { combineReducers } from "redux";
import { servicesSlice } from "./modules/services/slice";

export const rootReducer = combineReducers({
  services: servicesSlice.reducer,
});
