import FilterItem from "./FilterItem";
import css from "./FiltersSection.module.css";

export default function FiltersSection({
  title,
  filters,
  checkIsActive,
  onFeatureToggle,
}) {
  return (
    <div>
      <h4 className={css.sectionTitle}>{title}</h4>
      <div className={css.grid}>
        {filters.map(({ id, label }) => (
          <FilterItem
            key={id}
            feature={id}
            label={label}
            isActive={checkIsActive(id)}
            onClick={() => onFeatureToggle(id)}
          />
        ))}
      </div>
    </div>
  );
}
