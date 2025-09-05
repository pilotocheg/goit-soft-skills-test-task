import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { selectCampersError } from "../redux/campers/selectors";
import { resetError } from "../redux/campers/campersSlice";

export function useErrorNotification() {
  const error = useSelector(selectCampersError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(resetError());
    }
  }, [error, dispatch]);
}
