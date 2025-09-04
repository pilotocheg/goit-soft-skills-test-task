import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    form: "",
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
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setForm: (state, action) => {
      state.form = action.payload;
    },
    toggleEquipment: (state, action) => {
      const equipment = action.payload;
      state.equipment[equipment] = !state.equipment[equipment];
    },
    resetFilters: (state) => {
      state.location = "";
      state.form = "";
      state.equipment = {
        AC: false,
        bathroom: false,
        kitchen: false,
        TV: false,
        radio: false,
        refrigerator: false,
        microwave: false,
        gas: false,
        water: false,
      };
    },
  },
});

export const { setLocation, setForm, toggleEquipment, resetFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
