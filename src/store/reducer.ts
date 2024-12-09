import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, setCityName, setOffers, setOffersDataLoadingStatus} from './action.ts';
import {AuthorizationStatus, CityName} from '../const.ts';
import Offer from '../models/offer.ts';

const initialState = {
  cityName: CityName.Paris,
  offers: [] as Offer[],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoadingStatus: false
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCityName, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoadingStatus = action.payload;
    });
});
