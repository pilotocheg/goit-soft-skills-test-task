import clsx from "clsx";
import css from "./Tabs.module.css";

export default function Tabs({ tabs, onTabChange, activeTab, className }) {
  return (
    <div className={clsx(css.tabs, className)}>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={clsx(css.tab, {
            [css.tabActive]: activeTab === tab,
          })}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
