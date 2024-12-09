import Offer from '../../models/api/offer.ts';
import React from 'react';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {changeFavoriteStatusAction} from '../../store/api-actions.ts';
import {FavoriteData} from '../../models/api/favorite-data.ts';

type OfferCardProps = {
  offer: Offer;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
};

function OfferCard({ offer, onMouseOver, onMouseOut }: OfferCardProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const newStatus = offer.isFavorite ? 0 : 1;
    const favoriteData : FavoriteData = {
      offerId: offer.id,
      status: newStatus
    };

    dispatch(changeFavoriteStatusAction(favoriteData));
  };

  return (
    <article
      className="cities__card place-card"
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseOut}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${offer.isFavorite && 'place-card__bookmark-button--active'} button`}
            type="button"
            onClick={handleBookmarkClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${20 * offer.rating}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">{offer.title}</h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
