import MainScreen from '../../pages/main-screen/main-screen.tsx';
import Offer from '../../models/offer.ts';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen.tsx';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen.tsx';
import LoginScreen from '../../pages/login-screen/login-screen.tsx';
import OfferScreen from '../../pages/offer-screen/offer-screen.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import ReviewData from '../../models/review-data.ts';
import {AppRoute, AuthorizationStatus} from '../../const.ts';

type AppProps = {
  offers: Offer[];
  favourites: Offer[];
  nearbyOffers: Offer[];
  reviews: ReviewData[];
}

function App({ offers, favourites, nearbyOffers, reviews } : AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen offers={offers} />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesScreen offers={favourites} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferScreen reviews={reviews} nearbyOffers={nearbyOffers}/>}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
