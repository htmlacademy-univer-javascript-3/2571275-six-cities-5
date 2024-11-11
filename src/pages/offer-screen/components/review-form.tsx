import React, { useState } from 'react';
import {ratingsData} from '../rating-data.ts';

type ReviewFormData = {
  rating: number;
  review: string;
};

function ReviewForm(): JSX.Element {
  const [formState, setFormState] = useState<ReviewFormData>({
    rating: 0,
    review: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating ">
        {ratingsData.map((ratingData) => (
          <div key={ratingData.rating}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={ratingData.rating}
              id={`${ratingData.rating}-stars`}
              type="checkbox"
              checked={ratingData.rating <= formState.rating}
              onChange={handleChange}
            />
            <label
              htmlFor={`${ratingData.rating}-stars`}
              className="reviews__rating-label form__rating-label"
              title={ratingData.ratingTranscript}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"/>
              </svg>
            </label>
          </div>
        ))}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formState.review}
        onChange={handleChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe
          your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          onSubmit={(evt) => evt.preventDefault()}
          disabled={!formState.rating || formState.review.length < 50 || formState.review.length > 300}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
