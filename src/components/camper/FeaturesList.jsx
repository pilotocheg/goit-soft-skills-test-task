import clsx from "clsx";

import FeatureLabel from "./FeatureLabel";
import css from "./FeaturesList.module.css";

export default function FeaturesList({ camper, parent }) {
  // Get all available features as simple strings
  const features = [
    camper.transmission,
    camper.engine,
    camper.AC && "AC",
    camper.bathroom && "bathroom",
    camper.kitchen && "kitchen",
    camper.TV && "TV",
    camper.radio && "radio",
    camper.refrigerator && "refrigerator",
    camper.microwave && "microwave",
    camper.gas && "gas",
    camper.water && "water",
  ].filter(Boolean);

  return (
    <div
      className={clsx(css.features, {
        [css.limitRows]: parent === "list",
      })}
    >
      {features.map((feature) => (
        <FeatureLabel key={feature} feature={feature} />
      ))}
    </div>
  );
}
