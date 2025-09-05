import clsx from "clsx";

import FeatureIcon from "./FeatureIcon";
import css from "./FilterItem.module.css";

export default function FilterItem({
  onClick,
  feature,
  label,
  isActive,
  className,
}) {
  return (
    <button
      className={clsx(css.filterItem, isActive && css.active, className)}
      onClick={onClick}
    >
      <FeatureIcon feature={feature} size={32} />
      <span className={css.label}>{label || feature}</span>
    </button>
  );
}
