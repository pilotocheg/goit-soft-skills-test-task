import { NavLink } from "react-router";

import Container from "./common/Container";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <header className={css.header}>
      <Container>
        <nav className={css.nav}>
          <div className={css.logo}>
            <NavLink className={css.logoLink} to="/">
              Travel<span className={css.logoHighlight}>Trucks</span>
            </NavLink>
          </div>
          <div className={css.links}>
            <NavLink className={css.link} to="/">
              Home
            </NavLink>
            <NavLink className={css.link} to="/catalog">
              Catalog
            </NavLink>
          </div>
        </nav>
      </Container>
    </header>
  );
}
