import css from "./FeatureLabel.module.css";

// Import SVG icons
import gears from "../../images/gears.svg";
import gasTank from "../../images/gas-tank.svg";
import wind from "../../images/wind.svg";
import shower from "../../images/shower.svg";
import cupHot from "../../images/cup-hot.svg";
import tv from "../../images/tv.svg";
import fridge from "../../images/fridge.svg";
import microwave from "../../images/microwave.svg";
import water from "../../images/water.svg";

const featureIconMap = {
  // Transmission
  automatic: gears,
  manual: gears,

  // Engine
  diesel: gasTank,
  petrol: gasTank,
  hybrid: gasTank,

  // Features
  AC: wind,
  bathroom: shower,
  kitchen: cupHot,
  TV: tv,
  radio: tv, // Using TV icon as fallback for radio
  refrigerator: fridge,
  microwave: microwave,
  gas: gasTank,
  water: water,
};

export default function FeatureLabel({ feature, className = "" }) {
  const iconSrc =
    featureIconMap[feature] || featureIconMap[feature?.toLowerCase()];

  return (
    <span className={`${css.feature} ${className}`}>
      {iconSrc && <img src={iconSrc} alt={feature} className={css.icon} />}
      <span className={css.label}>{feature}</span>
    </span>
  );
}
