import { Link } from "react-router";
import clsx from "clsx";

import css from "./Button.module.css";

export default function Button({ className, linkTo, ...props }) {
  if (linkTo) {
    return (
      <Link to={linkTo} className={clsx(css.button, className)} {...props} />
    );
  }

  return <button className={clsx(css.button, className)} {...props} />;
}
