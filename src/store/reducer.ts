import Offer from '../models/offer.ts';
import {createReducer} from '@reduxjs/toolkit';
import {setCity, setOffers} from './action.ts';
import {CityName} from '../const.ts';

const initialState = {
  city: CityName.Paris,
  offers: [] as Offer[]
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});
