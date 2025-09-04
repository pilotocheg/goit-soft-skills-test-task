import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import {
  selectCurrentCamper,
  selectCampersLoading,
} from "../redux/campers/selectors";
import { getCamperDetails } from "../redux/campers/campersOps";
import Container from "../components/common/Container";
import CamperHeader from "../components/camper/CamperHeader";
import FeaturesList from "../components/camper/FeaturesList";
import Loader from "../components/common/Loader";
import EmptyMessage from "../components/EmptyMessage";
import starIcon from "../images/star.svg";
import starFilledIcon from "../images/star-filled.svg";
import css from "./CamperDetailsPage.module.css";

export default function CamperDetailsPage() {
  const { camperId } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCurrentCamper);
  const loading = useSelector(selectCampersLoading);
  const [activeTab, setActiveTab] = useState("features");
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  });

  useEffect(() => {
    if (camperId) {
      dispatch(getCamperDetails(camperId));
    }
  }, [dispatch, camperId]);

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    if (!bookingForm.name || !bookingForm.email || !bookingForm.bookingDate) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Booking request sent successfully!");
    setBookingForm({ name: "", email: "", bookingDate: "", comment: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingForm((prev) => ({ ...prev, [name]: value }));
  };

  if (loading) {
    return <Loader />;
  }

  if (!camper) {
    return <EmptyMessage message="Camper not found." />;
  }

  const details = [
    { label: "Form", value: camper.form },
    { label: "Length", value: camper.length },
    { label: "Width", value: camper.width },
    { label: "Height", value: camper.height },
    { label: "Tank", value: camper.tank },
    { label: "Consumption", value: camper.consumption },
  ].filter((item) => item.value);

  return (
    <Container>
      <div className={css.camperDetails}>
        <CamperHeader camper={camper} parent="details" />

        <div className={css.gallery}>
          {camper.gallery?.map((image, index) => (
            <img
              key={index}
              src={image.thumb || image.original}
              alt={`${camper.name} ${index + 1}`}
              className={css.galleryImage}
            />
          ))}
        </div>

        <p className={css.description}>{camper.description}</p>

        <div className={css.tabs}>
          <button
            className={`${css.tab} ${
              activeTab === "features" ? css.tabActive : ""
            }`}
            onClick={() => setActiveTab("features")}
          >
            Features
          </button>
          <button
            className={`${css.tab} ${
              activeTab === "reviews" ? css.tabActive : ""
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>

        <div className={css.content}>
          <div className={css.tabContent}>
            {activeTab === "features" && (
              <div className={css.features}>
                <FeaturesList
                  camper={camper}
                  limitRows={false}
                  className={css.featuresList}
                  itemClassName={css.featureItem}
                />

                <div className={css.details}>
                  <h3 className={css.detailsTitle}>Vehicle details</h3>
                  <div className={css.detailsList}>
                    {details.map((detail, index) => (
                      <div key={index} className={css.detail}>
                        <span className={css.detailLabel}>{detail.label}</span>
                        <span className={css.detailValue}>{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className={css.reviews}>
                {camper.reviews?.length > 0 ? (
                  camper.reviews.map((review, index) => (
                    <div key={index} className={css.review}>
                      <div className={css.reviewHeader}>
                        <div className={css.reviewerName}>
                          {review.reviewer_name}
                        </div>
                        <div className={css.reviewRating}>
                          {[...Array(5)].map((_, i) => (
                            <img
                              key={i}
                              src={
                                i < review.reviewer_rating
                                  ? starFilledIcon
                                  : starIcon
                              }
                              alt=""
                              className={css.reviewStar}
                            />
                          ))}
                        </div>
                      </div>
                      <p className={css.reviewComment}>{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <p className={css.noReviews}>No reviews yet.</p>
                )}
              </div>
            )}
          </div>

          <div className={css.bookingForm}>
            <h3 className={css.bookingTitle}>Book your campervan now</h3>
            <p className={css.bookingSubtitle}>
              Stay connected! We are always ready to help you.
            </p>

            <form onSubmit={handleBookingSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={bookingForm.name}
                onChange={handleInputChange}
                className={css.input}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={bookingForm.email}
                onChange={handleInputChange}
                className={css.input}
                required
              />

              <input
                type="date"
                name="bookingDate"
                placeholder="Booking date*"
                value={bookingForm.bookingDate}
                onChange={handleInputChange}
                className={css.input}
                required
              />

              <textarea
                name="comment"
                placeholder="Comment"
                value={bookingForm.comment}
                onChange={handleInputChange}
                className={css.textarea}
                rows={4}
              />

              <button type="submit" className={css.sendButton}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}
