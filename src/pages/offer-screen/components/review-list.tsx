import Review from './review.tsx';
import ReviewForm from './review-form.tsx';
import {useState} from 'react';
import {ReviewData} from '../../../models/review-data.ts';
import reviewsMock from '../../../mocks/reviews-mock.ts';


function ReviewList(): JSX.Element {
  const [reviews, setReviews] = useState<ReviewData[]>(reviewsMock);

  const handleFormSubmit = (newReview: ReviewData) => {
    setReviews((prev) => (
      [...prev, newReview]
    ));
  };

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

      <ReviewForm onSubmit={handleFormSubmit} />
    </section>
  );
}

export default ReviewList;
