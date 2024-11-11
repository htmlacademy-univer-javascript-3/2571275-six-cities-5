import AccommodationType from './accommodation-type.ts';
import City from './City.ts';
import Location from './Location.ts';

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
