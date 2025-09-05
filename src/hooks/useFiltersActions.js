import { useDispatch } from "react-redux";
import { useCallback } from "react";

import {
  setLocation as setLocationAction,
  setType as setTypeAction,
  toggleEquipment as toggleEquipmentAction,
  resetFilters as resetFiltersAction,
} from "../redux/filters/filtersSlice";

export function useFiltersActions() {
  const dispatch = useDispatch();

  const setLocation = useCallback(
    (location) => {
      dispatch(setLocationAction(location));
    },
    [dispatch]
  );

  const setType = useCallback(
    (type) => {
      dispatch(setTypeAction(type));
    },
    [dispatch]
  );

  const toggleEquipment = useCallback(
    (equipmentKey) => {
      dispatch(toggleEquipmentAction(equipmentKey));
    },
    [dispatch]
  );

  const resetFilters = useCallback(() => {
    dispatch(resetFiltersAction());
  }, [dispatch]);

  return { setLocation, setType, toggleEquipment, resetFilters };
}
