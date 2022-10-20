import { RootState } from "@redux/store";
import { createSelector } from "@reduxjs/toolkit";

const selectSelf = (state: RootState) => state.services;

export const selectServices = createSelector(selectSelf, (state) => state.list);
