import {createReducer} from '@reduxjs/toolkit';
import {
  changeOffer,
  requireAuthorization,
  setCityName,
  setFavorites,
  setOffers,
  setOffersDataLoadingStatus,
  setUserData
} from './action.ts';
import {AuthorizationStatus, CityName} from '../const.ts';
import Offer from '../models/api/offer.ts';
import {UserData} from '../models/api/user-data.ts';

const initialState = {
  cityName: CityName.Paris,
  offers: [] as Offer[],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoadingStatus: false,
  userData: null as UserData | null,
  favorites: [] as Offer[]
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
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(setFavorites, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(changeOffer, (state, action) => {
      state.offers = state.offers
        .map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
    });
});
