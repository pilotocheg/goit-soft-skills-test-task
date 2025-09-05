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
import grid3 from "../../images/grid-3.svg";
import grid4 from "../../images/grid-4.svg";
import grid9 from "../../images/grid-9.svg";

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

  // Vehicle types
  alcove: grid3,
  fullyIntegrated: grid4,
  panelTruck: grid9,
};

export default function FeatureIcon({ feature, size }) {
  const iconSrc = featureIconMap[feature];

  return (
    iconSrc && (
      <img
        src={iconSrc}
        alt={feature}
        width={size}
        height={size}
        className={css.icon}
      />
    )
  );
}
