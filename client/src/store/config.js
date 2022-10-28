import { createSlice } from "@reduxjs/toolkit";

export const configSlice = createSlice({
  name: "config",
  initialState: {
    config: {},
  },
  reducers: {
    addConfig: (state, action) => {
      state.config = action.payload;
    },
  },
});

export const { addConfig } = configSlice.actions;

export default configSlice.reducer;
