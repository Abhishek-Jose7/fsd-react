import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    searchQuery: ""
  },
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    clearSearchQuery(state) {
      state.searchQuery = "";
    }
  }
});

export const { setSearchQuery, clearSearchQuery } = uiSlice.actions;
export default uiSlice.reducer;
