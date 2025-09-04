import css from "./FilterItem.module.css";

export default function FilterItem({
  id,
  label,
  icon,
  isActive,
  onClick,
  className = "",
}) {
  return (
    <button
      className={`${css.filterItem} ${isActive ? css.active : ""} ${className}`}
      onClick={() => onClick(id)}
    >
      <img src={icon} alt={label} className={css.icon} />
      <span className={css.label}>{label}</span>
    </button>
  );
}
