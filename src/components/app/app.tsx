import MainScreen from '../../pages/main-screen/main-screen.tsx';
import Offer from '../../models/offer.ts';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoutes} from './AppRoutes.ts';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen.tsx';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen.tsx';
import LoginScreen from '../../pages/login-screen/login-screen.tsx';
import OfferScreen from '../../pages/offer-screen/offer-screen.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import {AuthorizationStatus} from '../private-route/authorization-status.ts';

type AppProps = {
  offersCount: number;
}

const someOffer : Offer = {
  id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
  price: 120,
  isFavorite: true,
  isPremium: true,
  rating: 4,
  previewImage: 'img/apartment-03.jpg'
};


function App({offersCount} : AppProps): JSX.Element {
  const offers = new Array(offersCount).fill(someOffer);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Root}
          element={<MainScreen offers={offers} />}
        />
        <Route
          path={AppRoutes.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoutes.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoutes.Offer}
          element={<OfferScreen />}
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
