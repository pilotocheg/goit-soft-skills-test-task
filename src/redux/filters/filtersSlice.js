import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  type: "",
  equipment: {
    AC: false,
    bathroom: false,
    kitchen: false,
    TV: false,
    radio: false,
    refrigerator: false,
    microwave: false,
    gas: false,
    water: false,
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setType: (state, action) => {
      state.type = state.type === action.payload ? "" : action.payload;
    },
    toggleEquipment: (state, action) => {
      const equipment = action.payload;
      state.equipment[equipment] = !state.equipment[equipment];
    },
    resetFilters: () => initialState,
  },
});

export const { setLocation, setType, toggleEquipment, resetFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
