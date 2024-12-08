import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import offersMock from './mocks/offers-mock.ts';
import favouritesMock from './mocks/favourites-mock.ts';
import reviewsMock from './mocks/reviews-mock.ts';
import nearbyOffersAmsterdamMock from './mocks/nearby-offers-amsterdam-mock.ts';
import 'leaflet/dist/leaflet.css';
import {Provider} from 'react-redux';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
