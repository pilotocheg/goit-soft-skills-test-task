import Loader from "../common/Loader";
import CamperListItem from "./CamperListItem";
import EmptyMessage from "../EmptyMessage";
import css from "./CamperList.module.css";

export default function CamperList({ campers, loading, onLoadMore }) {
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

      {campers.length > 0 && (
        <div className={css.loadMoreContainer}>
          <button
            className={css.loadMoreButton}
            onClick={onLoadMore}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load more"}
          </button>
        </div>
      )}
    </div>
  );
}
