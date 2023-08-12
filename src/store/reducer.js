import { combineReducers } from "@reduxjs/toolkit";
import { itemSlice } from "./itemSlice";

export const rootReducer = combineReducers({
  item: itemSlice.reducer,
});
