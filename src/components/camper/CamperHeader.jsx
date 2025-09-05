import {
  formatPrice,
  formatLocation,
  formatReviewCount,
} from "../../utils/formatters";
import starIconFilled from "../../images/star-filled.svg";
import mapIcon from "../../images/map.svg";

import FavoriteButton from "../common/FavoriteButton";

import css from "./CamperHeader.module.css";
import clsx from "clsx";

export default function CamperHeader({ camper, parent }) {
  const isDetailsPage = parent === "details";
  const TitleComponent = isDetailsPage ? "h2" : "h3";

  return (
    <div className={css.header}>
      <div className={css.titleRow}>
        <TitleComponent className={css.titleText}>{camper.name}</TitleComponent>

        {!isDetailsPage && (
          <div className={css.priceAndFavorite}>
            <span className={css.titleText}>{formatPrice(camper.price)}</span>
            <FavoriteButton camperId={camper.id} />
          </div>
        )}
      </div>

      <div className={css.rating}>
        <img src={starIconFilled} alt="" className={css.icon} />
        <span className={css.ratingText}>
          {camper.rating}({formatReviewCount(camper.reviews?.length || 0)})
        </span>
        <img
          src={mapIcon}
          alt=""
          className={clsx(css.icon, css.locationIcon)}
        />
        <span className={css.location}>{formatLocation(camper.location)}</span>
      </div>

      {isDetailsPage && (
        <div className={clsx(css.priceAndFavorite, css.bottom)}>
          <span className={css.titleText}>{formatPrice(camper.price)}</span>
        </div>
      )}
    </div>
  );
}
