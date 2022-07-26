import { configureStore } from "@reduxjs/toolkit";
import emanetReducer from "../features/emanet/Slices/emanetSlice";

export const store = configureStore({
  reducer: {
    emanet: emanetReducer,
  },
});
