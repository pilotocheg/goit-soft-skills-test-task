import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchCampers, fetchCamperDetails } from "../../api/campers";
import { PAGE_SIZE } from "../../constants";

const createAsyncThunkWithRejectHandler = (name, asyncOperation) => {
  return createAsyncThunk(name, async (data, thunkAPI) => {
    try {
      return await asyncOperation(data, thunkAPI);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });
};

export const getCampers = createAsyncThunkWithRejectHandler(
  "campers/getCampers",
  async ({ reset = false }, { getState }) => {
    const { filters, campers } = getState();

    const params = {
      limit: PAGE_SIZE,
      page: reset ? 1 : campers.items.length / PAGE_SIZE + 1,
    };

    if (filters.location) {
      params.location = filters.location;
    }

    if (filters.type) {
      params.form = filters.type;
    }

    // Add equipment filters
    Object.keys(filters.equipment).forEach((key) => {
      if (filters.equipment[key]) {
        params[key] = true;
      }
    });

    const { items, total } = await fetchCampers(params);
    return { items, total, reset };
  }
);

export const getCamperDetails = createAsyncThunkWithRejectHandler(
  "campers/getCamperDetails",
  fetchCamperDetails
);
