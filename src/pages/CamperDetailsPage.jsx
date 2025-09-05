import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import {
  selectCurrentCamper,
  selectCampersLoading,
} from "../redux/campers/selectors";
import { getCamperDetails } from "../redux/campers/campersOps";
import Container from "../components/common/Container";
import CamperHeader from "../components/camper/CamperHeader";
import FeaturesList from "../components/camper/FeaturesList";
import DetailsList from "../components/camper/DetailsList";
import Loader from "../components/common/Loader";
import EmptyMessage from "../components/EmptyMessage";
import CamperBookingForm from "../components/camper/CamperBookingForm";
import Tabs from "../components/common/Tabs";
import CamperGallery from "../components/camper/CamperGallery";
import CamperReviews from "../components/camper/CamperReviews";
import css from "./CamperDetailsPage.module.css";

const tabs = ["features", "reviews"];

export default function CamperDetailsPage() {
  const { camperId } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCurrentCamper);
  const loading = useSelector(selectCampersLoading);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  useEffect(() => {
    if (camperId) {
      dispatch(getCamperDetails(camperId));
    }
  }, [dispatch, camperId]);

  if (loading) {
    return <Loader />;
  }

  if (!camper) {
    return <EmptyMessage message="Camper not found." />;
  }

  return (
    <Container>
      <div className={css.camperDetails}>
        <div className={css.topSection}>
          <CamperHeader camper={camper} parent="details" />

          <CamperGallery camper={camper} />

          <p className={css.description}>{camper.description}</p>
        </div>

        <Tabs
          className={css.tabs}
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <div className={css.tabsContent}>
          <div className={css.tab}>
            {activeTab === "features" && (
              <div className={css.features}>
                <FeaturesList camper={camper} parent="details" />
                <DetailsList camper={camper} />
              </div>
            )}

            {activeTab === "reviews" && <CamperReviews camper={camper} />}
          </div>

          <div className={css.tab}>
            <CamperBookingForm />
          </div>
        </div>
      </div>
    </Container>
  );
}
