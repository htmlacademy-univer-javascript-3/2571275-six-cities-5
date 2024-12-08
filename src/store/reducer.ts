import {createReducer} from '@reduxjs/toolkit';
import {setCityName, setOffers, addReview} from './action.ts';
import {CityName} from '../const.ts';
import offersMock from '../mocks/offers-mock.ts';

const initialState = {
  cityName: CityName.Paris,
  offers: offersMock
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCityName, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});
