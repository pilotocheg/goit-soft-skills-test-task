import CamperReviewItem from "./CamperReviewItem";
import css from "./CamperReviews.module.css";

export default function CamperReviews({ camper }) {
  const { reviews } = camper;

  const renderReviews = () => {
    if (!reviews?.length) {
      return <p className={css.noReviews}>No reviews yet.</p>;
    }

    return reviews.map((review, index) => (
      <CamperReviewItem key={index} review={review} />
    ));
  };

  return <div className={css.reviews}>{renderReviews()}</div>;
}
