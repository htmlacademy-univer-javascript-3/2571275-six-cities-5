import Offer from '../../../models/offer.ts';
import FavoritesCard from './favorites-card.tsx';

type FavoritesListProps = {
  offers: Offer[];
};

function FavoritesList({ offers }: FavoritesListProps): JSX.Element {
  const cities = Array.from(new Set(offers.map((offer) => offer.city.name)));

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {cities.map((city) => (
          <li key={city} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {offers
                .filter((offer) => offer.city.name === city)
                .map((offer) => (
                  <FavoritesCard offer={offer} key={offer.id} />
                ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FavoritesList;
