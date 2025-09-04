import { createSlice } from "@reduxjs/toolkit";
import { getCampers, getCamperDetails } from "./campersOps";

// Helper functions for repeated actions
const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    allItemsLoaded: false,
    currentCamper: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearCurrentCamper: (state) => {
      state.currentCamper = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, handlePending)
      .addCase(getCampers.fulfilled, (state, action) => {
        state.loading = false;
        const { items, allItemsLoaded, reset } = action.payload;
        if (reset) {
          state.items = items;
          state.allItemsLoaded = false;
        } else {
          state.items = [...state.items, ...items];
          state.allItemsLoaded = allItemsLoaded;
        }
      })
      .addCase(getCampers.rejected, handleRejected)
      .addCase(getCamperDetails.pending, handlePending)
      .addCase(getCamperDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.currentCamper = action.payload;
      })
      .addCase(getCamperDetails.rejected, handleRejected);
  },
});

export const { clearCurrentCamper } = campersSlice.actions;
export default campersSlice.reducer;
