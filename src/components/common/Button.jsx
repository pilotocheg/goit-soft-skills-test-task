import { Link } from "react-router";
import clsx from "clsx";

import css from "./Button.module.css";

export default function Button({
  className,
  linkTo,
  appearance = "filled",
  ...props
}) {
  const btnClassName = clsx(css.button, css[appearance], className);

  if (linkTo) {
    return <Link to={linkTo} className={btnClassName} {...props} />;
  }

  return <button className={btnClassName} {...props} />;
}
