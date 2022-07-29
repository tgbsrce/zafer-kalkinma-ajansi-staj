import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [   
  ],
};

export const emanetSlice = createSlice({
  name: "emanet",
  initialState:initialState,
  reducers: {
    addValue: (state, action) => {
      //Apiye İstek At.
      state.value.push(action.payload);
    },
    deleteValue: (state, action) => {
      //Apiye İstek At
      state.value.pop(action.payload);
    },
  },
});
export const { addValue, deleteValue } = emanetSlice.actions;

export const getList = (state) => state.emanet.value;
export default emanetSlice.reducer;
