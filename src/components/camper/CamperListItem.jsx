import Button from "../common/Button";
import CamperHeader from "./CamperHeader";
import FeaturesList from "./FeaturesList";
import css from "./CamperListItem.module.css";

export default function CamperListItem({ camper }) {
  return (
    <li>
      <div className={css.card}>
        <div className={css.imageContainer}>
          <img
            className={css.image}
            src={camper.gallery?.[0]?.thumb || camper.gallery?.[0]?.original}
            alt={camper.name}
          />
        </div>

        <div className={css.content}>
          <CamperHeader camper={camper} parent="catalog" />

          <p className={css.description}>{camper.description}</p>

          <FeaturesList camper={camper} limitRows />

          <Button
            linkTo={`/catalog/${camper.id}`}
            className={css.showMoreButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Show more
          </Button>
        </div>
      </div>
    </li>
  );
}
