import { configureStore } from '@reduxjs/toolkit';
import emanetReducer from '../features/emanet/Slices/emanetSlice';
import planbiReducer from '../features/planbi/Slices/planbiSlice';



export const store = configureStore({
  reducer: {
    planbi: planbiReducer,
    emanet: emanetReducer,
  },
});