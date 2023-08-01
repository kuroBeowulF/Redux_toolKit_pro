import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "fuck",
};

export const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {},
});

export default postSlice.reducer;
