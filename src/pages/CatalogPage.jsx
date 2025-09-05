import CamperList from "../components/camper/CamperList";
import FilterSidebar from "../components/FilterSidebar";
import Container from "../components/common/Container";

import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  return (
    <Container>
      <div className={css.catalogContent}>
        <FilterSidebar />
        <CamperList />
      </div>
    </Container>
  );
}
