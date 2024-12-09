import {createAction} from '@reduxjs/toolkit';
import {AuthorizationStatus, CityName} from '../const.ts';
import Offer from '../models/offer.ts';

export const setCityName = createAction<CityName>('city/set');

export const setOffers = createAction<Offer[]>('offers/set');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

