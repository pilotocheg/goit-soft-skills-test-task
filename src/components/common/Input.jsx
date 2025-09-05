import clsx from "clsx";
import css from "./Input.module.css";
import { useId } from "react";

export default function Input({
  label,
  icon,
  className,
  wrapperClassName,
  textArea = false,
  ...props
}) {
  const inputId = useId();

  return (
    <div className={clsx(css.inputGroup, wrapperClassName)}>
      {label && (
        <label className={css.label} htmlFor={inputId}>
          {label}
        </label>
      )}
      <div className={css.inputWrapper}>
        {icon && !textArea && <img src={icon} alt="" className={css.icon} />}
        {textArea ? (
          <textarea
            className={clsx(css.input, css.textarea, className)}
            id={inputId}
            {...props}
          />
        ) : (
          <input
            className={clsx(css.input, icon && css.withIcon, className)}
            id={inputId}
            {...props}
          />
        )}
      </div>
    </div>
  );
}
