import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import offersMock from './mocks/offers-mock.ts';
import favouritesMock from './mocks/favourites-mock.ts';
import reviewsMock from './mocks/reviews-mock.ts';
import nearbyOffersAmsterdamMock from './mocks/nearby-offers-amsterdam-mock.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers={offersMock}
      favourites={favouritesMock}
      reviews={reviewsMock}
      nearbyOffers = {nearbyOffersAmsterdamMock}
    />
  </React.StrictMode>
);
