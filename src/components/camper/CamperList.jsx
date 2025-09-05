import { useSelector } from "react-redux";
import { useEffect } from "react";

import {
  selectCampers,
  selectCampersLoading,
  selectAllItemsLoaded,
} from "../../redux/campers/selectors";
import { useCampersActions } from "../../hooks/useCampersActions";
import Loader from "../common/Loader";
import CamperListItem from "./CamperListItem";
import EmptyMessage from "../EmptyMessage";
import Button from "../common/Button";
import css from "./CamperList.module.css";

export default function CamperList() {
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectCampersLoading);
  const allItemsLoaded = useSelector(selectAllItemsLoaded);

  const { getCampers, resetCampers } = useCampersActions();

  useEffect(() => {
    getCampers(true);

    return resetCampers;
  }, [getCampers, resetCampers]);

  const handleLoadMore = () => {
    getCampers(false);
  };

  if (loading && !campers?.length) {
    return <Loader />;
  }

  if (!campers?.length && !loading) {
    return <EmptyMessage message="No campers found." />;
  }

  return (
    <div className={css.camperListContainer}>
      <ul className={css.camperList}>
        {campers.map((camper) => (
          <CamperListItem key={camper.id} camper={camper} />
        ))}
      </ul>

      {campers.length > 0 && !allItemsLoaded && (
        <div className={css.loadMoreContainer}>
          {loading ? (
            <Loader />
          ) : (
            <Button
              appearance="outline"
              className={css.loadMoreButton}
              onClick={handleLoadMore}
            >
              Load More
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
