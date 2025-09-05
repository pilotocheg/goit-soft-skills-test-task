import { useSelector } from "react-redux";

import { vehicleTypes, equipmentOptions } from "../constants";
import {
  selectLocation,
  selectType,
  selectEquipment,
} from "../redux/filters/selectors";
import FiltersSection from "./camper/FiltersSection";
import LocationInput from "./camper/LocationInput";
import Button from "./common/Button";
import css from "./FilterSidebar.module.css";
import { useCampersActions } from "../hooks/useCampersActions";
import { useFiltersActions } from "../hooks/useFiltersActions";
import { useEffect } from "react";

export default function FilterSidebar() {
  const location = useSelector(selectLocation);
  const selectedVehicleType = useSelector(selectType);
  const selectedEquipment = useSelector(selectEquipment);

  const { getCampers } = useCampersActions();
  const { setLocation, setType, toggleEquipment, resetFilters } =
    useFiltersActions();

  useEffect(() => resetFilters(), [resetFilters]);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = () => {
    getCampers(true);
  };

  return (
    <div className={css.sidebar}>
      <LocationInput
        value={location}
        onChange={handleLocationChange}
        placeholder="Kyiv, Ukraine"
        label="Location"
      />

      <div className={css.filterGroup}>
        <h3 className={css.filterTitle}>Filters</h3>

        <FiltersSection
          title="Vehicle equipment"
          filters={equipmentOptions}
          checkIsActive={(equipment) => selectedEquipment[equipment]}
          onFeatureToggle={toggleEquipment}
        />

        <FiltersSection
          title="Vehicle type"
          filters={vehicleTypes}
          checkIsActive={(type) => selectedVehicleType === type}
          onFeatureToggle={setType}
        />
      </div>

      <Button onClick={handleSearch} className={css.searchButton}>
        Search
      </Button>
    </div>
  );
}
