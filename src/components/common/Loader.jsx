import { BeatLoader } from "react-spinners";

import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.container}>
      <BeatLoader color="#667eea" />
    </div>
  );
}
