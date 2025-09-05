import CamperImage from "./CamperImage";
import css from "./CamperGallery.module.css";
import clsx from "clsx";

export default function CamperGallery({ camper, className }) {
  if (!camper.gallery?.length) {
    return null;
  }

  return (
    <div className={clsx(css.gallery, className)}>
      <div className={css.galleryContainer}>
        {camper.gallery.map((image, index) => (
          <CamperImage
            key={index}
            src={image.thumb || image.original}
            alt={`${camper.name} ${index + 1}`}
            className={css.galleryImage}
          />
        ))}
      </div>
    </div>
  );
}
