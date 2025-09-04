import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import { toggleFavorite } from "../../redux/favorites/favoritesSlice";
import { selectIsFavorite } from "../../redux/favorites/selectors";
import heartIcon from "../../images/heart.svg";
import heartFilledIcon from "../../images/heart-filled.svg";
import css from "./FavoriteButton.module.css";

export default function FavoriteButton({ camperId, className }) {
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectIsFavorite(camperId));

  const handleFavoriteToggle = () => {
    dispatch(toggleFavorite(camperId));
  };

  return (
    <button
      className={clsx(css.favoriteButton, className, {
        [css.favoriteActive]: isFavorite,
      })}
      onClick={handleFavoriteToggle}
      type="button"
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <img
        src={isFavorite ? heartFilledIcon : heartIcon}
        alt=""
        className={css.icon}
      />
    </button>
  );
}
