import Offer from '../models/offer.ts';
import AccommodationType from '../models/accommodation-type.ts';

const offersMock : Offer[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: AccommodationType.Apartment,
    price: 120,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.548500,
        longitude: 9.987558,
        zoom: 10
      }
    },
    location: {
      latitude: 53.547992,
      longitude: 10.001891,
      zoom: 10
    },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    previewImage: 'img/apartment-03.jpg'
  },

  {
    id: '2c2cd69e-7095-4f34-b9c0-5742cb264e90',
    title: 'Wood and stone place',
    type: AccommodationType.Room,
    price: 70,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.873877537499948,
        zoom: 10
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    isFavorite: true,
    isPremium: false,
    rating: 3,
    previewImage: 'img/room.jpg'
  },

  {
    id: 'eef4e12f-d4d7-45e5-a6d1-2fb6860ef3c2',
    title: 'Nice, cozy, warm big bed apartment',
    type: AccommodationType.Apartment,
    price: 100,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.873877537499948,
        zoom: 10
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    isFavorite: false,
    isPremium: false,
    rating: 5,
    previewImage: 'img/apartment-02.jpg'
  },

  {
    id: '9963fbd0-5d0b-40d5-828b-591545452c89',
    title: 'House in the heart of Amsterdam',
    type: AccommodationType.House,
    price: 200,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.873877537499948,
        zoom: 10
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 10
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-01.jpg'
  },

  {
    id: '0b5c5259-9f54-49b6-9d32-2d4b7eae4324',
    title: 'Clear room',
    type: AccommodationType.Room,
    price: 100,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.873877537499948,
        zoom: 10
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 10
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-03.jpg'
  }
];

export default offersMock;
