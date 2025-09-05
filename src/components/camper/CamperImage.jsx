import clsx from "clsx";

import css from "./CamperImage.module.css";

export default function CamperImage({ src, alt, className }) {
  return (
    <div className={clsx(css.imageContainer, className)}>
      <img className={css.image} src={src} alt={alt} />
    </div>
  );
}
