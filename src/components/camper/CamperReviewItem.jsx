import { getInitials } from "../../utils/getInitials";
import starIcon from "../../images/star.svg";
import starFilledIcon from "../../images/star-filled.svg";
import css from "./CamperReviewItem.module.css";

const starsArray = [...Array(5)];

export default function CamperReviewItem({ review }) {
  return (
    <div className={css.review}>
      <div className={css.reviewHeader}>
        <div className={css.avatar}>
          <span className={css.initials}>
            {getInitials(review.reviewer_name)}
          </span>
        </div>

        <div className={css.reviewerInfo}>
          <div className={css.reviewerName}>{review.reviewer_name}</div>
          <div className={css.reviewRating}>
            {starsArray.map((_, i) => (
              <img
                key={i}
                src={i < review.reviewer_rating ? starFilledIcon : starIcon}
                alt=""
                className={css.reviewStar}
              />
            ))}
          </div>
        </div>
      </div>
      <p className={css.reviewComment}>{review.comment}</p>
    </div>
  );
}
