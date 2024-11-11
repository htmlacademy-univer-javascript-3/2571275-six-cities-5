import Offer from '../models/offer.ts';
import offersMock from './offers-mock.ts';

const favouritesMock : Offer[] = offersMock.filter((offer) => offer.isFavorite);

export default favouritesMock;
