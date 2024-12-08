import {createAction} from '@reduxjs/toolkit';
import {CityName} from '../const.ts';
import Offer from '../models/offer.ts';

export const setCityName = createAction<CityName>('city/set');
export const setOffers = createAction<Offer[]>('offers/set');
