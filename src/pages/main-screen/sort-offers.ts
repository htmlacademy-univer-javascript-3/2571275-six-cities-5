import {SortingOptions} from '../../const.ts';
import Offer from '../../models/offer.ts';

export function sortOffers(option: SortingOptions, offers: Offer[]) {
  if (option === SortingOptions.Popular) {
    return offers;
  }

  return [...offers].sort((first, second) => {
    switch (option) {
      case SortingOptions.LowToHigh:
        return first.price - second.price;
      case SortingOptions.HighToLow:
        return second.price - first.price;
      case SortingOptions.TopRated:
        return second.rating - first.rating;
      default:
        return 0;
    }
  });
}
