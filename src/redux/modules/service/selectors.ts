import { RootState } from "@redux/store";
import { createSelector } from "@reduxjs/toolkit";

const selectSelf = (state: RootState) => state.service;

export const selectService = createSelector(
  selectSelf,
  (state) => state.service
);
export const selectIsLoading = createSelector(
  selectSelf,
  (state) => state.isLoading
);
export const selectError = createSelector(selectSelf, (state) => ({
  isFailed: state.isFailed,
  message: state.errorMessage,
}));
