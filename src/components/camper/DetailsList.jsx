import { vehicleTypes } from "../../constants";
import css from "./DetailsList.module.css";

export default function DetailsList({ camper }) {
  const form = vehicleTypes.find((type) => type.id === camper.form)?.label;

  const details = [
    { label: "Form", value: form },
    { label: "Length", value: camper.length },
    { label: "Width", value: camper.width },
    { label: "Height", value: camper.height },
    { label: "Tank", value: camper.tank },
    { label: "Consumption", value: camper.consumption },
  ];

  return (
    <div className={css.details}>
      <h3 className={css.detailsTitle}>Vehicle details</h3>
      <div className={css.detailsList}>
        {details.map((detail) => (
          <div key={detail.label} className={css.detail}>
            <span>{detail.label}</span>
            <span>{detail.value || "N/A"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
