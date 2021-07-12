import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    error: undefined,
    warn: undefined,
    info: undefined,
  },
  reducers: {
    addError: (state, action) => {
      state.error = action.payload;
    },
    addWarn: (state, action) => {
      state.warn = action.payload;
    },
    addInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const { addError, addWarn, addInfo } = messageSlice.actions;

export const selectMessage = (state) => state.message;

export default messageSlice.reducer;
