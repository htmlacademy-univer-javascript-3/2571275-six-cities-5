import ReviewData from '../../../models/review-data.ts';
import Review from './review.tsx';

type ReviewListProps = {
  reviews: ReviewData[];
};

function ReviewList({ reviews }: ReviewListProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <Review review={review} key={review.id} />
        ))}
      </ul>
    </section>
  );
}

export default ReviewList;
