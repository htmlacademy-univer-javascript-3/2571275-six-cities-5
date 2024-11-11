import AccommodationType from './accommodation-type.ts';
import Location from './location.ts';
import City from './city.ts';

type Offer = {
  id : string;
  title: string;
  type: AccommodationType;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export default Offer;
