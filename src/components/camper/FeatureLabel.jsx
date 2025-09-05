import clsx from "clsx";

import FeatureIcon from "./FeatureIcon";
import css from "./FeatureLabel.module.css";

export default function FeatureLabel({ feature, className }) {
  return (
    <span className={clsx(css.feature, className)}>
      <FeatureIcon feature={feature} size={20} />
      <span className={css.label}>{feature}</span>
    </span>
  );
}
