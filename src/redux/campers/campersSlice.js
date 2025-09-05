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

const initialState = {
  items: [],
  allItemsLoaded: false,
  currentCamper: null,
  loading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    resetCamperState: () => initialState,
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, handlePending)
      .addCase(getCampers.fulfilled, (state, action) => {
        const { items, total, reset } = action.payload;

        state.loading = false;
        const newItems = reset ? items : [...state.items, ...items];
        state.items = newItems;
        state.allItemsLoaded = total <= newItems.length;
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

export const { resetCamperState, resetError } = campersSlice.actions;

export default campersSlice.reducer;
