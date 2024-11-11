import Offer from '../../models/offer.ts';
import React from 'react';

type OfferCardProps = {
  offer: Offer;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
};

function OfferCard({ offer, onMouseOver, onMouseOut }: OfferCardProps): JSX.Element {
  const { isFavorite, isPremium, previewImage, type, title, price, rating } = offer;
  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <article
      className="cities__card place-card"
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseOut}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${isFavorite && 'place-card__bookmark-button--active'} button`}
            type="button"
            onClick={handleBookmarkClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${20 * rating}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">{title}</h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
