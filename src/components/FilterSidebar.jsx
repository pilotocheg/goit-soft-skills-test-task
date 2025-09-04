import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import {
  selectLocation,
  selectForm,
  selectEquipment,
} from "../redux/filters/selectors";
import {
  setLocation,
  setForm,
  toggleEquipment,
} from "../redux/filters/filtersSlice";
import FilterItem from "./common/FilterItem";
import useDebounce from "../hooks/useDebounce";
import css from "./FilterSidebar.module.css";

// Import SVG icons
import windIcon from "../images/wind.svg";
import showerIcon from "../images/shower.svg";
import cupHotIcon from "../images/cup-hot.svg";
import tvIcon from "../images/tv.svg";
import gearsIcon from "../images/gears.svg";
import fridgeIcon from "../images/fridge.svg";
import microwaveIcon from "../images/microwave.svg";
import gasTankIcon from "../images/gas-tank.svg";
import waterIcon from "../images/water.svg";
import grid3Icon from "../images/grid-3.svg";
import grid4Icon from "../images/grid-4.svg";
import grid9Icon from "../images/grid-9.svg";

const vehicleTypes = [
  { value: "alcove", label: "Alcove", icon: grid3Icon },
  { value: "fullyIntegrated", label: "Fully Integrated", icon: grid4Icon },
  { value: "panelTruck", label: "Van", icon: grid9Icon },
];

const equipmentOptions = [
  { key: "AC", label: "AC", icon: windIcon },
  { key: "bathroom", label: "Bathroom", icon: showerIcon },
  { key: "kitchen", label: "Kitchen", icon: cupHotIcon },
  { key: "TV", label: "TV", icon: tvIcon },
  { key: "radio", label: "Radio", icon: gearsIcon },
  { key: "refrigerator", label: "Refrigerator", icon: fridgeIcon },
  { key: "microwave", label: "Microwave", icon: microwaveIcon },
  { key: "gas", label: "Gas", icon: gasTankIcon },
  { key: "water", label: "Water", icon: waterIcon },
];

export default function FilterSidebar() {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);
  const form = useSelector(selectForm);
  const equipment = useSelector(selectEquipment);

  // Local state for input value for immediate UI feedback
  const [inputValue, setInputValue] = useState(location);

  // Create debounced dispatch function
  const dispatchLocationChange = useCallback(
    (value) => {
      dispatch(setLocation(value));
    },
    [dispatch]
  );

  const debouncedDispatchLocation = useDebounce(dispatchLocationChange);

  // Effect to sync input value with external location changes
  useEffect(() => {
    setInputValue(location);
  }, [location]);

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedDispatchLocation(value);
  };

  const handleFormChange = (vehicleType) => {
    dispatch(setForm(form === vehicleType ? "" : vehicleType));
  };

  const handleEquipmentToggle = (equipmentKey) => {
    dispatch(toggleEquipment(equipmentKey));
  };

  return (
    <div className={css.sidebar}>
      <div className={css.filterGroup}>
        <label className={css.label}>Location</label>
        <input
          type="text"
          className={css.locationInput}
          placeholder="Kyiv, Ukraine"
          value={inputValue}
          onChange={handleLocationChange}
        />
      </div>

      <div className={css.filterGroup}>
        <h3 className={css.filterTitle}>Filters</h3>

        <div className={css.filterSection}>
          <h4 className={css.sectionTitle}>Vehicle equipment</h4>
          <div className={css.equipmentGrid}>
            {equipmentOptions.map(({ key, label, icon }) => (
              <FilterItem
                key={key}
                id={key}
                label={label}
                icon={icon}
                isActive={equipment[key]}
                onClick={handleEquipmentToggle}
              />
            ))}
          </div>
        </div>

        <div className={css.filterSection}>
          <h4 className={css.sectionTitle}>Vehicle type</h4>
          <div className={css.vehicleTypeGrid}>
            {vehicleTypes.map(({ value, label, icon }) => (
              <FilterItem
                key={value}
                id={value}
                label={label}
                icon={icon}
                isActive={form === value}
                onClick={handleFormChange}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
