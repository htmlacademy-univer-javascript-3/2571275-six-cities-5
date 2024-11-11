import Offer from '../../models/offer.ts';
import OffersList from './components/offers-list.tsx';
import Header from '../../components/header/header.tsx';

type MainScreenProps = {
  offers: Offer[];
};

function MainScreen({ offers }: MainScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <div className="locations__item-link tabs__item">
                  <span>Paris</span>
                </div>
              </li>
              <li className="locations__item">
                <div className="locations__item-link tabs__item">
                  <span>Cologne</span>
                </div>
              </li>
              <li className="locations__item">
                <div className="locations__item-link tabs__item">
                  <span>Brussels</span>
                </div>
              </li>
              <li className="locations__item">
                <div className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </div>
              </li>
              <li className="locations__item">
                <div className="locations__item-link tabs__item">
                  <span>Hamburg</span>
                </div>
              </li>
              <li className="locations__item">
                <div className="locations__item-link tabs__item">
                  <span>Dusseldorf</span>
                </div>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            {offers.length > 0 ? (
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in Amsterdam</b>
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
                <OffersList offers={offers} />
              </section>
            ) : (
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">No places to stay available</b>
              </section>
            )}
            <div className="cities__right-section">
              {offers.length > 0 ? (
                <section className="cities__map map"></section>
              ) : (
                <div className="cities__no-map">
                  <img src="img/map.jpg" alt="No map available" />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
