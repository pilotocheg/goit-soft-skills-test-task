import Button from "../common/Button";
import CamperHeader from "./CamperHeader";
import FeaturesList from "./FeaturesList";
import CamperImage from "./CamperImage";
import css from "./CamperListItem.module.css";

export default function CamperListItem({ camper }) {
  const camperImage = camper.gallery[0];

  return (
    <li>
      <div className={css.card}>
        <CamperImage
          src={camperImage.thumb || camperImage.original}
          alt={camper.name}
        />

        <div className={css.content}>
          <CamperHeader camper={camper} parent="catalog" />

          <p className={css.description}>{camper.description}</p>

          <FeaturesList camper={camper} parent="list" />

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
