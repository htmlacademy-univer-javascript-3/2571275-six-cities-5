import Offer from '../../models/offer.ts';
import OffersList from './components/offers-list.tsx';
import Header from '../../components/header/header.tsx';
import Map from '../../components/map/map.tsx';
import { useState } from 'react';
import { CITY_NAMES } from '../../const.ts';

type MainScreenProps = {
  offers: Offer[];
};

function MainScreen({ offers }: MainScreenProps): JSX.Element {
  const [currentCityName, setCurrentCityName] = useState('Paris');
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
  const cityOffers = offers.filter((offer) => offer.city.name === currentCityName);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CITY_NAMES.map((city) => (
                <li className="locations__item" key={city}>
                  <div
                    className={`locations__item-link tabs__item ${city === currentCityName ? 'tabs__item--active' : ''}`}
                    onClick={() => setCurrentCityName(city)}
                  >
                    <span>{city}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            {cityOffers.length > 0 ? (
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {cityOffers.length} places to stay in {currentCityName}
                </b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                <OffersList offers={cityOffers} onOfferHover={setSelectedOffer} />
              </section>
            ) : (
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">No places to stay available</b>
              </section>
            )}
            <div className="cities__right-section">

              <section className="cities__map map">
                {cityOffers.length > 0 ? (
                  <Map
                    city={cityOffers[0].city}
                    offers={cityOffers}
                    selectedOffer={selectedOffer}
                  />
                ) : (
                  <img src="img/map.jpg" alt="No map available"/>
                )}
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
