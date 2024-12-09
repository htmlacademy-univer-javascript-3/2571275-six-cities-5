import {SortingOption} from '../../const.ts';
import Offer from '../../models/api/offer.ts';

export function sortOffers(option: SortingOption, offers: Offer[]) {
  if (option === SortingOption.Popular) {
    return offers;
  }

  return [...offers].sort((first, second) => {
    switch (option) {
      case SortingOption.LowToHigh:
        return first.price - second.price;
      case SortingOption.HighToLow:
        return second.price - first.price;
      case SortingOption.TopRated:
        return second.rating - first.rating;
      default:
        return 0;
    }
  });
}
