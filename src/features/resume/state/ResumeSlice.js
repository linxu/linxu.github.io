import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { callApi } from "../../../common/util/fetch";

const initialState = {
  value: 0,
  data: {},
};

export const loadResume = createAsyncThunk(
  "resume/loadResume",
  async (params, thunkAPI) => {
    return await callApi(thunkAPI, params.url, {fullEndpoint : true});
  }
);

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadResume.pending, (state) => {
        state.data = {};
      })
      .addCase(loadResume.fulfilled, (state, action) => {
        state.data = action.payload;
      });
  },
});

export const { increment } = resumeSlice.actions;

export const selectResume = (state) => state.resume;

export default resumeSlice.reducer;