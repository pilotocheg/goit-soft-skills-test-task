import { useDispatch } from "react-redux";
import { useCallback } from "react";

import { getCampers as getCampersAction } from "../redux/campers/campersOps";
import { resetCamperState } from "../redux/campers/campersSlice";

export function useCampersActions() {
  const dispatch = useDispatch();

  const getCampers = useCallback(
    (reset) => {
      dispatch(getCampersAction({ reset }));
    },
    [dispatch]
  );

  const resetCampers = useCallback(() => {
    dispatch(resetCamperState());
  }, [dispatch]);

  return { getCampers, resetCampers };
}
