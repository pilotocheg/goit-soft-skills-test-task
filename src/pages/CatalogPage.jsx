import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CamperList from "../components/camper/CamperList";
import FilterSidebar from "../components/FilterSidebar";
import Container from "../components/common/Container";
import { getCampers } from "../redux/campers/campersOps";
import {
  selectCampers,
  selectCampersLoading,
} from "../redux/campers/selectors";
import { selectFilters } from "../redux/filters/selectors";

import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectCampersLoading);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(getCampers({ filters, reset: true }));
  }, [dispatch, filters]);

  const handleLoadMore = () => {
    dispatch(getCampers({ filters, reset: false }));
  };

  return (
    <Container>
      <div className={css.catalogContent}>
        <FilterSidebar />
        <div className={css.campersSection}>
          <CamperList
            campers={campers}
            loading={loading}
            onLoadMore={handleLoadMore}
          />
        </div>
      </div>
    </Container>
  );
}
