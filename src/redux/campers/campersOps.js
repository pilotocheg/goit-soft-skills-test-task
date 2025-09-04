import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchCampers, fetchCamperDetails } from "../../api/campers";

const createAsyncThunkWithRejectHandler = (name, asyncOperation) => {
  return createAsyncThunk(name, async (data, { rejectWithValue }) => {
    try {
      return await asyncOperation(data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  });
};

export const getCampers = createAsyncThunkWithRejectHandler(
  "campers/getCampers",
  async ({ filters, reset = false }) => {
    const params = {};

    if (filters.location) {
      params.location = filters.location;
    }

    if (filters.form) {
      params.form = filters.form;
    }

    // Add equipment filters
    Object.keys(filters.equipment).forEach((key) => {
      if (filters.equipment[key]) {
        params[key] = true;
      }
    });

    const { items } = await fetchCampers(params);
    return { items, allItemsLoaded: true, reset };
  }
);

export const getCamperDetails = createAsyncThunkWithRejectHandler(
  "campers/getCamperDetails",
  fetchCamperDetails
);
